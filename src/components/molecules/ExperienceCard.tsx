import { ChevronRight } from 'lucide-react';
import type { Experience } from '../../data/portfolio';

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="rounded-xl border border-slate-700/80 bg-slate-800 p-6 transition hover:border-slate-600">
      <div className="mb-2 flex flex-col justify-between md:flex-row md:items-center">
        <h3 className="text-lg font-bold text-white">{experience.role}</h3>
        <span className="mt-1 w-fit rounded-full bg-blue-950 px-2.5 py-1 text-xs font-semibold text-blue-300 md:mt-0">{experience.period}</span>
      </div>
      <h4 className="mb-4 text-sm font-medium text-slate-400">{experience.company}</h4>
      <ul className="space-y-2 text-sm text-slate-300">
        {experience.details.map((detail) => (
          <li key={detail} className="flex items-start gap-2">
            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
