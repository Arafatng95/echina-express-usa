export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-black">
          Shipping From China to USA
        </h1>

        <p className="mt-6 text-xl text-slate-300">
          eChina Express helps businesses simplify sourcing,
          fulfillment, and cross-border shipping from China to the USA.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://echinaexpress.com/contact-us"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4 rounded-2xl bg-cyan-400 text-slate-900 font-bold"
          >
            Get a Shipping Quote
          </a>

          <a
            href="https://echinaexpress.com/services"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4 rounded-2xl border border-white/20"
          >
            Explore Services
          </a>
        </div>
      </div>
    </main>
  )
}
