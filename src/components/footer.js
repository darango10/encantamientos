import React from "react"
import imagen from '../images/logo.png'

const Footer = () => {
  return (
    <>
      <footer className="page_footer ds ms s-py-90 s-pb-lg-60 s-pt-xl-150 s-pb-xl-120">
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-5 col-lg-5 text-center text-lg-left">
              <a href="./" className="logo">
                <img src={imagen} alt="img"/>
                <span className="logo-text color-darkgrey">vedi</span>
              </a>
              <div className="divider-60 divider-lg-0"></div>
            </div>
            <div className="col-xl-2 col-lg-2 align-self-start text-center text-lg-left"
            >
              <div className="widget widget_nav_menu">
                <h3>Services</h3>
                <ul className="menu">
                  <li className="menu-item">
                    <a href="./shop-left.html">Shop</a>
                  </li>
                  <li className="menu-item">
                    <a href="./services2.html">Services</a>
                  </li>
                  <li className="menu-item">
                    <a href="./service-single.html">Single Service</a>
                  </li>
                </ul>
              </div>
              <div className="divider-60 divider-lg-0"></div>
            </div>
            <div className="col-xl-2 col-lg-2 align-self-start text-center text-lg-left"
            >
              <div className="widget widget_nav_menu">
                <h3>About Me</h3>
                <ul className="menu">
                  <li className="menu-item">
                    <a href="./index_blocks.html">Homeblocks</a>
                  </li>
                  <li className="menu-item">
                    <a href="./about.html">About</a>
                  </li>
                  <li className="menu-item">
                    <a href="./contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="divider-60 divider-lg-0"></div>
            </div>
            <div className="col-xl-3 col-lg-3 align-self-start text-center text-lg-left"
            >
              <div className="widget widget_text">
                <h3>Contact Info</h3>
                <p>
                  477 Jehovah Drive <br/>
                  Lexington, VA 24450
                </p>
                <p className="social-icons">
                  <a href="https://www.facebook.com/" className="fa fa-facebook" title="facebook"></a>
                  <a href="https://twitter.com/" className="fa fa-twitter" title="twitter"></a>
                  <a href="https://www.instagram.com/" className="fa fa-instagram" title="instagram"></a>
                  <a href="https://www.linkedin.com/" className="fa fa-linkedin" title="linkedin"></a>
                  <a href="https://www.youtube.com/" className="fa fa-youtube-play" title="youtube"></a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </footer>

      <section className="page_copyright ds ms s-py-25 s-bordertop-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 text-center">
              <p>&copy; Copyright <span className="copyright_year">2020</span> All Rights Reserved</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
