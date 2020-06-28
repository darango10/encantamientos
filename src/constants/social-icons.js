import React from "react"
import { FaFacebook } from "react-icons/all"
import { FaLinkedinIn } from "react-icons/all"
import { FaTwitter } from "react-icons/all"
import { FaInstagram } from "react-icons/all"
import { FaYoutube } from "react-icons/all"

export default [
  {
    icon: <FaFacebook/>,
    url:'https://facebook.com',
    class:'fa fa-facebook'
  },

  {
    icon: <FaTwitter/>,
    url:'https://twitter.com',
    class:'fa fa-twitter'
  },

  {
    icon: <FaLinkedinIn/>,
    url:"https://www.linkedin.com/",
    class:'fa fa-linkedin'
  },

  {
    icon: <FaInstagram/>,
    url:"https://www.instagram.com/",
    class:'fa fa-instagram'
  },

  {
    icon: <FaYoutube/>,
    url:"https://www.youtube.com/",
    class:'fa fa-youtube-play'
  },
]
