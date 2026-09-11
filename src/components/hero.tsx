const Hero = () => {
    return (
        <section id="home" className="mx-auto max-w-[1080px] px-5 lg:px-0">
          <div className="grid min-h-[500px] items-center gap-10 py-16 md:grid-cols-[1.08fr_.92fr] md:py-20">
            <div>
              <h1 className="max-w-[620px] text-5xl font-extrabold leading-[1.03] tracking-[-.045em] sm:text-6xl">
                Build Your Ideal
                <span className="gradient-text block">Development Stack</span>
              </h1>
              <p className="mt-6 max-w-[570px] text-[15px] leading-7 text-slate-500">
                Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#technologies" className="rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95">Explore Technologies</a>
                <a href="#about" className="rounded-lg border border-slate-200 px-7 py-3 text-sm font-medium text-slate-600 hover:border-slate-300 hover:text-slate-900">Learn More</a>
              </div>
            </div>

            <div className="hero-orb relative flex h-[360px] items-center justify-center">
              <div className="stack-visual relative h-64 w-64">
                <div className="stack-layer absolute inset-10">
                  <div className="h-32 w-32 rounded-xl border border-cyan-300 bg-gradient-to-br from-cyan-400/80 via-blue-500/70 to-fuchsia-500/80 p-3">
                    <div className="grid h-full place-items-center rounded-lg border border-white/40 bg-slate-950/20 text-white">
                      <span className="text-4xl font-black">Aa</span>
                    </div>
                  </div>
                </div>
                <div className="stack-layer absolute inset-6 translate-y-12">
                  <div className="h-36 w-36 rounded-xl border border-fuchsia-300 bg-gradient-to-br from-fuchsia-400/80 via-violet-500/70 to-cyan-400/80 p-3">
                    <div className="grid h-full place-items-center rounded-lg border border-white/40 bg-slate-950/20 text-white">
                      <span className="text-2xl font-black">JS</span>
                    </div>
                  </div>
                </div>
                <div className="stack-layer absolute inset-2 translate-y-24">
                  <div className="h-40 w-40 rounded-xl border border-blue-300 bg-gradient-to-br from-blue-500/80 via-cyan-500/70 to-purple-500/80 p-3">
                    <div className="grid h-full place-items-center rounded-lg border border-white/40 bg-slate-950/20 text-white">
                      <div className="grid grid-cols-3 gap-2">
                        <i className="h-3 w-3 rounded-full bg-white/80"></i><i className="h-3 w-3 rounded-full bg-white/60"></i><i className="h-3 w-3 rounded-full bg-white/80"></i>
                        <i className="h-3 w-3 rounded-full bg-white/50"></i><i className="h-3 w-3 rounded-full bg-white/80"></i><i className="h-3 w-3 rounded-full bg-white/60"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

export default Hero;