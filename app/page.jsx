import Image from 'next/image';
import MatrixRain from './components/MatrixRain';
import MobileNav from './components/MobileNav';
import { basePath, experience, languages, links, projects, stack } from './data';

const navItems = [
  { href: '#work', num: '01', label: 'Work' },
  { href: '#experience', num: '02', label: 'Experience' },
  { href: '#stack', num: '03', label: 'Stack' },
  { href: '#contact', num: '04', label: 'Contact' },
];

const codeLines = [
  [['kw', 'export const'], ['', ' davit = {']],
  [['', '  role: '], ['str', '"Full-Stack Developer"'], ['', ',']],
  [['', '  based: '], ['str', '"Yerevan, Armenia"'], ['', ',']],
  [['', '  frontend: ['], ['str', '"React"'], ['', ', '], ['str', '"Next.js"'], ['', ', '], ['str', '"Vue"'], ['', '],']],
  [['', '  backend: ['], ['str', '"Node.js"'], ['', ', '], ['str', '"NestJS"'], ['', ', '], ['str', '"Express"'], ['', '],']],
  [['', '  db: ['], ['str', '"PostgreSQL"'], ['', ', '], ['str', '"MySQL"'], ['', ', '], ['str', '"MongoDB"'], ['', '],']],
  [['', '  orm: ['], ['str', '"Prisma"'], ['', ', '], ['str', '"Sequelize"'], ['', '],']],
  [['', '  ops: ['], ['str', '"Docker"'], ['', ', '], ['str', '"Nginx"'], ['', ', '], ['str', '"CI/CD"'], ['', '],']],
  [['', '  speaks: ['], ['str', '"hy"'], ['', ', '], ['str', '"ru"'], ['', ', '], ['str', '"en"'], ['', '],']],
  [['', '  building: '], ['str', '"MiniTooly"'], ['', ',']],
  [['', '};']],
];

function ArrowUpRight({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7" /><path d="M8 7h9v9" />
    </svg>
  );
}

function BrowserFrame({ project, sizes }) {
  return (
    <div className="browser">
      <div className="browser-bar">
        <span className="dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="browser-url">{project.site}</span>
      </div>
      <div className="browser-shot">
        <Image src={`${basePath}/previews/${project.id}.webp`} alt={`${project.name} website screenshot`} width={1000} height={450} sizes={sizes} />
      </div>
    </div>
  );
}

function FeaturedProject({ project, index }) {
  return (
    <article className="case lift" id={project.id} aria-labelledby={`${project.id}-title`}>
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="case-media" tabIndex={-1} aria-hidden="true">
        <BrowserFrame project={project} sizes="(max-width: 1024px) 100vw, 580px" />
      </a>
      <div className="case-copy">
        <p className="eyebrow">
          {index === 0 && <span className="badge">Featured</span>}
          {project.category}
        </p>
        <h3 id={`${project.id}-title`}>{project.name}</h3>
        <p className="muted">{project.summary} {project.contribution}</p>
        <details className="how">
          <summary>How it works</summary>
          <p>{project.implementation}</p>
        </details>
        <ul className="chips" aria-label="Technologies and features">
          {project.stack.map((s) => <li key={s}>{s}</li>)}
        </ul>
        <a className="accent-link" href={project.url} target="_blank" rel="noopener noreferrer">
          Visit {project.site} <ArrowUpRight />
        </a>
      </div>
    </article>
  );
}

function SmallProject({ project }) {
  return (
    <article className="card lift" id={project.id} aria-labelledby={`${project.id}-title`}>
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="card-shot" tabIndex={-1} aria-hidden="true">
        <Image src={`${basePath}/previews/${project.id}.webp`} alt="" width={1000} height={450} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px" />
      </a>
      <p className="eyebrow small">
        {project.live && <span className="live-dot" aria-hidden="true" />}
        {project.category}
      </p>
      <h3 id={`${project.id}-title`}>{project.name}</h3>
      <p className="muted card-text">{project.summary}</p>
      <p className="mono-line">{project.stack.join(' · ')}</p>
      <a className="plain-link" href={project.url} target="_blank" rel="noopener noreferrer">
        {project.site} <ArrowUpRight size={14} />
      </a>
    </article>
  );
}

