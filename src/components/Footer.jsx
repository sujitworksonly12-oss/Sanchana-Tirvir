import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { site, navLinks, socials } from '../data.js'

export default function Footer() {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-line', {
        yPercent: 100,
        duration: 1.1,
        stagger: 0.12,
        ease: 'power4.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      })
      gsap.from('.footer-name span', {
        yPercent: 100,
        duration: 1.4,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.footer-dark', start: 'top 85%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="contact" ref={ref}>
      <div className="cta">
        <p className="cta-small">Have a project in mind?</p>
        <h2 className="cta-big">
          <span className="mask">
            <span className="cta-line">Let's collaborate.</span>
          </span>
        </h2>
        <a className="cta-mail" href={`mailto:${site.email}`}>
          {site.email} <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="footer-dark">
        <div className="footer-cols">
          <nav aria-label="Footer navigation">
            <p className="footer-head">Navigate</p>
            {navLinks.map((l) => (
              <a key={l.label} href={l.hash ? `/#${l.hash}` : '/'} className="footer-link">
                {l.label}
              </a>
            ))}
          </nav>
          <nav aria-label="Follow">
            <p className="footer-head">Follow me</p>
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="footer-link" target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </nav>
          <div className="footer-loc">
            <p className="footer-head">Based in</p>
            <p className="footer-link">{site.location}</p>
          </div>
        </div>

        <p className="footer-name" aria-hidden="true">
          <span>{site.name}</span>
        </p>
        <p className="footer-copy">© {year} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
