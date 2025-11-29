import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { navLinks } from '../data/navLinks'
import { useCalendly } from '../components/CalendlyProvider'
import {
  Rocket,
  Layers,
  Award,
  CheckCircle2,
  Handshake,
  PenTool,
  Send,
  RefreshCw,
} from 'lucide-react'
import './ServicesPage.css'

const plans = [
  {
    title: 'Essentials plan',
    subtitle: 'just want to kick things off',
    icon: Layers,
    includes: [
      '10 Emails Per Month',
      'Basic Flow Setup (5-10 Emails)',
      'Monthly Campaign Calender',
      'Monthly A/B Testing',
      'Domain Deliverability Monitoring',
      'Monthly Performance Report',
      'Unlimited Revisions',
    ],
  },
  {
    title: 'Advanced plan',
    subtitle: "We're ready to turn things up",
    icon: Rocket,
    includes: [
      '15 Emails Per Month',
      'Standard Flow Setup (10-15 Emails)',
      'Monthly Campaign Calender',
      'Monthly A/B Testing',
      'Domain Deliverability Monitoring',
      'Monthly Performance Report',
      'Unlimited Revisions',
      'SMS Marketing Included',
    ],
  },
  {
    title: 'Ultimate plan',
    subtitle: 'To infinity and beyond',
    icon: Award,
    includes: [
      '25 Emails Per Month',
      'Expansive Flow Setup (20-25 Emails)',
      'Monthly Campaign Calender',
      'Monthly A/B Testing',
      'Domain Deliverability Monitoring',
      'Monthly Performance Report',
      'Unlimited Revisions',
      'SMS Marketing Included',
      'Tech Stack Consultation',
    ],
  },
]

const steps = [
  {
    title: 'PARTNERSHIP INITIATION',
    icon: Handshake,
    description:
      'Book an Introduction Call: It all starts with a conversation. After you’ve decided to explore the immense potential of email marketing with RapidX, simply book an introduction call. This is where we’ll discuss your goals and objectives.',
  },
  {
    title: 'STRATEGIC ONBOARDING AND CAMPAIGN CREATION',
    icon: PenTool,
    description:
      'Onboarding Call: Once we’ve agreed to partner up, we’ll dive into your brand’s unique guidelines. This step is all about understanding your brand identity and values so we can reflect them in every email campaign.\nFlow Creation: Our team creates custom email flows from scratch, tailored to your brand’s story and objectives. These flows aren’t static; they’re dynamic, and we continuously optimize them to maximize engagement and conversions.\nCampaign Content: We align with your content calendar, ensuring that your campaigns are strategically timed to drive results.\nList Management: We clean up your Klaviyo account by expertly building and optimizing email lists to target the right audience.',
  },
  {
    title: 'DESIGN, REVIEW, AND SEND',
    icon: Send,
    description:
      'Design and Review: Initial email designs are meticulously crafted by our team. These designs are then presented on a MIRO board, awaiting your feedback. We welcome unlimited revisions to make sure your vision is realized.\nCampaign Scheduling: Once your email design is perfect, campaigns are scheduled for delivery at optimal times. We take care of sending campaigns while ensuring they reach an engaged and responsive audience. Our focus is on driving results and maximizing your ROI.',
  },
  {
    title: 'REGULAR STRATEGY AND COLLABORATION SESSIONS',
    icon: RefreshCw,
    description:
      'Every two weeks, we conduct strategy and collaboration sessions to ensure we’re consistently aligned with your business objectives. These sessions serve as a dynamic platform for idea generation, where we brainstorm and explore innovative approaches to drive your success. These calls are a testament to our commitment to your growth and a chance to keep refining our strategies.',
  },
]

export function ServicesPage() {
  const { openCalendly } = useCalendly()

  return (
    <div className="services-page">
      <section className="services-hero">
        <NavBar navLinks={navLinks} />
        <div className="section-shell services-hero-content">
          <div className="services-hero-copy">
            <h1>Our offer is transparent and straightforward.</h1>
            <p>
              While other agencies may capitalize on the scale of your business, we believe in keeping
              things straightforward and open. No hidden offers, just clear and honest business
              practices.
            </p>
          </div>
        </div>
      </section>

      <section className="services-plans">
        <div className="section-shell">
          <div className="plans-grid">
            {plans.map((plan) => (
              <article key={plan.title} className="plan-card">
                <header>
                  <p className="plan-subtitle">{plan.subtitle}</p>
                  <h3>{plan.title}</h3>
                  <plan.icon size={32} />
                </header>
                <div className="plan-includes">
                  <p>Includes:</p>
                  <ul>
                    {plan.includes.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={18} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="primary-button" onClick={openCalendly}>
                  Book a Call
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-how">
        <div className="section-shell">
          <div className="services-how-heading">
            <span>How it works</span>
            <h2>Proven process for impact</h2>
          </div>
          <div className="services-steps">
            {steps.map((step) => (
              <article key={step.title} className="services-step">
                <div className="step-icon">
                  <step.icon size={28} />
                </div>
                <div>
                  <h3>{step.title}</h3>
                  {step.description.split('\n').map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
