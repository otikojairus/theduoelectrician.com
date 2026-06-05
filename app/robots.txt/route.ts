export function GET() {
  const body = [
    "User-Agent: *",
    "Allow: /",
    "",
    `Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL || "https://theduoelectrician.com"}/sitemap.xml`,
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
