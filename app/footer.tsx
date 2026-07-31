import { SOCIAL_LINKS } from './data'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-200/70 py-8 dark:border-zinc-800/70">
      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} Muhammad Askar. Built with Next.js &
          Motion.
        </p>
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
