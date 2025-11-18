type HeroCarouselProps = {
  images: string[]
  duration?: number
}

export function HeroCarousel({ images, duration = 500 }: HeroCarouselProps) {
  const slides = [...images, ...images]

  return (
    <div className="hero-column">
      <div
        className="hero-carousel-track"
        style={{ animationDuration: `${duration}s` }}
      >
        {slides.map((art, index) => (
          <img key={`${art}-${index}`} src={art} className="hero-panel" alt="" />
        ))}
      </div>
    </div>
  )
}
