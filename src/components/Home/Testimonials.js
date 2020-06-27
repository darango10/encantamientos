import React from "react"
import imagen1 from "../../images/team/comment6.png"
import imagen2 from "../../images/team/comment7.png"

const Testimonials = () => {
  return (
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
            <div data-responsive-lg="1" data-responsive-md="1"
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
                    <img src={imagen1} alt="img"/>
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
                    <img src={imagen2} alt="img"/>
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
  )
}

export default Testimonials
