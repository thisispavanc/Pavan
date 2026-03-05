"use client"

import { Github, Linkedin, Mail, ExternalLink, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import styles from "./page.module.css"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, margin: "-100px" },
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const projects = [
    {
      id: "lawyer-ji",
      title: "Lawyer Ji - Legal Consultation MVP",
      description: "Built an MVP that transformed traditional legal practice by digitizing lawyer-client interactions through an on-demand consultation platform.",
      impact: "24-hour hackathon launch | Production ready",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "https://final-lawyerji1.vercel.app/",
    },
    {
      id: "ai-master-mapping",
      title: "AI Master Mapping Solution",
      description: "Built an AI normalization-driven approach to automate field mappings and schema discovery, eliminating 90% of manual engineering effort per client.",
      impact: "3200+ field mappings automated | 6–7 days → 0.5 days",
      technologies: ["Python", "LLMs", "AI Normalization", "FastAPI"],
      link: "https://omnikeymapping.vercel.app/",
    },
    {
      id: "praan-health",
      title: "Praan Health - AI Nutrition Platform",
      description: "Designed and developed an intelligent app providing personalized diet and lifestyle recommendations for chronic disease management.",
      impact: "AI-powered health insights | Care giver focused",
      technologies: ["ReactJS", "LLMs", "Health APIs", "MongoDB"],
      link: "https://praan-daily.vercel.app/",
    },
    {
      id: "client-onboarding",
      title: "Client Onboarding Automation",
      description: "Designed and deployed an AI-powered Client Onboarding Automation System that transformed a 14-day manual process into 1–2 days of automated processing.",
      impact: "14 days → 1–2 days | 10–15% revenue growth enabled",
      technologies: ["Python", "LLMs", "Workflow Automation", "AWS"],
      link: "https://aumnee-final.vercel.app/",
    },
  ]

  const experience = [
    {
      role: "AI Product Intern",
      company: "Saison OMNI India (Aumnee)",
      period: "Aug 2025 – Nov 2025",
      achievements: [
        "Designed and deployed Client Onboarding Automation System reducing processing time from 14 days to 1–2 days",
        "Built AI Master Mapping Solution automating 3200+ field mappings per client with 90% reduction in manual effort",
        "Partnered with clients and designers to deliver user-focused features bridging business goals with engineering execution",
      ],
    },
  ]

  const skills = {
    Programming: ["Python", "JavaScript", "TypeScript", "HTML/CSS"],
    "AI/ML": ["LLMs", "RAG", "Prompt Engineering", "Context Engineering", "Fine-tuning"],
    Frameworks: ["LangChain", "LangGraph", "Hugging Face", "ReactJS"],
    "Backend/Infra": ["FastAPI", "Node.js", "AWS", "PostgreSQL"],
    Tools: ["ComfyUI", "OpenAI APIs", "VSCode"],
  }

  const proofMetrics = [
    { metric: "14 → 1–2 days", label: "Onboarding time reduction" },
    { metric: "10–15%", label: "Revenue growth enabled" },
    { metric: "3200+", label: "Field mappings automated" },
    { metric: "90%", label: "Manual effort reduction" },
    { metric: "24 hours", label: "Hackathon product launch" },
    { metric: "100%", label: "Customer satisfaction" },
  ]

  return (
    <>
      <a href="#main-content" className={styles["sr-only"]}>
        Skip to main content
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Pavan C",
            title: "AI Product Engineer",
            description: "AI Product Engineer specializing in LLMs, RAG systems, and automation",
            url: "https://pavanc.dev",
            email: "thisispavanc@gmail.com",
            telephone: "+91 9886972167",
            jobTitle: "AI Product Engineer",
            knowsAbout: ["LLMs", "RAG", "Generative AI", "Product Engineering", "Python", "LangChain", "Automation"],
            sameAs: [
              "https://linkedin.com/in/thisispavanc1",
              "https://github.com/thisispavanc",
              "https://twitter.com/thisispavanc1",
            ],
          }),
        }}
      />

      <main id="main-content" className={styles["min-h-screen"]}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <Link href="/about" className={styles.logo} title="About Pavan C">
              PC
            </Link>

            {/* Desktop Navigation */}
            <nav className={styles.nav}>
              {[
                { name: "About", href: "/about" },
                { name: "Work", href: "#work" },
                { name: "Stack", href: "#stack" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={styles.navLink}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://drive.google.com/file/d/1enCSAvKdOh1Qc73AcrtyMLEMma9if0wB/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resumeLink}
              >
                Resume
              </a>
              <ThemeToggle />
            </nav>

            {/* Mobile Menu */}
            <div className={styles.mobileMenu}>
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={styles.menuButton}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.nav
              ref={menuRef}
              className={`${styles.mobileNav} ${styles.open}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className={styles.mobileNavContent}>
                {[
                  { name: "About", href: "/about" },
                  { name: "Work", href: "#work" },
                  { name: "Stack", href: "#stack" },
                  { name: "Contact", href: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={styles.mobileNavLink}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="https://drive.google.com/file/d/1enCSAvKdOh1Qc73AcrtyMLEMma9if0wB/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className={styles.resumeLink}
                  style={{ marginTop: "0.5rem" }}
                >
                  Resume
                </a>
              </div>
            </motion.nav>
          )}
        </header>

        {/* Hero Section */}
        <section id="about" className={styles.hero}>
          <motion.div {...fadeInUp} className={styles.heroContent}>
            {/* Profile Picture */}
            <div className={styles.heroText}>
              <h2 className={styles.heroTitle}>
                Hello I'm{' '}
                <Link href="/about" className={styles.heroTitleLink}>
                  Pavan C
                </Link>
              </h2>
              <p className={styles.heroDescription}>
                AI Product Engineer focused on LLMs, RAG, and Automation. I design, build, and deploy AI systems that remove manual work, cut costs, and accelerate revenue outcomes for companies.
              </p>
            </div>
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQHPdzM7rjwECw/profile-displayphoto-shrink_200_200/B56ZY_vXEvGQAg-/0/1744826103874?e=1770854400&v=beta&t=ZTx-EF5vniwE1bRgNx7Af61RzDSAUwc_jZX8gnFwtPQ"
              alt="Pavan C"
              className={styles.profileImage}
            />
          </motion.div>

          <div className={styles.heroButtons}>
            <Link href="#work" className={styles.primaryButton}>
              View Work
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              Get in Touch
            </Link>
          </div>

          {/* Contact Links */}
          <div className={styles.socialLinks}>
            <Link
              href="https://linkedin.com/in/thisispavanc1"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </Link>
            <Link
              href="https://github.com/thisispavanc"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <Github size={28} />
            </Link>
            <Link
              href="mailto:thisispavanc@gmail.com"
              className={styles.socialLink}
              aria-label="Email"
            >
              <Mail size={28} />
            </Link>
          </div>
        </section>

        {/* Experience Section */}
        <section className={styles.section}>
          <motion.h2 {...fadeInUp} className={styles.sectionTitle}>
            Experience
          </motion.h2>

          <div>
            {experience.map((job, idx) => (
              <motion.div key={idx} {...fadeInUp} className={styles.experienceItem}>
                <div className={styles.jobHeader}>
                  <div>
                    <h3 className={styles.jobTitle}>{job.role}</h3>
                    <p className={styles.jobCompany}>{job.company}</p>
                  </div>
                  <span className={styles.jobPeriod}>{job.period}</span>
                </div>
                <ul className={styles.achievements}>
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className={styles.achievement}>{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className={styles.section}>
          <motion.h2 {...fadeInUp} className={styles.sectionTitle}>
            Featured Work
          </motion.h2>

          <div>
            {projects.map((project, idx) => (
              <motion.div key={project.id} {...fadeInUp} className={styles.projectItem}>
                <div className={styles.projectHeader}>
                  <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDescription}>{project.description}</p>
                    <div className={styles.projectImpact}>{project.impact}</div>
                    <div className={styles.techTags}>
                      {project.technologies.map((tech) => (
                        <span key={tech} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={project.link}
                    className={styles.projectLink}
                    title={`View ${project.title} project details`}
                  >
                    View
                    <ExternalLink size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Key Results */}
        <section className={styles.metricsSection}>
          <div className={styles.metricsContent}>
            <motion.h3 {...fadeInUp} className={styles.metricsLabel}>
              Impact Delivered
            </motion.h3>

            <div className={styles.metricsGrid}>
              {proofMetrics.map((item, idx) => (
                <motion.div key={idx} {...fadeInUp}>
                  <div className={styles.metricValue}>{item.metric}</div>
                  <div className={styles.metricLabel}>{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stack Section */}
        <section id="stack" className={styles.section}>
          <motion.h2 {...fadeInUp} className={styles.sectionTitle}>
            Tech Stack
          </motion.h2>

          <div className={styles.skillsGrid}>
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div key={category} {...fadeInUp} className={styles.skillCategory}>
                <h3 className={styles.skillCategoryTitle}>{category}</h3>
                <div className={styles.skillsList}>
                  {items.map((skill) => (
                    <span key={skill} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={styles.section}>
          <motion.div {...fadeInUp} className={styles.contactSection}>
            <h2 className={styles.contactTitle}>Let's work together</h2>
            <p className={styles.contactDescription}>
              I'm always interested in discussing AI product problems, building scalable solutions, or exploring new opportunities. Reach out via email or connect on LinkedIn.
            </p>

            <div className={styles.contactButtons}>
              <Link href="mailto:thisispavanc@gmail.com" className={styles.contactButton}>
                <Mail size={18} />
                Send Email
              </Link>
              <Link
                href="https://linkedin.com/in/thisispavanc1"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactButton}
              >
                <Linkedin size={18} />
                LinkedIn
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>Pavan C © 2025. Built with Next.js.</p>
        </footer>
      </main>
    </>
  )
}
