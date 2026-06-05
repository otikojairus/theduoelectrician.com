import Link from "next/link";
import { PhoneLink } from "@/components/phone-link";
import { SiteLogo } from "@/components/site-logo";
import { ELECTRICIAN_CITIES, ELECTRICIAN_SERVICES, getPagesByCity } from "@/lib/electrician-data";
import { EMERGENCY_PHONE_DISPLAY, SITE_NAME } from "@/lib/seo";

export function SiteFooter() {
  return (
    <footer className="tde-footer">
      <div className="tde-container tde-footer-grid"><div><SiteLogo /><p className="tde-footer-copy">Licensed electrical help for homes and businesses across Canada: emergency electricians, residential work, commercial service, troubleshooting, and panel planning.</p><PhoneLink className="tde-footer-phone" location="footer" pageTier="global">{EMERGENCY_PHONE_DISPLAY}</PhoneLink></div><div><h3 className="tde-footer-title">Electrical Services</h3><div className="tde-footer-links">{ELECTRICIAN_SERVICES.map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.name}</Link>)}</div></div><div><h3 className="tde-footer-title">Cities</h3><div className="tde-footer-city-links">{ELECTRICIAN_CITIES.slice(0, 16).map((city) => { const firstPage = getPagesByCity(city.slug)[0]; return firstPage ? <Link key={`${city.name}-${city.province}`} href={`/${firstPage.slug}`}>{city.name}</Link> : null; })}</div></div></div>
      <div className="tde-container tde-footer-bottom"><span>© {new Date().getFullYear()} {SITE_NAME}</span><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-of-service">Terms of Service</Link></div>
    </footer>
  );
}
