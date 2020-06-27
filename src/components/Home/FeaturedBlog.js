import React from "react"
import imagen1 from "../../images/gallery/08.jpg"
import imagen2 from "../../images/gallery/09.jpg"
import imagen3 from "../../images/gallery/10.jpg"

const FeaturedBlog = () => {
  return (
    <section className="ds s-py-90 s-py-xl-150">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h3 className="text-center mt-0 mb-2 special-heading fs-60 color-main">
              <span>Latest Posts</span>
            </h3>
            <div className="line"></div>
            <p className="text-center fs-20 mt-4">
              <span>It helps to develop fine and gross motor <br/>skills, improves coordination.</span>
            </p>
            <div className="divider-50 divider-xl-60"></div>
            <div className="shortcode-post-grid-tilled-2">
              <article
                className="vertical-item text-center text-md-left box-shadow content-padding post type-post status-publish format-standard has-post-thumbnail bg-darkblue">
                <div className="item-media post-thumbnail">
                  <img src={imagen1} alt="img"/>
                  <div className="media-links">
                    <a className="abs-link" href="blog-single-right.html"></a>
                  </div>
                </div>
                {/*// <!-- .post-thumbnail -->*/}
                <div className="item-content">
										<span className="cat-links">
											<span className="screen-reader-text">Categories</span>
											<a href="blog-right.html" rel="category tag">
												Astrology
											</a>
										</span>
                  <header className="entry-header">
                    <h4 className="entry-title mb-3 links-maincolor2">
                      <a className="fs-30" href="blog-single-right.html" rel="bookmark">
                        The Secret Revealed – Why Millennials
                      </a>
                    </h4>
                  </header>
                  {/*// <!-- .entry-header -->*/}

                  <div className="entry-content mt-20">
                    <p>
                      Aged around 25, 26, 27, 28, 29, 30, 31, 32, 33, 34 - Millennials born 1986 through 1995, in
                      their late
                    </p>
                  </div>
                  {/*// <!-- .entry-content -->*/}
                  <div className="entry-footer flex-row mt-4">
                    <div className="entry-meta">
												<span>
													<a href="blog-single-right.html" rel="bookmark">
														<time className="entry-date published updated" dateTime="2018-03-18T15:15:12+00:00">18 may 2020</time>
													</a>
												</span>
                    </div>
                    {/*// <!-- .entry-meta -->*/}
                    <div className="mt-0 ml-auto">
                      <a href="blog-single-right.html" className="mt-30 font-2">Read Now <i
                        className="fa fa-caret-right color-main ml-2"></i></a>
                    </div>
                  </div>
                </div>
                {/*// <!-- .item-content -->*/}
              </article>
              {/*// <!-- #post-## -->*/}
              <article
                className="side-item text-center text-md-left box-shadow content-padding post type-post status-publish format-standard has-post-thumbnail bg-darkblue ">
                <div className="row">
                  <div className="col-lg-6 d-xl-block d-md-block">
                    <div className="item-media d-block mb-0 post-thumbnail">
                      <img src={imagen2} alt="img"/>
                      <div className="media-links">
                        <a className="abs-link" href="blog-single-right.html"></a>
                      </div>
                    </div>
                    {/*// <!-- .post-thumbnail -->*/}
                  </div>
                  <div className="col-xl-6 col-12">
                    <div className="item-content">
												<span className="cat-links">
													<span className="screen-reader-text">Categories</span>
													<a href="blog-right.html" rel="category tag">
														Astrology
													</a>
												</span>
                      <header className="entry-header">
                        <h4 className="entry-title mb-3 links-maincolor2">
                          <a className="fs-30" href="blog-single-right.html" rel="bookmark">
                            Study Astrology and Tarot for Yourself
                          </a>
                        </h4>
                      </header>
                      {/*// <!-- .entry-header -->*/}

                      <div className="entry-content mt-20">
                        <p>
                          Jupiter is in Capricorn from Tuesday 3rd December 2019.
                        </p>
                      </div>
                      {/*// <!-- .entry-content -->*/}
                      <div className="entry-footer flex-row mt-4">
                        <div className="entry-meta">
														<span>
															<a href="blog-single-right.html" rel="bookmark">
																<time className="entry-date published updated" dateTime="2018-03-18T15:15:12+00:00">18 may 2020</time>
															</a>
														</span>
                        </div>
                        {/*// <!-- .entry-meta -->*/}
                        <div className="mt-0 ml-auto">
                          <a href="blog-single-right.html" className="mt-30 font-2">Read Now <i
                            className="fa fa-caret-right color-main ml-2"></i></a>
                        </div>
                      </div>
                    </div>
                    {/*// <!-- .item-content -->*/}
                  </div>
                </div>
              </article>
              {/*// <!-- #post-## -->*/}
              <article
                className="side-item text-center text-md-left box-shadow content-padding post type-post status-publish format-standard has-post-thumbnail bg-darkblue ">
                <div className="row">
                  <div className="col-lg-6 d-xl-block d-md-block">
                    <div className="item-media d-block mb-0 post-thumbnail">
                      <img src={imagen3} alt="img"/>
                      <div className="media-links">
                        <a className="abs-link" href="blog-single-right.html"></a>
                      </div>
                    </div>
                    {/*// <!-- .post-thumbnail -->*/}
                  </div>
                  <div className="col-xl-6 col-12">
                    <div className="item-content">
												<span className="cat-links">
													<span className="screen-reader-text">Categories</span>
													<a href="blog-right.html" rel="category tag">
														Astrology
													</a>
												</span>
                      <header className="entry-header">
                        <h4 className="entry-title mb-3 links-maincolor2">
                          <a className="fs-30" href="blog-single-right.html" rel="bookmark">
                            Study Astrology and Tarot for Yourself
                          </a>
                        </h4>
                      </header>
                      {/*// <!-- .entry-header -->*/}

                      <div className="entry-content mt-20">
                        <p>
                          Jupiter is in Capricorn from Tuesday 3rd December 2019.
                        </p>
                      </div>
                      {/*// <!-- .entry-content -->*/}
                      <div className="entry-footer flex-row mt-4">
                        <div className="entry-meta">
														<span>
															<a href="blog-single-right.html" rel="bookmark">
																<time className="entry-date published updated" dateTime="2018-03-18T15:15:12+00:00">18 may 2020</time>
															</a>
														</span>
                        </div>
                        {/*// <!-- .entry-meta -->*/}
                        <div className="mt-0 ml-auto">
                          <a href="blog-single-right.html" className="mt-30 font-2">Read Now <i
                            className="fa fa-caret-right color-main ml-2"></i></a>
                        </div>
                      </div>
                    </div>
                    {/*// <!-- .item-content -->*/}
                  </div>
                </div>
              </article>
              {/*// <!-- #post-## -->*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBlog
