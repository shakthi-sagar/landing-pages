function App() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#18446d_0,#0a0f1d_35%,#05070d_75%)] text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-10 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between">
          <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs tracking-[0.18em] text-slate-200">
            QUICKPEEK
          </div>
          <a
            href="#"
            className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200 transition hover:bg-cyan-300/20"
          >
            Download
          </a>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-6">
            <p className="text-sm tracking-[0.2em] text-cyan-200">MENUBAR BROWSER</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
              Browse any site in one keystroke.
            </h1>
            <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
              QuickPeek opens your most-used web tools instantly from the menu bar.
              No tab chaos, no context switching.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
                Buy QuickPeek
              </button>
              <button className="rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/15">
                View Changelog
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-[0_30px_80px_-30px_rgba(34,211,238,0.35)] backdrop-blur">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-cyan-200">Highlights</p>
            <ul className="space-y-2 text-slate-200">
              <li>Launch from menu bar</li>
              <li>Tabbed mini browser</li>
              <li>Sparkle auto updates</li>
              <li>Native macOS app</li>
            </ul>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
            <h2 className="mb-1 text-xl font-semibold">Instant</h2>
            <p className="text-slate-300">Hotkey to open in under a second.</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
            <h2 className="mb-1 text-xl font-semibold">Focused</h2>
            <p className="text-slate-300">Your apps, not a full browser mess.</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
            <h2 className="mb-1 text-xl font-semibold">Reliable</h2>
            <p className="text-slate-300">Signed, notarized, and auto-updating.</p>
          </article>
        </section>

        <footer className="border-t border-white/10 pt-6 text-sm text-slate-300">
          Part of the Shakthi Sagar product suite: QuickPeek, SwiftGPT, LockIn, ToolBento.
        </footer>
      </div>
    </main>
  )
}

export default App
