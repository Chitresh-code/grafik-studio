import serviceOne from '../assets/services-1.png'
import serviceTwo from '../assets/services-2.png'
import serviceThree from '../assets/services-3.png'

const services = [
  {
    image: serviceOne,
    step: '1. Share Your Vision',
    copy:
      'Effortlessly streamline your creative briefs using Project Management tools, Email, or WhatsApp. From personalized brand guidelines to essential assets, gather all your vision directives in one user-friendly space.',
  },
  {
    image: serviceTwo,
    step: '2. Designer in Action',
    copy:
      'We swiftly assign tasks based on your project requirements. Enjoy a rapid turnaround of 1-2 days, irrespective of your email volume.',
  },
  {
    image: serviceThree,
    step: '3. Unveil Your Design',
    copy:
      'No worries if it’s not perfect! Our team assures the finest and timely results, offering unlimited revisions and complete access to all source files.',
  },
]

export function Services() {
  return (
    <section className="services-section">
      <div className="section-shell">
        <div className="section-heading">
          <div className="section-heading-line" />
          <div>
            <h2>Our Services</h2>
            <p>Customized solutions to fit your brand’s email marketing needs.</p>
          </div>
        </div>
        <div className="services-grid">
          {services.map((item) => (
            <article className="service-card" key={item.step}>
              <div className="service-image">
                <img src={item.image} alt="" />
              </div>
              <div className="service-body">
                <h3>{item.step}</h3>
                <p>{item.copy}</p>
                <button className="link-button">
                  Learn More
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
