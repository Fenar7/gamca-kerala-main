import ContactSection from "@/components/ContactSection/ContactSection"
import './contact.css'

function page() {
  return (
    <div>
      <ContactSection/>
      <div className="heading container">
      <h2>Our Location</h2>
      </div>
      <div className="map-container container margin-bottom">
            <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.091185862034!2d75.78825907422893!3d11.254702250191416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65973a22afff1%3A0x1a942678af0620ba!2sGAMCA%20CALICUT!5e0!3m2!1sen!2sin!4v1721834718158!5m2!1sen!2sin" 
        style={{ border: 0, width: '100%', height: '100%' }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>

      </div>
    </div>
  )
}

export default page
