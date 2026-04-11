import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Seo } from "../components/Seo";

const impact = [
  { metric: "Nutrition Programs (Years)", value: 4 },
  { metric: "NCD Screening Campaigns", value: 1 },
  { metric: "Hepatitis B Campaign Streams", value: 3 },
  { metric: "Core Activity Pillars", value: 3 },
];

export function ImpactHubPage() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <Seo
        title="Impact Hub | PYFG Tanzania"
        description="Live style impact dashboard with Social Return on Investment indicators for donors and partners."
      />
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="rounded-3xl bg-dark p-8 text-white">
          <h1 className="text-3xl font-extrabold">The Impact Hub</h1>
          <p className="mt-3 max-w-3xl text-slate-300">
            Profile-aligned summary from the organization report showing delivered achievements
            and core community impact focus areas.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {impact.map((item) => (
            <article key={item.metric} className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm text-slate-500">{item.metric}</p>
              <p className="mt-2 text-3xl font-extrabold text-primary">{item.value.toLocaleString()}</p>
            </article>
          ))}
        </div>
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-dark">Program Output Snapshot</h2>
          <div className="mt-6 w-full min-w-0 min-h-[320px]">
            <ResponsiveContainer width="100%" height={320} minWidth={0}>
              <BarChart data={impact}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="metric" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#0d9488" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>
      </div>
    </section>
  );
}
