import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import { baseUrl } from "../constants/url_path"

const Testimonios = () => {

  const getTestimonials = useStaticQuery(graphql`
      {
          testimonios: allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "Testimonios"}}}}, sort: {fields: date, order: DESC}) {
              edges {
                  node {
                      acf {
                          nombretestimonio
                          ocupaciontestimonio
                          problema
                          diagnostico
                          testimonio
                          fechatestimonio
                          solucion
                          imagentestimonio {
                              source_url
                          }

                      }
                  }
              }
          }
      }
  `)


  const testimonios = (getTestimonials.testimonios.edges)

  // console.log(testimonios)

  return (
    <Layout>
      <section className="page_title ds s-overlay s-parallax s-pt-130 s-pt-xl-150 s-pb-65">
        <div className="container">
          <div className="row">

            <div className="col-md-12">
              <h1>Testimonios</h1>
            </div>

          </div>
        </div>
      </section>

      {testimonios.map((testimonio,index) => (
        <section key={index}className="ds dark-bs s-overlay s-overlay-three-quarter-left s-pt-90 s-pb-85 s-py-xl-150 ">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="row c-gutter-60 align-items-center">

                  <div className="col-lg-6 col-xl-5">
                    <img src={`${baseUrl}${testimonio.node.acf.imagentestimonio.source_url}`} alt="img"/>
                  </div>

                  <div className="col-lg-6 col-xl-7">
                    <div className="divider-lg-0 divider-60"></div>
                    <h4 className="my-0 color-main2">{testimonio.node.acf.nombretestimonio}</h4>
                    <p className="team-position pb-xl-3 fs-20">
                      {testimonio.node.acf.ocupaciontestimonio}
                    </p>

                    <p>
                      {testimonio.node.acf.problema}
                    </p>

                    <p>
                      {testimonio.node.acf.diagnostico}
                    </p>

                    <blockquote>
                      <p>
                        {testimonio.node.acf.testimonio}
                      </p>
                      <footer>
                        <span>{testimonio.node.acf.fechatestimonio}</span>
                      </footer>
                    </blockquote>

                    <p>
                      {testimonio.node.acf.solucion}
                    </p>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      ))}
    </Layout>
  )
}

export default Testimonios
