import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { site, navLinks, serviceLinks, socials } from '../data.js'

// Two stacked copies of each label; hovering rolls the label up, like the Framer original.
function Roll({ children, ...props }) {
  return (
    <span className="roll" {...props}>
      <span>{children}</span>
      <span aria-hidden="true">{children}</span>
    </span>
  )
}

export default function Nav() {
  const { pathname } = useLocation()
  const home = pathname === '/'
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(!home)
  const menuRef = useRef(null)

  const [onFooter, setOnFooter] = useState(false)

  // The nav is white over the home hero photo, dark over light sections, and white again over the dark footer.
  useEffect(() => {
    setOpen(false)
    const onScroll = () => {
      setDark(!home || window.scrollY > window.innerHeight * 0.85)
      const footer = document.querySelector('.footer')
      if (footer) {
        const r = footer.getBoundingClientRect()
        setOnFooter(r.top < 60 && r.bottom > 60)
      } else {
        setOnFooter(false)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [home, pathname])

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Animate the mobile menu in and out.
  useLayoutEffect(() => {
    if (!menuRef.current) return
    if (open) {
      gsap.fromTo(
        menuRef.current,
        { clipPath: 'inset(0 0 100% 0)' },
        { clipPath: 'inset(0 0 0% 0)', duration: 0.7, ease: 'expo.inOut' },
      )
      gsap.fromTo('.menu-item', { yPercent: 110 }, { yPercent: 0, duration: 0.8, stagger: 0.06, ease: 'power4.out', delay: 0.25 })
    }
  }, [open])

  const hashHref = (hash) => (home ? `#${hash}` : `/#${hash}`)

  return (
    <header className={`nav ${dark ? 'is-dark' : ''} ${onFooter ? 'on-footer' : ''}`}>
      <Link to="/" className="nav-logo" aria-label="Home">
        {site.logo}
      </Link>

      <nav className="nav-col nav-main" aria-label="Main">
        {navLinks.map((l) => (
          <a key={l.label} href={l.hash ? hashHref(l.hash) : '/'} className="nav-link">
            <Roll>{l.label}</Roll>
          </a>
        ))}
      </nav>

      <nav className="nav-col nav-services" aria-label="Services">
        {serviceLinks.map((l) => (
          <a key={l.label} href={hashHref(l.hash)} className="nav-link">
            <Roll>{l.label}</Roll>
          </a>
        ))}
      </nav>

      <nav className="nav-col nav-social" aria-label="Social">
        {socials.map((s) => (
          <a key={s.label} href={s.href} className="nav-link" target="_blank" rel="noreferrer">
            <Roll>{s.label} →</Roll>
          </a>
        ))}
      </nav>

      <button
        className={`burger ${open ? 'is-open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        <span />
        <span />
      </button>

      <div className={`mobile-menu ${open ? 'is-open' : ''}`} ref={menuRef} aria-hidden={!open}>
        <div className="mobile-menu-inner">
          {[...navLinks.map((l) => ({ ...l, href: l.hash ? hashHref(l.hash) : '/' })), ...serviceLinks.map((l) => ({ label: l.label, href: hashHref(l.hash) }))].map((l) => (
            <div className="menu-clip" key={l.label + l.href}>
              <a className="menu-item" href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </div>
          ))}
          {socials.map((s) => (
            <div className="menu-clip" key={s.label}>
              <a className="menu-item menu-social" href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
