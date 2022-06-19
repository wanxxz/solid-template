// @refresh reload
import { Links, Routes, Scripts } from 'solid-start/root'
import { Suspense } from 'solid-js'
import { ErrorBoundary } from 'solid-start/error-boundary'
import { isServer } from 'solid-js/web'
import Nav from './components/nav'
import './root.css'

export default function Root() {
  return (
    <html>
      <head>
        <title></title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Links />
      </head>
      <body>
        <Nav />
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes />
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </body>
    </html>
  )
}

if (import.meta.env.PROD && !isServer && 'serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(`/sw.js`)
  })
}
