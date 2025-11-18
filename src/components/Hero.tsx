import heroBg from '../assets/hero-bg.jpg'
import heroOne from '../assets/hero-1.svg'
import heroTwo from '../assets/hero-2.svg'
import heroThree from '../assets/hero-3.svg'
import heroFour from '../assets/hero-4.svg'

const heroVisuals = [heroOne, heroTwo, heroThree, heroFour]

const heroColumns = [
  {
    items: heroVisuals,
    duration: 500,
  },
  {
    items: [...heroVisuals.slice(1), heroVisuals[0]],
    duration: 500,
  },
  {
    items: [...heroVisuals.slice(2), ...heroVisuals.slice(0, 2)],
    duration: 500,
  },
]

export function Hero() {
  return (
    <div
      className="hero-banner"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-body">
        <div className="hero-left">
          <span className="eyebrow">Your</span>
          <h1>
            Email Marketing
            <br />
            Experts
          </h1>
          <p className="hero-lede">
            Say goodbye to the hassle of email design and development! RapidX,
            your elite team of experts, is here to transform your campaigns and
            slash your hiring costs by 50%.
          </p>
          <div className="hero-bullets">
            <p>
              <strong>Proven Success:</strong> We turn emails into business
              masterpieces
            </p>
            <p>
              Results, Not Just Emails: Swiftly elevate your business with our
              impactful solutions
            </p>
          </div>
          <button className="primary-button">Get Your Free Consultation</button>
        </div>
        <div className="hero-right" aria-hidden="true">
          <div className="hero-columns">
            {heroColumns.map((column, columnIndex) => (
              <div
                className={`hero-column hero-column-${columnIndex + 1}`}
                key={columnIndex}
              >
                <div
                  className="hero-carousel-track"
                  style={{ animationDuration: `${column.duration}s` }}
                >
                  {[...column.items, ...column.items].map((art, index) => (
                    <img
                      key={`${columnIndex}-${art}-${index}`}
                      src={art}
                      className="hero-panel"
                      alt=""
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
