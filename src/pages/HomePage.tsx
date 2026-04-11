import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Seo } from "../components/Seo";
import { leadershipTeam } from "../data/leadership";

export function HomePage() {
  const heroImages = [
    {
      src: "https://www.unicef.org/southafrica/sites/unicef.org.southafrica/files/styles/hero_extended/public/ZAF-mhealthcover.jpg.webp?itok=x8s04RGG",
      alt: "Young people participating in health awareness activities in Tanzania",
      description:
        "Youth engaging in community health awareness programs, learning about nutrition and wellness in rural Tanzania.",
    },
    {
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=1000",
      alt: "Youth attending health education workshops in Tanzania",
      description:
        "Interactive health education workshops teaching young people about disease prevention and healthy lifestyles.",
    },
    {
      src: "https://researchoutreach.org/wp-content/uploads/2020/09/DSCN0645.jpg.webp",
      alt: "Community health support groups for vulnerable youth in Africa",
      description:
        "Support group sessions providing mental health counseling and peer support for vulnerable youth in African communities.",
    },
    {
      src: "https://aaph.or.tz/sites/default/files/styles/fproject/public/782A3755.jpg?itok=MC4SEgO3",
      alt: "Research and capacity building sessions for youth development",
      description:
        "Capacity building workshops and research sessions empowering youth with skills for community health leadership.",
    },
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000",
      alt: "Health outreach programs reaching marginalized communities",
      description:
        "Mobile health outreach teams providing vaccinations, screenings, and health education to remote communities.",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5hvHrpXeI5BVdhAZpeHDpqtXCV7ddAa96Xw&s=10",
      alt: "Health outreach programs reaching marginalized communities",
      description:
        "Tracking and monitoring health outcomes to youth in marginalized communities, ensuring they receive the care and support they need.",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

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
              Let&apos;s Build Our Future <span className="text-secondary">Together</span>
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
            src={heroImages[currentImageIndex].src}
            alt={heroImages[currentImageIndex].alt}
            className="block rounded-[2.5rem] border-8 border-white/10 shadow-2xl lg:block transition-opacity duration-1000 ease-in-out"
          />
          <div className="flex justify-center mt-4 space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
          <div className="block mt-4 text-center">
            <p className="text-white/90 text-sm max-w-md mx-auto leading-relaxed">
              {heroImages[currentImageIndex].description}
            </p>
          </div>
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
            <h2 className="text-2xl font-extrabold text-slate-900">Core Values</h2>
            <div className="mx-auto mt-3 h-1.5 w-14 rounded-full bg-secondary" />
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
              Our core values guide everything we do, ensuring we remain committed to empowering youth and building healthier communities.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line x1="16" y1="8" x2="2" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="17.5" y1="15" x2="9" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">SUSTAINABILITY</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Ensuring every young person has access to quality health services and education, regardless of background.
                </p>
              </article>

              <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">INNOVATION</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Embracing creative solutions and modern approaches to address traditional health challenges.
                </p>
              </article>

              <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">COMMUNITY-CENTRIC</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Working closely with local communities to understand and address their unique health needs.
                </p>
              </article>

              <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-700">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">EXCELLENCE</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Maintaining the highest standards in our programs, research, and community engagement.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="who-we-are" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-slate-900">Who We Are</h2>
            <div className="mx-auto mt-3 h-1.5 w-14 rounded-full bg-secondary" />
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
              Potential Youth for the Future Generation is a Tanzania mainland-based non-governmental
              organisation dedicated to addressing social, health, and economic challenges facing the young
              generation in marginalised communities.
            </p>
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
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400"
                alt="Youth participating in health education workshop in Tanzania"
                className="h-48 w-full object-cover"
              />
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
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=400"
                alt="Community support group meeting for vulnerable youth in Africa"
                className="h-48 w-full object-cover"
              />
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
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400"
                alt="Research and capacity building workshop for youth development"
                className="h-48 w-full object-cover"
              />
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
            <article className="relative overflow-hidden rounded-3xl border border-slate-100 bg-team-card p-6 text-white">
              <div className="relative z-10">
                <h3 className="mt-4 text-lg font-bold">Team</h3>
                <p className="mt-3 text-sm">
                  Highly motivated experts in public health, research, and community development programmes.
                </p>
              </div>
            </article>
            <article className="relative overflow-hidden rounded-3xl border border-slate-100 bg-funding-card p-6 text-white">
              <div className="relative z-10">
                <h3 className="mt-4 text-lg font-bold">Funding</h3>
                <p className="mt-3 text-sm">Grants, fundraising, and contributions.</p>
              </div>
            </article>
            <article className="relative overflow-hidden rounded-3xl border border-slate-100 bg-achievements-card p-6 text-white">
              <div className="relative z-10">
                <img
                  src="https://assets.weforum.org/article/image/q-dfUJgr9H8xRqVN-OK2GQqoM26JFzaMjIH8-FJqT4Y.jpg"
                  alt="Successful health campaign achievements and community impact"
                  className="h-32 w-full rounded-xl object-cover"
                />
                <h3 className="mt-4 text-lg font-bold">Achievements</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-white/90">
                  <li>Four years of nutritional education for caregivers with malnourished under-five children.</li>
                  <li>Participation in non-communicable disease screening campaigns.</li>
                  <li>Hepatitis B vaccination campaigns in schools, colleges, and workplaces.</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="leadership" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-dark">Leadership Team</h2>
            <div className="mx-auto mt-3 h-1.5 w-14 rounded-full bg-secondary" />
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
              Meet the dedicated professionals leading our mission to empower youth and promote health equity in Tanzania.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {leadershipTeam.map((leader, index) => {
              const accent =
                index === 0 ? "text-primary" : index === 1 ? "text-secondary" : "text-slate-800";
              return (
                <article key={leader.role} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                  <div className="flex items-center gap-4">
                    <img
                      src={leader.photoUrl}
                      alt={leader.name}
                      className="h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-slate-100"
                    />
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-slate-900">{leader.name}</h3>
                      <p className={`text-sm font-medium ${accent}`}>{leader.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-600">{leader.blurb}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
