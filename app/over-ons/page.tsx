import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-semibold text-white">Over Garage De Groot</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">Garage De Groot helpt klanten met kwaliteit en service.</p>
        <p className="mt-6 text-slate-300">Deze demo-site is automatisch gegenereerd op basis van de bedrijfsanalyse en laat zien hoe een moderne, snelle en conversiegerichte website eruit kan zien voor een automobielen en fietsen (oorspronkelijk 'garage' vermeld, maar website toont bredere focus).</p>
      </section>
      <Footer />
    </main>
  );
}
