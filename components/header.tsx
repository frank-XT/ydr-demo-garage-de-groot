import Link from "next/link";
import { CtaButton } from "./cta-button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-white">Garage De Groot</Link>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <Link href="/over-ons">Over ons</Link>
          <Link href="/diensten">Diensten</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <CtaButton href="/contact">Gratis intake</CtaButton>
      </div>
    </header>
  );
}
