import React from "react"

const Counter = () => {
  return (
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
  )
}

export default Counter
