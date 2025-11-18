import { Layers, Repeat, Clock3, ShieldCheck, Users, Headphones } from 'lucide-react'
import './Benefits.css'

const benefits = [
  {
    title: 'Unlimited Design Projects',
    body:
      'Submit and line up an unlimited number of design projects tailored to your campaigns.',
    icon: Layers,
  },
  {
    title: 'Unlimited Revisions',
    body: 'Submit as many revisions as needed until every send is perfect.',
    icon: Repeat,
  },
  {
    title: '1-2 Day Turnaround',
    body: 'Always have a clear timeline for your designs with delivery in under two days.',
    icon: Clock3,
  },
  {
    title: 'Vetted Designers',
    body: 'Only top-tier designers who meet Grafik Studio standards work on your account.',
    icon: ShieldCheck,
  },
  {
    title: 'Team Collaboration',
    body:
      'Invite your marketing team to join forces, leave feedback, and track updates together.',
    icon: Users,
  },
  {
    title: '12/6 Customer Support',
    body: 'Reach out for prompt responses Monday through Saturday.',
    icon: Headphones,
  },
]

export function Benefits() {
  return (
    <section className="benefits-section">
      <div className="section-shell">
        <div className="benefits-header">
          <span className="benefits-eyebrow">What you get with every email</span>
          <h2>Consistent, reliable deliverables from start to finish.</h2>
        </div>
        <div className="benefits-grid">
          {benefits.map(({ title, body, icon: Icon }) => (
            <article className="benefit-card" key={title}>
              <div className="benefit-icon" aria-hidden="true">
                <Icon size={24} strokeWidth={1.7} />
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
