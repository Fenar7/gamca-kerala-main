import Button from '@/components/Button/Button'
import React from 'react'

function AboutSection({title, description}) {
  return (
    <section className="about-us-container-main">
        <div className="about-us-container container">
            <div className="row">
                <div className="col-6 text-container">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <Button text="Book Appointment"/>
                </div>
                <div className="col-6 text-container">
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
