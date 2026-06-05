export const SITE_NAME = "The Duo Electrician";
export const DEFAULT_SITE_URL = "https://theduoelectrician.com";
export const EMERGENCY_PHONE_DISPLAY = "1-888-555-0191";
export const EMERGENCY_PHONE_E164 = "+18885550191";

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL;
}

export function absoluteUrl(path: string) {
  return `${getSiteUrl()}${path}`;
}

export function trimMetaDescription(input: string, max = 155) {
  if (input.length <= max) return input;
  const sliced = input.slice(0, max - 3);
  const lastSpace = sliced.lastIndexOf(" ");
  return `${sliced.slice(0, lastSpace > 0 ? lastSpace : sliced.length)}...`;
}
