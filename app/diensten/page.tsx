import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl font-semibold">Aanbevolen diensten</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">Voor Garage De Groot adviseren we een combinatie van digitale groei, automatisering en betere klantinteractie.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
