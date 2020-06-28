import React from "react"
import Layout from "../components/layout"
import imagen1 from "../images/team/04.jpg"

const Testimonios = () => {
  return (
    <Layout>
      <section className="page_title ds s-overlay s-parallax s-pt-130 s-pt-xl-150 s-pb-65">
        <div className="container">
          <div className="row">

            <div className="col-md-12">
              <h1>Testimonios</h1>
            </div>

          </div>
        </div>
      </section>

      <section className="ds dark-bs s-overlay s-overlay-three-quarter-left s-pt-90 s-pb-85 s-py-xl-150 ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row c-gutter-60 align-items-center">

                <div className="col-lg-6 col-xl-5">
                  <img src={imagen1} alt="img"/>
                </div>

                <div className="col-lg-6 col-xl-7">
                  <div className="divider-lg-0 divider-60"></div>
                  <h4 className="my-0 color-main2">Kathleen R. Bolduc</h4>
                  <p className="team-position pb-xl-3 fs-20">
                    Astrologer
                  </p>

                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam.
                  </p>

                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores.
                  </p>

                  <blockquote>
                    <p>
                      Sem justo facilisi, pulvinar feugiat sed cursus donec vestibulum, rutrum mauris montes felis, quam
                      metus sed in. In curabitur, ut in auctor
                    </p>
                    <footer>
                      <span>January 23, 2019</span>
                    </footer>
                  </blockquote>

                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Testimonios
