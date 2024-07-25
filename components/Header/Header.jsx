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
                <Link href="/about">About us</Link>
              </li>

              <li>
                <Link href="/fees">Fees</Link>
              </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                GCC Countries
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/gcccountries/gamca-medical-appointment-for-bahrain">Bahrain</a>
                  <a className="dropdown-item" href="/gcccountries/gamca-medical-appointment-for-kuwait">Kuwait</a>
                  <a className="dropdown-item" href="/gcccountries/gamca-medical-appointment-for-oman">Oman</a>
                  <a className="dropdown-item" href="/gcccountries/gamca-medical-appointment-for-qatar">Qatar</a>
                  <a className="dropdown-item" href="/gcccountries/gamca-medical-appointment-for-saudiarabia">Saudi Arabia</a>
                  <a className="dropdown-item" href="/gcccountries/gamca-medical-appointment-for-uae">UAE</a>
                  <a className="dropdown-item" href="/gcccountries/gamca-medical-appointment-for-yemen">Yemen</a>
                </div>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Medical Centers
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-ahmedabad">Ahmedabad</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-goa">Goa</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-hyderabad">Hyderabad</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-jaipur">Jaipur</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-kolkata">Kolkata</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-lucknow">Lucknow</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-mangalore">Mangalore</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-manjeri">Manjeri</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-mumbai">Mumbai</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-new-delhi">New Delhi</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-tirur">Tirur</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-trichy">Trichy</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-triuvananthapuram">Trivandrum</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-patna">Patna</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-bangalore">Kutch</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-bangalore">Banglore</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-calicut">Calicut</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-chennai">Chennai</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-cochin">Cochin</a>
                </div>
            </li>

              <li>
                <Link href="/wafid">WAFID</Link>
              </li>

              <li>
                <Link href="/faq">FAQ</Link>
              </li>

              <li>
                <Link href="/terms&conditions">Terms & Conditions</Link>
              </li>

              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              
            </ul>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-mobile">
      <a className="navbar-brand" href="#"><img src="/logo-footer.svg" alt="" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/fees">Fees</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              GCC Countries
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="/gcccountries/gamca-medical-appointment-for-bahrain">Bahrain</a>
                  <a className="dropdown-item" href="/gcccountries/gamca-medical-appointment-for-kuwait">Kuwait</a>
                  <a className="dropdown-item" href="/gcccountries/gamca-medical-appointment-for-oman">Oman</a>
                  <a className="dropdown-item" href="/gcccountries/gamca-medical-appointment-for-qatar">Qatar</a>
                  <a className="dropdown-item" href="/gcccountries/gamca-medical-appointment-for-saudiarabia">Saudi Arabia</a>
                  <a className="dropdown-item" href="/gcccountries/gamca-medical-appointment-for-uae">UAE</a>
                  <a className="dropdown-item" href="/gcccountries/gamca-medical-appointment-for-yemen">Yemen</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Medical Centers
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="/ahmedabad">Ahmedabad</a>
            <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-ahmedabad">Ahmedabad</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-goa">Goa</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-hyderabad">Hyderabad</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-jaipur">Jaipur</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-kolkata">Kolkata</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-lucknow">Lucknow</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-mangalore">Mangalore</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-manjeri">Manjeri</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-mumbai">Mumbai</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-new-delhi">New Delhi</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-tirur">Tirur</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-trichy">Trichy</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-triuvananthapuram">Trivandrum</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-patna">Patna</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-bangalore">Kutch</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-bangalore">Banglore</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-calicut">Calicut</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-chennai">Chennai</a>
                  <a className="dropdown-item" href="/medicalcenters/gamca-approved-medical-examination-centers-in-cochin">Cochin</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/wafid">WAFID</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/faq">FAQ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Terms & Conditions</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
    </nav>
    
  )
}

export default Header
