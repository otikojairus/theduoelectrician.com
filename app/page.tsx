import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PhoneLink } from "@/components/phone-link";
import { ELECTRICIAN_CITIES, ELECTRICIAN_SERVICES, getPagesByCity, getPriorityPages } from "@/lib/electrician-data";
import { EMERGENCY_PHONE_DISPLAY, EMERGENCY_PHONE_E164, SITE_NAME, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = { title: "Licensed Electrician Canada Service Directory", description: "Licensed electrician help across Canada. Call The Duo Electrician for emergency repairs, residential service, commercial work, panel planning, and fast quotes.", alternates: { canonical: "/" }, openGraph: { title: `${SITE_NAME} | Licensed Electricians Across Canada`, description: "Electrical service across Canada for urgent repairs, homes, businesses, and panel planning.", url: absoluteUrl("/"), type: "website", siteName: SITE_NAME, images: [absoluteUrl("/theduoelectrician-logo.svg")] } };

export default function HomePage() {
  const priorityPages = getPriorityPages(8);
  const featuredServices = ELECTRICIAN_SERVICES.slice(0, 5);
  const featuredCities = ELECTRICIAN_CITIES.slice(0, 18);
  const supportItems = [
    ["fa-bolt", "Fast triage", "Urgent symptoms get routed first: heat, smell, sparks, water, outages, or repeated breaker trips."],
    ["fa-clipboard-check", "Clear scope", "We sort repair, install, inspection, panel, residential, and commercial calls before the visit."],
    ["fa-location-dot", "Local paths", "City pages keep visitors moving from broad searches to local electrical service options."],
  ];
  const benefits = [
    "Describe the electrical problem in plain language.",
    "Understand what can affect price, permits, access, and timing.",
    "Move from emergency, repair, panel, or installation needs to the right page.",
    "Find related local pages without getting trapped in a dead end.",
    "Call when the issue needs a licensed electrician now.",
  ];
  const schema = { "@context":"https://schema.org", "@type":"Organization", name: SITE_NAME, url: absoluteUrl("/"), logo: absoluteUrl("/theduoelectrician-logo.svg"), telephone: EMERGENCY_PHONE_E164, areaServed: "CA" };
  return (
    <main className="tde-shell">
      <JsonLd data={schema} />
      <section className="tde-home-hero">
        <div className="tde-container tde-home-hero-grid">
          <div className="tde-home-copy">
            <p className="tde-kicker">Licensed electricians across Canada</p>
            <h1>Electrical service without the guesswork</h1>
            <div className="tde-home-underline" aria-hidden="true" />
            <p>Find the right path for emergency repairs, panel planning, inspections, installs, homes, and commercial spaces.</p>
            <div className="tde-actions">
              <PhoneLink className="tde-btn tde-btn-primary" location="homepage-hero" pageTier="home">Call {EMERGENCY_PHONE_DISPLAY}</PhoneLink>
              <Link className="tde-btn tde-btn-quiet" href="/services"><i className="fa-solid fa-circle-play" aria-hidden="true" /> View services</Link>
            </div>
          </div>
          <div className="tde-visual-stage" aria-label="Electrical service overview">
            <div className="tde-visual-card">
              <Image src="/electrician-hero.webp" alt="Licensed electricians inspecting an electrical panel" fill priority sizes="(min-width: 1024px) 45vw, 92vw" className="tde-visual-photo" />
            </div>
            <div className="tde-float-card tde-float-top"><small>Response path</small><strong>Emergency</strong><span>Priority dispatch</span></div>
            <div className="tde-float-card tde-float-left"><small>Quote prep</small><strong>Panel access</strong><span>Photos help</span></div>
            <div className="tde-float-card tde-float-bottom"><i className="fa-solid fa-circle-check" aria-hidden="true" /><span>Safety-first call booked</span></div>
            <div className="tde-spark-badge"><i className="fa-solid fa-bolt" aria-hidden="true" /></div>
          </div>
        </div>
      </section>

      <section className="tde-trust-strip">
        <div className="tde-container">
          <h2>Built for urgent electrical searches across Canada</h2>
          <div className="tde-trust-logos">{["Emergency", "Residential", "Commercial", "Panel planning", "Repairs"].map((item) => <span key={item}><i className="fa-solid fa-plug" aria-hidden="true" />{item}</span>)}</div>
        </div>
      </section>

      <section className="tde-support-section">
        <div className="tde-container tde-support-grid">
          <div className="tde-support-intro">
            <p className="tde-kicker">How we support the call</p>
            <h2>We turn electrical symptoms into a clear next step.</h2>
            <p>Electrical issues rarely fit one neat category. This directory helps visitors describe risk, choose a service, and move into local pages with context.</p>
            <div className="tde-rating-row">
              <div><span>★★★★★</span><strong>Safety-first</strong><small>booking flow</small></div>
              <div><span>★★★★☆</span><strong>City-aware</strong><small>service pages</small></div>
            </div>
          </div>
          <div className="tde-support-list">{supportItems.map(([icon,title,body]) => <article key={title}><span><i className={`fa-solid ${icon}`} aria-hidden="true" /></span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
        </div>
      </section>

      <section className="tde-services-modern">
        <div className="tde-container">
          <div className="tde-modern-head">
            <p className="tde-kicker">Service paths</p>
            <h2>Choose the job type first.</h2>
            <Link href="/services">Open full directory</Link>
          </div>
          <div className="tde-modern-service-grid">{featuredServices.map((service, index) => <Link key={service.slug} href={`/services/${service.slug}`} className="tde-modern-service-card"><span>{String(index + 1).padStart(2,"0")}</span><h3>{service.name}</h3><p>{service.summary}</p><i className="fa-solid fa-arrow-right" aria-hidden="true" /></Link>)}</div>
        </div>
      </section>

      <section className="tde-benefit-section">
        <div className="tde-container tde-benefit-grid">
          <div className="tde-benefit-copy">
            <p className="tde-kicker">What you get</p>
            <h2>Less searching. Better electrical context.</h2>
            <ul>{benefits.map((benefit) => <li key={benefit}><span><i className="fa-solid fa-check" aria-hidden="true" /></span>{benefit}</li>)}</ul>
          </div>
          <div className="tde-benefit-media">
            <Image src="/electrician-hero.webp" alt="Electrical panel inspection used for service planning" fill sizes="(min-width: 1024px) 44vw, 92vw" className="tde-benefit-photo" />
            <div className="tde-benefit-note tde-benefit-note-top"><strong>Licensed service</strong><small>Repair, install, inspect</small></div>
            <div className="tde-benefit-note tde-benefit-note-bottom"><i className="fa-regular fa-circle-check" aria-hidden="true" />Panel details received</div>
          </div>
        </div>
      </section>

      <section id="cities" className="tde-directory-modern">
        <div className="tde-container tde-directory-modern-grid">
          <div>
            <p className="tde-kicker">Local electrician pages</p>
            <h2>Find help by city, then follow the service lane.</h2>
            <p>Every city page links back to its service pillar and across to related electrical services, keeping the visitor journey connected.</p>
            <div className="tde-city-pills">{featuredCities.map((city) => { const first = getPagesByCity(city.slug)[0]; return first ? <Link key={`${city.name}-${city.province}`} href={`/${first.slug}`}>{city.name}<small>{city.province}</small></Link> : null; })}</div>
          </div>
          <div className="tde-priority-panel">
            <p className="tde-kicker">Urgent searches</p>
            <h3>High-intent pages</h3>
            <div>{priorityPages.map((page) => <Link key={page.slug} href={`/${page.slug}`}><span>{page.primaryKeyword}</span><small>{page.pageType}</small></Link>)}</div>
          </div>
        </div>
      </section>

      <section className="tde-final-cta"><div className="tde-container"><h2>Need an electrician for repair, inspection, installation, or urgent safety concerns?</h2><PhoneLink className="tde-btn tde-btn-primary" location="homepage-final" pageTier="home">Call {EMERGENCY_PHONE_DISPLAY}</PhoneLink></div></section>
    </main>
  );
}
