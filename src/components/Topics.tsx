import { useEffect } from 'react'

export default function Topics() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.topic-item')
    if (!items.length) return

    const allLetters: HTMLSpanElement[] = []

    items.forEach((item) => {
      const text = item.textContent || ''
      item.setAttribute('aria-label', text) // preserve for screen readers after DOM manipulation
      item.textContent = ''
      Array.from(text).forEach((char) => {
        const span = document.createElement('span')
        span.className = 'topic-letter'
        span.setAttribute('aria-hidden', 'true')
        span.textContent = char
        item.appendChild(span)
        allLetters.push(span)
      })
    })

    const section = document.getElementById('topics')
    if (!section) return
    const total = allLetters.length
    let ticking = false

    function update() {
      const vh = window.innerHeight
      const rect = section!.getBoundingClientRect()
      const progress = (vh * 0.5 - rect.top) / rect.height
      const active = Math.round(Math.max(0, Math.min(1, progress)) * total)
      allLetters.forEach((letter, i) => {
        letter.classList.toggle('active', i < active)
      })
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => { update(); ticking = false })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <section id="topics">
      <div className="grid-row">
        <div className="grid-side"></div>
        <div className="grid-content">
          <div className="topics-header">
            <h2 className="topics-title"><strong>Topics</strong> <span>covered in the workshop</span></h2>
            <p className="topics-sub">We have a dedicated mission for each of these themes</p>
          </div>
          <div className="topics-list">
            <p className="topic-item">Decision making</p>
            <p className="topic-item">Delegation</p>
            <p className="topic-item">Managing underperformance</p>
            <p className="topic-item">Conflict management</p>
            <p className="topic-item">Managing up</p>
            <p className="topic-item">Knowing yourself and self-awareness</p>
            <p className="topic-item">Complaints and grievances</p>
            <p className="topic-item">Time management</p>
            <p className="topic-item">Values and principles</p>
            <p className="topic-item">Goal setting</p>
            <p className="topic-item">Roles and task assignment</p>
            <p className="topic-item">Processes</p>
            <p className="topic-item">Monitoring and control</p>
            <p className="topic-item">Continuous improvement</p>
            <p className="topic-item">Knowing your people</p>
            <p className="topic-item">Building trust and a safe environment</p>
            <p className="topic-item">Communication</p>
            <p className="topic-item">Giving and receiving feedback</p>
            <p className="topic-item">Team member development</p>
            <p className="topic-item">Building culture</p>
          </div>
        </div>
        <div className="grid-side"></div>
      </div>
    </section>
  )
}
