export const basePath = process.env.NEXT_PUBLIC_PORTFOLIO_BASE_PATH ?? '';

export const links = {
  resume: 'https://davidhakobyanf.github.io/davidhakobyanf/',
  linkedIn: 'https://www.linkedin.com/in/davit-hakobyan-550568257/',
  gitHub: 'https://github.com/davidhakobyanf',
  gitLab: 'https://gitlab.com/davidhakobyanf',
  email: 'hakobyan.david2003@gmail.com',
  phone: '+374 55 641 670',
  phoneHref: 'tel:+37455641670',
};

export const projects = [
  {
    id: 'minitooly',
    name: 'MiniTooly',
    category: 'Personal product',
    featured: true,
    site: 'minitooly.com',
    url: 'https://minitooly.com/',
    summary: 'A multilingual toolbox for everyday developer and document tasks.',
    contribution: 'I built the platform and its utilities, set up the Sanity Studio admin, and automated blog publishing.',
    implementation: 'Next.js App Router generates localized tool pages. The CSV tool processes files in a browser Web Worker. An n8n workflow takes an English topic, prepares articles in 10 languages and generates covers, then publishes the posts to Sanity and triggers a Vercel build.',
    stack: ['Next.js', 'TypeScript', 'Sanity Studio', 'n8n', 'Web Workers'],
  },
  {
    id: 'contour',
    name: 'Contour',
    category: 'Full-stack · Client project',
    featured: true,
    site: 'contour.am',
    url: 'https://contour.am/',
    summary: 'A multilingual product and services catalog for a metalworking company.',
    contribution: 'I built the public site, API and custom admin panel and took them to production.',
    implementation: 'The Next.js site renders localized product and service pages from an Express REST API backed by MySQL. The EJS admin panel lets staff edit the catalog, sliders and galleries. Product uploads are converted to WebP.',
    stack: ['Next.js', 'Express', 'MySQL', 'Sequelize', 'EJS'],
  },
  {
    id: 'bitbreeze',
    name: 'BitBreeze',
    category: 'Company website',
    featured: true,
    site: 'bitbreeze.io',
    url: 'https://bitbreeze.io/',
    summary: 'A marketing site for a software development company, with services and case studies.',
    contribution: 'I built the company site, its admin panel and the page builder.',
    implementation: 'The public pages are server-rendered. The page builder gives the team a way to create new pages from the admin panel.',
    stack: ['Server-side rendering', 'Admin panel', 'Page builder'],
  },
  {
    id: 'avarayr',
    name: 'Avarayr',
    category: 'Frontend · WebMaker Studio',
    site: 'avarayr.am',
    url: 'https://avarayr.am/en',
    summary: 'Multilingual travel site for tours and itineraries. I worked on the multi-country tour listing, footer navigation and social links.',
    stack: ['Next.js', 'TypeScript', 'REST API'],
  },
  {
    id: 'look',
    name: 'Look.am',
    category: 'Frontend · WebMaker Studio',
    site: 'look.am',
    url: 'https://look.am/',
    summary: 'Directory of companies and specialists in Armenia. Search results, company cards, localized metadata and payment screens.',
    stack: ['Next.js', 'TypeScript', 'next-intl'],
  },
  {
    id: 'bah',
    name: 'BAH Logistics',
    category: 'Frontend · WebMaker Studio',
    site: 'bahlogisticsusa.com',
    url: 'https://bahlogisticsusa.com/',
    summary: 'Vehicle shipping site with quotes and tracking. City-page heroes, sitemap city URLs, legacy redirects and Open Graph.',
    stack: ['Next.js', 'React', 'REST API'],
  },
  {
    id: 'football',
    name: 'Football.by Match Center',
    category: 'Real-time frontend',
    live: true,
    site: 'football.by',
    url: 'https://socket.football.by/stat/belarus',
    summary: 'Schedules, results and live match events. I built the frontend and wired up the live feed over Socket.IO.',
    stack: ['Next.js', 'TypeScript', 'Socket.IO'],
  },
];

export const experience = [
  { company: 'BitBreeze', role: 'Full-Stack Developer', from: 'Nov 2025', to: null, details: 'Developing NestJS microservices, integrating REST APIs and maintaining production web apps.' },
  { company: 'WebMaker Studio', role: 'Full-Stack Developer · Contract', from: 'Oct 2025', to: null, details: 'Building and releasing client applications with Next.js and NestJS.' },
  { company: 'WebMaker Studio', role: 'Frontend Developer', from: 'Jan 2025', to: 'Oct 2025', details: 'Responsive interfaces for e-commerce, corporate and logistics clients.' },
  { company: 'MyToy', role: 'Frontend Developer', from: 'Aug 2024', to: 'Aug 2025', details: 'Mobile-first catalog and checkout flows for a retail storefront, integrated with the API.' },
  { company: 'Bever Systems', role: 'Software Developer Intern', from: 'Aug 2024', to: 'Oct 2024', details: 'JavaScript and C# plugins, workflows and CRM customizations for Microsoft Dynamics 365.' },
  { company: 'Tricolorpic', role: 'Frontend Developer · Remote', from: 'Apr 2023', to: 'Mar 2024', details: 'React interfaces for the client, admin and studio portals of a wedding services platform.' },
];

export const stack = [
  { group: 'languages', items: ['TypeScript', 'JavaScript (ES6+)'] },
  { group: 'frontend', items: ['React · Next.js', 'Vue.js', 'Redux Toolkit', 'Tailwind · SCSS'] },
  { group: 'backend', items: ['Node.js', 'NestJS', 'Express.js', 'REST · WebSockets'] },
  { group: 'databases & orm', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma · Sequelize (ORM)'] },
  { group: 'devops', items: ['Docker · Nginx', 'Linux · PM2', 'CI/CD', 'Git · GitHub · GitLab'] },
];

export const languages = [
  { name: 'Armenian', level: 'Native' },
  { name: 'Russian', level: 'Professional' },
  { name: 'English', level: 'B1' },
];
