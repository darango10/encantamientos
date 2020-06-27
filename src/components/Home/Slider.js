import React from "react"
import BackgroundSlider from "gatsby-image-background-slider"
import { graphql, useStaticQuery } from "gatsby"

const Slider = () => {
  return (
    // <section className="page_slider slider-1">
    //   <div className="flexslider">
    //     <ul className="slides">
    //       <li className="ds cover-image s-overlay mobile-overlay text-center text-md-left">
    //         <img src={imagen1} alt="img"/>
    //
    //         {/*// <!-- eof .container-fluid -->*/}
    //       </li>
    //       <li className="ds cover-image s-overlay mobile-overlay text-center text-md-left">
    //         <img src="images/slide02_800.jpg" alt="img"/>
    //         <div className="container">
    //           <div className="row">
    //             <div className="col-12">
    //               <div className="intro_layers_wrapper">
    //                 <div className="intro_layers">
    //                   <div className="intro_layer" data-animation="fadeInRight">
    //                     <div className="divider-60 divider-xl-80"></div>
    //                     <div className="d-inline-block">
    //                       <h2 className="intro_featured_word">
    //                         Ultimate <br/>
    //                         Guide
    //                       </h2>
    //                       <p>
    //                         There are 12 signs of the zodiac, each one taking up 30 degrees in your birth chart,
    //                         manking a complete 360 degree circle
    //                       </p>
    //                     </div>
    //                   </div>
    //                   <div className="intro_layer" data-animation="fadeInUp">
    //                     <a href="./about.html" className="btn btn-maincolor btn-slider btn-medium">Let’s Begin</a>
    //                   </div>
    //                 </div>
    //                 {/*// <!-- eof .intro_layers -->*/}
    //               </div>
    //               {/*{!--eof.intro_layers_wrapper--}*/}
    //             </div>
    //             {/*// <!-- eof .col-* -->*/}
    //           </div>
    //           {/*// <!-- eof .row -->*/}
    //         </div>
    //         {/*// <!-- eof .container-fluid -->*/}
    //       </li>
    //       <li className="ds cover-image s-overlay mobile-overlay text-center text-md-left">
    //         <img src="images/slide03_800.jpg" alt="img"/>
    //         <div className="container">
    //           <div className="row">
    //             <div className="col-12">
    //               <div className="intro_layers_wrapper">
    //                 <div className="intro_layers">
    //                   <div className="intro_layer" data-animation="fadeInRight">
    //                     <div className="divider-60 divider-xl-80"></div>
    //                     <div className="d-inline-block">
    //                       <h2 className="intro_featured_word">
    //                         Ultimate <br/>
    //                         Guide
    //                       </h2>
    //                       <p>
    //                         There are 12 signs of the zodiac, each one taking up 30 degrees in your birth chart,
    //                         manking a complete 360 degree circle
    //                       </p>
    //                     </div>
    //                   </div>
    //                   <div className="intro_layer" data-animation="fadeInUp">
    //                     <a href="./about.html" className="btn btn-maincolor btn-slider btn-medium">Let’s Begin</a>
    //                   </div>
    //                 </div>
    //                 {/*// <!-- eof .intro_layers -->*/}
    //               </div>
    //               {/*// <!-- eof .intro_layers_wrapper -->*/}
    //             </div>
    //             {/*// <!-- eof .col-* -->*/}
    //           </div>
    //           {/*// <!-- eof .row -->*/}
    //         </div>
    //         {/*// <!-- eof .container-fluid -->*/}
    //       </li>
    //     </ul>
    //   </div>
    //   {/*// <!-- eof flexslider -->*/}
    // </section>
    // <div style={{height:"800px"}}>
    //
    //
    //
    // </div>

  <section className="page_slider slider-1" style={{height:'800px'}}>
    <div>
      <BackgroundSlider
        query={useStaticQuery(graphql`
        query {
          backgrounds: allFile (filter: {sourceInstanceName: {eq: "images"}}){
            nodes {
              relativePath
              childImageSharp {
                fluid (maxWidth: 1920, quality: 100, maxHeight:800){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `)}
        initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
        transition={4} // transition duration between images
        duration={8} // how long an image is shown
        // specify images to include (and their order) according to `relativePath`
        images={["slide01_800.jpg", "slide02_800.jpg", "slide03_800.jpg"]}

        // pass down standard element props
        // style={{
        //   transform: "rotate(-2deg) scale(.9)"
        // }}
      >
        {/* Captions in sync with background images*/}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="intro_layers_wrapper">
                <div className="intro_layers">
                  <div className="intro_layer" data-animation="fadeInRight">
                    <div className="divider-60 divider-xl-80"></div>
                    <div className="d-inline-block">
                      <h2 className="intro_featured_word">
                        Ultimate <br/>
                        Guide
                      </h2>
                      <p style={{color:"white"}}>
                        There are 12 signs of the zodiac, each one taking up 30 degrees in your birth chart,
                        manking a complete 360 degree circle
                      </p>
                    </div>
                  </div>
                  <div className="intro_layer" data-animation="fadeInUp">
                    <a href="./about.html" className="btn btn-maincolor btn-slider btn-medium">Let’s Begin</a>
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
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="intro_layers_wrapper">
                <div className="intro_layers">
                  <div className="intro_layer" data-animation="fadeInRight">
                    <div className="divider-60 divider-xl-80"></div>
                    <div className="d-inline-block">
                      <h2 className="intro_featured_word">
                        Ultimate <br/>
                        Guide
                      </h2>
                      <p style={{color:"white"}}>
                        There are 12 signs of the zodiac, each one taking up 30 degrees in your birth chart,
                        manking a complete 360 degree circle
                      </p>
                    </div>
                  </div>
                  <div className="intro_layer" data-animation="fadeInUp">
                    <a href="./about.html" className="btn btn-maincolor btn-slider btn-medium">Let’s Begin</a>
                  </div>
                </div>
                {/*// <!-- eof .intro_layers -->*/}
              </div>
              {/*{!--eof.intro_layers_wrapper--}*/}
            </div>
            {/*// <!-- eof .col-* -->*/}
          </div>
          {/*// <!-- eof .row -->*/}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="intro_layers_wrapper">
                <div className="intro_layers">
                  <div className="intro_layer" data-animation="fadeInRight">
                    <div className="divider-60 divider-xl-80"></div>
                    <div className="d-inline-block">
                      <h2 className="intro_featured_word">
                        Ultimate <br/>
                        Guide
                      </h2>
                      <p style={{color:"white"}}>
                        There are 12 signs of the zodiac, each one taking up 30 degrees in your birth chart,
                        manking a complete 360 degree circle
                      </p>
                    </div>
                  </div>
                  <div className="intro_layer" data-animation="fadeInUp">
                    <a href="./about.html" className="btn btn-maincolor btn-slider btn-medium">Let’s Begin</a>
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
      </BackgroundSlider>
    </div>
    {/*// <!-- eof flexslider -->*/}
  </section>

  )
}

export default Slider
