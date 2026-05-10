import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const rootElement = document.getElementById('root')

function showRuntimeError(error) {
  const message = error?.message || 'Nieznany błąd uruchamiania aplikacji.'
  rootElement.innerHTML = `
    <main style="min-height:100vh;padding:96px 24px;font-family:Inter,system-ui,Segoe UI,sans-serif;background:#f7faf8;color:#111815">
      <section style="max-width:760px;margin:0 auto;background:#fff;border:1px solid #dfe7e2;border-radius:28px;padding:32px;box-shadow:0 20px 60px rgba(17,24,21,.08)">
        <p style="margin:0 0 12px;color:#00a676;font-weight:700">RentFlow</p>
        <h1 style="margin:0;font-size:36px;line-height:1.1">Aplikacja nie wystartowała w tej przeglądarce.</h1>
        <p style="margin:18px 0 0;color:#66736d;line-height:1.6">Błąd runtime: ${message}</p>
      </section>
    </main>
  `
}

try {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
} catch (error) {
  showRuntimeError(error)
}

window.addEventListener('error', (event) => showRuntimeError(event.error || event.message))
window.addEventListener('unhandledrejection', (event) => showRuntimeError(event.reason))
