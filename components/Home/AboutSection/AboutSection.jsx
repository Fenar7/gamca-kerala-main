import Button from '@/components/Button/Button'
import React from 'react'
import Image from 'next/image'
import './about.css'

function AboutSection({title, description}) {
  return (
    <section className="about-us-container-main">
        <div className="about-us-container container d-flex flex-column align-items-center justify-content-center">
            <div className="row">
                <div className="col-6 text-container d-flex flex-column align-items-start justify-content-center">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <Button text="Book Appointment"/>
                </div>
                <div className="col-6 image-container d-flex align-items-center justify-content-center">
                    <div className="image position-relative">
                        <Image
                        src="/about-us-image.png"
                        layout="fill"
                        objectFit="contain"
                        alt="gamca kerala logo"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
