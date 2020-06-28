import React from "react"
import Layout from "../components/layout"
import imagen1 from "../images/services/img_1.jpg"
import imagen2 from "../images/services/img_2.jpg"
import imagen3 from "../images/services/img_3.jpg"
import imagen4 from "../images/services/img_4.jpg"
import imagen5 from "../images/services/img_5.jpg"
import imagen6 from "../images/services/img_6.jpg"

const Servicios = () => {
  return (
    <Layout>
      <section className="page_title ds s-overlay s-parallax s-pt-130 s-pt-xl-150 s-pb-65">
        <div className="container">
          <div className="row">

            <div className="col-md-12">
              <h1>Servicios</h1>
            </div>

          </div>
        </div>
      </section>

      <section className="ds s-pt-90 s-pb-40 s-pt-xl-150 s-pb-xl-100 c-gutter-60 c-mb-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6">
              <div className="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
                <div className="item-media">
                  <img src={imagen1} alt="img"/>
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
            </div>
            {/*// <!-- .col-* -->*/}
            <div className="col-xl-4 col-lg-6">
              <div className="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
                <div className="item-media">
                  <img src={imagen2} alt="img"/>
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
            </div>
            {/*// <!-- .col-* -->*/}
            <div className="col-xl-4 col-lg-6">
              <div className="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
                <div className="item-media">
                  <img src={imagen3} alt="img"/>
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
            </div>
            {/*// <!-- .col-* -->*/}
            <div className="col-xl-4 col-lg-6">
              <div className="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
                <div className="item-media">
                  <img src={imagen4} alt="img"/>
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
            </div>
            {/*// <!-- .col-* -->*/}
            <div className="col-xl-4 col-lg-6">
              <div className="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
                <div className="item-media">
                  <img src={imagen5} alt="img"/>
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
            </div>
            {/*// <!-- .col-* -->*/}
            <div className="col-xl-4 col-lg-6">
              <div className="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
                <div className="item-media">
                  <img src={imagen6} alt="img"/>
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
            {/*// <!-- .col-* -->*/}
          </div>

        </div>
      </section>
    </Layout>
  )
}

export default Servicios
