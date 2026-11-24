import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { services } from '../data.js'

export default function Services() {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-label', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      })
      gsap.from('.service-row', {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power4.out',
        scrollTrigger: { trigger: '.service-list', start: 'top 80%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section services" id="services" ref={ref}>
      <h2 className="section-label services-label">/Services.</h2>
      <p className="lead services-lead">
        A mix of planning, people and precise execution, from the first brief to the final delivery.
      </p>

      <ol className="service-list">
        {services.map((s, i) => (
          <li className="service-row" key={s.title}>
            <div className="service-head">
              <span className="service-title">{s.title}</span>
              <sup className="service-num">({i + 1})</sup>
            </div>
            <p className="service-note">{s.note}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
