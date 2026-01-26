'use client'

import Link from 'next/link'
import { ArrowLeft, Download } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, margin: '-100px' },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 py-4">
          <Link href="/" className="text-lg font-semibold text-foreground hover:text-primary transition" title="Back to Home">
            PC
          </Link>
          <h1 className="text-lg font-semibold text-foreground">About Pavan</h1>
          <a
            href="https://drive.google.com/file/d/1enCSAvKdOh1Qc73AcrtyMLEMma9if0wB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 border border-foreground text-foreground hover:bg-primary/10 transition-colors font-medium"
          >
            Resume
          </a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
        {/* Profile Image & Title */}
        <motion.section {...fadeInUp} className="space-y-8 mb-16">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQHPdzM7rjwECw/profile-displayphoto-shrink_200_200/B56ZY_vXEvGQAg-/0/1744826103874?e=1770854400&v=beta&t=ZTx-EF5vniwE1bRgNx7Af61RzDSAUwc_jZX8gnFwtPQ"
                alt="Pavan C"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-primary/30"
              />
            </div>

            {/* Title & Intro */}
            <div className="flex-1 space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">A Little More About Me</h2>
                <p className="text-sm text-muted-foreground">AI Product Engineer</p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Pavan C, an AI Product Engineer passionate about building intelligent systems that solve real-world problems. My journey has been focused on creating AI solutions that deliver measurable impact.
              </p>
            </div>
          </div>
        </motion.section>

        {/* About Me - Expanded */}
        <motion.section {...fadeInUp} className="space-y-6 mb-16">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I specialize in leveraging Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and automation to build products that transform business operations. My work focuses on reducing manual effort, cutting operational costs, and enabling revenue growth through intelligent systems.
            </p>
            <p>
              Throughout my career, I've worked on challenging problems like automating client onboarding processes, building AI-powered field mapping solutions, and developing health tech platforms. I thrive at the intersection of product thinking and technical execution, translating complex AI capabilities into user-friendly solutions.
            </p>
            <p>
              When I'm not coding, I'm exploring the latest developments in AI, contributing to open-source projects, or learning new technologies. I believe in building products that not only leverage cutting-edge technology but also deliver tangible value to users and businesses.
            </p>
          </div>
        </motion.section>

    
        {/* Resume Box - Prominent */}
        <motion.section {...fadeInUp} className="border-2 border-primary/30 bg-accent/5 p-8 rounded space-y-4">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground">Resume</h3>
            <p className="text-muted-foreground leading-relaxed">
              View my complete professional experience, education, and technical skills.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="https://drive.google.com/file/d/1enCSAvKdOh1Qc73AcrtyMLEMma9if0wB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-foreground bg-primary text-primary-foreground hover:bg-primary/90 transition font-medium"
            >
              <Download size={20} />
              View Resume
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground hover:bg-accent/5 transition font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </motion.section>
      </main>
    </div>
  )
}
