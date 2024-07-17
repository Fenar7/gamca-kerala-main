import './hero.css'

function Hero({title, subtext}) {
  return (
    <section className="hero-container-main d-flex flex-column align-items-center justify-content-center">
      <div className="hero-container container text-center">
        <h1>{title}</h1>
        <p>{subtext}</p>
      </div>
    </section>
  )
}

export default Hero
