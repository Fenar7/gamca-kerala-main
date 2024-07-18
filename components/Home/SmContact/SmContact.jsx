import './smcontact.css'

function SmContact({title,phone,email}) {
  return (
    <section className="sm-contact-container-main d-flex align-items-center justify-content-center margin-bottom">
      <div className="sm-contact-container container d-flex align-items-center justify-content-center flex-column text-center">
        <h3>{title}</h3>
        <div className="contact-items">
            <div className="item d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                <g clip-path="url(#clip0_30_80)">
                    <path d="M24.2866 18.1661L18.8179 15.8223C18.5843 15.7227 18.3246 15.7018 18.078 15.7625C17.8315 15.8233 17.6113 15.9625 17.4507 16.1592L15.0288 19.1182C11.2279 17.3261 8.16904 14.2673 6.37695 10.4664L9.33594 8.04448C9.53305 7.88416 9.67256 7.664 9.73335 7.41731C9.79414 7.17061 9.7729 6.91083 9.67285 6.67729L7.3291 1.20854C7.21929 0.956788 7.02508 0.75124 6.77996 0.62734C6.53483 0.50344 6.25416 0.468955 5.98633 0.529831L0.908203 1.70171C0.649985 1.76133 0.419602 1.90672 0.254656 2.11415C0.0897096 2.32157 -5.94829e-05 2.57878 2.95713e-08 2.8438C2.95713e-08 15.3682 10.1514 25.5 22.6562 25.5C22.9213 25.5002 23.1787 25.4105 23.3862 25.2455C23.5937 25.0806 23.7392 24.8501 23.7988 24.5918L24.9707 19.5137C25.0312 19.2446 24.996 18.9628 24.8711 18.7168C24.7463 18.4708 24.5396 18.2761 24.2866 18.1661Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_30_80">
                    <rect width="25" height="25" fill="white" transform="translate(0 0.5)"/>
                    </clipPath>
                </defs>
            </svg>
                <p>Call Us:{phone}</p>
            </div>
            <div className="item d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20" fill="none">
                <path d="M22.6562 0.5H2.34375C1.04932 0.5 0 1.56331 0 2.875V17.125C0 18.4367 1.04932 19.5 2.34375 19.5H22.6562C23.9507 19.5 25 18.4367 25 17.125V2.875C25 1.56331 23.9507 0.5 22.6562 0.5ZM22.6562 2.875V4.894C21.5614 5.79744 19.816 7.20225 16.0846 10.163C15.2623 10.8185 13.6334 12.3932 12.5 12.3748C11.3668 12.3934 9.73735 10.8182 8.91538 10.163C5.18457 7.2027 3.43872 5.79759 2.34375 4.894V2.875H22.6562ZM2.34375 17.125V7.94157C3.4626 8.84461 5.04927 10.1118 7.46768 12.0308C8.53491 12.8821 10.4039 14.7614 12.5 14.75C14.5858 14.7614 16.4311 12.9094 17.5319 12.0312C19.9502 10.1123 21.5374 8.84471 22.6562 7.94162V17.125H2.34375Z" fill="white"/>
            </svg>
                <p>Email:{email}</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default SmContact
