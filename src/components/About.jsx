import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { about } from '../data.js'

export default function About() {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-label', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      })
      gsap.from('.about-photo', {
        clipPath: 'inset(0 0 100% 0)',
        duration: 1.2,
        ease: 'expo.inOut',
        scrollTrigger: { trigger: ref.current, start: 'top 65%' },
      })
      gsap.from('.about-lead', {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.about-text', start: 'top 80%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section about" id="about" ref={ref}>
      <h2 className="section-label about-label">/About.</h2>

      <div className="about-grid">
        <figure className="about-photo">
          <img src="/images/portrait.jpg" alt="Sanchana Tirvir in a blue suit" loading="lazy" />
        </figure>

        <div className="about-text">
          {about.paragraphs.map((p) => (
            <p className="lead about-lead" key={p}>
              {p}
            </p>
          ))}
          <a href="#works" className="more-link">
            More about my work <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
