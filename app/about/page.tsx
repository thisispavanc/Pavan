'use client'

import Link from 'next/link'
import { Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { ThemeToggle } from '@/components/theme-toggle'
import styles from './about.module.css'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, margin: '-100px' },
}

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'rgba(var(--background), 0.8)',
        backdropFilter: 'blur(10px)',
      }}>
        <div style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <Link href="/" style={{
            fontSize: '1.125rem',
            fontWeight: 600,
            color: 'var(--foreground)',
            textDecoration: 'none',
          }}>
            PC
          </Link>
          <h1 style={{
            fontSize: '1.125rem',
            fontWeight: 600,
            color: 'var(--foreground)',
          }}>About Pavan</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="https://drive.google.com/file/d/1enCSAvKdOh1Qc73AcrtyMLEMma9if0wB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.875rem',
                padding: '0.5rem 1rem',
                border: '1px solid var(--foreground)',
                color: 'var(--foreground)',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              Resume
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main style={{
        maxWidth: '48rem',
        margin: '0 auto',
        padding: '5rem 1rem',
      }}>
        {/* Profile Image & Title */}
        <motion.section {...fadeInUp} style={{ marginBottom: '4rem' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}>
            {/* Title & Intro */}
            <div style={{ space: '1.5rem' }}>
              <div>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  color: 'var(--foreground)',
                }}>A Little More About Me</h2>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--muted-foreground)',
                }}>AI Product Engineer</p>
              </div>
              <p style={{
                fontSize: '1.125rem',
                color: 'var(--muted-foreground)',
                lineHeight: 1.6,
              }}>
                I'm Pavan C, an AI Product Engineer passionate about building intelligent systems that solve real-world problems. My journey has been focused on creating AI solutions that deliver measurable impact.
              </p>
            </div>
          </div>
        </motion.section>

        {/* About Me - Expanded */}
        <motion.section {...fadeInUp} style={{ marginBottom: '4rem' }}>
          <div style={{
            space: '1rem',
            color: 'var(--muted-foreground)',
            lineHeight: 1.7,
          }}>
            <p style={{ marginBottom: '1rem' }}>
              I specialize in leveraging Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and automation to build products that transform business operations. My work focuses on reducing manual effort, cutting operational costs, and enabling revenue growth through intelligent systems.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Throughout my career, I've worked on challenging problems like automating client onboarding processes, building AI-powered field mapping solutions, and developing health tech platforms. I thrive at the intersection of product thinking and technical execution, translating complex AI capabilities into user-friendly solutions.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              When I'm not coding, I'm exploring the latest developments in AI, contributing to open-source projects, or learning new technologies. I believe in building products that not only leverage cutting-edge technology but also deliver tangible value to users and businesses.
            </p>
          </div>
        </motion.section>

        {/* Resume Box - Prominent */}
        <motion.section {...fadeInUp} style={{
          border: '2px solid rgba(99, 102, 241, 0.3)',
          backgroundColor: 'rgba(99, 102, 241, 0.05)',
          padding: '2rem',
          borderRadius: '0.5rem',
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '0.5rem',
              color: 'var(--foreground)',
            }}>Resume</h3>
            <p style={{
              color: 'var(--muted-foreground)',
              lineHeight: 1.6,
            }}>
              View my complete professional experience, education, and technical skills.
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginTop: '1rem',
          }}>
            <a
              href="https://drive.google.com/file/d/1enCSAvKdOh1Qc73AcrtyMLEMma9if0wB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                border: '1px solid var(--foreground)',
                backgroundColor: 'var(--primary)',
                color: 'var(--primary-foreground)',
                textDecoration: 'none',
                fontWeight: 500,
                width: 'fit-content',
              }}
            >
              <Download size={20} />
              View Resume
            </a>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                border: '1px solid var(--border)',
                backgroundColor: 'transparent',
                color: 'var(--foreground)',
                textDecoration: 'none',
                fontWeight: 500,
                width: 'fit-content',
              }}
            >
              Get in Touch
            </Link>
          </div>
        </motion.section>

        <footer style={{
          marginTop: '2rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border)',
          textAlign: 'center',
          fontSize: '0.875rem',
          color: 'var(--muted-foreground)',
        }}>
          <p>Pavan C © 2025. Built with Next.js.</p>
        </footer>
      </main>
    </div>
  )
}
