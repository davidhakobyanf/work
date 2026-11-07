import Image from 'next/image';

const resume = 'https://davidhakobyanf.github.io/davidhakobyanf/';
const linkedIn = 'https://www.linkedin.com/in/davit-hakobyan-550568257/';
const gitHub = 'https://github.com/davidhakobyanf';
const gitLab = 'https://gitlab.com/davidhakobyanf';
const basePath = process.env.NEXT_PUBLIC_PORTFOLIO_BASE_PATH;

const projects = [
  {
    id: 'minitooly',
    name: 'MiniTooly',
    category: 'Independent project',
    site: 'minitooly.com',
    url: 'https://minitooly.com/',
    description: 'Free browser-based utilities for formatting JSON, converting files and experimenting with CSS. I built the platform and manage its deployment, performance and SEO.',
    tags: ['Full-stack', 'Linux', 'Nginx', 'CI/CD'],
  },
  {
    id: 'contour',
    name: 'Contour',
    category: 'Client project',
    site: 'contour.am',
    url: 'https://contour.am/',
    description: 'Built the multilingual site, REST API and custom admin panel for a metalworking company. Took the frontend, backend and admin from development to production.',
    tags: ['Next.js SSR', 'Express', 'Sequelize', 'MySQL'],
  },
  {
    id: 'bitbreeze',
    name: 'BitBreeze',
    category: 'Company website',
    site: 'bitbreeze.io',
    url: 'https://bitbreeze.io/',
    description: 'Built the company website with server-side rendering, a dynamic admin panel and a page builder for publishing new pages.',
    tags: ['SSR', 'Admin panel', 'Page builder'],
  },
  {
    id: 'avarayr',
    name: 'Avarayr',
    category: 'Travel website',
    site: 'avarayr.am',
    url: 'https://avarayr.am/en',
    description: 'Contributed frontend development at WebMaker Studio for an Armenian travel company’s public website.',
    tags: ['Frontend', 'WebMaker Studio'],
  },
  {
    id: 'look',
    name: 'Look.am',
    category: 'Client project',
    site: 'look.am',
    url: 'https://look.am/',
    description: 'Contributed to the frontend of Look.am, a site for discovering businesses in Armenia, at WebMaker Studio.',
    tags: ['Frontend', 'WebMaker Studio'],
  },
  {
    id: 'bah',
    name: 'BAH Logistics',
    category: 'Auto transport website',
    site: 'bahlogisticsusa.com',
    url: 'https://bahlogisticsusa.com/',
    description: 'Contributed frontend development at WebMaker Studio for a US auto transport company’s customer-facing website.',
    tags: ['Frontend', 'WebMaker Studio'],
  },
  {
    id: 'football',
    name: 'Football Live Stats',
    category: 'Real-time sports platform',
    site: 'socket.football.by',
    url: 'https://socket.football.by/stat/belarus',
    description: 'Built the frontend for a live football statistics platform and integrated real-time match updates over WebSockets.',
    tags: ['Frontend', 'WebSockets', 'Live data'],
  },
];

const experience = [
  {
    name: 'BitBreeze',
    role: 'Full-Stack Developer',
    dates: 'Nov 2025 – Present',
    details: 'Build NestJS microservices, integrate REST APIs and maintain production applications.',
  },
  {
    name: 'WebMaker Studio',
    role: 'Full-Stack Developer · Contract',
    dates: 'Oct 2025 – Present',
    details: 'Deliver Next.js and NestJS client applications, from feature development to production releases.',
  },
  {
    name: 'WebMaker Studio',
    role: 'Frontend Developer',
    dates: 'Jan 2025 – Oct 2025',
    details: 'Built responsive interfaces for e-commerce, corporate and logistics projects.',
  },
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '↓'}</span>;
}

