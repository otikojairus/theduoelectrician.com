import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const appDir = path.join(process.cwd(), ".next", "server", "app");
const failures = [];

function walk(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : file.endsWith(".html") ? [file] : [];
  });
}

function stripTags(html) {
  return html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function pagePath(file) {
  const relative = path.relative(appDir, file).replace(/\\/g, "/").replace(/\/index\.html$/, "").replace(/\.html$/, "");
  return relative === "index" ? "/" : `/${relative}`;
}

const files = walk(appDir).filter((file) => !file.includes("/_not-found") && !file.includes("/_global-error"));
const pathToHtml = new Map(files.map((file) => [pagePath(file), readFileSync(file, "utf8")]));
const internalHrefCounts = new Map();

for (const [route, html] of pathToHtml) {
  const h1Count = (html.match(/<h1\b/gi) || []).length;
  if (h1Count !== 1) failures.push(`${route}: expected exactly 1 H1, found ${h1Count}`);

  const title = html.match(/<title>(.*?)<\/title>/i)?.[1]?.trim() ?? "";
  if (!title) failures.push(`${route}: missing title tag`);
  if (route !== "/" && !title.includes("The Duo Electrician")) failures.push(`${route}: title missing brand`);

  const description = html.match(/<meta name="description" content="([^"]+)"/i)?.[1] ?? "";
  if (!description) failures.push(`${route}: missing meta description`);
  if (description && (description.length < 120 || description.length > 170)) failures.push(`${route}: meta description length ${description.length} is outside 120-170 audit band`);

  if (!html.includes('rel="canonical"')) failures.push(`${route}: missing canonical link`);
  if (!html.includes('href="tel:')) failures.push(`${route}: missing tap-to-call link`);

  const hasFaqMarkup = html.includes("tde-faq-grid");
  if (hasFaqMarkup && !html.includes('"@type":"FAQPage"')) failures.push(`${route}: FAQ section missing FAQPage schema`);

  const text = stripTags(html);
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const isGeneratedLanding = route !== "/" && !route.startsWith("/services") && !["/about", "/contact", "/privacy-policy", "/terms-of-service"].includes(route);
  const isServicePillar = route.startsWith("/services/") && route !== "/services";
  const isEmergency = /emergency/i.test(route);
  if (isGeneratedLanding && wordCount < (isEmergency ? 500 : 400)) failures.push(`${route}: word count ${wordCount} below generated-page target`);
  if (isServicePillar && wordCount < 800) failures.push(`${route}: word count ${wordCount} below pillar target`);

  for (const match of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const href = match[1].replace(/\/$/, "") || "/";
    internalHrefCounts.set(href, (internalHrefCounts.get(href) || 0) + 1);
  }
}

for (const route of pathToHtml.keys()) {
  if (route === "/" || route.startsWith("/_")) continue;
  const normalized = route.replace(/\/$/, "") || "/";
  if (!internalHrefCounts.has(normalized)) failures.push(`${route}: no internal link found in rendered HTML`);
}

if (failures.length) {
  console.error(`SEO audit failed with ${failures.length} issue(s):`);
  for (const failure of failures.slice(0, 80)) console.error(`- ${failure}`);
  if (failures.length > 80) console.error(`- ...and ${failures.length - 80} more`);
  process.exit(1);
}

console.log(`SEO audit passed for ${pathToHtml.size} rendered HTML pages.`);
