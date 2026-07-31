import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://muhammadaskar.me/'),
  alternates: {
    canonical: 'https://muhammadaskar.me/'
  },
  title: {
    default: 'Muhammad Askar - Software Engineer',
    template: '%s | Muhammad Askar'
  },
  description: 'Muhammad Askar is a Software Engineer specializing in building exceptional digital experiences.',
  keywords: ['Muhammad Askar', 'Software Engineer', 'Web Developer', 'Full Stack Developer'],
};

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          {/* ambient backdrop */}
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden text-zinc-900 dark:text-zinc-100"
          >
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="animate-float absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px] dark:bg-indigo-500/25" />
            <div className="animate-float absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-[120px] dark:bg-cyan-500/20 [animation-delay:-4s]" />
            <div className="animate-float absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-fuchsia-400/15 blur-[120px] dark:bg-fuchsia-500/15 [animation-delay:-8s]" />
          </div>

          <div className="flex min-h-screen w-full flex-col">
            <Header />
            <div className="relative mx-auto w-full max-w-3xl flex-1 px-4 pt-28 sm:px-6">
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
