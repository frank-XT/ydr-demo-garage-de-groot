import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { CtaButton } from "../../components/cta-button";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-semibold text-white">Neem contact op</h1>
          <p className="mt-4 text-lg text-slate-300">Plan een gesprek over een nieuwe website, AI-chatbot of automatisering voor Garage De Groot.</p>
          <div className="mt-8 space-y-3 text-slate-300">
            <p><span className="font-medium text-white">E-mail:</span> info@garagedegroot.nl</p>
            <p><span className="font-medium text-white">Telefoon:</span> 020-1234567</p>
            <p><span className="font-medium text-white">Website:</span> https://www.halfords.nl</p>
          </div>
        </div>
        <form className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="grid gap-4">
            <input className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="Naam" />
            <input className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="E-mail" />
            <textarea className="min-h-40 rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="Vertel kort waar je hulp bij wilt" />
            <CtaButton href="mailto:info@garagedegroot.nl">Verstuur aanvraag</CtaButton>
          </div>
        </form>
      </section>
      <Footer />
    </main>
  );
}
