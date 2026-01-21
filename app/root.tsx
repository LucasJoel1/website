import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import Navbar from "./components/navbar/navbar";
import { useState, useEffect } from "react";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [navbarVisible, setNavbarVisible] = useState<boolean>(false)

  useEffect(() => {
    // Check if we're on desktop (md breakpoint is 768px)
    const isDesktop = window.innerWidth >= 768;
    setNavbarVisible(isDesktop);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script dangerouslySetInnerHTML={{
          __html: `
            // GitHub Pages SPA redirect handler
            (function() {
              var redirect = sessionStorage.redirect;
              delete sessionStorage.redirect;
              if (redirect && redirect !== location.pathname) {
                history.replaceState(null, null, redirect);
              }
            })();
          `
        }} />
        <Meta />
        <Links />
      </head>
      <body className="flex md:flex-row">
        {/* Hamburger button - visible on all screens */}
        <button 
          onClick={() => setNavbarVisible(!navbarVisible)}
          className={`fixed top-4 right-4 md:right-auto z-60 p-2 bg-neutral-800/50 rounded border border-neutral-700 hover:bg-neutral-700 transition-all ${navbarVisible ? 'md:left-76' : 'md:left-4'}`}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-neutral-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {navbarVisible ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Overlay backdrop - only on mobile when navbar is open */}
        {navbarVisible && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setNavbarVisible(false)}
          />
        )}

        <Navbar visible={navbarVisible} setVisible={setNavbarVisible} />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
