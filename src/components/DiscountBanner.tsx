import discountImage from '../assets/discount-bg.png'
import './DiscountBanner.css'
import { useCalendly } from './CalendlyProvider'

export function DiscountBanner() {
  const { openCalendly } = useCalendly()

  return (
    <section className="discount-section">
      <div className="section-shell">
        <div className="discount-card">
          <div className="discount-copy">
            <p className="discount-eyebrow">Limited Time</p>
            <h3>Get 50% Off on black friday Emails</h3>
            <p>
              Secure premium email design and strategy for half the cost during
              our Black Friday offer. Scale your campaigns with proven creative
              systems built to convert.
            </p>
            <button className="primary-button outline" onClick={openCalendly}>
              Book a call <span aria-hidden="true">→</span>
            </button>
          </div>
          <div className="discount-image">
            <img src={discountImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
