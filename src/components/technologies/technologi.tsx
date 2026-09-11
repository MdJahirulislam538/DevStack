import React from 'react';
import type { Technology } from '../type';

export interface TechnologiesProps {
  technologiesPromise: Promise<Technology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const [technologies, setTechnologies] = React.useState<Technology[]>([]);
  const [selectedTech, setSelectedTech] = React.useState<string[]>([]);

  React.useEffect(() => {
    let mounted = true;

    technologiesPromise.then((data) => {
      if (mounted) {
        setTechnologies(data);
      }
    });

    return () => {
      mounted = false;
    };
  }, [technologiesPromise]);

  const toggleTech = (name: string) => {
    setSelectedTech((current) =>
      current.includes(name)
        ? current.filter((tech) => tech !== name)
        : [...current, name],
    );
  };

    function getTechIcon(techName: string): string | undefined {
        const tech = technologies.find((t) => t.name === techName);
        return tech ? tech.icon : undefined;
    }

  return (
    <section id="technologies" className="border-t border-slate-100">
      <div className="mx-auto max-w-[1080px] px-5 py-16 lg:px-0 lg:py-20">
        <div className="mb-9">
          <h2 className="text-3xl font-extrabold tracking-[-.035em] sm:text-4xl">
            Explore the <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-2 text-sm text-slate-500">Pick one technology per category to build your ideal stack.</p>
        </div>

        <div className="grid items-start gap-5 lg:grid-cols-[1fr_250px]">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((tech) => (
              <article key={tech.id} className={`tech-card rounded-xl border bg-white p-4 shadow-soft ${
                  selectedTech.includes(tech.name) ? 'border-pink-300 ring-1 ring-pink-100' : 'border-slate-200'
                }`}>
                <div className="flex items-center justify-between">
                  <div className={`grid h-8 w-8 place-items-center text-lg font-black `}>
                    <img src={tech.icon} alt={tech.name} className="h-8 w-8 object-contain" />
                  </div>
                  {tech.badge ? (
                    <span className="rounded-full bg-slate-50 px-2 py-1 text-[9px] font-semibold text-slate-500">
                      {tech.badge}
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-3 text-sm font-bold">{tech.name}</h3>
                <p className="mt-2 min-h-13 text-[10.5px] leading-5 text-slate-400">{tech.description}</p>

                <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 text-[9px]">
                  <span className="rounded bg-slate-50 px-2 py-1 font-medium text-slate-500">{tech.category}</span>
                  <span className="font-semibold text-amber-500">★ {tech.rating}</span>
                </div>

                <button onClick={() => toggleTech(tech.name)} className="mt-3 w-full rounded-lg bg-slate-950 py-2.5 text-[10px] font-semibold text-white transition hover:bg-slate-800">
                  {selectedTech.includes(tech.name) ? 'Remove from Stack' : 'Add to Stack'}
                </button>
              </article>
            ))}
          </div>

          <aside className="rounded-xl border border-slate-200 bg-white p-4 shadow-soft lg:sticky lg:top-24">
            <h3 className="text-sm font-bold">Your Stack</h3>
            <p id="stackCount" className="mt-1 text-[11px] text-slate-400">
              {selectedTech.length} Technologies Selected
            </p>
            <div id="stackList" className="mt-3 space-y-2">
              {selectedTech.length === 0 ? (
                <p className="text-[11px] text-slate-400">No technologies selected yet.</p>
              ) : (
                selectedTech.map((techName) => (
                  <div key={techName} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] text-slate-600">
                    <img src={getTechIcon(techName)} alt={techName} className="h-6 w-6 object-contain" /> 
                    <span>{techName}</span>
                    <button onClick={() => toggleTech(techName)} className="ml-auto text-xs font-semibold text-red-500 hover:text-red-600">
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>
            <button
              onClick={() => setSelectedTech([])}
              className="mt-4 w-full rounded-lg border border-red-200 py-2.5 text-xs font-semibold text-red-500 hover:bg-red-50"
            >
              Remove All
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Technologies;