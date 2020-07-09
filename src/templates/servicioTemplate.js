import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Image from 'gatsby-image'
import SEO from "../components/seo"

export const query = graphql`
    query getServicio($slug: String!) {
        servicio: allWordpressPost(filter: {slug: {eq: $slug}}) {
            edges {
                node {
                    acf {
                        tituloservicio
                        descripcionservicio
                        textoservicio
                        imagenservicio {
                            localFile {
                                childImageSharp {
                                    fluid(quality: 100) {
                                        ...GatsbyImageSharpFluid_withWebp
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

const ServicioTemplate = ({data}) => {

  const { tituloservicio, textoservicio, imagenservicio } = data.servicio.edges[0].node.acf;
  console.log(imagenservicio)

  return (
    <Layout>
      <SEO title={tituloservicio} />
      <section className="page_title ds s-overlay s-parallax s-pt-130 s-pt-xl-150 s-pb-65">
        <div className="container">
          <div className="row">

            <div className="col-md-12">
              <h1>{tituloservicio}</h1>
            </div>

          </div>
        </div>
      </section>

      {/*// <!--Section About-->*/}
      <section className="ds s-pt-90 s-pt-xl-150 c-gutter-50">
        <div className="container">
          <div className="row align-center pb-5">
            <div className="col-lg-6">
              <Image fluid={imagenservicio.localFile.childImageSharp.fluid} alt="img"/>
            </div>
            <div className="col-lg-6 text-center text-md-left">
              <div className="divider-60 divider-lg-0 "></div>
              <p className="text-white text-center text-md-left fs-20 line-right mb-0">
                {/*<span>About Us</span>*/}
              </p>
              <h3 className="special-heading mt-2 fs-60 text-center text-md-left">
                <span>{tituloservicio}</span>
              </h3>
              <div className="divider-35"></div>
              <p>
                {textoservicio}
              </p>
              {/*<p>*/}
              {/*  They will provide the best free horoscope astrology to you by analysing your birth chart and your*/}
              {/*  astrology sign.*/}
              {/*</p>*/}
              {/*<div className="shortcode-simple-counter counter-layout-2">*/}
              {/*  <div className="counter_wrap justify-content-md-start">*/}
              {/*    <div className="counter-wrap">*/}
              {/*      <h2 className="counter counter-size" data-from="0" data-to="25" data-speed="1000">25</h2>*/}
              {/*    </div>*/}
              {/*    <p className="counter-text ">*/}
              {/*      <span className="counter-add">Years Of<br/><span*/}
              {/*        className="color-dark fw-500">Experience</span></span>*/}
              {/*    </p>*/}
              {/*  </div>*/}
              {/*</div>*/}
              <div className="divider-30 divider-lg-30"></div>
              <a href='https://wa.me/13213524962'
                 target={"_blank"}
                 rel={"noopener noreferrer"} className="btn btn-outline-maincolor btn-medium">Consulta Ahora</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>

  )
}

export default ServicioTemplate
