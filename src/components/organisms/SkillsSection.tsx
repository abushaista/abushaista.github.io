import { Cloud, Code, Database, Layers } from 'lucide-react';
import { SectionTitle } from '../atoms/SectionTitle';
import { SkillCard } from '../molecules/SkillCard';
import { skills } from '../../data/portfolio';

export function SkillsSection() {
  return (
    <section>
      <SectionTitle icon={Code} className="mb-6 text-2xl font-bold">Technical Expertise</SectionTitle>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <SkillCard icon={Layers} title="Backend" skills={skills.backend} />
        <SkillCard icon={Database} title="Databases" skills={skills.databases} />
        <SkillCard icon={Cloud} title="Cloud & DevOps" skills={skills.cloud} />
        <SkillCard icon={Code} title="Architecture" skills={skills.architecture} />
      </div>
    </section>
  );
}
