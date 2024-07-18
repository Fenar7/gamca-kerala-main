import Image from "next/image"
import './medicalcentres.css'

function MedicalCentres({title, points}) {
  return (
    <section className="medical-centres-container-main margin-top margin-bottom">
      <div className="medical-centres-container container">
        <div className="row">
            <div className="col-6 image-container d-flex align-items-center">
                <div className="image position-relative">
                    <Image
                        src="/doc-ins.png"
                        layout="fill"
                        objectFit="cover"
                        alt="image"
                    />
                </div>
            </div>
            <div className="col-6 text-container d-flex justify-content-center flex-column">
                <h3>{title}</h3>
                <div className="list-container d-flex flex-column">
                    {points.map((point, index) => (
                    <div className="list d-flex align-items-center" key={index}>
                    <img src="/tick-icon.svg" alt="" />
                    <p>{point}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default MedicalCentres