function ProjectCard({ project, index }) {
  return (
    <article className={index === 0 ? 'project featured' : 'project'}>
      <a
        className="project-link"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.name} (opens in a new tab)`}
      >
        <div className={`preview preview-${project.id}`}>
          <div className="browser-frame">
            <div className="browser-bar" aria-hidden="true">
              <i /><i /><i /><span>{project.site}</span>
            </div>
            <Image
              src={`${basePath}/previews/${project.id}.webp`}
              alt=""
              width={1000}
              height={450}
              sizes={index === 0 ? '(max-width: 760px) 94vw, 660px' : '(max-width: 760px) 94vw, 560px'}
            />
          </div>
        </div>
        <div className="project-copy">
          <p className="eyebrow project-category"><span>{String(index + 1).padStart(2, '0')}</span> {project.category}</p>
          <h3>{project.name}</h3>
          <p className="project-description">{project.description}</p>
          <ul className="tags" aria-label="Technologies and role">
            {project.tags.map(tag => <li key={tag}>{tag}</li>)}
          </ul>
          <span className="project-action">Visit live site <Arrow diagonal /></span>
        </div>
      </a>
    </article>
  );
}

export default function Portfolio() {
  return (
    <>
      <a className="skip-link" href="#work">Skip to selected work</a>
      <header className="dark" id="top">
        <div className="wrap">
          <nav className="nav" aria-label="Main navigation">
            <a className="wordmark" href="#top"><span className="mark">D<span>.</span></span> Davit Hakobyan</a>
            <div className="nav-links">
              <a href="#work">Work</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </div>
            <a className="nav-resume" href={resume}>Résumé <Arrow diagonal /></a>
          </nav>
          <div className="hero">
            <div>
              <p className="eyebrow hero-kicker"><i /> Full-stack developer <span>·</span> Yerevan, Armenia</p>
              <h1>From interface<br />to <em>production.</em></h1>
              <p className="intro">I’m Davit Hakobyan. I build and ship web applications with TypeScript, from responsive interfaces and APIs to Linux deployments.</p>
              <div className="hero-actions">
                <a className="button button-accent" href="#work">Explore my work <Arrow /></a>
                <a className="button button-quiet" href={resume}>View résumé <Arrow diagonal /></a>
              </div>
            </div>
            <div className="architecture" aria-hidden="true">
              <p className="eyebrow diagram-title">A web app, end to end</p>
              <div className="layer"><small>01</small><div><strong>Interface</strong><span>Next.js · React · Vue</span></div><b>⟨/⟩</b></div>
              <div className="layer"><small>02</small><div><strong>API & data</strong><span>Node.js · NestJS · PostgreSQL</span></div><b>{'{ }'}</b></div>
              <div className="layer"><small>03</small><div><strong>Deployment</strong><span>Linux · Docker · Nginx</span></div><b>↗</b></div>
              <p className="eyebrow diagram-footer"><i /> Designed to ship</p>
            </div>
          </div>
          <div className="hero-footer eyebrow"><span>3+ years of commercial experience</span><a href="#work">07 live projects <Arrow /></a></div>
        </div>
      </header>

      <main>
        <section className="work wrap" id="work" aria-labelledby="work-title">
          <div className="section-head">
            <div>
              <p className="eyebrow section-label">01 / Portfolio</p>
              <h2 id="work-title">Selected work<span>.</span></h2>
            </div>
            <p>Independent and client projects. Each card links to the live site.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
          </div>
        </section>

        <section className="experience" id="experience" aria-labelledby="experience-title">
          <div className="wrap experience-grid">
            <div>
              <p className="eyebrow section-label">02 / Experience</p>
              <h2 id="experience-title">Recent roles<span>.</span></h2>
              <a className="text-link" href={resume}>View full résumé <Arrow diagonal /></a>
            </div>
            <ol className="role-list">
              {experience.map(job => (
                <li key={job.role + job.name}>
                  <p className="eyebrow dates">{job.dates}</p>
                  <h3>{job.name}</h3>
                  <p className="role-title">{job.role}</p>
                  <p>{job.details}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <footer className="dark contact" id="contact">
        <div className="wrap">
          <p className="eyebrow hero-kicker"><i /> 03 / Contact</p>
          <h2>Let’s talk<span>.</span></h2>
          <p>Get in touch on LinkedIn or find my contact details in the résumé.</p>
          <div className="contact-links">
            <a className="button button-accent" href={linkedIn}>LinkedIn <Arrow diagonal /></a>
            <a className="button button-quiet" href={resume}>Résumé <Arrow diagonal /></a>
            <a className="button button-quiet" href={gitHub}>GitHub <Arrow diagonal /></a>
            <a className="button button-quiet" href={gitLab}>GitLab <Arrow diagonal /></a>
          </div>
          <div className="hero-footer eyebrow"><span>Davit Hakobyan · Yerevan, Armenia</span><a href="#top">Back to top <span aria-hidden="true">↑</span></a></div>
        </div>
      </footer>
    </>
  );
}
