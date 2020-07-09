import PropTypes from "prop-types"
import React from "react"
import logo from "../images/Encantamientos_Mesa de trabajo 1.svg"
import Navbar from "./navbar"
import AniLink from "gatsby-plugin-transition-link/AniLink"



const Header = ({ siteTitle }) => {


  return (
    <div className="header_absolute ">
      <section className="page_topline ds s-py-30 ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-4 col-md-4 text-lg-left text-center">
              <AniLink fade to="/" className="logo">
                <img className="logoImg" src={logo} alt={"Logo Encantamientos"}/>
                {/*<span className="logo-text color-darkgrey">vedi</span>*/}
              </AniLink>
            </div>
            <div
              className="col-xl-6 col-lg-8 col-md-8 some-links text-center text-lg-right d-flex justify-content-center justify-content-md-end align-items-center mt-2 mt-md-0">
              <a className="fs-24 links-maincolor-hover font-2" href="tel:+88003532455">
                <mark>+1 (321)</mark>
                352-4962</a>
              <AniLink fade to="/contacto" className="btn btn-outline-maincolor btn-medium  d-none d-md-block">
                Consulta Ahora
              </AniLink>
            </div>
          </div>
        </div>
      </section>
      <Navbar/>
    </div>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
