import { Link } from "react-router-dom";

function IconFacebook() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.87v-6.99H8.08V12h2.36V9.8c0-2.33 1.4-3.63 3.54-3.63 1.02 0 2.08.18 2.08.18v2.3h-1.17c-1.15 0-1.51.71-1.51 1.44V12h2.57l-.41 2.88h-2.16v6.99A10 10 0 0 0 22 12z" />
    </svg>
  );
}

function IconTwitter() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.25 4.25 0 0 0 1.87-2.35 8.5 8.5 0 0 1-2.69 1.03A4.25 4.25 0 0 0 11.1 8.31a12.06 12.06 0 0 1-8.76-4.38 4.25 4.25 0 0 0 1.31 5.67c-.68-.02-1.32-.21-1.88-.52v.05a4.25 4.25 0 0 0 3.41 4.17c-.62.17-1.29.18-1.92.06a4.25 4.25 0 0 0 3.96 2.95A8.53 8.53 0 0 1 2 18.54a12.06 12.06 0 0 0 6.54 1.92c7.85 0 12.14-6.5 12.14-12.14 0-.18 0-.36-.01-.54.83-.6 1.55-1.35 2.12-2.2z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm4.75-2.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.07 4.18 2 2 0 0 1 4.05 2h3a2 2 0 0 1 2 1.72c.13.98.38 1.93.74 2.84a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.24-1.24a2 2 0 0 1 2.11-.45c.91.36 1.86.61 2.84.74A2 2 0 0 1 22 16.92Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m22 6-10 7L2 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-950 to-slate-950" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-2xl font-bold italic text-white sm:text-3xl">
            "We all aspire for the future and the possibilities it holds."
          </p>
          <p className="mt-2 text-center text-sm text-slate-400 sm:text-base">
            Let&apos;s Build It Together.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/donate"
              className="rounded-xl bg-primary px-10 py-3 text-center font-bold text-white shadow-lg shadow-teal-900/20 hover:bg-teal-700"
            >
              Donate Now
            </Link>
            <a
              href="tel:+255760838290"
              className="rounded-xl border border-slate-700 bg-white/5 px-10 py-3 text-center font-bold text-white/90 hover:bg-white/10"
            >
              Call Support
            </a>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-bold text-white">PYFG Tanzania</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Operating under the Governmental Organisations Act, No. 24 of 2002. Dedicated to social,
                health, and economic empowerment.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-primary">
                    <IconPhone />
                  </span>
                  <a href="tel:+255760838290" className="hover:text-white">
                    +255 760 838 290
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-primary">
                    <IconPhone />
                  </span>
                  <a href="tel:+255756260999" className="hover:text-white">
                    +255 756 260 999
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-primary">
                    <IconMail />
                  </span>
                  <a href="mailto:info@pyfg.or.tz" className="hover:text-white">
                    info@pyfg.or.tz
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">Quick Links</h3>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <Link to="/#mission-vision" className="hover:text-white">
                    Mission &amp; Vision
                  </Link>
                </li>
                <li>
                  <Link to="/#health-promotion" className="hover:text-white">
                    Health Promotion
                  </Link>
                </li>
                <li>
                  <Link to="/impact-hub" className="hover:text-white">
                    Our Impact
                  </Link>
                </li>
                <li>
                  <a href="#" className="cursor-not-allowed opacity-70" aria-disabled="true">
                    Volunteer Login
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">Follow Us</h3>
              <div className="mt-5 flex gap-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-300 ring-1 ring-slate-800 hover:bg-primary hover:text-white"
                >
                  <IconFacebook />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-300 ring-1 ring-slate-800 hover:bg-primary hover:text-white"
                >
                  <IconTwitter />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-300 ring-1 ring-slate-800 hover:bg-primary hover:text-white"
                >
                  <IconInstagram />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
            &copy; 2026 Potential Youth for Future Generation. Reg No: 00NGO/R/5045.
          </div>
        </div>
      </div>
    </footer>
  );
}

