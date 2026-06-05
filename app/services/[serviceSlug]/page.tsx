import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { PhoneLink } from "@/components/phone-link";
import { ELECTRICIAN_SERVICES, getPagesByService, getServiceBySlug, titleCase } from "@/lib/electrician-data";
import { EMERGENCY_PHONE_DISPLAY, SITE_NAME, absoluteUrl, trimMetaDescription } from "@/lib/seo";

type ServicePageProps = { params: Promise<{ serviceSlug: string }> };

export async function generateStaticParams() {
  return ELECTRICIAN_SERVICES.map((service) => ({ serviceSlug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  if (!service) return {};
  const base = `${titleCase(service.keyword)} Canada`;
  const title = `${base} | ${SITE_NAME}`.length < 50 ? `${base} Licensed Help` : trimMetaDescription(base, 44);
  const description = trimMetaDescription(`${service.keyword} across Canada. Call The Duo Electrician for licensed service, safety-first repairs, quote steps, local pages, and booking help.`, 158);
  return { title, description, alternates: { canonical: `/services/${service.slug}` }, openGraph: { title: `${title} | ${SITE_NAME}`, description, url: absoluteUrl(`/services/${service.slug}`), type: "website", siteName: SITE_NAME } };
}

function serviceFocus(serviceName: string) {
  const lower = serviceName.toLowerCase();
  if (lower.includes("emergency")) return { risk: "active safety symptoms, partial outages, heat, sparks, burning smells, buzzing panels, and electrical issues that should not wait", planning: "who is safe, what has power, what changed, where the panel is, and whether anyone has already reset a breaker" };
  if (lower.includes("residential")) return { risk: "home wiring, outlets, lighting, panels, dedicated appliance circuits, renovation work, and family routines", planning: "rooms affected, panel location, renovation timing, appliance loads, EV plans, and whether permits may be involved" };
  if (lower.includes("commercial")) return { risk: "business downtime, tenant improvements, lighting, equipment circuits, access rules, after-hours work, and code-focused repairs", planning: "business hours, affected equipment, landlord or tenant rules, parking, shutdown windows, and inspection deadlines" };
  if (lower.includes("repair")) return { risk: "fault diagnosis, flickering lights, breaker trips, damaged devices, failed switches, outlets, and circuits that need careful troubleshooting", planning: "symptoms, when they started, what changed recently, affected rooms, and whether the problem is visible or intermittent" };
  return { risk: "local electrical troubleshooting, repair, installation, inspection, panel capacity, and practical service planning", planning: "city, property type, access, panel location, urgency, and the best service category for the work" };
}

export default async function ServicePillarPage({ params }: ServicePageProps) {
  const { serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  if (!service) notFound();

  const pages = getPagesByService(service.slug);
  const national = pages.filter((page) => page.city === "Canada");
  const local = pages.filter((page) => page.city !== "Canada");
  const focus = serviceFocus(service.name);
  const faqs = [
    { question: `When should I book ${service.name.toLowerCase()}?`, answer: `Book ${service.name.toLowerCase()} when the work involves ${focus.risk}. The first call should confirm whether the issue is urgent, planned, residential, commercial, visible, hidden, or tied to a larger panel or permit question.` },
    { question: `What information helps with ${service.name.toLowerCase()} scheduling?`, answer: `Share ${focus.planning}. Photos can help if they are safe to take, but no one should remove covers, touch wiring, or investigate a panel that smells, buzzes, feels hot, or shows visible damage.` },
    { question: `Does ${service.name.toLowerCase()} require a permit or inspection?`, answer: "Some electrical work may require permits, inspections, utility coordination, or load calculations. The correct path depends on province, municipality, service size, building type, and the final scope confirmed by the electrician." },
  ];
  const schema = [
    { "@context": "https://schema.org", "@type": "Service", name: service.name, description: service.summary, provider: { "@type": "Organization", name: SITE_NAME }, areaServed: "CA", url: absoluteUrl(`/services/${service.slug}`) },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") }, { "@type": "ListItem", position: 3, name: service.name, item: absoluteUrl(`/services/${service.slug}`) }] },
  ];

  return (
    <main className="tde-shell">
      <JsonLd data={schema} />
      <section className="tde-page-hero service-mode">
        <div className="tde-container tde-page-hero-grid">
          <div>
            <div className="tde-page-tags"><span>Service pillar</span><span>{pages.length} pages</span><span>Canada-wide</span></div>
            <h1>{service.name} Across Canada</h1>
          </div>
          <div className="tde-hero-ticket">
            <p>{service.intro} This Canada-wide pillar helps visitors understand risk, access, quote factors, local routing, and related electrical pages before booking a licensed electrician.</p>
            <PhoneLink className="tde-btn tde-btn-primary" location={`pillar-${service.slug}`} pageTier="services">Call {EMERGENCY_PHONE_DISPLAY}</PhoneLink>
          </div>
        </div>
      </section>

      <section className="tde-diagnostic-section">
        <div className="tde-container tde-diagnostic-grid">
          <aside className="tde-diagnostic-card">
            <p className="tde-kicker">What this solves</p>
            <h2>{service.summary}</h2>
            <ul>
              <li>Separates urgent safety concerns from planned electrical work.</li>
              <li>Connects symptoms, access, permits, and quote factors.</li>
              <li>Links national service intent to every local city page in this service lane.</li>
              <li>Keeps every generated page connected through service pillars, city pages, and related searches.</li>
            </ul>
          </aside>
          <article className="tde-prose">
            <h2>How {service.name.toLowerCase()} requests are handled</h2>
            <p>{service.name} searches often start when a property owner needs a qualified electrician instead of a general handyman or guesswork. The work may involve live circuits, panels, building access, permit rules, and safety risks that need a licensed process. This pillar gives visitors a service-specific route before they choose a city page or call for scheduling.</p>
            <p>The first conversation should clarify whether the problem is urgent, whether any device is hot, buzzing, sparking, wet, or repeatedly tripping, and whether the work is repair, installation, upgrade, inspection, or troubleshooting. Those details influence scheduling, parts, safety steps, and pricing. They also help decide whether a same-day visit, planned appointment, or more detailed assessment is the responsible next step.</p>
            <p>For businesses, timing and downtime can be as important as the repair itself. For homes, the visit may need to account for family schedules, renovations, basement suites, EV chargers, appliances, lighting plans, or older panel capacity. A clear service path keeps the work practical and responsible, especially when a simple symptom turns into a larger capacity, permit, or access question.</p>
            <p>The city pages below localize this service by neighbourhood access, climate, property type, and common electrical needs. The national pages capture broad searches and the related pages keep visitors moving when the job changes category after diagnosis. That structure prevents orphan pages while giving searchers keyword-rich anchors that match the way they describe the job.</p>
            <p>Because {service.name.toLowerCase()} can mean different things in different buildings, the strongest booking request includes both the visible symptom and the context around it. A flicker in one fixture, a warm breaker, a failed exterior outlet, a tenant improvement deadline, or a planned appliance circuit can each point to a different service path.</p>
          </article>
        </div>
      </section>

      <section className="tde-decision-section">
        <div className="tde-container">
          <div className="tde-section-head compact"><p className="tde-kicker">Service planning</p><h2>What changes the visit</h2></div>
          <div className="tde-decision-grid">
            {[
              ["Safety", `For ${service.name.toLowerCase()}, symptoms such as heat, smell, buzzing, sparks, water exposure, partial outages, or repeated breaker trips should be treated as priority details.`],
              ["Scope", `The right visit depends on whether this is ${focus.risk}. A repair call, inspection, installation, or panel-capacity question can require different preparation.`],
              ["Access", "Parking, panel location, suite or unit details, business hours, pets, gate codes, electrical-room rules, and safe workspace can all affect timing."],
              ["Quote path", "Pricing may change with diagnosis, access, parts, permit requirements, service size, panel condition, hidden wiring, and whether utility coordination is needed."],
            ].map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="tde-related-section">
        <div className="tde-container tde-related-grid">
          <div>
            <p className="tde-kicker">National pages</p>
            <h2>Start with broad electrical intent.</h2>
            <p>These national and modifier pages capture broad searches for {service.keyword}. They link visitors from general intent into the exact service, symptom, or city page that fits the work.</p>
          </div>
          <div className="tde-related-links">{national.map((page) => <Link key={page.slug} href={`/${page.slug}`}>{page.primaryKeyword}</Link>)}</div>
        </div>
      </section>

      <section className="tde-directory-section slim">
        <div className="tde-container">
          <div className="tde-section-head compact"><p className="tde-kicker">Local pages</p><h2>{service.name} by city.</h2></div>
          <div className="tde-all-page-grid">{local.map((page) => <Link key={page.slug} href={`/${page.slug}`}>{page.primaryKeyword}</Link>)}</div>
        </div>
      </section>

      <section className="tde-faq-section">
        <div className="tde-container">
          <div className="tde-section-head compact"><p className="tde-kicker">Questions</p><h2>FAQs for {service.name.toLowerCase()}.</h2></div>
          <div className="tde-faq-grid">{faqs.map((faq) => <article key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></article>)}</div>
        </div>
      </section>
    </main>
  );
}
