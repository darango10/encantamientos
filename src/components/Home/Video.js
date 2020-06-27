import React from "react"
import {FaPlay} from "react-icons/all"

const Video = () => {
  return (
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
            <a href="#" className="photoswipe-link"
               data-iframe="https://www.youtube.com/embed/mcixldqDIEQ" data-index="1"><FaPlay/></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Video
