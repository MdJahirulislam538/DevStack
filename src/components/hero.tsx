import banner from "../assets/banner-stack.png";

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
              <img src={banner} alt="Banner Stack" className="h-full w-full object-contain" />
            </div>
          </div>
        </section>
    );
};

export default Hero;