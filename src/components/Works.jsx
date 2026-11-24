import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { works } from '../data.js'

export default function Works() {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.works-label', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      })
      gsap.utils.toArray('.work-card').forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 88%' },
        })
        gsap.from(card.querySelector('.work-media'), {
          clipPath: 'inset(0 0 100% 0)',
          duration: 1.3,
          ease: 'expo.inOut',
          scrollTrigger: { trigger: card, start: 'top 88%' },
        })
        // Image drifts slightly as the card scrolls past.
        gsap.fromTo(
          card.querySelector('.work-media img'),
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: 'none',
            scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true },
          },
        )
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section works" id="works" ref={ref}>
      <h2 className="section-label works-label">/Works.</h2>
      <p className="lead works-lead">
        From concept to execution, here's a look at some of the work I've crafted.
      </p>

      <div className="work-grid">
        {works.map((w) => (
          <Link to={`/work/${w.slug}`} className="work-card" key={w.slug}>
            <div className={`work-media ${w.coverContain ? 'is-contain' : ''}`}>
              <img src={w.cover} alt={w.title} loading="lazy" />
            </div>
            <div className="work-info">
              <h3 className="work-title">{w.title}</h3>
              <p className="work-sub">{w.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
