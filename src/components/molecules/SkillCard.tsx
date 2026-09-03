import type { LucideIcon } from 'lucide-react';

type SkillCardProps = {
  icon: LucideIcon;
  title: string;
  skills: string[];
};

export function SkillCard({ icon: Icon, title, skills }: SkillCardProps) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 p-5">
      <h3 className="mb-3 flex items-center gap-2 font-semibold text-blue-400">
        <Icon className="h-4 w-4" />
        {title}
      </h3>
      <ul className="space-y-1 text-sm text-slate-300">
        {skills.map((skill) => <li key={skill}>• {skill}</li>)}
      </ul>
    </div>
  );
}
