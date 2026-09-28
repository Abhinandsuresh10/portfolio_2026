import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Mail,
  MapPin,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';
import techschoolCrmImage from '../assets/techschool_crm.png';
import offensoLmsImage from '../assets/offenso_lms.png';
import hireHubImage from '../assets/hireHub.png';
import gbagsImage from '../assets/gbags.png';
import profileImage from '../assets/profile_image.jpeg';

const projects = [
  {
    number: '01',
    name: 'TechSchool LMS',
    type: 'Learning management system',
    description: 'A learning platform that connects classes, batches, recordings, resources, and attendance into one focused experience.',
    stack: ['Next.js', 'Node.js', 'Docker', 'Google Meet'],
    image: offensoLmsImage,
    github: "https://github.com/AbhinandSureshTechschool/offenso_LMS_2",
  },
  {
    number: '02',
    name: 'TechSchool CRM',
    type: 'Training operations platform',
    description: 'Student and trainer workflows for batches, examinations, seminars, validation, and administration at scale.',
    stack: ['React', 'Microservices', 'PostgreSQL', 'Judge0'],
    image: techschoolCrmImage,
    github: "https://github.com/AbhinandSureshTechschool/offenso_LMS_2",
  },
  {
    number: '03',
    name: 'HireHub',
    type: 'Three-sided job portal',
    description: 'A job platform for seekers, recruiters, and administrators, with job posting, applications, interview scheduling, real-time chat, and WebRTC video interviews.',
    stack: ['MERN', 'Socket.io', 'WebRTC', 'JWT'],
    image: hireHubImage,
    github: 'https://github.com/Abhinandsuresh10/HireHub',
  },
  {
    number: '04',
    name: 'Gbags',
    type: 'E-commerce platform',
    description: 'Full-stack shopping with an admin suite, performance dashboards, payments, order tracking, and wallet features.',
    stack: ['MERN', 'Razorpay', 'Google Auth', 'Redux'],
    image: gbagsImage,
    github: "https://github.com/Abhinandsuresh10/FirstProject",
  },
];

const skills = [
  ['Frontend', 'React.js, Next.js, TypeScript, Tailwind CSS'],
  ['Backend', 'Node.js, Express.js, REST APIs, JWT'],
  ['Database', 'MongoDB, PostgreSQL, Prisma, Mongoose'],
  ['Architecture', 'Microservices, MVC, Repository Pattern'],
  ['Deployment', 'Docker, VPS, Vercel, Render, AWS'],
  ['Toolkit', 'Redux, Zustand, React Query, Zod, Swagger, Git'],
];

