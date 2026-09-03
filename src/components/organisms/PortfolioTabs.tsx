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
    <section>
      <div className="flex border-b border-slate-700">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button key={id} onClick={() => setActiveTab(id)} className={`flex items-center gap-2 border-b-2 px-4 pb-3 font-medium transition ${activeTab === id ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-400 hover:text-slate-200'}`}>
            <Icon className="h-4 w-4" /> {label}
          </button>
        ))}
      </div>
      <div className={activeTab === 'experience' ? 'mt-6 space-y-6' : 'mt-6 grid grid-cols-1 gap-6 md:grid-cols-2'}>
        {activeTab === 'experience'
          ? experiences.map((experience) => <ExperienceCard key={`${experience.company}-${experience.role}`} experience={experience} />)
          : projects.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
    </section>
  );
}
