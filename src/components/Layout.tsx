import { Link, NavLink } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks, siteConfig } from '../data/siteData'
import { BackToTop } from './BackToTop'
import { StructuredData } from './StructuredData'

export function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [logoSrc, setLogoSrc] = useState('/applake-logo.svg')
  const [logoError, setLogoError] = useState(false)

  function handleLogoError() {
    if (logoSrc.endsWith('.svg')) {
      setLogoSrc('/applake-logo.svg')
    } else {
      setLogoError(true)
    }
  }

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 450)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,33,92,0.18),_transparent_35%)] text-white">
      {loading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-300">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-pink-500" />
            Preparing your experience...
          </div>
        </div>
      )}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            {!logoError ? (
              <img src={logoSrc} alt="APPLAKE" className="h-10 w-auto" onError={handleLogoError} />
            ) : (
              <span className="text-lg font-semibold tracking-[0.2em] text-white">{siteConfig.companyName.replace('PRIVATE LIMITED', '')}</span>
            )}
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `transition hover:text-white ${isActive ? 'text-white' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-pink-500/40 bg-pink-500/10 px-4 py-2 text-sm font-medium text-pink-200 transition hover:bg-pink-500/20"
            >
              Book Consultation <ArrowRight size={16} />
            </Link>
          </div>
          <button
            type="button"
            className="rounded-full border border-white/10 p-2 text-zinc-200 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-white/10 bg-zinc-950/95 px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3 text-sm text-zinc-300">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => `transition ${isActive ? 'text-white' : 'hover:text-white'}`}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>
      <StructuredData />

      <BackToTop />

      <footer className="border-t border-white/10 bg-black/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div>
            {!logoError ? (
              <img src={logoSrc} alt="APPLAKE" className="h-12 w-auto" onError={handleLogoError} />
            ) : (
              <h3 className="text-lg font-semibold">{siteConfig.companyName}</h3>
            )}
            <p className="mt-3 text-sm text-zinc-400">{siteConfig.tagline}</p>
            <p className="mt-4 text-sm text-zinc-400">{siteConfig.location}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              {navLinks.map((link) => (
                <li key={link.href}><Link to={link.href} className="hover:text-white">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Legal</h4>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Services</h4>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li>Mobile Apps</li>
              <li>Web Platforms</li>
              <li>Cloud & Backend</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li><a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a></li>
              <li><a href={siteConfig.website} className="hover:text-white">{siteConfig.website}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-zinc-500 sm:px-6 lg:px-8">
          © 2026 APPLAKE PRIVATE LIMITED. All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}
