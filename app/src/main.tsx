import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { PropertyNotFound } from './views/PropertyNotFound.tsx'
import {
  DEFAULT_PROPERTY_SLUG,
  islands,
  properties,
  resolveProperty,
  slugFromPath,
} from './data/content.ts'
import './index.css'

// Lazy-loaded so the three audiences never download each other's code:
//   • owners on "/" get the landing chunk only
//   • guests on "/<slug>" get the guide chunk only
//   • an owner curating their guide on "/pick/<slug>" gets the picker chunk only
const Landing = lazy(() => import('./landing/Landing.tsx'))
const Guide = lazy(() => import('./Guide.tsx'))
const Picker = lazy(() => import('./picker/Picker.tsx').then((m) => ({ default: m.Picker })))

// Multi-tenant routing from the URL path:
//   /              → owner-facing landing / demo page
//   /<slug>        → that property's guest guide  (e.g. /mila)
//   /pick/<slug>   → owner's content picker for that property
//   /<unknown>     → not-found
const segments = window.location.pathname.split('/').filter(Boolean).map((s) => s.toLowerCase())
const isPicker = segments[0] === 'pick'
const slug = isPicker ? (segments[1] ?? DEFAULT_PROPERTY_SLUG) : slugFromPath(window.location.pathname)

let tree: JSX.Element
if (isPicker) {
  const property = properties[slug]
  const island = property ? islands[property.island] : undefined
  tree =
    property && island ? (
      <Picker slug={slug} property={property} island={island} />
    ) : (
      <PropertyNotFound slug={slug} />
    )
} else {
  // A property with `published: false` stays offline on the guest route even
  // though its /pick/<slug> picker already works — see Property.published.
  const property = slug ? properties[slug] : undefined
  const content = property?.published !== false && slug ? resolveProperty(slug) : undefined
  if (!slug) tree = <Landing />
  else if (content) tree = <Guide content={content} />
  else tree = <PropertyNotFound slug={slug} />
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={null}>{tree}</Suspense>
  </React.StrictMode>,
)
