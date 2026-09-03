import { useState } from 'react';
import { Briefcase, FolderGit2 } from 'lucide-react';
import { ExperienceCard } from '../molecules/ExperienceCard';
import { ProjectCard } from '../molecules/ProjectCard';
import { experiences, projects } from '../../data/portfolio';

export function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState<'experience' | 'projects'>('experience');
  const tabs = [
    { id: 'experience' as const, label: 'Work Experience', icon: Briefcase },
    { id: 'projects' as const, label: 'Highlighted Projects', icon: FolderGit2 },
  ];

  return (
    <section id="experience">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Selected work</h2>
        <span className="hidden text-xs uppercase tracking-[0.2em] text-slate-400 md:block">02 / Career</span>
      </div>
      <div id="projects" className="flex border-b border-slate-200">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button key={id} onClick={() => setActiveTab(id)} className={`mr-6 flex items-center gap-2 border-b-2 px-1 pb-3 text-sm font-semibold transition ${activeTab === id ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-400 hover:text-slate-700'}`}>
            <Icon className="h-4 w-4" /> {label}
          </button>
        ))}
      </div>
      <div className={activeTab === 'experience' ? 'mt-6 space-y-6' : 'mt-6 grid grid-cols-1 gap-6 md:grid-cols-2'}>
        {activeTab === 'experience'
          ? <><div className="space-y-6">{experiences.map((experience) => <ExperienceCard key={`${experience.company}-${experience.role}`} experience={experience} />)}</div></>
          : projects.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
    </section>
  );
}
