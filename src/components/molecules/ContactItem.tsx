import type { LucideIcon } from 'lucide-react';

type ContactItemProps = {
  icon: LucideIcon;
  children: React.ReactNode;
  href?: string;
};

export function ContactItem({ icon: Icon, children, href }: ContactItemProps) {
  const content = (
    <>
      <Icon className="h-4 w-4 text-blue-400" />
      {children}
    </>
  );

  return href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="flex items-center gap-1.5 transition hover:text-white">
      {content}
    </a>
  ) : (
    <span className="flex items-center gap-1.5">{content}</span>
  );
}
