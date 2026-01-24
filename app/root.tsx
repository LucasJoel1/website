import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import Navbar from "./components/navbar/navbar";
import { useState, useEffect } from "react";
import { BiArrowToRight } from "react-icons/bi";
import { CgArrowRight, CgClose, CgMenu } from "react-icons/cg";
import { GiHamburger } from "react-icons/gi";

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
  const navigation = useNavigation();
  const [navbarVisible, setNavbarVisible] = useState<boolean>(false)
  const [isDesktop, setIsDesktop] = useState<boolean | undefined>(undefined)
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    // Check if we're on desktop (md breakpoint is 768px)
    const isDesktopForOpening = window.innerWidth >= 768;
    setNavbarVisible(isDesktopForOpening);
    setIsDesktop(isDesktopForOpening);
    
    // Wait for navbar animation to complete before showing button
    setTimeout(() => setMounted(true), 300);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

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
        {/* Top bar - desktop only, shows when navbar is hidden */}
        <div className={`hidden md:block fixed top-0 left-0 right-0 bg-neutral-900 border-b border-neutral-800 z-50 transition-transform duration-300 ${
          mounted && !navbarVisible ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="flex items-center gap-4 h-16 px-4">
            <button 
              onClick={() => setNavbarVisible(!navbarVisible)}
              className="p-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg border border-neutral-700 transition-colors"
              aria-label="Toggle menu"
            >
              <CgArrowRight className="text-xl" />
            </button>
            <h1 className="text-xl font-semibold">Lucas Joel</h1>
          </div>
        </div>

        {/* Mobile button - only on mobile */}
        <button 
          onClick={() => setNavbarVisible(!navbarVisible)}
          className={`md:hidden fixed top-4 right-4 p-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg border border-neutral-700 z-60 transition-opacity duration-150 ${
            !mounted || navigation.state === "loading" ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          aria-label="Toggle menu"
        >
            {navbarVisible ? (
              <CgClose className="text-xl" />
            ) : (
              <CgMenu className="text-xl" />
            )}
        </button>

        {/* Overlay backdrop - only on mobile when navbar is open */}
        {navbarVisible && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setNavbarVisible(false)}
          />
        )}

        <Navbar visible={navbarVisible} setVisible={setNavbarVisible} />
        <div className={`flex-1 h-screen overflow-y-auto transition-all duration-300 ${navbarVisible ? 'md:ml-84 md:pt-0' : 'md:ml-0 md:pt-16'}`}>
          {children}
        </div>
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
