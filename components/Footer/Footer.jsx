import './footer.css'

function Footer() {
  return (
    <footer className="container margin-bottom">
            <div className="row d-flex footer-row">
                <div className="col-12 col-md-3 logo navigation">    
                  <p className="mt-3">The Innovation in your Bathspace</p>
                </div>
                <div className="col-12 col-md-3 navigation">
                  <h2>Navigation</h2>
                  <ul>
                    <a href="./index.html"><li>Home</li></a>
                    <a href="./aboutus.html"><li>About</li></a>
                    <a href="./products.html"><li>Prodcuts</li></a>
                    <a href="./solutions.html"><li>Solutions</li></a>
                    <a href="./contactus.html"><li>Contact</li></a>
                  </ul>
                </div>
                <div className="col-12 col-md-3 navigation">
                  <h2>Follow Us</h2>
                  <ul>
                    <a href="https://www.instagram.com/berad_india/"><li>Instgram</li></a>
                    <a href="https://www.facebook.com/profile.php?id=61557477149655"><li>Facebook</li></a>
                    <a href="https://twitter.com/berad_india"><li>Twitter</li></a>
                    <a href="https://www.linkedin.com/company/beradindia/about/?viewAsMember=true"><li>Linkedin</li></a>
                    <a href="https://www.youtube.com/channel/UCi-GPNQP1k6XVEqW1nBOL1Q"><li>Youtube</li></a>
                  </ul>
                </div>
                <div className="col-12 col-md-3 navigation contact-us">
                  <h2>Contact Us</h2>
                  <ul>
                    <a href=""> <li>+91 9108552925</li></a>
                    <a href=""><li>hi@berad.in</li></a>
                    <a href=""><li>Berad technology VJG8+32Q, AB Road, Akshayanagara West, Akshayanagar, Bengaluru, Karnataka 560076</li></a>
                  </ul>
                </div>
            </div>
    </footer>
  )
}

export default Footer
