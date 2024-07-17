import './hero.css'
import Button from '@/components/Button/Button'

function Hero({title, subtext}) {
  return (
    <section className="hero-container-main d-flex flex-column align-items-center justify-content-center">
      <div className="hero-container container text-center d-flex flex-column align-items-center justify-content-center">
        <h1>{title}</h1>
        <p>{subtext}</p>
        <Button text={"Book Appointment"} link={"#"}/>
      </div>
      <div className="overlay"></div>
    </section>
  )
}

export default Hero
