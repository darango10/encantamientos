import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"


const Gallery = () => {

  const getImagenes = useStaticQuery(graphql`
      query MyQuery {
          imagenes:allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "Galeria"}}}}) {
              totalCount
              edges {
                  node {
                      acf {
                          galeria1 {
                              localFile {
                                  childImageSharp {
                                      fluid(quality: 100) {
                                          ...GatsbyImageSharpFluid_withWebp
                                      }
                                  }
                              }
                          }
                          galeria2 {
                              localFile {
                                  childImageSharp {
                                      fluid(quality: 100) {
                                          ...GatsbyImageSharpFluid_withWebp
                                      }
                                  }
                              }
                          }
                          galeria3 {
                              localFile {
                                  childImageSharp {
                                      fluid(quality: 100) {
                                          ...GatsbyImageSharpFluid_withWebp
                                      }
                                  }
                              }
                          }
                          galeria4 {
                              localFile {
                                  childImageSharp {
                                      fluid(quality: 100) {
                                          ...GatsbyImageSharpFluid_withWebp
                                      }
                                  }
                              }
                          }
                          galeria5 {
                              localFile {
                                  childImageSharp {
                                      fluid(quality: 100) {
                                          ...GatsbyImageSharpFluid_withWebp
                                      }
                                  }
                              }
                          }
                          galeria6 {
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


  const imagenes = (getImagenes.imagenes.edges[0].node.acf)
  console.log(imagenes)
  return (
    <section className="ds s-pt-85 s-pt-xl-145 container-px-xl-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">

            <h3 className="text-center mt-0 mb-2 special-heading fs-60 color-main">
              <span>Galería</span>
            </h3>
            <div className="line"></div>
            {/*<p className="text-center fs-20 mt-4">*/}
            {/*  <span>When something appears out of nothing <br/>or something disappears.</span>*/}
            {/*</p>*/}

            <div className="divider-40 divider-xl-60"></div>

            <div className=" grid-container gap-5 gallery-layout-2" data-filters=".gallery-filters">

              <div className="grid-box astrology">
                <div className="vertical-item item-gallery ">
                  <div className="item-media">
                    <Image fluid={imagenes.galeria1.localFile.childImageSharp.fluid} alt={'Galeria Encantamientos'} style={{width:"100%", height:"100%"}} />
                    <div className="media-links">
                      <div className="links-wrap">
                        {/*<a className="link-anchor" title="" href="gallery-single.html"><AiOutlineSearch/></a>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid-box taro horoscope">
                <div className="vertical-item item-gallery ">
                  <div className="item-media">
                    <Image fluid={imagenes.galeria2.localFile.childImageSharp.fluid} alt={'Galeria Encantamientos'} style={{width:"100%", height:"100%"}} />
                    <div className="media-links">
                      <div className="links-wrap">
                        {/*<a className="link-anchor" title="" href="gallery-single.html"><AiOutlineSearch/></a>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid-box stone magic">
                <div className="vertical-item item-gallery ">
                  <div className="item-media">
                    <Image fluid={imagenes.galeria3.localFile.childImageSharp.fluid} alt={'Galeria Encantamientos'} style={{width:"100%", height:"100%"}} />
                    <div className="media-links">
                      <div className="links-wrap">
                        {/*<a className="link-anchor" title="" href="gallery-single.html"><AiOutlineSearch/></a>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid-box horoscope stone">
                <div className="vertical-item item-gallery ">
                  <div className="item-media">
                    <Image fluid={imagenes.galeria4.localFile.childImageSharp.fluid} alt={'Galeria Encantamientos'} style={{width:"100%", height:"100%"}} />
                    <div className="media-links">
                      <div className="links-wrap">
                        {/*<a className="link-anchor" title="" href="gallery-single.html"><AiOutlineSearch/></a>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid-box astrology horoscope">
                <div className="vertical-item item-gallery">
                  <div className="item-media">
                    <Image fluid={imagenes.galeria5.localFile.childImageSharp.fluid} alt={'Galeria Encantamientos'} style={{width:"100%", height:"100%"}} />
                    <div className="media-links">
                      <div className="links-wrap">
                        {/*<a className="link-anchor" title="" href="gallery-single.html"><AiOutlineSearch/></a>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid-box magic horoscope">
                <div className="vertical-item item-gallery">
                  <div className="item-media">
                    <Image fluid={imagenes.galeria6.localFile.childImageSharp.fluid} alt={'Galeria Encantamientos'} style={{width:"100%", height:"100%"}} />
                    <div className="media-links">
                      <div className="links-wrap">
                        {/*<a className="link-anchor" title="" href="gallery-single.html"><AiOutlineSearch/></a>*/}
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
