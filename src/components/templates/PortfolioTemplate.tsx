import { Cpu, GraduationCap } from 'lucide-react';
import { SectionTitle } from '../atoms/SectionTitle';
import { SiteHeader } from '../organisms/SiteHeader';
import { SkillsSection } from '../organisms/SkillsSection';
import { PortfolioTabs } from '../organisms/PortfolioTabs';
import { profile } from '../../data/portfolio';

export function PortfolioTemplate() {
  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-100">
      <SiteHeader />
      <main className="mx-auto max-w-6xl space-y-12 px-6 py-10">
        <section className="rounded-2xl border border-slate-700/50 bg-slate-800/50 p-6">
          <SectionTitle icon={Cpu} className="mb-3">Executive Summary</SectionTitle>
          <p className="leading-relaxed text-slate-300">{profile.summary}</p>
        </section>
        <SkillsSection />
        <PortfolioTabs />
        <section className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6">
          <SectionTitle icon={GraduationCap} className="mb-4">Education</SectionTitle>
          <h3 className="font-semibold text-slate-200">Bachelor&apos;s Degree in Information Technology (Informatics)</h3>
          <p className="text-sm text-slate-400">Universitas Islam Indonesia • 2001 - 2007</p>
          <p className="mt-1 text-sm text-slate-400">GPA: 3.0 / 4.0</p>
        </section>
      </main>
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Arif Hidayat. Built with React &amp; Vite.</p>
      </footer>
    </div>
  );
}
