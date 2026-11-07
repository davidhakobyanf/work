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
    category: 'Personal product',
    site: 'minitooly.com',
    url: 'https://minitooly.com/',
    summary: 'A multilingual toolbox for everyday developer and document tasks.',
    contribution: 'I built and maintain the platform, including its tool catalog and individual utilities.',
    implementation: 'Next.js App Router generates localized pages from a shared tool catalog. JSON formatting runs in the browser, and the CSV tool uses a Web Worker to analyze files and export cleaned data without blocking the interface.',
    stack: ['Next.js', 'TypeScript', 'next-intl', 'Web Workers'],
  },
  {
    id: 'contour',
    name: 'Contour',
    category: 'Full-stack client project',
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
    category: 'Agency frontend',
    site: 'avarayr.am',
    url: 'https://avarayr.am/en',
    summary: 'A multilingual travel site for browsing tours and reading trip itineraries.',
    contribution: 'At WebMaker Studio, I worked on the multi-country tour listing and updated footer navigation and social links.',
    implementation: 'Next.js uses locale-aware routes for tour categories and details. Each tour page loads its data by slug, and the same data supplies the page’s SEO metadata.',
    stack: ['Next.js', 'TypeScript', 'API integration'],
  },
  {
    id: 'look',
    name: 'Look.am',
    category: 'Agency frontend',
    site: 'look.am',
    url: 'https://look.am/',
    summary: 'A directory for finding companies and specialists in Armenia.',
    contribution: 'At WebMaker Studio, I worked on search results and company cards, localized page metadata, and the payment-method and payment-success screens.',
    implementation: 'Search reads its filters from the URL and uses them to request results from the API. Localized routes organize company and specialist profiles into services, galleries and reviews.',
    stack: ['Next.js', 'TypeScript', 'next-intl'],
  },
  {
    id: 'bah',
    name: 'BAH Logistics',
    category: 'Agency frontend',
    site: 'bahlogisticsusa.com',
    url: 'https://bahlogisticsusa.com/',
    summary: 'A vehicle shipping site with quote, tracking and service pages.',
    contribution: 'At WebMaker Studio, I built city-page hero image handling, added city URLs to the sitemap, implemented legacy redirects and consolidated Open Graph metadata.',
    implementation: 'Dynamic Next.js city and state routes fetch location data to render shipping pages. Middleware redirects old URLs, and a shared helper builds social previews for multiple page types.',
    stack: ['Next.js', 'React', 'API integration'],
  },
  {
    id: 'football',
    name: 'Football.by Match Center',
    category: 'Real-time frontend',
    site: 'socket.football.by',
    url: 'https://socket.football.by/stat/belarus',
    summary: 'A match center with schedules, results and live match events.',
    contribution: 'I built the frontend and integrated the live match feed.',
    implementation: 'The frontend loads initial match data and subscribes to Socket.IO channels. Goal, card and substitution events update the match view as they arrive.',
    stack: ['Next.js', 'TypeScript', 'Socket.IO'],
  },
];

const experience = [
  {
    company: 'BitBreeze',
    role: 'Full-Stack Developer',
    dates: 'Nov 2025 – Present',
    details: 'Develop NestJS microservices, integrate REST APIs and maintain production web apps.',
  },
  {
    company: 'WebMaker Studio',
    role: 'Full-Stack Developer · Contract',
    dates: 'Oct 2025 – Present',
    details: 'Build and release client applications with Next.js and NestJS.',
  },
  {
    company: 'WebMaker Studio',
    role: 'Frontend Developer',
    dates: 'Jan 2025 – Oct 2025',
    details: 'Developed responsive interfaces for e-commerce, corporate and logistics projects.',
  },
  {
    company: 'MyToy',
    role: 'Frontend Developer',
    dates: 'Aug 2024 – Aug 2025',
    details: 'Built mobile-first catalog and checkout flows for a retail storefront and integrated them with the API.',
  },
  {
    company: 'Bever Systems',
    role: 'Software Developer Intern',
    dates: 'Aug 2024 – Oct 2024',
    details: 'Developed JavaScript and C# plugins, workflows and CRM customizations for Microsoft Dynamics 365.',
  },
  {
    company: 'Tricolorpic',
    role: 'Frontend Developer',
    dates: 'Apr 2023 – Mar 2024',
    details: 'Built React interfaces for client, admin and studio portals, including contract and photo-editing workflows.',
  },
];

