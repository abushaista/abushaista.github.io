import { Cloud, Code, Database, Layers } from 'lucide-react';
import { SectionTitle } from '../atoms/SectionTitle';
import { SkillCard } from '../molecules/SkillCard';
import { skills } from '../../data/portfolio';

export function SkillsSection() {
  return (
    <section id="skills">
      <div className="mb-6 flex items-end justify-between">
        <SectionTitle icon={Code} className="text-2xl font-bold">Technical Expertise</SectionTitle>
        <span className="hidden text-xs uppercase tracking-[0.2em] text-slate-400 md:block">01 / Capabilities</span>
      </div>
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-4">
        <SkillCard icon={Layers} title="Backend" skills={skills.backend} />
        <SkillCard icon={Database} title="Databases" skills={skills.databases} />
        <SkillCard icon={Cloud} title="Cloud & DevOps" skills={skills.cloud} />
        <SkillCard icon={Code} title="Architecture" skills={skills.architecture} />
      </div>
    </section>
  );
}
