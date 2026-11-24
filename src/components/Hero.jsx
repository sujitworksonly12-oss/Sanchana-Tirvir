import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { site } from '../data.js'

export default function Hero() {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (!reduce) {
        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
        tl.from('.hero-photo', { clipPath: 'inset(100% 0% 0% 0%)', duration: 1.6, ease: 'expo.inOut' })
          .from('.hero-photo img', { scale: 1.25, duration: 2, ease: 'power3.out' }, 0)
          .from('.hero-word', { yPercent: 110, duration: 1.1, stagger: 0.09 }, 0.6)
          .from('.hero-meta > *', { opacity: 0, y: 14, duration: 0.9, stagger: 0.08 }, 1.1)
          .from('.hero-tagline', { opacity: 0, y: 14, duration: 0.9 }, 1.3)
      }

      // Subtle parallax on the photo while scrolling through the hero.
      gsap.to('.hero-photo img', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.to('.hero-text', {
        yPercent: -30,
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" ref={ref}>
      <div className="hero-photo">
        <img src="/images/hero.jpg" alt="Sanchana Tirvir" />
      </div>
      <div className="hero-shade" aria-hidden="true" />

      <div className="hero-text">
        <h1 className="hero-title">
          <span className="mask">
            <span className="hero-word">Organised</span>
          </span>{' '}
          <span className="mask">
            <span className="hero-word serif">chaos,</span>
          </span>
          <br />
          <span className="mask">
            <span className="hero-word serif">real</span>
          </span>{' '}
          <span className="mask">
            <span className="hero-word">impact.</span>
          </span>
        </h1>
      </div>

      <div className="hero-meta">
        <p>
          <strong>{site.heroRole}</strong>
        </p>
        <p>{site.heroSub}</p>
        <p className="hero-tagline">{site.heroTagline}</p>
      </div>
    </section>
  )
}
