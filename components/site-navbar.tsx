"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PhoneLink } from "@/components/phone-link";
import { SiteLogo } from "@/components/site-logo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/#cities", label: "Cities" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteNavbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("tde-scroll-lock", isDrawerOpen);
    document.body.classList.toggle("tde-scroll-lock", isDrawerOpen);
    return () => { document.documentElement.classList.remove("tde-scroll-lock"); document.body.classList.remove("tde-scroll-lock"); };
  }, [isDrawerOpen]);

  return (
    <>
      <header className="tde-navbar"><div className="tde-container tde-navbar-row"><SiteLogo /><nav className="tde-nav-links" aria-label="Primary">{NAV_LINKS.map((link) => <Link key={link.href} href={link.href} className="tde-nav-link">{link.label}</Link>)}</nav><PhoneLink className="tde-nav-call" location="nav" pageTier="global" /><button type="button" className="tde-menu-btn lg:hidden" aria-label="Open navigation menu" aria-expanded={isDrawerOpen} onClick={() => setIsDrawerOpen((open) => !open)}><i className="fa-solid fa-bars" aria-hidden="true" /></button></div></header>
      <div className={`tde-drawer lg:hidden ${isDrawerOpen ? "is-open" : ""}`} aria-hidden={!isDrawerOpen}><button type="button" className="tde-drawer-scrim" aria-label="Close menu" onClick={() => setIsDrawerOpen(false)} /><div className="tde-drawer-panel"><div className="flex items-center justify-between gap-4"><SiteLogo /><button type="button" className="tde-icon-btn" aria-label="Close menu" onClick={() => setIsDrawerOpen(false)}><i className="fa-solid fa-xmark" aria-hidden="true" /></button></div><nav className="mt-8 grid gap-3" aria-label="Mobile navigation">{NAV_LINKS.map((link) => <Link key={link.href} href={link.href} className="tde-mobile-link" onClick={() => setIsDrawerOpen(false)}>{link.label}</Link>)}</nav><PhoneLink className="tde-btn tde-btn-primary mt-6 w-full" location="mobile-drawer" pageTier="global" /></div></div>
    </>
  );
}
