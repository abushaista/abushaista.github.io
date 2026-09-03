import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Code,
  Briefcase,
  GraduationCap,
  FolderGit2,
  ChevronRight,
  Database,
  Cloud,
  Cpu,
  Layers,
  Globe,
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('experience');

  const profile = {
    name: "ARIF HIDAYAT",
    location: "Bekasi, West Java",
    email: "Arif.sarbini@gmail.com",
    linkedin: "https://www.linkedin.com/in/arif-hidayat-55770628/",
    summary: "Senior Software Engineer with 13+ years of experience in backend and full-stack development. Expert in .NET / ASP.NET Core, Microservices, Cloud (Azure, GCP), SQL & NoSQL databases. Experience in DDD, Event Sourcing, System Integration, POS, payment, and government-scale systems."
  };

  const skills = {
    backend: [".NET / ASP.NET Core", "Node.js (NestJS, Expressjs)", "PHP (Laravel, CakePHP)"],
    frontend: ["Angular", "Vue.js"],
    mobile: ["Android (Java, Xamarin, Kotlin)"],
    databases: ["SQL Server", "MySQL", "PostgreSQL / PostGIS", "MongoDB", "Azure Cosmos DB"],
    integration: ["RabbitMQ", "REST API"],
    monitoring: ["Elasticsearch", "Datadog"],
    cloud: ["Azure", "Google Cloud Platform", "Docker"],
    architecture: ["Microservices", "Domain Driven Design (DDD)", "Event Sourcing"]
  };

  const experiences = [
    {
      period: "SEPTEMBER 2023 - PRESENT",
      role: "SENIOR FULLSTACK DEVELOPER",
      company: "PT QUALYSOFT CENTRE EXCELLENCE",
      details: [
        "Developed backend services for registration module of Indonesian Government Core Tax System using .NET.",
        "Implemented microservices architecture with Domain Driven Design (DDD) and applied event sourcing pattern.",
        "Designed and maintained RESTful APIs for registration, validation, and submission workflows.",
        "Developed Angular frontend modules for registration forms and step-based workflows.",
        "Implemented logging, monitoring, and observability using Elasticsearch."
      ]
    },
    {
      period: "FEBRUARY 2020 - MARCH 2024",
      role: "SENIOR BACKEND DEVELOPER",
      company: "TABSQUARE PTE, LTD",
      details: [
        "Developed backend services for mobile ordering applications using Laravel, CakePHP, and NestJS.",
        "Built middleware services integrating mobile applications with multiple POS systems.",
        "Integrated backend services with external payment providers and POS payment modules.",
        "Implemented asynchronous message-based integration using RabbitMQ.",
        "Implemented centralized logging and monitoring using Datadog."
      ]
    },
    {
      period: "DECEMBER 2020 - OCTOBER 2022",
      role: "SENIOR SOFTWARE DEVELOPER (TEAM LEAD)",
      company: "PT EDMI INDONESIA",
      details: [
        "Acted as team lead for development of smart metering configuration applications.",
        "Designed application architecture complying with DLMS/COSEM standards using .NET (C#).",
        "Implemented device communication using TCP Socket, COM Port, and Optical Probe.",
        "Developed data persistence using SQLite and SQL Server."
      ]
    },
    {
      period: "MARCH 2019 - FEBRUARY 2020",
      role: "SENIOR SOFTWARE DEVELOPER",
      company: "ASCENTIS PTE, LTD (ON BEHALF OF WONDERLABS)",
      details: [
        "Developed and maintained enterprise CRM applications using .NET technologies and SQL Server."
      ]
    },
    {
      period: "JANUARY 2017 - FEBRUARY 2019",
      role: "SENIOR SOFTWARE DEVELOPER",
      company: "FREEPORT MCMORAN INC (ON BEHALF OF PT KAMORO MAXIMA INTEGRA)",
      details: [
        "Developed and maintained internal enterprise applications supporting business operations using .NET and SQL Server."
      ]
    },
    {
      period: "FEBRUARY 2017 - DECEMBER 2017",
      role: "ANALYST PROGRAMMER",
      company: "PT MITRAIS",
      details: [
        "Conducted analysis of business requirements and evaluated low-code platforms."
      ]
    },
    {
      period: "SEPTEMBER 2015 - JANUARY 2017",
      role: "SENIOR DEVELOPER (SUPERVISOR)",
      company: "PT SALIM IVOMAS PRATAMA, TBK",
      details: [
        "Developed GIS-based web applications, Android mobile applications, and SAP integrations."
      ]
    }
  ];

  const projects = [
    {
      title: "CORETAX SYSTEM",
      client: "DIRECTORATE GENERAL OF TAX, INDONESIA",
      description: "National-scaled tax system supporting taxpayer registration and administration.",
      tech: [".NET", "Microservices", "DDD", "Event Sourcing", "RabbitMQ", "Elasticsearch", "Redis", "Docker", "Angular"]
    },
    {
      title: "SMARTKIOSK-API",
      client: "TABSQUARE PTE, LTD",
      description: "Backend platform supporting self-service kiosk ordering for restaurants with POS integration.",
      tech: ["NestJS", "MySQL", "Docker", "REST API", "GCP Pub/Sub", "Datadog"]
    },
    {
      title: "PAYMENT MANAGER",
      client: "TABSQUARE PTE, LTD",
      description: "Payment integration service supporting ECR2 standard for EDC-based transactions via TCP Socket.",
      tech: [".NET Framework 4.5", "C#", "TCP Socket", "ECR2", "EDC Payment"]
    },
    {
      title: "SMART METER CONFIGURATION TOOL",
      client: "PT EDMI INDONESIA",
      description: "Desktop configuration tool for smart electricity metering devices compliant with DLMS/COSEM standard.",
      tech: ["Windows Forms", "C#", "Entity Framework", ".NET 5", "SQLite", "DLMS/COSEM"]
    },
    {
      title: "TOTAL REWARDS",
      client: "FREEPORT MCMORAN INC",
      description: "Enterprise HR portal for managing employee benefits integrated with SAP via OData services.",
      tech: [".NET MVC", "Azure App Service", "Azure Identity", "MS SQL Server", "Redis", "SAP OData"]
    },
    {
      title: "GIS INTEGRATED SYSTEM",
      client: "PT SALIM IVOMAS TBK",
      description: "Web-based GIS platform for monitoring fire hotspots, plantation assets, and product distribution.",
      tech: ["ASP.NET MVC", "Leaflet.js", "ArcGIS Server", "PostGIS"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Header / Hero */}
      <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">{profile.name}</h1>
            <p className="text-blue-400 font-medium">Senior Software Engineer (13+ Years Experience)</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-blue-400" /> {profile.location}</span>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 hover:text-white transition"><Mail className="w-4 h-4 text-blue-400" /> {profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition"><Globe className="w-4 h-4 text-blue-400" /> LinkedIn</a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-10 space-y-12">
        {/* About Section */}
        <section className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
          <h2 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
            <Cpu className="text-blue-400" /> Executive Summary
          </h2>
          <p className="text-slate-300 leading-relaxed">{profile.summary}</p>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Code className="text-blue-400" /> Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
              <h3 className="font-semibold text-blue-400 mb-3 flex items-center gap-2"><Layers className="w-4 h-4" /> Backend</h3>
              <ul className="space-y-1 text-sm text-slate-300">
                {skills.backend.map((s, i) => <li key={i}>• {s}</li>)}
              </ul>
            </div>
            <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
              <h3 className="font-semibold text-blue-400 mb-3 flex items-center gap-2"><Database className="w-4 h-4" /> Databases</h3>
              <ul className="space-y-1 text-sm text-slate-300">
                {skills.databases.map((s, i) => <li key={i}>• {s}</li>)}
              </ul>
            </div>
            <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
              <h3 className="font-semibold text-blue-400 mb-3 flex items-center gap-2"><Cloud className="w-4 h-4" /> Cloud & DevOps</h3>
              <ul className="space-y-1 text-sm text-slate-300">
                {skills.cloud.map((s, i) => <li key={i}>• {s}</li>)}
              </ul>
            </div>
            <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
              <h3 className="font-semibold text-blue-400 mb-3 flex items-center gap-2"><Code className="w-4 h-4" /> Architecture</h3>
              <ul className="space-y-1 text-sm text-slate-300">
                {skills.architecture.map((s, i) => <li key={i}>• {s}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-700">
          <button
            onClick={() => setActiveTab('experience')}
            className={`pb-3 px-4 font-medium flex items-center gap-2 border-b-2 transition ${activeTab === 'experience' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
          >
            <Briefcase className="w-4 h-4" /> Work Experience
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`pb-3 px-4 font-medium flex items-center gap-2 border-b-2 transition ${activeTab === 'projects' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
          >
            <FolderGit2 className="w-4 h-4" /> Highlighted Projects
          </button>
        </div>

        {/* Tab Contents */}
        {activeTab === 'experience' && (
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-slate-800 p-6 rounded-xl border border-slate-700/80 hover:border-slate-600 transition">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-blue-950 text-blue-300 rounded-full w-fit mt-1 md:mt-0">{exp.period}</span>
                </div>
                <h4 className="text-sm font-medium text-slate-400 mb-4">{exp.company}</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  {exp.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{proj.title}</h3>
                  <p className="text-xs font-medium text-blue-400 mb-3">{proj.client}</p>
                  <p className="text-sm text-slate-300 mb-4">{proj.description}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-700/50">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 bg-slate-700 text-slate-300 rounded">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education Section */}
        <section className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <GraduationCap className="text-blue-400" /> Education
          </h2>
          <div>
            <h3 className="font-semibold text-slate-200">Bachelor's Degree in Information Technology (Informatics)</h3>
            <p className="text-sm text-slate-400">Universitas Islam Indonesia • 2001 - 2007</p>
            <p className="text-sm text-slate-400 mt-1">GPA: 3.0 / 4.0</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 text-center py-6 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Arif Hidayat. Built with React & Vite.</p>
      </footer>
    </div>
  );
}