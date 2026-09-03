import { ArrowUpRight, GraduationCap } from 'lucide-react';
import { SectionTitle } from '../atoms/SectionTitle';
import { SiteHeader } from '../organisms/SiteHeader';
import { SkillsSection } from '../organisms/SkillsSection';
import { PortfolioTabs } from '../organisms/PortfolioTabs';
import { profile } from '../../data/portfolio';

export function PortfolioTemplate() {
  return (
    <div id="top" className="min-h-screen bg-[#f8f9fa] font-sans text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6">
        <section id="about" className="grid min-h-[580px] items-center gap-12 border-b border-slate-200 py-20 md:grid-cols-[1fr_280px]">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-600">Senior Software Engineer</p>
            <h1 className="max-w-3xl text-7xl font-black leading-[0.86] tracking-[-0.08em] text-slate-900 sm:text-8xl">
              Arif<br /><span className="text-slate-400">Hidayat</span>
            </h1>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-slate-600">{profile.summary}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#experience" className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-5 py-3 text-xs font-semibold text-white transition hover:bg-blue-600">View experience <ArrowUpRight className="h-4 w-4" /></a>
              <a href={`mailto:${profile.email}`} className="rounded-md border border-slate-200 bg-white px-5 py-3 text-xs font-semibold text-slate-700 transition hover:border-slate-400">Get in touch</a>
            </div>
          </div>
          <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">AH</div>
            <p className="mt-5 text-sm font-bold">Senior Software Engineer</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">Backend &amp; Full-Stack Development</p>
            <div className="my-5 border-t border-slate-100" />
            <p className="text-xs text-slate-500">{profile.location}</p>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-blue-600">LinkedIn <ArrowUpRight className="h-3 w-3" /></a>
          </aside>
        </section>
        <section className="grid gap-10 border-b border-slate-200 py-20 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-600">Profile</p>
            <h2 className="max-w-md text-4xl font-bold leading-tight tracking-[-0.06em]">Building reliable enterprise software</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <p className="text-sm leading-relaxed text-slate-600">I work across backend and full-stack engineering, with experience building enterprise applications, microservices, integrations, payment systems, smart-metering software, GIS applications, and government-scale systems.</p>
            <div className="grid grid-cols-2 gap-5 text-sm">
              <div><strong className="text-xl">16+</strong><span className="mt-1 block text-[10px] text-slate-400">Years experience</span></div>
              <div><strong className="text-xl">.NET</strong><span className="mt-1 block text-[10px] text-slate-400">Primary backend</span></div>
              <div><strong className="text-xl">DDD</strong><span className="mt-1 block text-[10px] text-slate-400">Architecture</span></div>
              <div><strong className="text-xl">Cloud</strong><span className="mt-1 block text-[10px] text-slate-400">Azure &amp; GCP</span></div>
            </div>
          </div>
        </section>
        <div className="space-y-20 py-20">
          <SkillsSection />
          <PortfolioTabs />
          <section id="education" className="border-t border-slate-200 pt-8">
            <SectionTitle icon={GraduationCap} className="mb-6 text-2xl font-bold">Education</SectionTitle>
            <h3 className="font-semibold text-slate-900">Bachelor&apos;s Degree in Information Technology (Informatics)</h3>
            <p className="mt-1 text-sm text-slate-500">Universitas Islam Indonesia • 2001 - 2007 • GPA: 3.0 / 4.0</p>
          </section>
        </div>
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-400">© {new Date().getFullYear()} Arif Hidayat. Built with React &amp; Vite.</footer>
    </div>
  );
}
