function App() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_80%_20%,#7a341c_0,#2b120a_40%,#080606_80%)] text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-10 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between">
          <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs tracking-[0.18em] text-slate-200">
            TOOLBENTO
          </div>
          <a
            href="#"
            className="rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-2 text-sm text-amber-200 transition hover:bg-amber-300/20"
          >
            Download
          </a>
        </header>

        <section className="space-y-6">
          <p className="text-sm tracking-[0.2em] text-amber-200">DEVELOPER UTILITY SUITE</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
            Essential tools in one desktop workspace.
          </h1>
          <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
            ToolBento bundles JSON, Base64, regex, hashes, timestamps, and more into one
            fast native utility app.
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
            <h2 className="mb-1 text-xl font-semibold">All-in-one</h2>
            <p className="text-slate-300">Core utility tools without tab clutter.</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
            <h2 className="mb-1 text-xl font-semibold">Offline-ready</h2>
            <p className="text-slate-300">Use tools even without internet dependencies.</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
            <h2 className="mb-1 text-xl font-semibold">Power-user flow</h2>
            <p className="text-slate-300">Optimized for repeat daily workflows.</p>
          </article>
        </section>
      </div>
    </main>
  )
}

export default App
