import React from "react"
import imagen from '../images/logo.png'
import logo from "../images/Encantamientos_Mesa de trabajo 1.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = () => {
  return (
    <>
      <footer className="page_footer ds ms s-py-90 s-pb-lg-60 s-pt-xl-150 s-pb-xl-120" style={{height:"300px"}}>
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-5 col-lg-5 text-center text-lg-left">
              <AniLink fade to="/" className="logo">
                <img className="logoImg" src={logo} alt={"Logo Encantamientos"}/>
                {/*<span className="logo-text color-darkgrey">vedi</span>*/}
              </AniLink>
              <div className="divider-60 divider-lg-0"></div>
            </div>
            <div className="col-xl-2 col-lg-2 align-self-start text-center text-lg-left"
            >
              <div className="widget widget_nav_menu">
                <h3>Servicios</h3>
                <ul className="menu">
                  <li className="menu-item">
                    <a href="./shop-left.html">Nuestros Servicios</a>
                  </li>
                </ul>
              </div>
              <div className="divider-60 divider-lg-0"></div>
            </div>
            <div className="col-xl-2 col-lg-2 align-self-start text-center text-lg-left"
            >
              <div className="widget widget_nav_menu">
                <h3>Nosotros</h3>
                <ul className="menu">
                  <li className="menu-item">
                    <a href="./index_blocks.html">Nosotros</a>
                  </li>
                  <li className="menu-item">
                    <a href="./about.html">Maestros</a>
                  </li>
                </ul>
              </div>
              <div className="divider-60 divider-lg-0"></div>
            </div>
            <div className="col-xl-3 col-lg-3 align-self-start text-center text-lg-left"
            >
              <div className="widget widget_text">
                <h3>Comunícate</h3>
                <p>
                  <a className="fs-24 links-maincolor-hover font-2" href="tel:+88003532455">
                    <mark>+1 (321)</mark>
                    352-4962</a>
                </p>
                {/*<p className="social-icons">*/}
                {/*  <a href="https://www.facebook.com/" className="fa fa-facebook" title="facebook"></a>*/}
                {/*  <a href="https://twitter.com/" className="fa fa-twitter" title="twitter"></a>*/}
                {/*  <a href="https://www.instagram.com/" className="fa fa-instagram" title="instagram"></a>*/}
                {/*  <a href="https://www.linkedin.com/" className="fa fa-linkedin" title="linkedin"></a>*/}
                {/*  <a href="https://www.youtube.com/" className="fa fa-youtube-play" title="youtube"></a>*/}
                {/*</p>*/}
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
