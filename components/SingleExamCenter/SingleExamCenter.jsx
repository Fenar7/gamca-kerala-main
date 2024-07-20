import './singlecenter.css'
import Button from '@/components/Button/Button';
import Image from 'next/image';

function SingleExamCenter({title,placename, secondtitle, paragraph, image1, bgURL, centeres}) {
  const bgStyle = {
    backgroundImage: `url(${bgURL})`,
  };


  return (
    <section className="single-exam-centre-container-main">
      <div className="hero-container-main" style={bgStyle}>
        <div className="hero-container container d-flex align-items-center justify-content-center flex-column text-center">
          <h1>{title}</h1>
          <div className="breadcrumb">
            <a href="/">Home</a><span>&gt;</span>
            <a href="">{placename}</a>
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

          </div>
          </div>
        </div>
      </div>

      <div className="centeres-container-main container">
        <div className="heading margin-bottom">
          <h3>Gamca Approved Medical Examination Centers In {placename}</h3>
        </div>

        <div className="cards-container margin-bottom">
        {centeres.map((centre, index) => (
        <div className="cardd" key={index}>
          <h4>{centre.name}</h4>
          <p>{centre.address}</p>
        </div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default SingleExamCenter
