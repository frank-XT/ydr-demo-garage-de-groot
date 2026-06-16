import Link from "next/link";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { CtaButton } from "../components/cta-button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-amber-300/30 bg-amber-400/10 px-4 py-1 text-sm text-amber-200">Automobielen en Fietsen (Oorspronkelijk 'Garage' vermeld, maar website toont bredere focus)</span>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">Garage De Groot</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Garage De Groot helpt klanten met kwaliteit en service.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaButton href="/contact">Plan een kennismaking</CtaButton>
              <Link href="/diensten" className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5">Bekijk diensten</Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200">Direct contact</p>
            <dl className="mt-6 space-y-4 text-sm text-slate-300">
              <div><dt className="text-slate-500">E-mail</dt><dd className="text-base text-white">info@garagedegroot.nl</dd></div>
              <div><dt className="text-slate-500">Telefoon</dt><dd className="text-base text-white">020-1234567</dd></div>
              <div><dt className="text-slate-500">Huidige website</dt><dd className="text-base text-white break-all">https://www.halfords.nl</dd></div>
            </dl>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold text-white">Aanbevolen diensten</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">AI Chatbot</h3>
            <p className="mt-2 text-sm text-slate-600">Slim ingericht voor garage de groot met focus op conversie, snelheid en bereikbaarheid.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Automation</h3>
            <p className="mt-2 text-sm text-slate-600">Slim ingericht voor garage de groot met focus op conversie, snelheid en bereikbaarheid.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Lead System</h3>
            <p className="mt-2 text-sm text-slate-600">Slim ingericht voor garage de groot met focus op conversie, snelheid en bereikbaarheid.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
