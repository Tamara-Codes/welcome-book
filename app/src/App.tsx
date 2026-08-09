import { useEffect, useMemo, useState } from 'react'
import { NavContext, type View } from './navigation'
import { useProperty } from './property'
import { InquiryProvider } from './owner/InquiryContext'
import { Header } from './components/Header'
import { BottomNav } from './components/BottomNav'
import { Home } from './views/Home'
import { ApartmentInfo } from './views/ApartmentInfo'
import { Apartments } from './views/Apartments'
import { Explore } from './views/Explore'
import { Restaurants } from './views/Restaurants'
import { Beaches } from './views/Beaches'
import { Activities } from './views/Activities'
import { Shops } from './views/Shops'
import { Contacts } from './views/Contacts'
import { Ferry } from './views/Ferry'

const VIEWS: Record<View, () => JSX.Element> = {
  home: Home,
  info: ApartmentInfo,
  apartments: Apartments,
  explore: Explore,
  restaurants: Restaurants,
  beaches: Beaches,
  activities: Activities,
  shops: Shops,
  contacts: Contacts,
  ferry: Ferry,
}

function isView(value: string): value is View {
  return value in VIEWS
}

export default function App() {
  const [view, setView] = useState<View>('home')
  const { apartments, property } = useProperty()

  // Set the browser tab title to this property (index.html defaults to the demo).
  useEffect(() => {
    document.title = property.name
  }, [property.name])

  // A view that this property doesn't offer (e.g. the apartments/prices page
  // for an owner with no apartments listed) should fall back to home.
  const hasApartments = apartments.length > 0

  // Lightweight hash routing so back/forward and deep links work
  // (e.g. scanning a QR that points to .../#beaches opens that section).
  useEffect(() => {
    function applyHash() {
      const hash = window.location.hash.replace('#', '')
      if (hash && isView(hash) && !(hash === 'apartments' && !hasApartments)) setView(hash)
      else setView('home')
    }
    applyHash()
    window.addEventListener('hashchange', applyHash)
    return () => window.removeEventListener('hashchange', applyHash)
  }, [hasApartments])

  const go = useMemo(
    () => (next: View, options?: { scrollToTop?: boolean }) => {
      window.location.hash = next === 'home' ? '' : next
      setView(next)
      if (options?.scrollToTop !== false) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    [],
  )

  const ActiveView = VIEWS[view]
  const nav = useMemo(() => ({ view, go }), [view, go])

  return (
    <NavContext.Provider value={nav}>
      <InquiryProvider>
        <div className="min-h-screen">
          <Header />
          <main className="mx-auto max-w-screen-sm px-4 pb-28 pt-5">
            <ActiveView />
          </main>
          <BottomNav />
        </div>
      </InquiryProvider>
    </NavContext.Provider>
  )
}
