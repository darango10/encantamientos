import React from "react"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaAngleRight, FaWhatsapp } from "react-icons/all"
import { graphql, useStaticQuery } from "gatsby"

const Team = () => {

  const getMaestros = useStaticQuery(graphql`
      {
          maestros:allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "Maestros"}}}}) {
              edges {
                  node {
                      acf {
                          nombremaestro
                          especialidadMaestro
                          imagenmaestro {
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
  `)

  const maestros = (getMaestros.maestros.edges)

  return (
    <section className="ds bs s-pb-60 s-pt-85 s-pb-xl-120 s-pt-xl-145">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">

            <h3 className="text-center mt-0 mb-2 special-heading fs-60 color-main">
              <span>Maestros</span>
            </h3>
            <div className="line"></div>
            <p className="text-center fs-20 mt-4">
              {/*<span>What’s Your Sign? Read Your Daily <br/>Horoscope Today</span>*/}
            </p>

            <div className="divider-50 divider-xl-60"></div>

            <div data-responsive-lg="3" data-responsive-md="2" data-responsive-sm="1"
                 data-responsive-xs="1" data-nav="false" data-margin="60" data-loop="true">
              {maestros.map((maestro, index) => (
                <div key={index} className="vertical-item text-center team-layout box-shadow content-padding colleagues">
                  <div className="item-media">
                    <Image fluid={maestro.node.acf.imagenmaestro.localFile.childImageSharp.fluid} alt="img" style={{minHeight:'351px'}}/>
                    <div className="media-links">
                      {/*<a className="abs-link" title="" href="team-single.html"></a>*/}
                    </div>
                  </div>
                  <div className="item-content bg-darkgrey" style={{minHeight:'299px'}}>
                    <h5 className="mb-0 links-maincolor2">
                      <AniLink fade to="/nosotros">{maestro.node.acf.nombremaestro}</AniLink>
                    </h5>

                    <p className="team-position mb-30">
                      {maestro.node.acf.especialidadMaestro}
                    </p>
                    <p className="social-icons">
                      {/*<AniLink fade to="/servicios" className="mt-20 d-inline-block font-2">Consultar Ahora<i*/}
                      {/*  className="fa fa-caret-right color-main ml-2"><FaAngleRight/></i></AniLink>*/}
                      <a
                        href='https://wa.me/13213524962'
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                      >Consultar Ahora<i
                        className="fa fa-caret-right color-main ml-2"><FaAngleRight/></i><FaWhatsapp/></a>
                    </p>

                  </div>
                </div>
              ))}


            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
