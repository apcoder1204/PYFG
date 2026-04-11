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
    {
      src: "/assets/037b0f59-c61d-4ff5-9b9c-6899f0658a9b.jpeg",
      alt: "Youth health awareness event in Tanzania",
      description: "Engaging young participants in interactive sessions on sexual and reproductive health education.",
    },
    {
      src: "/assets/1a9d2c3d-93d7-4bb0-9b83-09564d620af8.jpeg",
      alt: "Rural community outreach program",
      description: "Providing nutritional education and support to families in remote Tanzanian villages.",
    },
    {
      src: "/assets/20ddf443-84e9-49de-8cfd-aed3ce85d7c2.jpeg",
      alt: "Strategic planning meeting for health programs",
      description: "Team leaders aligning on quarterly goals for youth health promotion and community engagement.",
    },
    {
      src: "/assets/2b2c3b9a-5308-4893-bd3e-468170c57f50.jpeg",
      alt: "Mental health workshop for youth",
      description: "Facilitating peer counseling and mental health support sessions for young people.",
    },
    {
      src: "/assets/37c7fea2-9a27-460c-9e83-13fdc5881f46.jpeg",
      alt: "Community needs assessment in Tanzania",
      description: "Direct engagement with local youth to assess and address community health needs.",
    },
    {
      src: "/assets/37c8c741-4cc1-4a5f-bac5-98f2df168b59.jpeg",
      alt: "Partner coordination for health initiatives",
      description: "Collaborating with local stakeholders to strengthen joint health programs.",
    },
    {
      src: "/assets/4aff60c6-e5ad-482a-97e2-f91af6ba1499.jpeg",
      alt: "Youth leadership empowerment session",
      description: "Building leadership skills and encouraging community involvement among young leaders.",
    },
    {
      src: "/assets/7cfdd235-6ccd-4728-9533-fc93ca2c8d7d.jpeg",
      alt: "Maternal and child health services",
      description: "Delivering essential health services to mothers and children in underserved areas.",
    },
    {
      src: "/assets/9ba3303c-84a9-42e7-b8aa-bf3b72d06f2c.jpeg",
      alt: "Program evaluation and improvement",
      description: "Reviewing health program outcomes to ensure effective community impact.",
    },
    {
      src: "/assets/a150f3de-26b6-4f20-a866-0ac4cf8fe460.jpeg",
      alt: "Physical activity and wellness discussion",
      description: "Promoting healthy lifestyles through group discussions on physical activity.",
    },
    {
      src: "/assets/b9e713ba-d431-49af-9498-c1cba10c1829.jpeg",
      alt: "Health program monitoring in communities",
      description: "Ongoing monitoring of health initiatives to support youth in local settings.",
    },
    {
      src: "/assets/bdbdb1eb-346e-4787-a4b6-9505a81fad3b.jpeg",
      alt: "Research and capacity building collaboration",
      description: "Joint research sessions enhancing skills for community health leadership.",
    },
    {
      src: "/assets/d9b079b6-b9e6-42f7-a084-3a445e632751.jpeg",
      alt: "Educational materials distribution",
      description: "Distributing health education resources during community field visits.",
    },
    {
      src: "/assets/10363652-237b-44a7-95a9-6e2da1f6ecc4.jpeg",
      alt: "Youth mental health workshop",
      description: "Facilitating workshops to build mental health awareness and support networks for youth.",
    },
    {
      src: "/assets/11414ebd-6357-4e40-af3b-de37c631805e.jpeg",
      alt: "Reproductive health discussion group",
      description: "Community discussions on reproductive health, rights, and access to services.",
    },
    {
      src: "/assets/22e18cd8-f767-490c-be46-399cbaf1dd97.jpeg",
      alt: "Mobile health screenings",
      description: "Bringing health screenings and preventive care to remote and underserved areas.",
    },
    {
      src: "/assets/2f549026-2b93-4dfd-ad44-ff0a9a790f21.jpeg",
      alt: "Field team coordination",
      description: "Coordinating field operations to ensure effective health service delivery.",
    },
    {
      src: "/assets/515371c7-3e1c-4d41-af84-61d3168afaae.jpeg",
      alt: "Leadership development program",
      description: "Developing leadership skills among youth for community health advocacy.",
    },
    {
      src: "/assets/68075cb5-ca68-42fd-bea9-0604703b402f.jpeg",
      alt: "Community health surveys",
      description: "Conducting surveys to understand and address local health challenges.",
    },
    {
      src: "/assets/6a89e0e0-28a6-4a4d-817b-60cec7dce39f.jpeg",
      alt: "Campaign planning session",
      description: "Planning health education campaigns to reach more young people.",
    },
    {
      src: "/assets/7d56c55a-6347-4f1f-8790-264d06fa399a.jpeg",
      alt: "Free health screenings event",
      description: "Providing free health screenings and consultations at community events.",
    },
    {
      src: "/assets/81910d2f-dc27-42a7-86a5-5a06c1759519.jpeg",
      alt: "Program impact monitoring",
      description: "Monitoring and evaluating the impact of health programs on communities.",
    },
    {
      src: "/assets/906bc429-ada4-405a-ba84-3c843971824e.jpeg",
      alt: "Partnership discussions",
      description: "Building partnerships with local organizations for sustainable health solutions.",
    },
    {
      src: "/assets/94f1b269-e0eb-4efe-b789-b255c78a0ae5.jpeg",
      alt: "Nutrition education seminar",
      description: "Teaching proper nutrition and healthy eating habits to youth.",
    },
    {
      src: "/assets/967c294d-f4c3-4c68-9662-8ff024491220.jpeg",
      alt: "Health services in marginalized communities",
      description: "Delivering essential health services to marginalized and vulnerable populations.",
    },
    {
      src: "/assets/aa1a5051-187f-476a-a41e-de93c7a9919f.jpeg",
      alt: "Field activity debrief",
      description: "Reviewing field activities to improve future health outreach efforts.",
    },
    {
      src: "/assets/ab2f5db6-5b06-449f-9e8d-24fc6220983b (1).jpeg",
      alt: "Health awareness gathering",
      description: "Community gatherings focused on raising health awareness and support.",
    },
    {
      src: "/assets/ab2f5db6-5b06-449f-9e8d-24fc6220983b.jpeg",
      alt: "On-site health education",
      description: "Providing health education directly in community locations.",
    },
    {
      src: "/assets/c337a962-01a7-4494-b546-f725f9fd0eac.jpeg",
      alt: "Program effectiveness review",
      description: "Reviewing program effectiveness to ensure positive health outcomes.",
    },
    {
      src: "/assets/ddc8fccc-cb07-45d3-a423-70caef54de2f.jpeg",
      alt: "Youth health development camp",
      description: "Camps dedicated to youth health development and skill-building.",
    },
    {
      src: "/assets/e0160c8f-42db-4c27-a0c3-c0fc8d3dbc74.jpeg",
      alt: "Rural health resource distribution",
      description: "Distributing health resources and support to rural communities.",
    },
    {
      src: "/assets/ed722080-c933-4d13-ac87-ebe142610ee4.jpeg",
      alt: "Collaborative initiative planning",
      description: "Planning collaborative initiatives with partners for broader impact.",
    },
    {
      src: "/assets/f4bec68f-814a-4496-baae-da750d286dc6.jpeg",
      alt: "Youth wellness promotion",
      description: "Promoting overall wellness and healthy lifestyles among young people.",
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
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
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
            <div className="flex flex-col items-center space-y-4">
              <img
                src={heroImages[currentImageIndex].src}
                alt={heroImages[currentImageIndex].alt}
                className="w-full max-w-md rounded-[2.5rem] border-8 border-white/10 shadow-2xl transition-opacity duration-1000 ease-in-out lg:max-w-none"
              />
              <div className="flex justify-center space-x-2">
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
              <div className="text-center">
                <p className="text-white/90 text-sm max-w-md mx-auto leading-relaxed">
                  {heroImages[currentImageIndex].description}
                </p>
              </div>
            </div>
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
                      className="h-20 w-20 shrink-0 rounded-full object-contain ring-1 ring-slate-100"
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
