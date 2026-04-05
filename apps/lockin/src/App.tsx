function App() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_85%_10%,#2f4f2f_0,#0c1a0f_40%,#05080a_80%)] text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-10 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between">
          <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs tracking-[0.18em] text-slate-200">
            LOCKIN
          </div>
          <a
            href="#"
            className="rounded-full border border-emerald-300/40 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-200 transition hover:bg-emerald-300/20"
          >
            Download
          </a>
        </header>

        <section className="space-y-6">
          <p className="text-sm tracking-[0.2em] text-emerald-200">FOCUS COMPANION</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
            Protect your deep work blocks.
          </h1>
          <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
            LockIn helps you define focused sessions, limit distractions, and maintain
            momentum throughout your day.
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
            <h2 className="mb-1 text-xl font-semibold">Session timer</h2>
            <p className="text-slate-300">Start clear blocks with fixed intent.</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
            <h2 className="mb-1 text-xl font-semibold">Distraction control</h2>
            <p className="text-slate-300">Reduce app and site hopping.</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
            <h2 className="mb-1 text-xl font-semibold">Native feel</h2>
            <p className="text-slate-300">Built as a lightweight macOS app.</p>
          </article>
        </section>
      </div>
    </main>
  )
}

export default App
