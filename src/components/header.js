import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.png"

const Header = ({ siteTitle }) => (
  <div className="header_absolute ">
    <section className="page_topline ds s-py-30 ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-4 col-md-4 text-lg-left text-center">
            <a href="./" className="logo">
              <img src={logo} alt="img"/>
              <span className="logo-text color-darkgrey">vedi</span>
            </a>
          </div>
          <div
            className="col-xl-6 col-lg-8 col-md-8 some-links text-center text-lg-right d-flex justify-content-center justify-content-md-end align-items-center mt-2 mt-md-0">
            <a className="fs-24 links-maincolor-hover font-2" href="tel:+88003532455">
              <mark>8 800</mark>
              353-24-55</a>
            <a href="" className="btn btn-outline-maincolor btn-medium  d-none d-md-block">
              Book Reading Now
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
