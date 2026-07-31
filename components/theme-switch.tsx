'use client'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const THEMES_OPTIONS = [
  { label: 'Light', id: 'light', icon: <SunIcon className="h-4 w-4" /> },
  { label: 'Dark', id: 'dark', icon: <MoonIcon className="h-4 w-4" /> },
  { label: 'System', id: 'system', icon: <MonitorIcon className="h-4 w-4" /> },
]

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // ponytail: fixed-size placeholder so the header doesn't jump before mount
  if (!mounted) {
    return <div className="h-7 w-[5.25rem]" />
  }

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-full bg-zinc-200/80 dark:bg-zinc-700/80"
      defaultValue={theme}
      transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
      enableHover={false}
      onValueChange={(id) => setTheme(id as string)}
    >
      {THEMES_OPTIONS.map((option) => (
        <button
          key={option.id}
          className="inline-flex h-7 w-7 items-center justify-center rounded-full text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
          type="button"
          aria-label={`Switch to ${option.label} theme`}
          data-id={option.id}
        >
          {option.icon}
        </button>
      ))}
    </AnimatedBackground>
  )
}