function ProjectCard({ project, index }) {
  const headingId = project.id + '-title';
  return (
    <article className="case" id={project.id} aria-labelledby={headingId}>
      <div className="case-copy">
        <p className="label case-label"><span>{String(index + 1).padStart(2, '0')}</span>{project.category}</p>
        <h3 id={headingId}>{project.name}</h3>
        <p className="case-summary">{project.summary}</p>
        <dl className="case-details">
          <div><dt>My role</dt><dd>{project.contribution}</dd></div>
          <div><dt>How it works</dt><dd>{project.implementation}</dd></div>
        </dl>
        <ul className="tags" aria-label="Technologies and features">
          {project.stack.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
      <a className="case-preview" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={'Visit ' + project.name + ' (opens in a new tab)'}>
        <Image src={basePath + '/previews/' + project.id + '.webp'} alt="" width={1000} height={450} />
        <span className="preview-caption"><span>{project.site}</span><strong>Visit live site <span aria-hidden="true">↗</span></strong></span>
      </a>
    </article>
  );
}

export default function Portfolio() {
  return (
    <>
      <a className="skip-link" href="#work">Skip to projects</a>
      <header className="site-header" id="top">
        <nav className="wrap nav" aria-label="Main navigation">
          <a className="wordmark" href="#top"><span aria-hidden="true">DH</span> Davit Hakobyan</a>
          <div className="nav-links">
            <a href="#work">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav-resume" href={resume}>Resume</a>
        </nav>
      </header>
      <main>
        <section className="wrap hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="label hero-label"><span /> Full-Stack Developer</p>
            <h1 id="hero-title">Davit<br />Hakobyan<span>.</span></h1>
            <p className="intro">I build web applications with TypeScript, from React and Next.js interfaces to Node.js APIs and databases.</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">Explore projects</a>
              <a className="button secondary" href={resume}>Resume</a>
            </div>
            <dl className="hero-meta">
              <div><dt>Based in</dt><dd>Yerevan, Armenia</dd></div>
              <div><dt>Experience</dt><dd>3+ years in commercial development</dd></div>
            </dl>
          </div>
          <figure className="portrait">
            <Image src={basePath + '/davit-hakobyan.jpg'} alt="Portrait of Davit Hakobyan" width={960} height={1280} loading="eager" />
          </figure>
        </section>

        <section className="work" id="work" aria-labelledby="work-title">
          <div className="wrap">
            <div className="section-head">
              <div><p className="label">01 / Portfolio</p><h2 id="work-title">Selected projects</h2></div>
              <p>Seven live projects, with my role and the implementation behind each one.</p>
            </div>
            <nav className="project-index" aria-label="Jump to a project">
              {projects.map(project => <a key={project.id} href={'#' + project.id}>{project.name}</a>)}
            </nav>
            <div className="case-list">
              {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
            </div>
          </div>
        </section>

        <section className="wrap experience" id="experience" aria-labelledby="experience-title">
          <div>
            <p className="label">02 / Experience</p>
            <h2 id="experience-title">Recent roles</h2>
            <a className="text-link" href={resume}>View full resume</a>
          </div>
          <ol className="role-list">
            {experience.map(job => (
              <li key={job.company + job.role}>
                <p className="label">{job.dates}</p>
                <h3>{job.company}</h3>
                <p className="role-title">{job.role}</p>
                <p>{job.details}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="contact" id="contact">
        <div className="wrap">
          <p className="label">03 / Contact</p>
          <h2>Let’s talk.</h2>
          <p>Reach me on LinkedIn or find my contact details in the resume.</p>
          <div className="contact-links">
            <a className="button primary" href={linkedIn}>LinkedIn</a>
            <a className="button secondary" href={resume}>Resume</a>
            <a className="button secondary" href={gitHub}>GitHub</a>
            <a className="button secondary" href={gitLab}>GitLab</a>
          </div>
          <div className="footer-line"><span>Davit Hakobyan · Yerevan, Armenia</span><a href="#top">Back to top</a></div>
        </div>
      </footer>
    </>
  );
}
