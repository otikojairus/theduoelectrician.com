"use client";

import { ReactNode } from "react";
import { EMERGENCY_PHONE_DISPLAY, EMERGENCY_PHONE_E164 } from "@/lib/seo";

type PhoneLinkProps = { children?: ReactNode; className?: string; location?: string; pageTier?: string; ariaLabel?: string };

export function PhoneLink({ children, className, location = "sitewide", pageTier = "global", ariaLabel }: PhoneLinkProps) {
  function handleClick() {
    const gtag = typeof window !== "undefined" ? (window as Window & { gtag?: (...args: unknown[]) => void }).gtag : undefined;
    gtag?.("event", "call_click", { location, page_tier: pageTier });
  }
  return <a href={`tel:${EMERGENCY_PHONE_E164}`} onClick={handleClick} className={className} aria-label={ariaLabel ?? `Call ${EMERGENCY_PHONE_DISPLAY}`}>{children ?? `Call ${EMERGENCY_PHONE_DISPLAY}`}</a>;
}
