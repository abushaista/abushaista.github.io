import { Globe, Mail, MapPin } from 'lucide-react';
import { ContactItem } from '../molecules/ContactItem';
import { profile } from '../../data/portfolio';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f8f9fa]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-black tracking-[-0.08em] text-slate-900">AH<span className="text-blue-600">.</span></a>
        <nav className="hidden items-center gap-7 text-xs font-medium text-slate-500 md:flex">
          <a href="#about" className="transition hover:text-slate-900">About</a>
          <a href="#experience" className="transition hover:text-slate-900">Experience</a>
          <a href="#skills" className="transition hover:text-slate-900">Skills</a>
          <a href="#projects" className="transition hover:text-slate-900">Projects</a>
          <a href="#education" className="transition hover:text-slate-900">Education</a>
        </nav>
        <a href={`mailto:${profile.email}`} className="rounded-md bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-600">Contact</a>
      </div>
      <div className="mx-auto hidden max-w-6xl items-center gap-4 px-6 pb-3 text-[11px] text-slate-500 md:flex">
        <ContactItem icon={MapPin}>{profile.location}</ContactItem>
        <ContactItem icon={Mail} href={`mailto:${profile.email}`}>{profile.email}</ContactItem>
        <ContactItem icon={Globe} href={profile.linkedin}>LinkedIn</ContactItem>
      </div>
    </header>
  );
}
