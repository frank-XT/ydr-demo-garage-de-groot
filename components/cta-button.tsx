import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export function CtaButton({ href, children }: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
    >
      {children}
    </Link>
  );
}
