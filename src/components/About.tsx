import './About.css'

const values = [
  {
    title: 'Strategy-First',
    copy:
      'Every campaign starts with a clear objective, refined messaging, and smart testing plans so design and copy work toward measurable growth.',
  },
  {
    title: 'Collaborative Delivery',
    copy:
      'We plug into your existing tools and workflows, keeping communication transparent and feedback loops short with daily async updates.',
  },
  {
    title: 'Reliable Execution',
    copy:
      'From data-backed creative to QA-ready builds, our team is obsessive about the details that protect your brand and maximize conversions.',
  },
]

export function About() {
  return (
    <section className="about-section">
      <div className="section-shell">
        <div className="about-heading">
          <div>
            <span className="about-eyebrow">About Grafik Studio</span>
            <h2>Working partners for performance-focused teams</h2>
          </div>
          <p>
            Grafik Studio blends lifecycle strategy, senior creative talent, and dependable project
            management to help retention teams move fast without sacrificing brand integrity. We
            operate as a true extension of your marketing org so every send feels on-brand, on time,
            and engineered for results.
          </p>
        </div>

        <div className="about-grid">
          <article className="about-story">
            <h3>Our approach</h3>
            <p>
              We hire full-time email strategists, art directors, copywriters, and developers who
              specialize in Klaviyo and enterprise ESPs. That continuity means we understand your
              data, voice, and compliance requirements with minimal ramp time. Expect proactive
              roadmaps, consistent QA, and a team that cares about your KPIs as much as you do.
            </p>
            <p>
              Whether you need a dedicated pod or on-demand capacity, we structure engagement models
              around your workflow. Slack huddles, shared dashboards, and recurring performance
              reviews keep everyone aligned and accountable.
            </p>
          </article>

          <div className="about-values">
            {values.map((value) => (
              <div key={value.title} className="about-value-card">
                <h4>{value.title}</h4>
                <p>{value.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
