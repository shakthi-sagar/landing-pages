function App() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_15%_15%,#3b2e7a_0,#100d26_40%,#06070f_80%)] text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-10 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between">
          <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs tracking-[0.18em] text-slate-200">
            SWIFTGPT
          </div>
          <a
            href="#"
            className="rounded-full border border-violet-300/40 bg-violet-300/10 px-4 py-2 text-sm text-violet-200 transition hover:bg-violet-300/20"
          >
            Download
          </a>
        </header>

        <section className="space-y-6">
          <p className="text-sm tracking-[0.2em] text-violet-200">AI MENUBAR APP</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
            Ask, write, and ship from your menu bar.
          </h1>
          <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
            SwiftGPT gives you quick AI workflows without opening full browser tabs or
            heavyweight desktop clients.
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
            <h2 className="mb-1 text-xl font-semibold">Fast prompts</h2>
            <p className="text-slate-300">Open and ask instantly from the menu bar.</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
            <h2 className="mb-1 text-xl font-semibold">Minimal UI</h2>
            <p className="text-slate-300">Focus on output, not tabs and panels.</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
            <h2 className="mb-1 text-xl font-semibold">Auto-updates</h2>
            <p className="text-slate-300">Sparkle-powered signed updates.</p>
          </article>
        </section>
      </div>
    </main>
  )
}

export default App
