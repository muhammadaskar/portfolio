'use client'
import { ThemeSwitch } from '@/components/theme-switch'
import Link from 'next/link'

const NAV = [
  { label: 'Work', href: '/#work' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
]

export function Header() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="glass mx-auto flex w-full max-w-3xl items-center justify-between rounded-full py-2 pr-2 pl-4 shadow-lg shadow-zinc-900/5">
        <Link href="/" className="group flex items-center gap-2">
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-xs font-bold text-white">
            MA
          </span>
          <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            Muhammad Askar
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <div className="hidden items-center sm:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  )
}
