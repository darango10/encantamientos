import React from "react"
import imagen1 from "../../images/team/01.jpg"
import imagen2 from "../../images/team/02.jpg"
import imagen3 from "../../images/team/03.jpg"

const Team = () => {
  return (
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

            <div data-responsive-lg="3" data-responsive-md="2" data-responsive-sm="1"
                 data-responsive-xs="1" data-nav="false" data-margin="60" data-loop="true">
              <div className="vertical-item text-center team-layout box-shadow content-padding colleagues">
                <div className="item-media">
                  <img src={imagen1} alt="img"/>
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
              <div className="vertical-item text-center team-layout box-shadow content-padding colleagues">
                <div className="item-media">
                  <img src={imagen2} alt="img"/>
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

              <div className="vertical-item text-center team-layout box-shadow content-padding colleagues">
                <div className="item-media">
                  <img src={imagen3} alt="img"/>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
