import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { PropertyNotFound } from './views/PropertyNotFound.tsx'
import { resolveProperty, slugFromPath } from './data/content.ts'
import './index.css'

// Lazy-loaded so the two audiences never download each other's code:
//   • owners on "/" get the landing chunk only
//   • guests on "/<slug>" get the guide chunk only
const Landing = lazy(() => import('./landing/Landing.tsx'))
const Guide = lazy(() => import('./Guide.tsx'))

// Multi-tenant routing from the URL path:
//   /            → owner-facing landing / demo page
//   /<slug>      → that property's guest guide  (e.g. /mila)
//   /<unknown>   → not-found
const slug = slugFromPath(window.location.pathname)
const content = slug ? resolveProperty(slug) : undefined

let tree: JSX.Element
if (!slug) tree = <Landing />
else if (content) tree = <Guide content={content} />
else tree = <PropertyNotFound slug={slug} />

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={null}>{tree}</Suspense>
  </React.StrictMode>,
)
