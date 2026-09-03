import { ChevronRight } from 'lucide-react';
import type { Experience } from '../../data/portfolio';

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="border-b border-slate-200 py-7 first:pt-0">
      <div className="mb-2 flex flex-col justify-between md:flex-row md:items-center">
        <h3 className="text-lg font-bold text-slate-900">{experience.role}</h3>
        <span className="mt-1 w-fit text-[11px] font-semibold uppercase tracking-wider text-blue-600 md:mt-0">{experience.period}</span>
      </div>
      <h4 className="mb-4 text-sm font-medium text-slate-500">{experience.company}</h4>
      <ul className="space-y-2 text-sm leading-relaxed text-slate-600">
        {experience.details.map((detail) => (
          <li key={detail} className="flex items-start gap-2">
            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
