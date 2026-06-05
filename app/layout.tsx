import type { Metadata } from "next";
import { Archivo, Fraunces } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { EMERGENCY_PHONE_DISPLAY, EMERGENCY_PHONE_E164, SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";

const archivo = Archivo({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const fraunces = Fraunces({ variable: "--font-display", subsets: ["latin"], weight: ["600", "700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: `${SITE_NAME} | Licensed Electricians Across Canada`, template: `%s | ${SITE_NAME}` },
  description: "The Duo Electrician helps Canadian homes and businesses book licensed electricians for repairs, emergency service, residential work, commercial projects, and panel planning.",
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: { type: "website", title: `${SITE_NAME} | Licensed Electricians Across Canada`, description: "Licensed electrical service across Canada for repairs, emergency calls, residential and commercial work.", url: absoluteUrl("/"), siteName: SITE_NAME, locale: "en_CA", images: [absoluteUrl("/theduoelectrician-logo.svg")] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${archivo.variable} ${fraunces.variable} antialiased`}><SiteNavbar />{children}<SiteFooter /><a className="sr-only" href={`tel:${EMERGENCY_PHONE_E164}`}>Call The Duo Electrician at {EMERGENCY_PHONE_DISPLAY}</a></body></html>;
}
