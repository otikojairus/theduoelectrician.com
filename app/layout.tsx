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
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: '(function(){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.defer=!0;a.src=document.location.protocol+"//dist.routingapi.com/jsapi/v1/retreaver.min.js";a.onload=a.onreadystatechange=function(){Retreaver.configure({host:"api.routingapi.com",prefix:"https:"==document.location.protocol?"https":"http"});(new Retreaver.Campaign({campaign_key:"ff97b1af347572af5363ff0efe41842d"})).auto_replace_numbers()};(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(a)})();',
          }}
        />
      </head>
      <body className={`${archivo.variable} ${fraunces.variable} antialiased`}>
        <SiteNavbar />
        {children}
        <SiteFooter />
        <a className="sr-only" href={`tel:${EMERGENCY_PHONE_E164}`}>
          Call The Duo Electrician at {EMERGENCY_PHONE_DISPLAY}
        </a>
      </body>
    </html>
  );
}
