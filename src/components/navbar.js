import React from "react"
import {FaFacebook} from "react-icons/all"
import {FaLinkedinIn} from "react-icons/all"
import {FaTwitter} from "react-icons/all"
import {FaInstagram} from "react-icons/all"
import {FaYoutube} from "react-icons/all"

const Navbar = () => {
  return (
    <div className="header_absolute ">

      {/*// <!-- header with two Bootstrap columns - left for logo and right for navigation and includes (search, social icons, additional links and buttons etc -->*/}
      <header className="page_header ds ms s-overlay justify-nav-start">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-9 col-1 order-2 order-xl-1">
              <div className="nav-wrap">

                {/*// <!-- main nav start -->*/}
                <nav className="top-nav">
                  <ul className="nav sf-menu">
                    <li className="active">
                      <a href="index.html">Inicio</a>
                    </li>

                    <li>
                      <a href="blog-right.html">Servicios</a>
                    </li>

                    <li>
                      <a href="blog-right.html">Testimonios</a>
                    </li>

                    <li>
                      <a href="blog-right.html">Comunícate con Nosotros</a>
                    </li>


                  </ul>


                </nav>
                {/*// <!-- eof main nav -->*/}

              </div>
            </div>
            <div className="col-xl-3 col-9 order-1 order-xl-2 text-xl-right text-left">
								<span className="social-icons">

                  <a href="https://www.facebook.com/" className="fa fa-facebook " title="facebook"><FaFacebook/></a>
									<a href="https://twitter.com/" className="fa fa-twitter " title="twitter"><FaTwitter/></a>
									<a href="https://www.linkedin.com/" className="fa fa-linkedin " title="linkedin"><FaLinkedinIn/></a>
									<a href="https://www.instagram.com/" className="fa fa-instagram " title="instagram"><FaInstagram/></a>
									<a href="https://www.youtube.com/" className="fa fa-youtube-play " title="youtube"><FaYoutube/></a>

								</span>
            </div>
          </div>
        </div>
        {/*// <!-- header toggler -->*/}
        <span className="toggle_menu"><span></span></span>
      </header>

    </div>
  )
}

export default Navbar
