import './contactsection.css'

function ContactSection() {
  return (
      <section className="contact-us-section container margin-bottom" id="contact">
      <div className="row contact-us d-flex align-items-center justify-content-center">
        <div className="col-12 col-md-6 text-content d-flex flex-column justify-content-center">
          <h4>Hey There</h4>
          <h5>
            We&apos;d Love To Hear From<br /><span>You</span>
          </h5>
          <p>
          Have Some Doubts?<br />
          Send us a message and we’ll respond as soon as possible
          </p>
          <div className="contact-details d-flex flex-column">
            <div className="contact-item d-flex align-items-center contact-us-txt">
              <img src="/call-icon-white.svg" alt="call icon" />
              <p>+91 9108552925</p>
            </div>
            <div className="contact-item d-flex align-items-center contact-us-txt">
              <img src="/mail-icon-white.svg" alt="mail icon" />
              <p>hi@berad.in</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 contact-form">
          <h1>Reach Us</h1>
          <form action="" className="d-flex flex-column">
            <div className="row d-flex justify-content-between">
              <input type="text" placeholder="Name" className="col-6" />
              <input type="text" placeholder="Mobile" className="col-6" />
            </div>
            <div className="row">
              <input type="email" placeholder="Email" />
            </div>
            <div className="row">
              <textarea placeholder="Message" rows="4"></textarea>
            </div>
            <button className="button2">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
