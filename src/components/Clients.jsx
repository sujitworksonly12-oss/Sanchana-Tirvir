import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { clientLogos } from '../data.js'

// Endless horizontal strip of client logos.
export default function Clients() {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const ctx = gsap.context(() => {
      const track = ref.current.querySelector('.logo-track')
      const tween = gsap.to(track, { xPercent: -50, duration: 40, ease: 'none', repeat: -1 })
      return () => tween.kill()
    }, ref)
    return () => ctx.revert()
  }, [])

  const row = [...clientLogos, ...clientLogos]

  return (
    <section className="section clients" aria-label="Clients and brands" ref={ref}>
      <p className="clients-label">Brands & clients</p>
      <div className="logo-marquee">
        <div className="logo-track">
          {row.map((logo, i) => (
            <img
              key={logo.src + i}
              src={logo.src}
              alt={i < clientLogos.length ? logo.alt : ''}
              aria-hidden={i >= clientLogos.length ? 'true' : undefined}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
