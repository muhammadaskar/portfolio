'use client'
import { motion } from 'motion/react'
import {
  ArrowUpRightIcon,
  BrainCircuitIcon,
  CodeIcon,
  GithubIcon,
  LayersIcon,
  MailIcon,
  PlugZapIcon,
  RadarIcon,
  LightbulbIcon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import { TextEffect } from '@/components/ui/text-effect'
import { WORK_EXPERIENCE, EMAIL, SOCIAL_LINKS, PROJECTS } from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = { duration: 0.4 }

const SERVICES = [
  { icon: LightbulbIcon, title: 'Consulting', desc: 'Technical direction, code review, and architecture audits.' },
  { icon: LayersIcon, title: 'Software Architecture', desc: 'Scalable, event-driven systems that survive real traffic.' },
  { icon: CodeIcon, title: 'Web / App Development', desc: 'End-to-end products with Go, Java, Laravel, and Next.js.' },
  { icon: PlugZapIcon, title: 'API Integration', desc: 'Payments, crypto, and third-party services wired up cleanly.' },
  { icon: BrainCircuitIcon, title: 'Machine Learning', desc: 'Practical models shipped into production workflows.' },
  { icon: RadarIcon, title: 'Web Scraping', desc: 'Reliable data pipelines from messy public sources.' },
]

const SKILLS = [...new Set(PROJECTS.flatMap((p) => p.technologies ?? []))]

const CAREER_START_YEAR = 2022
const YEARS_OF_EXPERIENCE = new Date().getFullYear() - CAREER_START_YEAR

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-6">
      <p className="mb-1 font-[family-name:var(--font-geist-mono)] text-xs tracking-widest text-indigo-500 uppercase dark:text-indigo-400">
        {eyebrow}
      </p>
      <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        {title}
      </h3>
    </div>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-28 pb-8"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* Hero */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="pt-6"
      >
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects
          </span>

          <div>
            <h1 className="text-4xl leading-[1.1] font-semibold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
              Software Engineer
              <br />
              building{' '}
              <span className="text-gradient animate-shine">exceptional</span>
              <br />
              digital experiences.
            </h1>
            <TextEffect
              as="p"
              preset="fade"
              per="word"
              delay={0.3}
              className="mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-400"
            >
              {`Hi, I'm Muhammad Askar. For over ${YEARS_OF_EXPERIENCE} years I've designed and built scalable backends and polished interfaces — from marketplaces and payment flows to data pipelines. Coffee-powered, detail-obsessed.`}
            </TextEffect>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Magnetic springOptions={{ bounce: 0 }} intensity={0.25}>
              <a
                href={`mailto:${EMAIL}`}
                className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-zinc-900/20 transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                <MailIcon className="h-4 w-4" />
                Let&apos;s work together
              </a>
            </Magnetic>
            <Magnetic springOptions={{ bounce: 0 }} intensity={0.25}>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-50"
              >
                View projects
                <ArrowUpRightIcon className="h-4 w-4" />
              </Link>
            </Magnetic>
          </div>
        </div>
      </motion.section>

      {/* Skills marquee */}
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="animate-marquee flex w-max gap-3">
            {[...SKILLS, ...SKILLS].map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="glass rounded-full px-4 py-2 font-[family-name:var(--font-geist-mono)] text-sm whitespace-nowrap text-zinc-700 dark:text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Work experience */}
      <motion.section
        id="work"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="scroll-mt-28"
      >
        <SectionHeading eyebrow="Career" title="Work Experience" />
        <div className="relative flex flex-col gap-4 border-l border-zinc-200 pl-6 dark:border-zinc-800">
          {WORK_EXPERIENCE.map((job) => (
            <Link
              key={job.id}
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
            >
              <span className="absolute top-7 -left-[1.85rem] h-3 w-3 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 ring-4 ring-white dark:ring-zinc-950" />
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white/90 p-5 backdrop-blur-sm dark:bg-zinc-950/90">
                <div className="flex w-full flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div>
                    <h4 className="font-medium text-zinc-900 dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {job.company} · {job.status}
                    </p>
                  </div>
                  <p className="font-[family-name:var(--font-geist-mono)] text-xs text-zinc-500 dark:text-zinc-400">
                    {job.start} — {job.end}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Services */}
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <SectionHeading eyebrow="What I do" title="Services Provided" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="glass group rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1"
            >
              <Icon className="mb-3 h-5 w-5 text-indigo-500 dark:text-indigo-400" />
              <h4 className="mb-1 font-medium text-zinc-900 dark:text-zinc-100">
                {title}
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="scroll-mt-28"
      >
        <SectionHeading eyebrow="Selected work" title="Latest Projects" />
        <div className="flex flex-col gap-5">
          {PROJECTS.map((project) => (
            // ponytail: card is a div — links live inside, nested <a> breaks hydration
            <article
              key={project.id}
              className="glass group overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1"
            >
              {project.image && (
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-cover grayscale transition-all duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent dark:from-zinc-950/70" />
                </div>
              )}
              <div className="p-5">
                <div className="mb-2 flex items-start justify-between gap-4">
                  <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                    {project.name}
                  </h4>
                  <div className="flex shrink-0 items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} on GitHub`}
                        className="rounded-full border border-zinc-200 p-2 text-zinc-600 transition-colors hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-50"
                      >
                        <GithubIcon className="h-4 w-4" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.name}`}
                        className="rounded-full border border-zinc-200 p-2 text-zinc-600 transition-colors hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-50"
                      >
                        <ArrowUpRightIcon className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                {project.technologies && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-zinc-100 px-2.5 py-1 font-[family-name:var(--font-geist-mono)] text-xs text-zinc-600 dark:bg-zinc-800/80 dark:text-zinc-300"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="scroll-mt-28"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 p-[1px]">
          <div className="rounded-[23px] bg-white/95 p-8 text-center backdrop-blur-sm dark:bg-zinc-950/95">
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Got an idea? Let&apos;s build it.
            </h3>
            <p className="mx-auto mt-2 max-w-md text-zinc-600 dark:text-zinc-400">
              Open for freelance work and collaborations. Reach me at{' '}
              <a
                className="underline underline-offset-4 dark:text-zinc-200"
                href={`mailto:${EMAIL}`}
              >
                {EMAIL}
              </a>
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {SOCIAL_LINKS.map((link) => (
                <Magnetic
                  key={link.label}
                  springOptions={{ bounce: 0 }}
                  intensity={0.3}
                >
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-800 transition-colors hover:bg-zinc-900 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
                  >
                    {link.label}
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </motion.main>
  )
}
