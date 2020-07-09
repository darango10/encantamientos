import React from "react"

import {FaAngleRight} from "react-icons/all"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import servicios from "../../constants/servicios"


const Services = () => {
  return (
  <section className="ds container-px-0 c-gutter-0">
    <div className="container-fluid">
      <div className="col-12">
        <div className="row service-isotope">
          {servicios.map((item, index) =>(
            <div className="col-xl-2 col-lg-4 col-md-6" key={index} style={{minWidth:"20%"}}>
              <div className="vertical-item service-layout-3">
                <div className="item-content">
                  <div className="icon-styled fs-50">
                    <AniLink fade to="/servicios" className="color-darkgrey ico ico-tarot">{item.icon}</AniLink>
                  </div>
                  <div className="divider-35"></div>
                  <h5 className="mt-0 mb-3 links-maincolor2">
                    <AniLink fade to="/servicios">{item.title}</AniLink>
                  </h5>
                  <p>
                    {item.text}
                  </p>
                  <AniLink fade to="/servicios" className="mt-20 d-inline-block font-2">Seguir Leyendo<i
                    className="fa fa-caret-right color-main ml-2"><FaAngleRight/></i></AniLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Services
