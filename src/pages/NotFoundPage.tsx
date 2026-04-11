import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";

export function NotFoundPage() {
  return (
    <section className="grid min-h-[60vh] place-items-center px-4 py-20">
      <Seo title="Page Not Found | PYFG Tanzania" description="Requested page does not exist." />
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-dark">404</h1>
        <p className="mt-2 text-slate-600">The page you requested could not be found.</p>
        <Link to="/" className="mt-6 inline-block rounded-xl bg-primary px-6 py-3 font-semibold text-white">
          Back to Homepage
        </Link>
      </div>
    </section>
  );
}
