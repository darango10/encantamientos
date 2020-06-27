import React from "react"

import Layout from "../components/layout"
import "bootstrap/dist/css/bootstrap.min.css"
import Services from "../components/Home/Services"
import Author from "../components/Home/Author"
import Benefits from "../components/Home/Benefits"
import Gallery from "../components/Home/Gallery"
import FeaturedBlog from "../components/Home/FeaturedBlog"


const IndexPage = () => (
  <Layout>
    <div id="canvas">
      <div id="box_wrapper">

        {/*// <!-- template sections -->*/}


        <section className="page_slider slider-1">
          <div className="flexslider">
            <ul className="slides">
              <li className="ds cover-image s-overlay mobile-overlay text-center text-md-left">
                <img src="images/slide01_800.jpg" alt="img"/>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="intro_layers_wrapper">
                        <div className="intro_layers">
                          <div className="intro_layer" data-animation="fadeInRight">
                            <div className="divider-60 divider-xl-80"></div>
                            <div className="d-inline-block">
                              <h2 className="intro_featured_word">
                                Ultimate <br/>
                                Guide
                              </h2>
                              <p>
                                There are 12 signs of the zodiac, each one taking up 30 degrees in your birth chart,
                                manking a complete 360 degree circle
                              </p>
                            </div>
                          </div>
                          <div className="intro_layer" data-animation="fadeInUp">
                            <a href="./about.html" className="btn btn-maincolor btn-slider btn-medium">Let’s Begin</a>
                          </div>
                        </div>
                        {/*// <!-- eof .intro_layers -->*/}
                      </div>
                      {/*// <!-- eof .intro_layers_wrapper -->*/}
                    </div>
                    {/*// <!-- eof .col-* -->*/}
                  </div>
                  {/*// <!-- eof .row -->*/}
                </div>
                {/*// <!-- eof .container-fluid -->*/}
              </li>
              <li className="ds cover-image s-overlay mobile-overlay text-center text-md-left">
                <img src="images/slide02_800.jpg" alt="img"/>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="intro_layers_wrapper">
                        <div className="intro_layers">
                          <div className="intro_layer" data-animation="fadeInRight">
                            <div className="divider-60 divider-xl-80"></div>
                            <div className="d-inline-block">
                              <h2 className="intro_featured_word">
                                Ultimate <br/>
                                Guide
                              </h2>
                              <p>
                                There are 12 signs of the zodiac, each one taking up 30 degrees in your birth chart,
                                manking a complete 360 degree circle
                              </p>
                            </div>
                          </div>
                          <div className="intro_layer" data-animation="fadeInUp">
                            <a href="./about.html" className="btn btn-maincolor btn-slider btn-medium">Let’s Begin</a>
                          </div>
                        </div>
                        {/*// <!-- eof .intro_layers -->*/}
                      </div>
                      {/*{!--eof.intro_layers_wrapper--}*/}
                    </div>
                    {/*// <!-- eof .col-* -->*/}
                  </div>
                  {/*// <!-- eof .row -->*/}
                </div>
                {/*// <!-- eof .container-fluid -->*/}
              </li>
              <li className="ds cover-image s-overlay mobile-overlay text-center text-md-left">
                <img src="images/slide03_800.jpg" alt="img"/>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="intro_layers_wrapper">
                        <div className="intro_layers">
                          <div className="intro_layer" data-animation="fadeInRight">
                            <div className="divider-60 divider-xl-80"></div>
                            <div className="d-inline-block">
                              <h2 className="intro_featured_word">
                                Ultimate <br/>
                                Guide
                              </h2>
                              <p>
                                There are 12 signs of the zodiac, each one taking up 30 degrees in your birth chart,
                                manking a complete 360 degree circle
                              </p>
                            </div>
                          </div>
                          <div className="intro_layer" data-animation="fadeInUp">
                            <a href="./about.html" className="btn btn-maincolor btn-slider btn-medium">Let’s Begin</a>
                          </div>
                        </div>
                        {/*// <!-- eof .intro_layers -->*/}
                      </div>
                      {/*// <!-- eof .intro_layers_wrapper -->*/}
                    </div>
                    {/*// <!-- eof .col-* -->*/}
                  </div>
                  {/*// <!-- eof .row -->*/}
                </div>
                {/*// <!-- eof .container-fluid -->*/}
              </li>
            </ul>
          </div>
          {/*// <!-- eof flexslider -->*/}
        </section>

        {/*// <!-- Section Services -->*/}
        <Services/>

        {/*// <!-- Section About Author -->*/}
        <Author/>

        {/*// <!-- Section Team -->*/}
        <section className="ds bs s-pb-60 s-pt-85 s-pb-xl-120 s-pt-xl-145">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">

                <h3 className="text-center mt-0 mb-2 special-heading fs-60 color-main">
                  <span>My Colleagues</span>
                </h3>
                <div className="line"></div>
                <p className="text-center fs-20 mt-4">
                  <span>What’s Your Sign? Read Your Daily <br/>Horoscope Today</span>
                </p>

                <div className="divider-50 divider-xl-60"></div>

                <div className="owl-carousel" data-responsive-lg="3" data-responsive-md="2" data-responsive-sm="1"
                     data-responsive-xs="1" data-nav="false" data-margin="60" data-loop="true">
                  <div className="vertical-item text-center team-layout box-shadow content-padding">
                    <div className="item-media">
                      <img src="images/team/02.jpg" alt="img"/>
                      <div className="media-links">
                        <a className="abs-link" title="" href="team-single.html"></a>
                      </div>
                    </div>
                    <div className="item-content bg-darkgrey">
                      <h5 className="mb-0 links-maincolor2">
                        <a href="team-single.html">Jeffrey M. Kaufman</a>
                      </h5>

                      <p className="team-position mb-30">
                        Astrologer
                      </p>
                      <p className="social-icons">
                        <a href="https://www.facebook.com/" className="fa fa-facebook" title="facebook"></a>
                        <a href="https://www.instagram.com/" className="fa fa-instagram" title="instagram"></a>
                        <a href="https://www.youtube.com/" className="fa fa-youtube-play" title="youtube"></a>
                      </p>

                    </div>
                  </div>
                  <div className="vertical-item text-center team-layout box-shadow content-padding">
                    <div className="item-media">
                      <img src="images/team/03.jpg" alt="img"/>
                      <div className="media-links">
                        <a className="abs-link" title="" href="team-single.html"></a>
                      </div>
                    </div>
                    <div className="item-content bg-darkgrey">
                      <h5 className="mb-0 links-maincolor2">
                        <a href="team-single.html">Hazel E. Mills</a>
                      </h5>

                      <p className="team-position mb-30">
                        Astrologer
                      </p>
                      <p className="social-icons">
                        <a href="https://www.facebook.com/" className="fa fa-facebook" title="facebook"></a>
                        <a href="https://www.instagram.com/" className="fa fa-instagram" title="instagram"></a>
                        <a href="https://www.youtube.com/" className="fa fa-youtube-play" title="youtube"></a>
                      </p>

                    </div>
                  </div>
                  <div className="vertical-item text-center team-layout box-shadow content-padding">
                    <div className="item-media">
                      <img src="images/team/04.jpg" alt="img"/>
                      <div className="media-links">
                        <a className="abs-link" title="" href="team-single.html"></a>
                      </div>
                    </div>
                    <div className="item-content bg-darkgrey">
                      <h5 className="mb-0 links-maincolor2">
                        <a href="team-single.html">Saul B. Schank</a>
                      </h5>

                      <p className="team-position mb-30">
                        Astrologer
                      </p>
                      <p className="social-icons">
                        <a href="https://www.facebook.com/" className="fa fa-facebook" title="facebook"></a>
                        <a href="https://www.instagram.com/" className="fa fa-instagram" title="instagram"></a>
                        <a href="https://www.youtube.com/" className="fa fa-youtube-play" title="youtube"></a>
                      </p>

                    </div>
                  </div>
                  <div className="vertical-item text-center team-layout box-shadow content-padding">
                    <div className="item-media">
                      <img src="images/team/05.jpg" alt="img"/>
                      <div className="media-links">
                        <a className="abs-link" title="" href="team-single.html"></a>
                      </div>
                    </div>
                    <div className="item-content bg-darkgrey">
                      <h5 className="mb-0 links-maincolor2">
                        <a href="team-single.html">Tammy M. Smith</a>
                      </h5>

                      <p className="team-position mb-30">
                        Astrologer
                      </p>
                      <p className="social-icons">
                        <a href="https://www.facebook.com/" className="fa fa-facebook" title="facebook"></a>
                        <a href="https://www.instagram.com/" className="fa fa-instagram" title="instagram"></a>
                        <a href="https://www.youtube.com/" className="fa fa-youtube-play" title="youtube"></a>
                      </p>

                    </div>
                  </div>
                  <div className="vertical-item text-center team-layout box-shadow content-padding">
                    <div className="item-media">
                      <img src="images/team/06.jpg" alt="img"/>
                      <div className="media-links">
                        <a className="abs-link" title="" href="team-single.html"></a>
                      </div>
                    </div>
                    <div className="item-content bg-darkgrey">
                      <h5 className="mb-0 links-maincolor2">
                        <a href="team-single.html">Ethel A. Johnson</a>
                      </h5>

                      <p className="team-position mb-30">
                        Astrologer
                      </p>
                      <p className="social-icons">
                        <a href="https://www.facebook.com/" className="fa fa-facebook" title="facebook"></a>
                        <a href="https://www.instagram.com/" className="fa fa-instagram" title="instagram"></a>
                        <a href="https://www.youtube.com/" className="fa fa-youtube-play" title="youtube"></a>
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*// <!-- Section Testimonials -->*/}
        <section className="ds s-pt-90 s-pb-70 s-pt-xl-150 s-pb-xl-130">
          <div className="container">
            <div className="row align-center">
              <div className="col-xl-4 col-lg-5">
                <p className="text-white text-center text-md-left fs-20 line-right mb-0">
                  <span>Testimonials</span>
                </p>
                <h3 className="special-heading mt-2 fs-60 text-center text-md-left">
                  <span>What <br/>People Say</span>
                </h3>
              </div>
              <div className="col-xl-8 col-lg-7">
                <div className="divider-60 divider-lg-0"></div>
                <div className="owl-carousel quote-carousel" data-responsive-lg="1" data-responsive-md="1"
                     data-responsive-sm="1" data-responsive-xs="1" data-nav="false" data-margin="0" data-loop="true"
                     data-dots="false" data-autoplay="true">
                  <div className="quote-item vertical quote-layout-1">
                    <div className="wrap-content">
                      <div className="quote-content">
                        <blockquote>
                          <p>
                            Writing case studies was a daunting task for us. We didn’t know where to begin or what
                            questions to ask, and clients never seemed to follow through when we asked.
                          </p>
                        </blockquote>
                      </div>
                      <div className="quote-title">
                        <h5 className="mb-0 color-main2 bold">Stephie J. Bellamy</h5>
                        <p className="mb-0 text-white">Happy Customer</p>
                      </div>
                    </div>
                    <div className="wrap-image">
                      <div className="quote-image">
                        <img src="images/team/comment6.png" alt="img"/>
                      </div>
                      <div className="owl-custom-nav">
                        <a href="#" className="owl-prev"><i className="ico ico-right-arrow"></i></a>
                        <a href="#" className="owl-next"><i className="ico ico-right-arrow"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="quote-item vertical quote-layout-1">
                    <div className="wrap-content">
                      <div className="quote-content">
                        <blockquote>
                          <p>
                            Writing case studies was a daunting task for us. We didn’t know where to begin or what
                            questions to ask, and clients never seemed to follow through when we asked.
                          </p>
                        </blockquote>
                      </div>
                      <div className="quote-title">
                        <h5 className="mb-0 color-main2 bold">Sonny V. Love</h5>
                        <p className="mb-0 text-white">Happy Customer</p>
                      </div>
                    </div>
                    <div className="wrap-image">
                      <div className="quote-image">
                        <img src="images/team/comment7.png" alt="img"/>
                      </div>
                      <div className="owl-custom-nav">
                        <a href="#" className="owl-prev"><i className="ico ico-right-arrow"></i></a>
                        <a href="#" className="owl-next"><i className="ico ico-right-arrow"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*// <!-- Section features -->*/}
       <Benefits/>

        {/*// <!--Section Gallery-->*/}
        <Gallery/>

        {/*// <!-- Section Services -->*/}
        <section className="ds bs s-pt-80 s-pb-60 s-pt-xl-150 s-pb-xl-120 container-px-xl-0 c-gutter-0">
          <div className="container-fluid">
            <div className="row align-center">
              <div className="col-lg-6 col-xl-5 text-center text-md-left section-special-2 left small-section">
                <div className="z-index-2">
                  <div>
                    <p className="text-white text-center text-md-left fs-20 line-right mb-0">
                      <span>Services</span>
                    </p>
                    <h3 className="special-heading mt-2 fs-60 text-center text-md-left">
                      <span>Our Best <br/>Services</span>
                    </h3>
                    <p className="text-center text-md-left  mt-4">
                      <span>They will provide the best free horoscope <br/>astrology to you by analysing your sign.</span>
                    </p>
                    <div className="divider-35"></div>
                    <div className="owl-custom-nav">
                      <a href="#" className="owl-prev"><i className="ico ico-right-arrow"></i></a>
                      <a href="#" className="owl-next"><i className="ico ico-right-arrow"></i></a>
                    </div>
                    <div className="fw-divider-space divider-40 divider-lg-0"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-7">
                <div className="owl-carousel owl-three-opacity" data-responsive-lg="3" data-responsive-md="1"
                     data-responsive-sm="2" data-responsive-xs="1" data-nav="false" data-margin="10" data-loop="true">
                  <div className="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
                    <div className="item-media">
                      <img src="images/services/img_1.jpg" alt="img"/>
                      <div className="media-links">
                        <a className="abs-link" title="" href="service-single.html"></a>
                      </div>
                    </div>
                    <div className="item-content">
                      <h5 className="mt-0 links-maincolor2">
                        <a href="service-single.html">Analysis of Horoscope</a>
                      </h5>
                      <p>
                        Integer sagittis nisi nec tortor fermentum aliquet.
                      </p>
                      <a href="service-single.html" className="mt-30 font-2">Read Now <i
                        className="fa fa-caret-right color-main ml-2"></i></a>
                    </div>
                  </div>
                  <div className="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
                    <div className="item-media">
                      <img src="images/services/img_2.jpg" alt="img"/>
                      <div className="media-links">
                        <a className="abs-link" title="" href="service-single.html"></a>
                      </div>
                    </div>
                    <div className="item-content">
                      <h5 className="mt-0 links-maincolor2">
                        <a href="service-single.html">Effect of planet Mars</a>
                      </h5>
                      <p>
                        Integer sagittis nisi nec tortor fermentum aliquet.
                      </p>
                      <a href="service-single.html" className="mt-30 font-2">Read Now <i
                        className="fa fa-caret-right color-main ml-2"></i></a>
                    </div>
                  </div>
                  <div className="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
                    <div className="item-media">
                      <img src="images/services/img_3.jpg" alt="img"/>
                      <div className="media-links">
                        <a className="abs-link" title="" href="service-single.html"></a>
                      </div>
                    </div>
                    <div className="item-content">
                      <h5 className="mt-0 links-maincolor2">
                        <a href="service-single.html">Gun Milan table</a>
                      </h5>
                      <p>
                        Integer sagittis nisi nec tortor fermentum aliquet.
                      </p>
                      <a href="service-single.html" className="mt-30 font-2">Read Now <i
                        className="fa fa-caret-right color-main ml-2"></i></a>
                    </div>
                  </div>
                  <div className="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
                    <div className="item-media">
                      <img src="images/services/img_4.jpg" alt="img"/>
                      <div className="media-links">
                        <a className="abs-link" title="" href="service-single.html"></a>
                      </div>
                    </div>
                    <div className="item-content">
                      <h5 className="mt-0 links-maincolor2">
                        <a href="service-single.html">Number of Gun</a>
                      </h5>
                      <p>
                        Integer sagittis nisi nec tortor fermentum aliquet.
                      </p>
                      <a href="service-single.html" className="mt-30 font-2">Read Now <i
                        className="fa fa-caret-right color-main ml-2"></i></a>
                    </div>
                  </div>
                  <div className="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
                    <div className="item-media">
                      <img src="images/services/img_5.jpg" alt="img"/>
                      <div className="media-links">
                        <a className="abs-link" title="" href="service-single.html"></a>
                      </div>
                    </div>
                    <div className="item-content">
                      <h5 className="mt-0 links-maincolor2">
                        <a href="service-single.html">Recommendations</a>
                      </h5>
                      <p>
                        Integer sagittis nisi nec tortor fermentum aliquet.
                      </p>
                      <a href="service-single.html" className="mt-30 font-2">Read Now <i
                        className="fa fa-caret-right color-main ml-2"></i></a>
                    </div>
                  </div>
                  <div className="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
                    <div className="item-media">
                      <img src="images/services/img_6.jpg" alt="img"/>
                      <div className="media-links">
                        <a className="abs-link" title="" href="service-single.html"></a>
                      </div>
                    </div>
                    <div className="item-content">
                      <h5 className="mt-0 links-maincolor2">
                        <a href="service-single.html">Horoscope Matching</a>
                      </h5>
                      <p>
                        Integer sagittis nisi nec tortor fermentum aliquet.
                      </p>
                      <a href="service-single.html" className="mt-30 font-2">Read Now <i
                        className="fa fa-caret-right color-main ml-2"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
