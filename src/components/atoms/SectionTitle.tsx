import type { LucideIcon } from 'lucide-react';

type SectionTitleProps = {
  icon: LucideIcon;
  children: string;
  className?: string;
};

export function SectionTitle({ icon: Icon, children, className = '' }: SectionTitleProps) {
  return (
    <h2 className={`flex items-center gap-2 text-xl font-semibold text-slate-900 ${className}`}>
      <Icon className="text-blue-600" />
      {children}
    </h2>
  );
}
