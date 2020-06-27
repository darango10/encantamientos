import React from "react"
import { AiOutlineSearch } from "react-icons/all"
import imagen1 from "../../images/gallery/quote_2.jpg"
import imagen2 from "../../images/gallery/14.jpg"
import imagen3 from "../../images/gallery/19.jpg"
import imagen4 from "../../images/gallery/12.jpg"
import imagen5 from "../../images/gallery/21.jpg"
import imagen6 from "../../images/gallery/20.jpg"

const Gallery = () => {
  return (
    <section className="ds s-pt-85 s-pt-xl-145 container-px-xl-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">

            <h3 className="text-center mt-0 mb-2 special-heading fs-60 color-main">
              <span>Our Gallery</span>
            </h3>
            <div className="line"></div>
            <p className="text-center fs-20 mt-4">
              <span>When something appears out of nothing <br/>or something disappears.</span>
            </p>

            <div className="divider-40 divider-xl-60"></div>

            <div className=" grid-container gap-5 gallery-layout-2" data-filters=".gallery-filters">

              <div className="grid-box astrology">
                <div className="vertical-item item-gallery ">
                  <div className="item-media">
                    <img src={imagen1} alt="img"/>
                    <div className="media-links">
                      <div className="links-wrap">
                        <a className="link-anchor" title="" href="gallery-single.html"><AiOutlineSearch/></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid-box taro horoscope">
                <div className="vertical-item item-gallery ">
                  <div className="item-media">
                    <img src={imagen2} alt="img"/>
                    <div className="media-links">
                      <div className="links-wrap">
                        <a className="link-anchor" title="" href="gallery-single.html"><AiOutlineSearch/></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid-box stone magic">
                <div className="vertical-item item-gallery ">
                  <div className="item-media">
                    <img src={imagen3} alt="img"/>
                    <div className="media-links">
                      <div className="links-wrap">
                        <a className="link-anchor" title="" href="gallery-single.html"><AiOutlineSearch/></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid-box horoscope stone">
                <div className="vertical-item item-gallery ">
                  <div className="item-media">
                    <img src={imagen4} alt="img"/>
                    <div className="media-links">
                      <div className="links-wrap">
                        <a className="link-anchor" title="" href="gallery-single.html"><AiOutlineSearch/></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid-box astrology horoscope">
                <div className="vertical-item item-gallery">
                  <div className="item-media">
                    <img src={imagen5} alt="img"/>
                    <div className="media-links">
                      <div className="links-wrap">
                        <a className="link-anchor" title="" href="gallery-single.html"><AiOutlineSearch/></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid-box magic horoscope">
                <div className="vertical-item item-gallery">
                  <div className="item-media">
                    <img src={imagen6} alt="img"/>
                    <div className="media-links">
                      <div className="links-wrap">
                        <a className="link-anchor" title="" href="gallery-single.html"><AiOutlineSearch/></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            {/*// <!-- .isotope-wrapper-->*/}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
