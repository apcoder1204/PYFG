import { Link, NavLink } from "react-router-dom";
import type { PropsWithChildren } from "react";
import { Footer } from "./Footer";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/impact-hub", label: "Impact Hub" },
  { to: "/opportunities", label: "Opportunities" },
  { to: "/stories", label: "Stories" },
  { to: "/growth-path", label: "Growth Path" },
  { to: "/donate", label: "Donate" },
];

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 glass-nav">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-xl font-extrabold text-white shadow-glow">
              P
            </div>
            <div>
              <span className="block text-xl font-extrabold text-dark">PYFG</span>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-primary">
                Tanzania
              </span>
            </div>
          </Link>
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
          <Link
            to="/donate"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white transition hover:bg-teal-700"
          >
            Get Involved
          </Link>
        </div>
      </header>

      <main className="pt-20">{children}</main>

      <Footer />
    </div>
  );
}