function SectionHead({ num, label, title, children }) {
  return (
    <div className="section-head">
      <div>
        <p className="section-label">{num} / {label}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}

export default function Portfolio() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <>
      <a className="skip-link" href="#work">Skip to projects</a>

      <header className="site-header" id="top">
        <div className="wrap nav">
          <a className="wordmark" href="#top">davit<span>.</span>hakobyan</a>
          <nav className="nav-links" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}><span>{item.num}</span> {item.label}</a>
            ))}
          </nav>
          <a className="pill-button nav-resume" href={links.resume}>Resume <ArrowUpRight size={14} /></a>
          <MobileNav items={navItems} resume={links.resume} />
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" aria-labelledby="hero-title">
          <MatrixRain />
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="status">
                <Image className="avatar" src={`${basePath}/davit-hakobyan.jpg`} alt="" width={64} height={64} priority />
                <span className="status-dot" aria-hidden="true" />
                Full-Stack Developer · Yerevan, Armenia
              </div>
              <h1 id="hero-title">
                I build web apps end&#8209;to&#8209;end <span>— from React interfaces to Node.js APIs.</span>
              </h1>
              <p className="lead">
                TypeScript across the stack: React and Next.js on the front, NestJS and Express services behind them,
                PostgreSQL and MySQL underneath. 3+ years shipping production apps for clients and my own products.
              </p>
              <div className="actions">
                <a className="button primary" href="#work">
                  View projects
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5v14" /><path d="M19 12l-7 7-7-7" /></svg>
                </a>
                <a className="button secondary" href="#contact">Get in touch</a>
              </div>
              <dl className="stats">
                <div><dt>years commercial</dt><dd>3+</dd></div>
                <div><dt>projects shipped</dt><dd>7</dd></div>
                <div><dt>companies</dt><dd>5</dd></div>
              </dl>
            </div>

            <div className="code-card" role="img" aria-label="Code snippet describing Davit: Full-Stack Developer in Yerevan working with React, Next.js and Vue on the frontend; Node.js, NestJS and Express on the backend; PostgreSQL, MySQL and MongoDB databases with Prisma and Sequelize ORMs; Docker, Nginx and CI/CD.">
              <div className="code-bar">
                <span className="dots" aria-hidden="true"><i /><i /><i /></span>
                <span className="code-tab">davit.ts</span>
              </div>
              <pre className="code" aria-hidden="true">
                {codeLines.map((line, i) => (
                  <span className="code-line" key={i}>
                    <span className="ln">{i + 1}</span>
                    <span>{line.map(([cls, text], j) => <span key={j} className={cls || undefined}>{text}</span>)}</span>
                  </span>
                ))}
              </pre>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section className="section" id="work" aria-labelledby="work-title">
          <div className="wrap">
            <SectionHead num="01" label="Selected work" title={<span id="work-title">Live projects I&apos;ve<br />built and worked on.</span>}>
              <p className="muted head-note">From my own multilingual toolbox to client platforms with custom admin panels and real-time feeds.</p>
            </SectionHead>
            <div className="case-list">
              {featured.map((p, i) => <FeaturedProject key={p.id} project={p} index={i} />)}
            </div>
            <div className="divider-label"><span>More client work</span><i aria-hidden="true" /></div>
            <div className="card-grid">
              {more.map((p) => <SmallProject key={p.id} project={p} />)}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section" id="experience" aria-labelledby="experience-title">
          <div className="wrap">
            <SectionHead num="02" label="Experience" title={<span id="experience-title">Where I&apos;ve worked.</span>} />
            <ol className="roles">
              {experience.map((job) => (
                <li key={job.company + job.role} className="role">
                  <p className="role-dates">
                    {job.from} — {job.to ?? <span className="now">Now</span>}
                  </p>
                  <div className="role-main">
                    <h3>{job.company}</h3>
                    <p className="role-title">{job.role}</p>
                  </div>
                  <p className="muted role-details">{job.details}</p>
                </li>
              ))}
            </ol>

            <div className="info-grid">
              <div className="panel">
                <p className="panel-label">Education</p>
                <h3>Bachelor&apos;s in Information Systems</h3>
                <p className="muted small-text">National Polytechnic University of Armenia · 2021 — 2025</p>
                <h3 className="spaced">Front-End Development Program</h3>
                <p className="muted small-text">BeeOnCode Armenia · 2022 — 2023 · React.js certificate</p>
              </div>
              <div className="panel">
                <p className="panel-label">Languages</p>
                <dl className="lang-list">
                  {languages.map((l) => (
                    <div key={l.name}><dt>{l.name}</dt><dd>{l.level}</dd></div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* STACK */}
        <section className="section" id="stack" aria-labelledby="stack-title">
          <div className="wrap">
            <SectionHead num="03" label="Stack" title={<span id="stack-title">Tools I reach for.</span>} />
            <div className="stack-grid">
              {stack.map((g) => (
                <div className="panel" key={g.group}>
                  <p className="panel-label">// {g.group}</p>
                  <ul className="stack-list">
                    {g.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* CONTACT */}
      <footer className="section contact" id="contact" aria-labelledby="contact-title">
        <div className="wrap">
          <p className="section-label">04 / Contact</p>
          <h2 id="contact-title" className="contact-title">Let&apos;s build<br /><span>something.</span></h2>
          <p className="lead contact-lead">Have a product, a client project or a role in mind? Write to me.</p>
          <a className="email-link" href={`mailto:${links.email}`}>{links.email} <ArrowUpRight size={24} /></a>
          <div className="contact-grid">
            <a className="contact-tile lift" href={links.gitHub}>GitHub <ArrowUpRight /></a>
            <a className="contact-tile lift" href={links.gitLab}>GitLab <ArrowUpRight /></a>
            <a className="contact-tile lift" href={links.linkedIn}>LinkedIn <ArrowUpRight /></a>
            <a className="contact-tile lift" href={links.phoneHref}>{links.phone} <ArrowUpRight /></a>
          </div>
          <div className="footer-line">
            <span>© {new Date().getFullYear()} Davit Hakobyan · Yerevan, Armenia</span>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
