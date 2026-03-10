"use client"

import { Github, Linkedin, Mail, ExternalLink, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"

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
      role: "Developer Intern",
      company: "TANUH.ai (IISc Startup)",
      period: "Dec 2025 – Present",
      achievements: [
        "Contributing to AI-driven healthcare systems at a Ministry of Education–funded AI Centre of Excellence, focused on scalable point-of-care solutions for non-communicable diseases (NCDs)",
        "Prototyped an end-to-end PHQ-9 mental health mobile application with JWT-based authentication, validated questionnaire flows, scoring logic, and clinical result interpretation",
        "Executed database migration and system documentation for a breast cancer detection platform, gaining hands-on understanding of production architecture and feature enhancement workflows",
      ],
    },
    {
      role: "AI Product Intern",
      company: "Saison OMNI India (Aumnee)",
      period: "Aug 2025 – Nov 2025",
      achievements: [
        "Engineered a comprehensive Client Onboarding Automation System leveraging AI and workflow optimization to transform a historically manual 14-day process into an efficient 1–2 day automated pipeline, directly enabling 10–15% revenue growth through faster time-to-value delivery",
        "Architected and deployed an intelligent AI Master Mapping Solution that automated complex field normalization and schema discovery across 3200+ client data mappings, reducing manual engineering effort by 90% and accelerating client integration cycles from 6–7 days to under 0.5 days",
        "Collaborated extensively with enterprise clients and cross-functional design teams to translate business requirements into scalable technical solutions, ensuring seamless product delivery that bridged strategic business objectives with robust engineering execution",
      ],
    },
  ]

  const education = [
    {
      degree: "B.E. in Computer Science",
      school: "ACS College of Engineering, Bangalore",
      date: "Dec 2021 – Jun 2025",
      cgpa: "79%",
    },
    {
      degree: "Advanced LLM and Generative AI Development",
      school: "100xEngineers",
      date: "July 2025 – DEC 2025",
      details: "Training in LLM fundamentals, LangChain, RAG, context-aware AI. Hands-on: ComfyUI, OpenAI, LangGraph, APIs, AWS",
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
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-offset-2">
        Skip to main content
      </a>

      {/* JSON-LD Structured Data */}
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

      <main id="main-content" className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 py-4">
            <Link href="/about" className="text-lg font-semibold text-foreground hover:text-primary transition" title="About Pavan C">
              PC
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {[
                { name: "About", href: "/about" },
                { name: "Work", href: "#work" },
                { name: "Stack", href: "#stack" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://drive.google.com/file/d/1MKzgWt0aNqj4S1mh06l8O91aDmwE-Jxj/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-2 border border-foreground text-foreground hover:bg-primary/10 transition-colors font-medium"
              >
                Resume
              </a>
              <ThemeToggle />
            </nav>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-accent/10 rounded transition"
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
              className="md:hidden border-t border-border bg-background px-4 py-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex flex-col gap-2">
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
                    className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded transition"
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="https://drive.google.com/file/d/1MKzgWt0aNqj4S1mh06l8O91aDmwE-Jxj/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-3 py-2 text-sm border border-foreground text-foreground hover:bg-primary/10 transition-colors font-medium rounded mt-2"
                >
                  Resume
                </a>
              </div>
            </motion.nav>
          )}
        </header>

        {/* Hero Section */}
        <section id="about" className="px-4 sm:px-6 py-20 md:py-32 max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="space-y-8">
            {/* Profile Picture - Moved to Right */}
            <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8">
              <div className="flex-1 space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                  Hello I'm{' '}
                  <Link href="/about" className="underline hover:text-primary transition decoration-primary/50 underline-offset-4">
                    Pavan C
                  </Link>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  AI Product Engineer focused on LLMs, RAG, and Automation. I design, build, and deploy AI systems that remove manual work, cut costs, and accelerate revenue outcomes for companies.
                </p>
              </div>
              <div className="flex-shrink-0">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQHPdzM7rjwECw/profile-displayphoto-shrink_200_200/B56ZY_vXEvGQAg-/0/1744826103874?e=1774483200&v=beta&t=X3NwN4ajTH8kl1Pqa48q4-wqNYKnQy8BVlbx0sdWeAc"
                  alt="Pavan C"
                  className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/30 shadow-lg"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Link
                href="#work"
                className="px-6 py-2.5 border border-foreground bg-primary text-primary-foreground hover:bg-primary/90 transition text-sm font-medium"
              >
                View Work
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2.5 border border-border text-foreground hover:bg-accent/5 transition text-sm font-medium"
              >
                Get in Touch
              </Link>
            </div>

            {/* Contact Links */}
            <div className="flex gap-6 pt-4">
              <Link
                href="https://linkedin.com/in/thisispavanc1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </Link>
              <Link
                href="https://github.com/thisispavanc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={28} />
              </Link>
              <Link
                href="mailto:thisispavanc@gmail.com"
                className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={28} />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section className="px-4 sm:px-6 py-20 md:py-32 max-w-5xl mx-auto border-t border-border">
          <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
            Experience
          </motion.h2>

          <div className="space-y-8">
            {experience.map((job, idx) => (
              <motion.div key={idx} {...fadeInUp} className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
                    <p className="text-muted-foreground text-sm">{job.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-1 md:mt-0">{job.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                  {job.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="px-4 sm:px-6 py-20 md:py-32 max-w-5xl mx-auto border-t border-border">
          <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
            Featured Work
          </motion.h2>

          <div className="space-y-12">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                {...fadeInUp}
                className="border-l-2 border-primary pl-6 py-4 space-y-3 hover:border-primary/70 transition group cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="text-sm font-medium text-primary">{project.impact}</div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs bg-accent/10 text-accent-foreground rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={project.link}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5 rounded transition whitespace-nowrap flex-shrink-0 mt-4"
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
        <section className="px-6 sm:px-10 py-20 md:py-32 bg-accent/5 border-y border-border">
          <div className="max-w-5xl mx-auto">
            <motion.h3 {...fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8">
              Impact Delivered
            </motion.h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {proofMetrics.map((item, idx) => (
                <motion.div key={idx} {...fadeInUp} className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{item.metric}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stack Section */}
        <section id="stack" className="px-4 sm:px-6 py-20 md:py-32 max-w-5xl mx-auto border-t border-border">
          <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
            Tech Stack
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div key={category} {...fadeInUp} className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 text-sm bg-accent/10 text-foreground rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-4 sm:px-6 py-20 md:py-32 max-w-5xl mx-auto border-t border-border">
          <motion.div {...fadeInUp} className="space-y-6 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Let's work together</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always interested in discussing AI product problems, building scalable solutions, or exploring new opportunities. Reach out via email or connect on LinkedIn.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="mailto:thisispavanc@gmail.com"
                className="px-6 py-3 border border-foreground bg-primary text-primary-foreground hover:bg-primary/90 transition font-medium inline-flex items-center gap-2 w-fit"
              >
                <Mail size={18} />
                Send Email
              </Link>
              <Link
                href="https://linkedin.com/in/thisispavanc1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-border text-foreground hover:bg-accent/5 transition font-medium inline-flex items-center gap-2 w-fit"
              >
                <Linkedin size={18} />
                LinkedIn
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="px-4 sm:px-6 py-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>Pavan C © 2025. Built with Next.js.</p>
        </footer>
      </main>
    </>
  )
}
