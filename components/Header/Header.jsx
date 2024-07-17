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
    </nav>
  )
}

export default Header
