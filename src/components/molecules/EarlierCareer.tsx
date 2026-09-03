import { earlierCareer } from '../../data/portfolio';

export function EarlierCareer() {
  return (
    <article className="grid gap-6 border-y border-slate-200 py-10 md:grid-cols-[220px_1fr] md:gap-12">
      <p className="text-sm font-medium tracking-wide text-blue-600">{earlierCareer.period}</p>
      <div>
        <h3 className="text-2xl font-bold tracking-tight text-slate-900">{earlierCareer.title}</h3>
        <p className="mt-2 text-lg leading-relaxed text-slate-500">{earlierCareer.companies}</p>
        <p className="mt-7 max-w-5xl text-base leading-relaxed text-slate-800">{earlierCareer.summary}</p>
      </div>
    </article>
  );
}
