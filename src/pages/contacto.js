import React from "react"
import Layout from "../components/layout"
import { FiPhone } from "react-icons/all"
import { FaMapMarkerAlt } from "react-icons/all"
import { FaEnvelope } from "react-icons/all"

const Contacto = () => {
  return (
    <Layout>
      <section className="page_title ds s-overlay s-parallax s-pt-130 s-pt-xl-150 s-pb-65">
        <div className="container">
          <div className="row">

            <div className="col-md-12">
              <h1>Contacto</h1>
            </div>

          </div>
        </div>
      </section>

      <section className="ds ms page_map">
        <div className="marker">
          <div className="marker-address">sydney, australia, Liverpool street, 66</div>
          <div className="marker-title">First Marker</div>
          <div className="marker-description">

            <ul className="list-unstyled">
              <li>
								<span className="icon-inline">
									<span className="icon-styled color-main">
										<i className="fa fa-map-marker"></i>
									</span>

									<span>
										Sydney, Australia, Liverpool street, 66
									</span>
								</span>
              </li>

              <li>
								<span className="icon-inline">
									<span className="icon-styled color-main">
										<i className="fa fa-phone"></i>
									</span>

									<span>
										1 (800) 123-45-67
									</span>
								</span>
              </li>
              <li>
								<span className="icon-inline">
									<span className="icon-styled color-main">
										<i className="fa fa-envelope"></i>
									</span>

									<span>
										mail@example.com
									</span>
								</span>
              </li>
            </ul>
          </div>

          <img className="marker-icon" src="images/map_marker_icon.png" alt="img"/>
        </div>
        {/*// <!-- .marker -->*/}

        <div className="marker">
          <div className="marker-address">sydney, australia, Glenmore Road, 182</div>
          <div className="marker-title">Second Marker</div>
          <div className="marker-description">

            <ul className="list-unstyled">
              <li>
								<span className="icon-inline">
									<span className="icon-styled color-main">
										<i className="fa fa-map-marker"></i>
									</span>

									<span>
										Sydney, Australia, Glenmore Road, 182
									</span>
								</span>
              </li>

              <li>
								<span className="icon-inline">
									<span className="icon-styled color-main">
										<i className="fa fa-phone"></i>
									</span>

									<span>
										1 (800) 123-45-67
									</span>
								</span>
              </li>
              <li>
								<span className="icon-inline">
									<span className="icon-styled color-main">
										<i className="fa fa-envelope"></i>
									</span>

									<span>
										mail@example.com
									</span>
								</span>
              </li>
            </ul>

          </div>

          <img className="marker-icon" src="images/map_marker_icon2.png" alt="img"/>
        </div>
        {/*// <!-- .marker -->*/}

        <div className="marker">
          <div className="marker-address">sydney, australia, oxford street, 88</div>
          <div className="marker-title">Third Marker</div>
          <div className="marker-description">
            <p><strong>Sydney, Australia, Oxford Street, 88</strong>.<br/>
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Aliquid cumque,
              deserunt dolor.
            </p>
          </div>

          <img className="marker-icon" src="images/map_marker_icon3.png" alt="img"/>
        </div>
        {/*// <!-- .marker -->*/}

        <div className="marker">
          <div className="marker-address">sydney, australia, Liverpool street, 2</div>
          <div className="marker-title">Fourth Marker</div>
          <div className="marker-description">
            <p><strong>Sydney, Australia, Liverpool Street, 2</strong>.<br/>
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Aliquid cumque,
              deserunt dolor.
            </p>
          </div>

          <img className="marker-icon" src="images/map_marker_icon4.png" alt="img"/>
        </div>
        {/*// <!-- .marker -->*/}

      </section>


      <section className="ds bs s-py-90 s-py-xl-150">
        <div className="container">

          <div className="row">
            <div className="col-sm-4" data-animation="pullDown">
              <div className="icon-box text-center">
                <div className="icon-styled color-main fs-56 mb-20">
                  <i className="fa fa-phone"><FiPhone/></i>
                </div>
                <p>
                  <strong>Phone:</strong> +12 345 678 9123<br/>
                  <strong>Fax:</strong> +12 345 678 9123
                </p>
              </div>
              <div className="divider-30 divider-lg-0"></div>
            </div>

            <div className="col-sm-4" data-animation="pullDown">
              <div className="icon-box text-center">
                <div className="icon-styled color-main fs-56 mb-20">
                  <i className="fa fa-map-marker"><FaMapMarkerAlt/></i>
                </div>
                <p>
                  PO Box 54378<br/>
                  4321 Your Address,<br/>
                  Your City, Your Country
                </p>
              </div>
              <div className="divider-30 divider-lg-0"></div>
            </div>

            <div className="col-sm-4" data-animation="pullDown">
              <div className="icon-box text-center">
                <div className="icon-styled color-main fs-56 mb-20">
                  <i className="fa fa-envelope"><FaEnvelope/></i>
                </div>
                <p>
                  <a href="mailto:info@example.com">info@example.com</a>
                </p>
              </div>
            </div>
          </div>

          <div className="row">

            <div className="divider-60 divider-xl-100"></div>

            <div className="col-lg-12" data-animation="scaleAppear">

              <div className="ds bordered box-shadow  p-lg-60 p-40">

                <form className="contact-form c-mb-10 c-gutter-10" method="post" action="/">

                  <div className="row">

                    <div className="col-sm-6">
                      <div className="form-group has-placeholder">
                        <label htmlFor="name">Full Name <span className="required">*</span></label>
                        <input type="text" aria-required="true" size="30" name="name" id="name"
                               className="" placeholder="Full Name"/>
                      </div>
                      <div className="form-group has-placeholder">
                        <label htmlFor="email">Email address<span className="required">*</span></label>
                        <input type="email" aria-required="true" size="30" name="email" id="email"
                               className="" placeholder="Email"/>
                      </div>
                      <div className="form-group has-placeholder">
                        <label htmlFor="subject">Subject<span className="required">*</span></label>
                        <input type="text" aria-required="true" size="30" name="subject" id="subject"
                               className="" placeholder="Subject"/>
                      </div>
                    </div>
                    <div className="col-sm-6">

                      <div className="form-group has-placeholder">
                        <label htmlFor="message">Message</label>
                        <textarea aria-required="true" rows="6" cols="45" name="message" id="message"
                                  className="" placeholder="Message"></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-20 mt-xl-40">
                    <div className="col-sm-12">
                      <div className="form-group text-center">
                        <button type="submit" id="contact_form_submit" name="contact_submit"
                                className="btn btn-maincolor btn-medium">Send Message
                        </button>
                      </div>
                    </div>

                  </div>
                </form>

              </div>

            </div>
            {/*// <!--.col-* -->*/}

          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contacto
