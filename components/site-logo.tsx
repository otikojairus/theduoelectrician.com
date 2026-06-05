import Link from "next/link";

export function SiteLogo({ href = "/" }: { href?: string; invert?: boolean }) {
  return (
    <Link href={href} className="tde-logo" aria-label="The Duo Electrician home">
      <span className="tde-logo-mark" aria-hidden="true"><span /></span>
      <span className="tde-logo-copy"><strong>The Duo Electrician</strong><small>Licensed electrical service</small></span>
    </Link>
  );
}
