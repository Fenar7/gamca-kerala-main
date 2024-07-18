import './smcontact.css'

function SmContact({phone,email}) {
  return (
    <section className="sm-contact-container-main">
      <div className="sm-contact-container container">
        <h3>{title}</h3>
        <div className="contact-items">
            <div className="item">
                <img src="" alt="" />
                <p>Call Us:{phone}</p>
            </div>
            <div className="item">
                <img src="" alt="" />
                <p>Email:{email}</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default SmContact
