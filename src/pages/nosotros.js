import React from "react"
import Layout from "../components/layout"
import image from "../images/about-img.png"
import Team from "../components/Home/Team"

const Nosotros = () => {
  return (
    <Layout>
      <section className="page_title ds s-overlay s-parallax s-pt-130 s-pt-xl-150 s-pb-65">
        <div className="container">
          <div className="row">

            <div className="col-md-12">
              <h1>Nosotros</h1>
            </div>

          </div>
        </div>
      </section>

      {/*// <!--Section About-->*/}
      <section className="ds s-pt-90 s-pt-xl-150 c-gutter-50">
        <div className="container">
          <div className="row align-center pb-5">
            <div className="col-lg-6">
              <img src={image} alt="img"/>
            </div>
            <div className="col-lg-6 text-center text-md-left">
              <div className="divider-60 divider-lg-0 "></div>
              <p className="text-white text-center text-md-left fs-20 line-right mb-0">
                {/*<span>Nosotros</span>*/}
              </p>
              <h3 className="special-heading mt-2 fs-60 text-center text-md-left">
                <span>Nosotros</span>
              </h3>
              <div className="divider-35"></div>
              <p>
                La vida muchas veces tiene momentos de incertidumbre total, en los que parece que las
                malas noticias no paran de llegar una tras otra, y que no logramos ver la luz al final del
                túnel, momentos de desesperanza y temor, pero existen maneras de poder llegar a
                esclarecerlo todo, por ejemplo consultando a un Maestro vidente y tarotista que pueda
                acertar en sus predicciones.
              </p>
              <p>
                ¿Los problemas de salud, dinero o todo lo que concierne a las relaciones personales es lo
                que más te preocupa? ¿Te encuentras en una de esas situaciones en las que todo se mezcla y
                no ves nada en claro? Ahora mismo estamos disponibles para ti, para ser tu guía y darle
                solución a cada uno de todos tus problemas y desesperanzas.
              </p>
              <div className="shortcode-simple-counter counter-layout-2">
                <div className="counter_wrap justify-content-md-start">
                  <div className="counter-wrap">
                    <h2 className="counter counter-size" data-from="0" data-to="25" data-speed="1000">25</h2>
                  </div>
                  <p className="counter-text ">
                    <span className="counter-add">Años de<br/><span
                      className="color-dark fw-500">Experiencia</span></span>
                  </p>
                </div>
              </div>
              <div className="divider-30 divider-lg-30"></div>
              <a href='https://wa.me/13213524962'
                 target={"_blank"}
                 rel={"noopener noreferrer"} className="btn btn-outline-maincolor btn-medium">Consulta Ahora</a>
            </div>
          </div>
        </div>
      </section>
      <Team/>
    </Layout>
  )
}

export default Nosotros
