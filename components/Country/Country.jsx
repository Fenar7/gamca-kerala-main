import  Button  from '@/components/Button/Button'
import './country.css'
import Image from 'next/image'

function Country({title, pagename, secondtitle, paragraph, image1, image2}) {
  return (
    <section>
      <div className="hero-container-main">
        <div className="hero-container container d-flex align-items-center justify-content-center flex-column text-center">
          <h1>{title}</h1>
          <div className="breadcrumb">
            <a href="/">Home</a><span>&gt;</span>
            <a href="">{pagename}</a>
          </div>
        </div>
      </div>

      <div className="info-section-container-main margin-bottom">
        <div className="info-section-container margin-top d-flex align-items-center justify-content-center">
          <div className="row container">
          <div className="col-12 col-md-6 text-container d-flex align-items-start justify-content-center flex-column">
            <h2>{secondtitle}</h2>
            <p>{paragraph}</p>
            <Button text="Book an Appointment"/>
          </div>
          <div className="col-12 col-md-6 image-container d-flex flex-column align-items-end justify-content-between">
            <div className="image position-relative">
              <Image
              src={image1}
              layout="fill"
              objectFit="cover"
              alt="gamca kerala logo"
              />
            </div>

            <div className="image position-relative">
              <Image
              src={image2}
              layout="fill"
              objectFit="cover"
              alt="gamca kerala logo"
              />
            </div>
          </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Country
