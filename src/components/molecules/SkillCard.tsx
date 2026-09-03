import type { LucideIcon } from 'lucide-react';

type SkillCardProps = {
  icon: LucideIcon;
  title: string;
  skills: string[];
};

export function SkillCard({ icon: Icon, title, skills }: SkillCardProps) {
  return (
    <div className="bg-[#f8f9fa] p-5 transition hover:bg-white">
      <h3 className="mb-3 flex items-center gap-2 font-semibold text-slate-900">
        <Icon className="h-4 w-4 text-blue-600" />
        {title}
      </h3>
      <ul className="space-y-1 text-sm text-slate-600">
        {skills.map((skill) => <li key={skill}>• {skill}</li>)}
      </ul>
    </div>
  );
}
