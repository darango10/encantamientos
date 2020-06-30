import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Carousel from "react-bootstrap/Carousel"

const Slider = () => {

  const getBackgrounds = useStaticQuery(graphql`
      {

          backgrounds:allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "Slider"}}}}, limit: 3, sort: {fields: date, order: DESC}) {
              edges {
                  node {
                      acf {
                          titulo
                          parrafo
                          calltoaction
                          imagenSlider {
                              source_url
                          }
                      }
                  }
              }
          }
      }
  `)


  const backgrounds = (getBackgrounds.backgrounds.edges)

  console.log(backgrounds)


  return (
  <section className="page_slider slider-1">
    <div>
      <Carousel>
        {backgrounds.map((background, index) =>(
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 imagenSlider"
              src={`http://admin.encantamientos.com${background.node.acf.imagenSlider.source_url}`}
              alt="First slide"
            />
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="intro_layers_wrapper">
                    <div className="intro_layers">
                      <div className="intro_layer" data-animation="fadeInRight">
                        <div className="divider-60 divider-xl-80"></div>
                        <div className="d-inline-block">
                          <h2 className="intro_featured_word">
                            {background.node.acf.titulo}
                          </h2>
                          <p style={{color:"white"}}>
                            {background.node.acf.parrafo}
                          </p>
                        </div>
                      </div>
                      <div className="intro_layer" data-animation="fadeInUp">
                        <AniLink fade to="/servicios" className="btn btn-maincolor btn-slider btn-medium">{background.node.acf.calltoaction}</AniLink>
                      </div>
                    </div>
                    {/*// <!-- eof .intro_layers -->*/}
                  </div>
                  {/*// <!-- eof .intro_layers_wrapper -->*/}
                </div>
                {/*// <!-- eof .col-* -->*/}
              </div>
              {/*// <!-- eof .row -->*/}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
    {/*// <!-- eof flexslider -->*/}
  </section>

  )
}

export default Slider
