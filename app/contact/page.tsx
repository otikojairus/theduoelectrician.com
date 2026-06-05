import type { Metadata } from "next";
import { PhoneLink } from "@/components/phone-link";
import { EMERGENCY_PHONE_DISPLAY } from "@/lib/seo";

export const metadata: Metadata = { title: "Contact Electrician Dispatch Canada", description: "Contact The Duo Electrician for licensed electrical service across Canada. Call for repairs, emergency concerns, residential work, commercial projects, and panels.", alternates: { canonical: "/contact" } };

export default function ContactPage() { return <main className="tde-shell"><section className="tde-index-hero"><div className="tde-container tde-index-hero-grid"><div><p className="tde-kicker">Contact</p><h1>Call The Duo Electrician.</h1></div><div><p>Phone is the fastest path when electrical symptoms may be unsafe. Share the property type, city, panel access, what changed, and whether you notice heat, smell, buzzing, sparks, or repeated breaker trips.</p><PhoneLink className="tde-btn tde-btn-primary" location="contact" pageTier="contact">{EMERGENCY_PHONE_DISPLAY}</PhoneLink></div></div></section></main>; }
