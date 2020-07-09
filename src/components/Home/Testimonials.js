import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql, useStaticQuery } from "gatsby"
import { baseUrl } from "../../constants/url_path"
import Image from "gatsby-image"
import { FaAngleRight } from "react-icons/all"


const Testimonials = () => {

  const getTestimonials = useStaticQuery(graphql`
      {
          testimonios: allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "Testimonios"}}}}, limit: 2, sort: {fields: date, order: DESC}) {
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


  const testimonios = (getTestimonials.testimonios.edges)

  // console.log(testimonios)





  return (
    <section className="ds s-pt-90 s-pb-70 s-pt-xl-150 s-pb-xl-130">
      <div className="container">
        <div className="row align-center">
          <div className="col-xl-4 col-lg-5">
            <AniLink fade to="/testimonios">
            <p className="text-white text-center text-md-left fs-20 line-right mb-0">
              <span>Leer Más<i
                className="fa fa-caret-right color-main ml-2"/><FaAngleRight/></span>
            </p>
            <h3 className="special-heading mt-2 fs-60 text-center text-md-left">
              <span>Testimonios</span>
            </h3>
            </AniLink>
          </div>
          <div className="col-xl-8 col-lg-7">
            <div className="divider-60 divider-lg-0"></div>
            <div data-responsive-lg="1" data-responsive-md="1"
                 data-responsive-sm="1" data-responsive-xs="1" data-nav="false" data-margin="0" data-loop="true"
                 data-dots="false" data-autoplay="true">
              {
                testimonios.map((testimonio,i) => ((
                  // console.log(testimonio.node.acf)
                  <div key={i} className="quote-item vertical quote-layout-1">
                    <div className="wrap-content">
                      <div className="quote-content">
                        <blockquote>
                          <p>
                            {testimonio.node.acf.testimonio}
                          </p>
                        </blockquote>
                      </div>
                      <div className="quote-title">
                        <h5 className="mb-0 color-main2 bold">{testimonio.node.acf.nombretestimonio}</h5>
                        <p className="mb-0 text-white">{testimonio.node.acf.ocupaciontestimonio}</p>
                      </div>
                    </div>
                    <div className="wrap-image">
                      <div className="quote-image">
                        <Image className="thumbRounded" fluid={testimonio.node.acf.imagentestimonio.localFile.childImageSharp.fluid} alt={testimonio.node.acf.nombretestimonio} style={{width:"120px", height:"120px"}}/>
                        {/*<img className='thumbRounded'*/}
                        {/*     src={`${baseUrl}${testimonio.node.acf.imagentestimonio.source_url}`}/>*/}
                      </div>
                      <div className="owl-custom-nav">
                        <a href="#" className="owl-prev"><i className="ico ico-right-arrow"></i></a>
                        <a href="#" className="owl-next"><i className="ico ico-right-arrow"></i></a>
                      </div>
                    </div>
                  </div>
                )))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
