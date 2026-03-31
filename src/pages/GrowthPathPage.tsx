import { useState } from "react";
import { Seo } from "../components/Seo";

const steps = [
  "Complete Health Basics",
  "Attend Leadership Workshop",
  "Volunteer in a Community Drive",
  "Mentor a New Member",
];

export function GrowthPathPage() {
  const [completed, setCompleted] = useState<number[]>([]);

  const toggleStep = (index: number) => {
    setCompleted((current) =>
      current.includes(index) ? current.filter((id) => id !== index) : [...current, index],
    );
  };

  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <Seo
        title="Growth Path | PYFG Tanzania"
        description="Gamified youth onboarding with milestone badges that improve engagement and retention."
      />
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-extrabold text-dark">Gamified Onboarding</h1>
        <p className="mt-2 text-slate-600">Complete steps to unlock digital badges and progression rewards.</p>
        <div className="mt-8 space-y-4">
          {steps.map((step, index) => {
            const done = completed.includes(index);
            return (
              <button
                key={step}
                type="button"
                onClick={() => toggleStep(index)}
                className={`flex w-full items-center justify-between rounded-xl border p-4 text-left ${
                  done ? "border-primary bg-teal-50" : "border-slate-200 bg-white"
                }`}
              >
                <span className="font-semibold text-dark">{step}</span>
                <span className={`text-sm font-bold ${done ? "text-primary" : "text-slate-500"}`}>
                  {done ? "Badge Earned" : "Pending"}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
