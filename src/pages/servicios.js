import React from "react"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import SEO from "../components/seo"

const Servicios = () => {

  const getServicios = useStaticQuery(graphql`
      {
          servicios: allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "Servicios"}}}}, sort: {fields: date, order: DESC}) {
              edges {
                  node {
                      acf {
                          tituloservicio
                          imagenservicio {
                              localFile {
                                  childImageSharp {
                                      fluid(quality: 100) {
                                          ...GatsbyImageSharpFluid_withWebp
                                      }
                                  }
                              }
                          }
                          descripcionservicio
                      }
                      slug
                  }
              }
          }
      }
  `)


  const servicios = (getServicios.servicios.edges)

  // console.log(servicios)

  return (
    <Layout>
      <SEO title="Servicios" />
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
                  <div className="item-media item-media-service">
                    <Image fluid={servicio.node.acf.imagenservicio.localFile.childImageSharp.fluid} alt={servicio.node.acf.tituloservicio} className="imagenServicios"/>
                    {/*<img src={`${baseUrl}${servicio.node.acf.imagenservicio.source_url}`}*/}
                    {/*     alt="img"/>*/}
                    <div className="media-links">
                      <AniLink fade to={`/servicio/${servicio.node.slug}`}></AniLink>
                    </div>
                  </div>
                  <div className="item-content">
                    <h5 className="mt-0 links-maincolor2">
                      <AniLink fade to={`/servicio/${servicio.node.slug}`}>{servicio.node.acf.tituloservicio}</AniLink>
                    </h5>
                    <p>
                      {servicio.node.acf.descripcionservicio}
                    </p>
                    <AniLink fade to={`/servicio/${servicio.node.slug}`} className="btn btn-outline-maincolor btnCall">
                      Seguir Leyendo
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
