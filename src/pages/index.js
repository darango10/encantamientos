import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../components/css/animations.css"


import Layout from "../components/layout"
import Services from "../components/Home/Services"
import Author from "../components/Home/Author"
import Benefits from "../components/Home/Benefits"
import Gallery from "../components/Home/Gallery"
import FeaturedBlog from "../components/Home/FeaturedBlog"
import Slider from "../components/Home/Slider"
import Team from "../components/Home/Team"
import Testimonials from "../components/Home/Testimonials"
import Video from "../components/Home/Video"
import Counter from "../components/Home/Counter"
import Footer from "../components/footer"



const IndexPage = () => (
  <Layout>
    <div id="canvas">
      <div id="box_wrapper">

        {/*// <!-- template sections -->*/}


        <Slider/>


        {/*// <!-- Section Services -->*/}
        <Services/>

        {/*// <!-- Section About Author -->*/}
        <Author/>

        {/*// <!-- Section Team -->*/}
        <Team/>

        {/*// <!-- Section Testimonials -->*/}
        <Testimonials/>

        {/*// <!-- Section features -->*/}
        <Benefits/>

        {/*// <!--Section Gallery-->*/}
        <Gallery/>

        {/*// <!-- Section Video -->*/}
        <Video/>

        {/*// <!-- Section Counter -->*/}
        <Counter/>

        {/*// <!-- Section Blog -->*/}
        <FeaturedBlog/>




      </div>
      {/*// <!-- eof #box_wrapper -->*/}
    </div>
    {/*// <!-- eof #canvas -->*/}
  </Layout>
)

export default IndexPage
