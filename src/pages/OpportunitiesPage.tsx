import { useMemo, useState } from "react";
import { Seo } from "../components/Seo";

const opportunities = [
  { title: "Community Health Intern", region: "Dar es Salaam", type: "Internship" },
  { title: "Women Nutrition Mentor", region: "Mwanza", type: "Volunteer" },
  { title: "Youth Research Assistant", region: "Dodoma", type: "Scholarship" },
  { title: "School Vaccination Coordinator", region: "Arusha", type: "Volunteer" },
];

export function OpportunitiesPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(
    () =>
      opportunities.filter((item) =>
        `${item.title} ${item.region} ${item.type}`.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );

  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <Seo
        title="Opportunity Portal | PYFG Tanzania"
        description="Discover scholarships, internships, and volunteer opportunities tailored for youth in Tanzania."
      />
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-extrabold text-dark">Opportunity Portal</h1>
        <p className="mt-2 text-slate-600">Search active openings for youth development and community service.</p>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, region, or type"
          className="mt-6 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-primary/40 focus:ring"
        />
        <div className="mt-8 grid gap-4">
          {results.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-lg font-bold text-dark">{item.title}</h2>
              <p className="mt-1 text-sm text-slate-600">
                {item.type} • {item.region}
              </p>
            </article>
          ))}
          {results.length === 0 && (
            <p className="rounded-xl bg-slate-100 p-4 text-slate-600">No opportunities found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
