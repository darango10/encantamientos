import React from "react"
import CircleImage from "../../images/circle-image.png"
import Signature from "../../images/signature.png"

const Author = () => {
  return (
    <section className="ds s-py-90 s-py-xl-150">
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-6">
            <img src={CircleImage} alt="img"/>
          </div>
          <div className="col-lg-6 text-center text-md-left">
            <div className="divider-60 divider-lg-0"></div>
            <h3 className="special-heading fs-60 color-main">
              <span>Welcome To <br/>Astrology Portal</span>
            </h3>
            <div className="divider-30"></div>
            <p>
              My first introduction to meditation was shortly after I moved to the US in 2006. I was attending a
              two-day workshop and one of the speakers claimed that he’d have committed suicide.
            </p>
            <blockquote>
              <p>
                For over 30 years, has been at the forefront of cultural change, accelerating
              </p>
              <footer>
                <span>Larry N. Hall</span>
              </footer>
            </blockquote>
            <p>
              If you would like to sign up, and by the way, you can cancel at any time, just click here and thank me
              later.
            </p>
            <div className="divider-30 divider-xl-50"></div>
            <img src={Signature} alt="img"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Author
