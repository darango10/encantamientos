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



      <section className="ds bs s-py-90 s-py-xl-150">
        <div className="container">

          <div className="row">
            <div className="col-sm-4" data-animation="pullDown">
              <div className="icon-box text-center">
                <div className="icon-styled color-main fs-56 mb-20">
                  <i className="fa fa-phone"><FiPhone/></i>
                </div>
                <p>
                  <strong>Teléfono:</strong><a className="fs-24 links-maincolor-hover font-2" href="tel:+13213524962">
                  <mark>+1 (321)</mark>
                  352-4962</a><br/>
                  <strong>Whatsapp:</strong> <a className="fs-24 links-maincolor-hover font-2" href='https://wa.me/12132836389' target={"_blank"}
                                                rel={"noopener noreferrer"}>
                  <mark>+1 (213)</mark>
                  283-6389</a>


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
                  1234 Santa Monica Blvd<br/>
                  Beverly Hills<br/>
                  CA 90210
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
                  <a href="mailto:info@example.com">info@encantamientos.com</a>
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
                        <label htmlFor="name">Nombre <span className="required">*</span></label>
                        <input type="text" aria-required="true" size="30" name="name" id="name"
                               className="" placeholder="Nombre"/>
                      </div>
                      <div className="form-group has-placeholder">
                        <label htmlFor="email">Email <span className="required">*</span></label>
                        <input type="email" aria-required="true" size="30" name="email" id="email"
                               className="" placeholder="Email"/>
                      </div>
                      <div className="form-group has-placeholder">
                        <label htmlFor="subject">Asunto<span className="required">*</span></label>
                        <input type="text" aria-required="true" size="30" name="subject" id="subject"
                               className="" placeholder="Asunto"/>
                      </div>
                    </div>
                    <div className="col-sm-6">

                      <div className="form-group has-placeholder">
                        <label htmlFor="message">Mensaje</label>
                        <textarea aria-required="true" rows="6" cols="45" name="message" id="message"
                                  className="" placeholder="Mensaje"></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-20 mt-xl-40">
                    <div className="col-sm-12">
                      <div className="form-group text-center">
                        <button type="submit" id="contact_form_submit" name="contact_submit"
                                className="btn btn-maincolor btn-medium">Enviar Mensaje
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
