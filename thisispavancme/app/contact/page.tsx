'use client'

import Link from 'next/link'
import { ArrowLeft, Linkedin, Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 py-4">
          <Link href="/" className="text-lg font-semibold text-foreground hover:text-primary transition" title="Back to Home">
            PC
          </Link>
          <h1 className="text-lg font-semibold text-foreground">Get in Touch</h1>
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
        {/* Hero Section */}
        <motion.section {...fadeInUp} className="space-y-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Let's Connect</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm always open to discussing AI product problems, building scalable solutions, or exploring new opportunities. Choose the best way to reach me below.
            </p>
          </div>
        </motion.section>

        {/* Contact Methods */}
        <motion.section {...fadeInUp} className="space-y-6">
          <div className="grid md:grid-cols-1 gap-6">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={idx}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  {...fadeInUp}
                  className="block border border-border p-8 rounded hover:border-primary/50 hover:bg-accent/5 transition group cursor-pointer"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 pt-1">
                      <Icon size={28} className="text-primary group-hover:text-primary/80 transition" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1">{method.label}</h3>
                      <p className="text-primary font-medium mb-3">{method.value}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
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
        <motion.section {...fadeInUp} className="mt-16 pt-12 border-t border-border space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Response Time</h3>
          <p className="text-muted-foreground leading-relaxed">
            I typically respond to emails within 24 hours. For urgent matters, please call or reach out via LinkedIn directly.
          </p>
        </motion.section>
      </main>
    </div>
  )
}
