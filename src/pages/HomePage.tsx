import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";

export function HomePage() {
  return (
    <>
      <Seo
        title="PYFG Tanzania | Health Equity and Youth Empowerment"
        description="Potential Youth for Future Generation supports marginalized youth in Tanzania through health promotion, support services, and research."
      />

      <section className="hero-gradient overflow-hidden px-4 pb-24 pt-28 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              Registered NGO: 00NGO/R/5045
            </div>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
              Building a Future of <span className="text-secondary">Health Equity</span>
            </h1>
            <p className="max-w-xl text-lg text-slate-200">
              Potential Youth for the Future Generation is a Tanzania mainland-based
              non-governmental organisation addressing social, health, and economic
              challenges facing young people in marginalised communities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/impact-hub" className="rounded-2xl bg-white px-8 py-4 font-bold text-dark">
                Explore Impact
              </Link>
              <Link
                to="/stories"
                className="rounded-2xl border-2 border-white/30 px-8 py-4 font-bold"
              >
                Learn More
              </Link>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000"
            alt="Tanzania youth program participants"
            className="hidden rounded-[2.5rem] border-8 border-white/10 shadow-2xl lg:block"
          />
        </div>
      </section>

      <section id="mission-vision" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-[1.5rem] bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-center justify-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.65-7 10-7 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.5 11.5h5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 9v5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h2 className="ml-3 text-lg font-extrabold text-slate-900">Our Mission</h2>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                To empower the young generation by providing comprehensive health education and fostering a
                supportive environment that promotes physical, mental, and social well-being.
              </p>
            </article>

            <article className="rounded-[1.5rem] bg-slate-900 p-8 shadow-sm ring-1 ring-slate-900">
              <div className="flex items-center justify-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0 1 18 0Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2 className="ml-3 text-lg font-extrabold text-white">Our Vision</h2>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-200">
                We envision a society where health equity is a reality, and every young person can reach their
                full potential.
              </p>
            </article>
          </div>

          <div className="mt-14 text-center">
            <h3 className="text-2xl font-extrabold text-slate-900">Who We Are</h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
              Potential Youth for the Future Generation is a Tanzania mainland-based non-governmental
              organisation dedicated to addressing social, health, and economic challenges facing the young
              generation in marginalised communities.
            </p>

            <div className="mx-auto mt-8 flex flex-wrap justify-center gap-3">
              <span className="rounded-lg bg-slate-100 px-5 py-2 text-xs font-bold tracking-wide text-emerald-700">
                SUSTAINABILITY
              </span>
              <span className="rounded-lg bg-slate-100 px-5 py-2 text-xs font-bold tracking-wide text-amber-600">
                INNOVATION
              </span>
              <span className="rounded-lg bg-slate-100 px-5 py-2 text-xs font-bold tracking-wide text-sky-700">
                COMMUNITY-CENTRIC
              </span>
              <span className="rounded-lg bg-slate-100 px-5 py-2 text-xs font-bold tracking-wide text-purple-700">
                EXCELLENCE
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="activities" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-dark">Key Activities</h2>
            <div className="mx-auto mt-3 h-1.5 w-14 rounded-full bg-secondary" />
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <article
              id="health-promotion"
              className="overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-slate-200"
            >
              <div className="flex flex-col items-center gap-3 bg-primary px-6 py-8">
                <div className="text-white">
                  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M21 12h-5l-1.5 3L10 6l-2.5 6H3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 17h0"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="text-center text-lg font-bold text-white">Health Promotion</h3>
              </div>
              <div className="px-6 py-6">
                <ul className="space-y-3 text-sm font-medium text-slate-600">
                  {[
                    "Nutritional Education",
                    "Maternal & Child Health",
                    "Sexual & Reproductive Health",
                    "Physical Activeness",
                    "Mental Health Support",
                  ].map((label) => (
                    <li key={label} className="flex items-center gap-3">
                      <span className="text-primary" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-slate-200">
              <div className="flex flex-col items-center gap-3 bg-secondary px-6 py-8">
                <div className="text-white">
                  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 20c0-3.31 2.69-6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 20c0-3.31-2.69-6-6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 14c2.21 0 4 1.79 4 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 14c-2.21 0-4 1.79-4 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-center text-lg font-bold text-white">Vulnerable Group Support</h3>
              </div>
              <div className="px-6 py-6">
                <ul className="space-y-3 text-sm font-medium text-slate-600">
                  {[
                    "Risk Behavior Reduction",
                    "Safe Workplace Advocacy",
                    "Youth Engagement",
                    "Child Abuse Protection",
                  ].map((label) => (
                    <li key={label} className="flex items-center gap-3">
                      <span className="text-secondary" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-slate-200">
              <div className="flex flex-col items-center gap-3 bg-slate-800 px-6 py-8">
                <div className="text-white">
                  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 20h8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 7v5l3 2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-center text-lg font-bold text-white">Research & Building</h3>
              </div>
              <div className="px-6 py-6">
                <ul className="space-y-3 text-sm font-medium text-slate-600">
                  {[
                    "Community & Clinical Research",
                    "Specialized Workshops",
                    "Capacity Building",
                  ].map((label) => (
                    <li key={label} className="flex items-center gap-3">
                      <span className="text-slate-700" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="achievements" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-extrabold text-dark">Team, Funding and Achievements</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
              <h3 className="text-lg font-bold text-dark">Team</h3>
              <p className="mt-3 text-slate-600">
                Highly motivated experts in public health, research, and community development programmes.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
              <h3 className="text-lg font-bold text-dark">Funding</h3>
              <p className="mt-3 text-slate-600">Grants, fundraising, and contributions.</p>
            </article>
            <article className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
              <h3 className="text-lg font-bold text-dark">Achievements</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
                <li>Four years of nutritional education for caregivers with malnourished under-five children.</li>
                <li>Participation in non-communicable disease screening campaigns.</li>
                <li>Hepatitis B vaccination campaigns in schools, colleges, and workplaces.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
