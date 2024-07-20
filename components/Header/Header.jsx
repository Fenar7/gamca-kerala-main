import React from 'react'
import Image from 'next/image'
import './header.css'
import Link from 'next/link'

function Header({phone, email}) {
  return (
    <nav className="header-container">
      <div className="header-top d-flex justify-content-between align-items-center container">
        <div className="logo-container position-relative">
            <Image
            src="/gamca-logo.svg"
            layout="fill"
            objectFit="contain"
            alt="gamca kerala logo"
            />
        </div>
        
        <div className="contact-container d-flex align-items-center">
            <div className="contact-card d-flex align-items-center">
                <div className="circle d-flex justify-content-center align-items-center">
                <div className="icon position-relative">
                  <Image
                    src="/call-icon.svg"
                    layout="fill"
                    objectFit="contain"
                    alt="call-icon"
                    />
                </div>
                </div>
                <div className="info">
                  <h6>For Technical Support</h6>
                  <p>{phone}</p>
                </div>
            </div>

            <div className="contact-card d-flex align-items-center">
                <div className="circle d-flex justify-content-center align-items-center">
                <div className="icon position-relative">
                  <Image
                    src="/mail-icon.svg"
                    layout="fill"
                    objectFit="contain"
                    alt="call-icon"
                    />
                </div>
                </div>
                <div className="info">
                  <h6>Have queries Mail us</h6>
                  <p>{email}</p>
                </div>
            </div>
        </div>
      </div>
      <div className="header-bottom d-flex align-items-center justify-content-center">
        <div className="container header-bottom-container d-flex align-items-center justify-content-center">
            <ul className="d-flex align-items-center justify-content-center">
              <li>
                <Link href="/" className="active">Home</Link>
              </li>

              <li>
                <Link href="/">About us</Link>
              </li>

              <li>
                <Link href="/">Fees</Link>
              </li>

              <li>
                <Link href="/">Countries</Link>
              </li>

              <li>
                <Link href="/">GCC Countries</Link>
              </li>

              <li>
                <Link href="/">Medical Centers</Link>
              </li>

              <li>
                <Link href="/">WAFID</Link>
              </li>

              <li>
                <Link href="/">FAQ</Link>
              </li>

              <li>
                <Link href="/">Terms & Conditions</Link>
              </li>

              <li>
                <Link href="/">Contact Us</Link>
                
              </li>
              
            </ul>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-mobile">
      <a className="navbar-brand" href="#">BrandName</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Services
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Service 1</a>
              <a className="dropdown-item" href="#">Service 2</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Service 3</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    </nav>
    
  )
}

export default Header
