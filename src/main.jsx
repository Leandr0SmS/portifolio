import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { renderToString } from 'react-dom/server'
import './styles/main.scss';
import App from './App.jsx'

export async function prerender() {
  const html = renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );
  return { html };
}

if (typeof document !== 'undefined') {
  const root = document.getElementById('root');

  if (root.hasChildNodes()) {
    hydrateRoot(
      root,
      <StrictMode>
        <App />
      </StrictMode>
    );
  } else {
    createRoot(root).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  }
}
