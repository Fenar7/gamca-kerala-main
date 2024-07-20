import './singlecenter.css'

function SingleExamCenter({title,placename}) {
  const heroContainerMainStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };


  return (
    <section className="single-exam-centre-container-main">
      <div className="hero-container-main">
        <div className="hero-container container d-flex align-items-center justify-content-center flex-column text-center">
          <h1>{title}</h1>
          <div className="breadcrumb">
            <a href="/">Home</a><span>&gt;</span>
            <a href="">{placename}</a>
          </div>
        </div>
      </div>


    </section>
  )
}

export default SingleExamCenter
