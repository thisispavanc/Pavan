'use client'

import Link from 'next/link'
import { Linkedin, Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { ThemeToggle } from '@/components/theme-toggle'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, margin: '-100px' },
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Pavan C',
      href: 'https://linkedin.com/in/thisispavanc1',
      description: 'Connect with me on LinkedIn to discuss opportunities and stay updated.'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'thisispavanc@gmail.com',
      href: 'mailto:thisispavanc@gmail.com',
      description: 'Send me an email directly for project inquiries and collaborations.'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9886972167',
      href: 'tel:+919886972167',
      description: 'Call me to discuss time-sensitive opportunities.'
    }
  ]

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
          }}>Get in Touch</h1>
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
        {/* Hero Section */}
        <motion.section {...fadeInUp} style={{ marginBottom: '4rem' }}>
          <div style={{ space: '1rem' }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: 'var(--foreground)',
              marginBottom: '1rem',
            }}>Let's Connect</h2>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--muted-foreground)',
              lineHeight: 1.6,
            }}>
              I'm always open to discussing AI product problems, building scalable solutions, or exploring new opportunities. Choose the best way to reach me below.
            </p>
          </div>
        </motion.section>

        {/* Contact Methods */}
        <motion.section {...fadeInUp} style={{ marginBottom: '4rem' }}>
          <div style={{ space: '1.5rem' }}>
            {contactMethods.map((method, idx) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={idx}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  {...fadeInUp}
                  style={{
                    display: 'block',
                    border: '1px solid var(--border)',
                    padding: '2rem',
                    borderRadius: '0.25rem',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    marginBottom: '1.5rem',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(31, 41, 55, 0.5)'
                    e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.5rem',
                  }}>
                    <div style={{ flex: 'shrink-0', paddingTop: '0.25rem' }}>
                      <Icon size={28} style={{ color: 'var(--primary)' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: 'var(--foreground)',
                        marginBottom: '0.25rem',
                      }}>{method.label}</h3>
                      <p style={{
                        color: 'var(--primary)',
                        fontWeight: 500,
                        marginBottom: '0.75rem',
                      }}>{method.value}</p>
                      <p style={{
                        color: 'var(--muted-foreground)',
                        fontSize: '0.875rem',
                        lineHeight: 1.6,
                      }}>
                        {method.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </motion.section>

        {/* Additional Info */}
        <motion.section {...fadeInUp} style={{
          marginTop: '4rem',
          paddingTop: '3rem',
          borderTop: '1px solid var(--border)',
          space: '1rem',
        }}>
          <h3 style={{
            fontSize: '1.125rem',
            fontWeight: 600,
            color: 'var(--foreground)',
            marginBottom: '1rem',
          }}>Response Time</h3>
          <p style={{
            color: 'var(--muted-foreground)',
            lineHeight: 1.6,
          }}>
            I typically respond to emails within 24 hours. For urgent matters, please call or reach out via LinkedIn directly.
          </p>
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
