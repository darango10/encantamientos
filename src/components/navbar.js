import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import links from "../constants/links"
import social from "../constants/social-icons"


const Navbar = () => {

  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }


  return (
    <div className="header_absolute ">

      {/*// <!-- header with two Bootstrap columns - left for logo and right for navigation and includes (search, social icons, additional links and buttons etc -->*/}
      <header className="page_header ds ms s-overlay justify-nav-start">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-9 col-1 order-2 order-xl-1">
              <div className="nav-wrap">

                {/*// <!-- main nav start -->*/}
                <nav className="top-nav">
                  <ul className="nav sf-menu">
                    {links.map((item, index) => (
                      <li key={index}><AniLink fade to={item.path}>{item.text}</AniLink></li>
                    ))}
                  </ul>


                </nav>
                {/*// <!-- eof main nav -->*/}

              </div>
            </div>
            <div className="col-xl-3 col-9 order-1 order-xl-2 text-xl-right text-left">
								<span className="social-icons">
                  {social.map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      className={item.class}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >{item.icon}</a>
                  ))}
								</span>
            </div>
          </div>
        </div>
        {/*// <!-- header toggler -->*/}
        <span className="toggle_menu" onClick={toggleNav}><span></span></span>
      </header>
      {isOpen
        ? <div className="showNav">
          <ul className="menuMovil">
            {links.map((item, index) => (
              <li key={index}><AniLink fade to={item.path}>{item.text}</AniLink></li>
            ))}
          </ul>
        </div>
        : null
      }

    </div>
  )
}

export default Navbar
