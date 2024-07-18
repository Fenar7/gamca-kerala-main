import './client.css'

function ClientReviews() {
  return (
    <section className="client-reviews-container-main margin-bottom">
      <div className="client-reviews-container container">
        <div className="head d-flex align-items-center justify-content-between margin-bottom">
            <div className="heading">
                <h2>Client Reviews</h2>
            </div>

            <div className="rating d-flex align-items-center">
                    <h4>4.9</h4>
                    <div className="stars d-flex align-items-center">
                        <img src="/star.svg" alt="" />
                        <img src="/star.svg" alt="" />
                        <img src="/star.svg" alt="" />
                        <img src="/star.svg" alt="" />
                        <img src="/star.svg" alt="" />
                    </div>
                    <img src="/ongoogle.svg" alt="" />
            </div>
        </div>

        <div className="review-cards-container d-flex align-items-center justify-content-between">
            <div className="cardd d-flex flex-column align-items-start justify-content-between">
                <img src="/user-icon.svg" alt="" />
                <h6>Sageesh Mm</h6>
                <p>Staff is very caring and helpful especially the short guy ! Forgot his name ! Keep up the good work guys</p>
            </div>

            <div className="cardd d-flex flex-column align-items-start justify-content-between">
                <img src="/user-icon.svg" alt="" />
                <h6>Sageesh Mm</h6>
                <p>Staff is very caring and helpful especially the short guy ! Forgot his name ! Keep up the good work guys</p>
            </div>

            <div className="cardd d-flex flex-column align-items-start justify-content-between">
                <img src="/user-icon.svg" alt="" />
                <h6>Sageesh Mm</h6>
                <p>Staff is very caring and helpful especially the short guy ! Forgot his name ! Keep up the good work guys</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ClientReviews
