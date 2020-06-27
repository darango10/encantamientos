import React from "react"

import Layout from "../components/layout"
import "bootstrap/dist/css/bootstrap.min.css"
import Services from "../components/Home/Services"
import Author from "../components/Home/Author"
import Benefits from "../components/Home/Benefits"
import Gallery from "../components/Home/Gallery"
import FeaturedBlog from "../components/Home/FeaturedBlog"
import Slider from "../components/Home/Slider"
import Team from "../components/Home/Team"
import BestServices from "../components/Home/BestServices"
import Testimonials from "../components/Home/Testimonials"


const IndexPage = () => (
  <Layout>
    <div id="canvas">
      <div id="box_wrapper">

        {/*// <!-- template sections -->*/}


        <Slider/>

        {/*// <!-- Section Services -->*/}
        <Services/>

        {/*// <!-- Section About Author -->*/}
        <Author/>

        {/*// <!-- Section Team -->*/}
        <Team/>

        {/*// <!-- Section Testimonials -->*/}
        <Testimonials/>

        {/*// <!-- Section features -->*/}
        <Benefits/>

        {/*// <!--Section Gallery-->*/}
        <Gallery/>

        {/*// <!-- Section Services -->*/}
        <BestServices/>

        {/*// <!-- Section Video -->*/}
        <section className="ds s-overlay s-parallax section-video s-py-90 s-pt-xl-150 s-pb-xl-200 text-center">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="text-center mt-0 mb-2 special-heading fs-60 color-main">
                  <span>Magic Benefits</span>
                </h3>
                <div className="line"></div>
                <p className="text-center fs-20 mt-4">
                  <span>It improves interpersonal skills like presentation skills</span>
                </p>
                <div className="divider-40 divider-xl-60"></div>
                <a href="#" className="photoswipe-link photoswipe-link-button"
                   data-iframe="https://www.youtube.com/embed/mcixldqDIEQ" data-index="1"></a>
              </div>
            </div>
          </div>
        </section>

        {/*// <!-- Section Counter -->*/}
        <section
          className="ds section-counter s-overlay s-parallax z-index-5 top-130-xl s-pb-90 s-pb-xl-0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="divider-50"></div>
              </div>
              <div className="col-lg-4 text-center">
                <div className="divider-lg-30"></div>
                <div className="shortcode-simple-counter">
                  <div className="counter_wrap justify-content-md-start">
                    <div className="counter-wrap">
                      <h2 className="counter counter-size" data-from="0" data-to="500" data-speed="1000">500</h2>
                      <span>+</span>
                    </div>
                    <p className="counter-text ">
                      <span className="counter-add">Thousand Downloads</span>
                    </p>
                  </div>
                </div>
                <div className="divider-30"></div>
              </div>
              <div className="col-lg-4 text-center">
                <div className="divider-lg-30"></div>
                <div className="shortcode-simple-counter">
                  <div className="counter_wrap justify-content-md-start">
                    <div className="counter-wrap">
                      <h2 className="counter counter-size" data-from="0" data-to="15" data-speed="1000">15</h2>
                    </div>
                    <p className="counter-text ">
                      <span className="counter-add">Years on Study</span>
                    </p>
                  </div>
                </div>
                <div className="divider-30"></div>
              </div>
              <div className="col-lg-4 text-center">
                <div className="divider-lg-30"></div>
                <div className="shortcode-simple-counter">
                  <div className="counter_wrap justify-content-md-start">
                    <div className="counter-wrap">
                      <h2 className="counter counter-size" data-from="0" data-to="123" data-speed="1000">123</h2>
                    </div>
                    <p className="counter-text ">
                      <span className="counter-add">Top-Rated Songs</span>
                    </p>
                  </div>
                </div>
                <div className="divider-lg-30"></div>
              </div>
              <div className="col-12">
                <div className="divider-50"></div>
              </div>
            </div>
          </div>
        </section>

        {/*// <!-- Section Blog -->*/}
        <FeaturedBlog/>

        <footer className="page_footer ds ms s-py-90 s-pb-lg-60 s-pt-xl-150 s-pb-xl-120">
          <div className="container">
            <div className="row align-center">
              <div className="col-xl-5 col-lg-5 text-center text-lg-left animate" data-animation="fadeInUp">
                <a href="./" className="logo">
                  <img src="images/logo.png" alt="img"/>
                  <span className="logo-text color-darkgrey">vedi</span>
                </a>
                <div className="divider-60 divider-lg-0"></div>
              </div>
              <div className="col-xl-2 col-lg-2 align-self-start text-center text-lg-left animate"
                   data-animation="fadeInUp">
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
              <div className="col-xl-2 col-lg-2 align-self-start text-center text-lg-left animate"
                   data-animation="fadeInUp">
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
              <div className="col-xl-3 col-lg-3 align-self-start text-center text-lg-left animate"
                   data-animation="fadeInUp">
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


      </div>
      {/*// <!-- eof #box_wrapper -->*/}
    </div>
    {/*// <!-- eof #canvas -->*/}
  </Layout>
)

export default IndexPage
