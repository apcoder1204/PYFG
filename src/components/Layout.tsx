import { Link, NavLink } from "react-router-dom";
import type { PropsWithChildren } from "react";
import { useState } from "react";
import { Footer } from "./Footer";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/impact-hub", label: "Impact Hub" },
  { to: "/opportunities", label: "Opportunities" },
  { to: "/stories", label: "Stories" },
  { to: "/growth-path", label: "Growth Path" },
  { to: "/gallery", label: "Gallery" },
  { to: "/organization", label: "Organization" },
  { to: "/donate", label: "Donate" },
];

export function Layout({ children }: PropsWithChildren) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 glass-nav">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
            <img
              src="/favicon.png"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 shrink-0 rounded-xl object-contain shadow-glow"
              loading="eager"
              decoding="async"
            />
            <div>
              <span className="block text-xl font-extrabold text-dark">PYFG</span>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-primary">
                Tanzania
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-5 text-sm font-semibold text-slate-600 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "text-primary" : "transition hover:text-primary"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <Link
              to="/donate"
              className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-white transition hover:bg-teal-700"
            >
              Donate
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Donate Button */}
          <Link
            to="/donate"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white transition hover:bg-teal-700 lg:inline-block"
          >
            Get Involved
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white/95 backdrop-blur-sm lg:hidden">
            <nav className="mx-auto max-w-7xl px-4 py-4">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `px-3 py-2 text-base font-medium rounded-lg transition ${
                        isActive
                          ? "bg-primary text-white"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="pt-20">{children}</main>

      <Footer />
    </div>
  );
}
