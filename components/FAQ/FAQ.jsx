import './faq.css'

function FAQ() {
  return (
    <section className="faq-container-main container margin-top margin-bottom d-flex align-items-center justify-content-center flex-column">
        <div className="heading d-flex align-items-center justify-content-center flex-column">
            <h1>You Must Have Questions Right?</h1>
            <p>We’ll Answer Some of the Most Commonly Asked Questions</p>
        </div>

    <div className="faq-container margin-top accordion-container d-flex align-items-center justify-content-center">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              When will Orbital Shower be available in India?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Deliveries for the berad Shower in India are scheduled to commence in May 2024. Reservations are currently being accepted online, allowing interested customers to secure their berad Shower ahead of time.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              What colors and finishes will be available?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Matte White, Matte black, Chrome, Brushed steel and Brass.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What is included when I buy an Orbital Shower?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Black arrow pointing down<br />
              Rain shower head<br />
              Hand shower<br />
              Diverter<br />
              Shower drain<br />
              Control Dial<br />
              Core<br />
              Hi-Fi speaker (optional)<br />
              In addition, each shower system comes with specific installation components.
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default FAQ
