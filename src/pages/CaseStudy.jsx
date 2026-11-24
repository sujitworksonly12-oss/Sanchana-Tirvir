import { useLayoutEffect, useRef } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { gsap } from 'gsap'
import { works } from '../data.js'
import Footer from '../components/Footer.jsx'

export default function CaseStudy() {
  const { slug } = useParams()
  const index = works.findIndex((w) => w.slug === slug)
  const ref = useRef(null)

  useLayoutEffect(() => {
    if (index < 0) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power4.out' } })
        .from('.cs-title .line', { yPercent: 110, duration: 1.2, stagger: 0.1 })
        .from('.cs-meta > *', { opacity: 0, y: 16, duration: 0.8, stagger: 0.06 }, 0.5)
        .from('.cs-cover', { clipPath: 'inset(0 0 100% 0)', duration: 1.4, ease: 'expo.inOut' }, 0.3)
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        })
      })
      gsap.utils.toArray('.cs-gallery img').forEach((img) => {
        gsap.from(img.parentElement, {
          clipPath: 'inset(0 0 100% 0)',
          duration: 1.2,
          ease: 'expo.inOut',
          scrollTrigger: { trigger: img, start: 'top 90%' },
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [index, slug])

  if (index < 0) return <Navigate to="/" replace />

  const w = works[index]
  const next = works[(index + 1) % works.length]

  return (
    <main className="case" ref={ref}>
      <header className="cs-hero">
        <Link to="/#works" className="back-link">
          ← All work
        </Link>
        <h1 className="cs-title">
          <span className="mask">
            <span className="line">{w.title}</span>
          </span>
        </h1>
        <p className="cs-tagline">{w.tagline}</p>
      </header>

      <div className="cs-meta">
        <div>
          <span className="meta-label">Client</span>
          <span className="meta-value">{w.client}</span>
        </div>
        <div>
          <span className="meta-label">Agency</span>
          <span className="meta-value">{w.agency}</span>
        </div>
        <div>
          <span className="meta-label">My role</span>
          <span className="meta-value">{w.role}</span>
        </div>
        <div>
          <span className="meta-label">Timeline</span>
          <span className="meta-value">{w.timeline}</span>
        </div>
        <div>
          <span className="meta-label">Location</span>
          <span className="meta-value">{w.location}</span>
        </div>
      </div>

      <figure className={`cs-cover ${w.coverContain ? 'is-contain' : ''}`}>
        <img src={w.cover} alt={w.title} />
      </figure>

      <section className="cs-block reveal">
        <h2 className="section-label">/About the client.</h2>
        <p className="lead">{w.about}</p>
      </section>

      <section className="cs-block reveal">
        <h2 className="section-label">/The challenge.</h2>
        <p className="lead">{w.challenge}</p>
      </section>

      <section className="cs-block reveal">
        <h2 className="section-label">/My approach.</h2>
        <ul className="approach">
          {w.approach.map(([label, text]) => (
            <li key={label}>
              <h3>{label}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="cs-block reveal">
        <h2 className="section-label">/The outcome.</h2>
        <p className="lead">{w.outcome}</p>
      </section>

      {w.gallery.length > 0 && (
        <section className="cs-gallery-wrap">
          <h2 className="section-label reveal">/Gallery.</h2>
          <div className="cs-gallery">
            {w.gallery.map((g) => (
              <figure key={g.src}>
                <img src={g.src} alt={g.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </section>
      )}

      <Link to={`/work/${next.slug}`} className="next-project">
        <span className="meta-label">Next project</span>
        <span className="next-title">
          {next.title} <span aria-hidden="true">→</span>
        </span>
      </Link>

      <Footer />
    </main>
  )
}
