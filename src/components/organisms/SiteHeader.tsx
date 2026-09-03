import { Globe, Mail, MapPin } from 'lucide-react';
import { ContactItem } from '../molecules/ContactItem';
import { profile } from '../../data/portfolio';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-700 bg-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">{profile.name}</h1>
          <p className="font-medium text-blue-400">Senior Software Engineer (13+ Years Experience)</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          <ContactItem icon={MapPin}>{profile.location}</ContactItem>
          <ContactItem icon={Mail} href={`mailto:${profile.email}`}>{profile.email}</ContactItem>
          <ContactItem icon={Globe} href={profile.linkedin}>LinkedIn</ContactItem>
        </div>
      </div>
    </header>
  );
}