const education = [
  {
    period: 'Feb 2024 - Nov 2025',
    program: 'MERN Stack Development',
    school: 'Brototype, Kinfra Techno Park, Kakkancheri, Kerala',
  },
  {
    period: 'Aug 2022 - Jul 2023',
    program: 'Post Graduate Diploma in Computer Applications',
    school: 'Priest Academy, Sulthan Bathery, Kerala',
  },
  {
    period: 'Jun 2019 - Apr 2022',
    program: 'BA in Economics',
    school: 'St. Maries College, Calicut University',
  },
  {
    period: 'Jun 2017 - Apr 2019',
    program: 'Higher Secondary - Humanities',
    school: 'GHSS Anappara, Kerala',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Abhinand Suresh home">AS<span>.</span></a>
        <div className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Stack</a>
          <a className="nav-cta" href="mailto:abinandsuresh39@gmail.com" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <section className="hero shell" id="top">
        <motion.div className="eyebrow hero-eyebrow" {...fadeUp}><span className="status-dot" /> Available for opportunities</motion.div>
        <div className="hero-intro">
          <motion.div className="hero-copy" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.06 }}>
            <p className="hero-role">MERN Stack Developer <span>+</span> Technical Trainer</p>
            <h1>Abhinand<br /><em>Suresh.</em></h1>
            <p className="hero-description">I build practical, production-ready web applications and help aspiring developers learn how the web works. Currently creating with React, Next.js, Node.js, and a lot of curiosity.</p>
            <div className="hero-actions">
              <a className="hero-button" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              <span>Based in Kerala, India</span>
            </div>
          </motion.div>
          <motion.div className="portrait-wrap" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.16 }}>
            <div className="portrait-backdrop" />
            <img className="portrait" src={profileImage} alt="Abhinand Suresh" />
            <span className="portrait-label">Developer / Trainer</span>
          </motion.div>
        </div>
      </section>

      <section className="ticker" aria-label="Technology stack">
        <div className="ticker-track"><span>React</span><i /> <span>Next.js</span><i /> <span>Node.js</span><i /> <span>TypeScript</span><i /> <span>MongoDB</span><i /> <span>Docker</span><i /> <span>React</span><i /> <span>Next.js</span><i /> <span>Node.js</span><i /> <span>TypeScript</span><i /> <span>MongoDB</span><i /> <span>Docker</span><i /></div>
      </section>

      <section className="section shell" id="work">
        <motion.div className="section-heading" {...fadeUp}>
          <h2>Real products for<br />real <em>workflows.</em></h2>
        </motion.div>
        <div className="project-list">
          {projects.map((project, index) => (
            <motion.article className="project" key={project.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.08 }}>
              <div className="project-art">
                <div className="project-browser">
                  <div className="browser-bar"><i /><i /><i /></div>
                  <img src={project.image} alt={`${project.name} project preview`} />
                </div>
                <span>{project.number}</span>
              </div>
              <div className="project-info">
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
              <a className="project-arrow" href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} on GitHub`}><ArrowUpRight size={22} /></a>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="about-band" id="about">
        <div className="shell about-grid">
          <motion.div {...fadeUp}>
            <p className="eyebrow light">About me </p>
            <h2>More about me<br />&amp; <em>experience.</em></h2>
          </motion.div>
          <motion.div className="about-copy" {...fadeUp}>
            <p>I have spent 8 months building and maintaining production systems at Offenso TechSchool, while helping students grow their own confidence in modern web development.</p>
            <p>That dual perspective shapes my work: thoughtful engineering, direct communication, and an eye for the people on the other side of the interface.</p>
            <div className="experience-note"><BriefcaseBusiness size={19} /><span><b>08 months</b> of production experience</span></div>
          </motion.div>
        </div>
      </section>

      <section className="section shell skill-section" id="skills">
        <motion.div className="section-heading compact" {...fadeUp}>
          <p className="eyebrow">The toolkit </p>
          <h2>Technologies<br />&amp; <em>tools.</em></h2>
        </motion.div>
        <motion.div className="skill-grid" {...fadeUp}>
          {skills.map(([label, detail], index) => <div className="skill-row" key={label}><span>0{index + 1}</span><h3>{label}</h3><p>{detail}</p></div>)}
        </motion.div>
      </section>

      <section className="education-section">
        <div className="shell">
          <motion.div className="education-heading" {...fadeUp}>
            <h2>Learning &amp;<br /><em>education.</em></h2>
          </motion.div>
          <div className="education-list">
            {education.map((item, index) => (
              <motion.article className="education-item" key={item.program} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.07 }}>
                <div className="timeline-marker"><span /></div>
                <p className="education-period">{item.period}</p>
                <div><h3>{item.program}</h3><p>{item.school}</p></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact shell">
        <motion.div {...fadeUp}>
          <p className="eyebrow">What's next </p>
          <h2>Let's build<br />something <em>good.</em></h2>
        </motion.div>
        <motion.a className="contact-mail" href="mailto:abinandsuresh39@gmail.com" {...fadeUp}>
          <Mail size={22} /> abinandsuresh39@gmail.com <ArrowUpRight size={24} />
        </motion.a>
      </section>

      <footer className="footer shell">
        <p>© 2026 Abhinand Suresh</p>
        <div><span><MapPin size={15} /> Kerala, India</span><a href="https://linkedin.com/in/abhinand-suresh-91a0292b0" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/Abhinandsuresh10" target="_blank" rel="noreferrer">GitHub</a></div>
      </footer>
    </main>
  );
}

export default App;
