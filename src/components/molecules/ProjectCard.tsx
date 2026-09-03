import { Tag } from '../atoms/Tag';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../../data/portfolio';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col justify-between rounded-xl border border-slate-700 bg-slate-800 p-6">
      <div>
        <h3 className="mb-1 text-lg font-bold text-white">{project.title}</h3>
        <p className="mb-3 text-xs font-medium text-blue-400">{project.client}</p>
        <p className="text-sm text-slate-300">{project.description}</p>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
          >
            <ExternalLink className="h-4 w-4" />
            View on GitHub
          </a>
        )}
      </div>
      <div className="flex flex-wrap gap-1.5 border-t border-slate-700/50 pt-4">
        {project.tech.map((technology) => <Tag key={technology}>{technology}</Tag>)}
      </div>
    </article>
  );
}
