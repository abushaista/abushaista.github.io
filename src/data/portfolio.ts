export type Experience = {
  period: string;
  role: string;
  company: string;
  details: string[];
};

export type Project = {
  title: string;
  client: string;
  description: string;
  tech: string[];
  github?: string;
};

export const profile = {
  name: 'ARIF HIDAYAT',
  location: 'Bekasi, West Java',
  email: 'Arif.sarbini@gmail.com',
  linkedin: 'https://www.linkedin.com/in/arif-hidayat-55770628/',
  summary:
    'Senior Software Engineer with 16+ years of experience in backend and full-stack development. Expert in .NET / ASP.NET Core, Microservices, Cloud (Azure, GCP), SQL & NoSQL databases. Experience in DDD, Event Sourcing, System Integration, POS, payment, and government-scale systems.',
};

export const skills = {
  backend: ['.NET / ASP.NET Core', 'Go', 'Kotlin', 'Node.js (NestJS, Expressjs)', 'PHP (Laravel, CakePHP)'],
  databases: ['SQL Server', 'MySQL', 'PostgreSQL / PostGIS', 'Tibero', 'MongoDB', 'Azure Cosmos DB'],
  cloud: ['Azure', 'Google Cloud Platform', 'AWS', 'Docker'],
  architecture: ['Microservices', 'Domain Driven Design (DDD)', 'Event Sourcing'],
};

export const experiences: Experience[] = [
  {
    period: 'SEPTEMBER 2023 - SEPTEMBER 2026',
    role: 'SENIOR FULLSTACK DEVELOPER',
    company: 'PT QUALYSOFT CENTRE EXCELLENCE',
    details: [
      'Developed backend services for registration module of Indonesian Government Core Tax System using .NET.',
      'Implemented microservices architecture with Domain Driven Design (DDD) and applied event sourcing pattern.',
      'Designed and maintained RESTful APIs for registration, validation, and submission workflows.',
      'Developed Angular frontend modules for registration forms and step-based workflows.',
      'Implemented logging, monitoring, and observability using Elasticsearch.',
    ],
  },
  {
    period: 'FEBRUARY 2020 - MARCH 2024',
    role: 'SENIOR BACKEND DEVELOPER',
    company: 'TABSQUARE PTE, LTD',
    details: [
      'Developed backend services for mobile ordering applications using Laravel, CakePHP, and NestJS.',
      'Built middleware services integrating mobile applications with multiple POS systems.',
      'Integrated backend services with external payment providers and POS payment modules.',
      'Implemented asynchronous message-based integration using RabbitMQ.',
      'Implemented centralized logging and monitoring using Datadog.',
    ],
  },
  {
    period: 'DECEMBER 2020 - OCTOBER 2022',
    role: 'SENIOR SOFTWARE DEVELOPER (TEAM LEAD)',
    company: 'PT EDMI INDONESIA',
    details: [
      'Acted as team lead for development of smart metering configuration applications.',
      'Designed application architecture complying with DLMS/COSEM standards using .NET (C#).',
      'Implemented device communication using TCP Socket, COM Port, and Optical Probe.',
      'Developed data persistence using SQLite and SQL Server.',
    ],
  },
  {
    period: 'MARCH 2019 - FEBRUARY 2020',
    role: 'SENIOR SOFTWARE DEVELOPER',
    company: 'ASCENTIS PTE, LTD (ON BEHALF OF WONDERLABS)',
    details: ['Developed and maintained enterprise CRM applications using .NET technologies and SQL Server.'],
  },
  {
    period: 'JANUARY 2017 - FEBRUARY 2019',
    role: 'SENIOR SOFTWARE DEVELOPER',
    company: 'FREEPORT MCMORAN INC (ON BEHALF OF PT KAMORO MAXIMA INTEGRA)',
    details: ['Developed and maintained internal enterprise applications supporting business operations using .NET and SQL Server.'],
  },
  {
    period: 'FEBRUARY 2017 - DECEMBER 2017',
    role: 'ANALYST PROGRAMMER',
    company: 'PT MITRAIS',
    details: ['Conducted analysis of business requirements and evaluated low-code platforms.'],
  },
  {
    period: 'SEPTEMBER 2015 - JANUARY 2017',
    role: 'SENIOR DEVELOPER (SUPERVISOR)',
    company: 'PT SALIM IVOMAS PRATAMA, TBK',
    details: ['Developed GIS-based web applications, Android mobile applications, and SAP integrations.'],
  },
];

export const projects: Project[] = [
  {
    title: 'OAUTH-GO',
    client: 'OPEN SOURCE PROJECT',
    description: 'Production-ready OAuth 2.1 and OpenID Connect authorization server built with Go, Clean Architecture, and CQRS.',
    tech: ['Go', 'OAuth 2.1', 'OpenID Connect', 'PKCE', 'JWT / RS256', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/abushaista/oauth-go',
  },
  {
    title: 'CORETAX SYSTEM',
    client: 'DIRECTORATE GENERAL OF TAX, INDONESIA',
    description: 'National-scaled tax system supporting taxpayer registration and administration.',
    tech: ['.NET', 'Microservices', 'DDD', 'Event Sourcing', 'RabbitMQ', 'Elasticsearch', 'Redis', 'Tibero', 'Docker', 'Angular'],
  },
  {
    title: 'SMARTKIOSK-API',
    client: 'TABSQUARE PTE, LTD',
    description: 'Backend platform supporting self-service kiosk ordering for restaurants with POS integration.',
    tech: ['NestJS', 'MySQL', 'Docker', 'REST API', 'GCP Pub/Sub', 'Datadog'],
  },
  {
    title: 'PAYMENT MANAGER',
    client: 'TABSQUARE PTE, LTD',
    description: 'Payment integration service supporting ECR2 standard for EDC-based transactions via TCP Socket.',
    tech: ['.NET Framework 4.5', 'C#', 'TCP Socket', 'ECR2', 'EDC Payment'],
  },
  {
    title: 'SMART METER CONFIGURATION TOOL',
    client: 'PT EDMI INDONESIA',
    description: 'Desktop configuration tool for smart electricity metering devices compliant with DLMS/COSEM standard.',
    tech: ['Windows Forms', 'C#', 'Entity Framework', '.NET 5', 'SQLite', 'DLMS/COSEM'],
  },
  {
    title: 'TOTAL REWARDS',
    client: 'FREEPORT MCMORAN INC',
    description: 'Enterprise HR portal for managing employee benefits integrated with SAP via OData services.',
    tech: ['.NET MVC', 'Azure App Service', 'Azure Identity', 'MS SQL Server', 'Redis', 'SAP OData'],
  },
  {
    title: 'GIS INTEGRATED SYSTEM',
    client: 'PT SALIM IVOMAS TBK',
    description: 'Web-based GIS platform for monitoring fire hotspots, plantation assets, and product distribution.',
    tech: ['ASP.NET MVC', 'Leaflet.js', 'ArcGIS Server', 'PostGIS'],
  },
];
