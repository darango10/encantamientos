import React from "react"
import Layout from "../components/layout"
import imagen1 from "../images/services/img_1.jpg"
import imagen2 from "../images/services/img_2.jpg"
import imagen3 from "../images/services/img_3.jpg"
import imagen4 from "../images/services/img_4.jpg"
import imagen5 from "../images/services/img_5.jpg"
import imagen6 from "../images/services/img_6.jpg"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql, useStaticQuery } from "gatsby"

const Servicios = () => {

  const getServicios = useStaticQuery(graphql`
      {
          servicios: allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "Servicios"}}}}, limit: 2, sort: {fields: date, order: DESC}) {
              edges {
                  node {
                      acf {
                          tituloservicio
                          imagenservicio {
                              source_url
                          }
                          descripcionservicio
                      }
                  }
              }
          }
      }
  `)


  const servicios = (getServicios.servicios.edges)

  console.log(servicios)

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
            {servicios.map((servicio, index) => (
              <div key={index} className="col-xl-4 col-lg-6">
                <div className="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
                  <div className="item-media">
                    <img src={`http://admin.encantamientos.com${servicio.node.acf.imagenservicio.source_url}`}
                         alt="img"/>
                    <div className="media-links">
                      <a className="abs-link" title="" href="service-single.html"></a>
                    </div>
                  </div>
                  <div className="item-content">
                    <h5 className="mt-0 links-maincolor2">
                      <a href="service-single.html">{servicio.node.acf.tituloservicio}</a>
                    </h5>
                    <p>
                      {servicio.node.acf.descripcionservicio}
                    </p>
                    <AniLink fade to="/contacto" className="btn btn-outline-maincolor btnCall">
                      Book Reading Now
                    </AniLink>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  )
}

export default Servicios
