import { useState } from "react";
import { Seo } from "../components/Seo";

const stories = {
  Mwanza: { name: "Asha", text: "Asha completed mental health training and now mentors 35 girls." },
  Dodoma: { name: "Juma", text: "Juma joined a career pathway and secured his first paid internship." },
  Arusha: { name: "Neema", text: "Neema led a school nutrition drive improving attendance and wellbeing." },
};

export function StoriesPage() {
  const [selected, setSelected] = useState<keyof typeof stories>("Mwanza");

  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <Seo
        title="Storytelling Engine | PYFG Tanzania"
        description="Interactive success stories and regional testimonials that highlight youth transformation."
      />
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-extrabold text-dark">Success Map</h1>
          <p className="mt-2 text-slate-600">Select a region to see testimonial highlights.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {(Object.keys(stories) as Array<keyof typeof stories>).map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => setSelected(region)}
                className={`rounded-full px-5 py-2 font-semibold ${
                  selected === region ? "bg-primary text-white" : "bg-slate-100 text-slate-700"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
        <article className="rounded-3xl bg-dark p-8 text-white">
          <h2 className="text-2xl font-bold">{stories[selected].name}'s Story</h2>
          <p className="mt-4 text-slate-300">{stories[selected].text}</p>
          <p className="mt-6 text-sm text-secondary">Region: {selected}</p>
        </article>
      </div>
    </section>
  );
}
