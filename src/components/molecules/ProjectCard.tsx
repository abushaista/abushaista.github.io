import { Tag } from '../atoms/Tag';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../../data/portfolio';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50">
      <div>
        <h3 className="mb-1 text-lg font-bold text-slate-900">{project.title}</h3>
        <p className="mb-3 text-xs font-medium text-blue-600">{project.client}</p>
        <p className="text-sm leading-relaxed text-slate-600">{project.description}</p>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition hover:text-blue-800"
          >
            <ExternalLink className="h-4 w-4" />
            View on GitHub
          </a>
        )}
      </div>
      <div className="mt-6 flex flex-wrap gap-1.5 border-t border-slate-200 pt-4">
        {project.tech.map((technology) => <Tag key={technology}>{technology}</Tag>)}
      </div>
    </article>
  );
}
