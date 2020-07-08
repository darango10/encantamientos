import React from "react"
import imagen from "../../images/Galeria2.jpg"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Author = () => {
  return (
    <section className="ds s-py-90 s-py-xl-150">
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-6">
            <img src={imagen} alt="img" className="rounded-circle"/>
          </div>
          <div className="col-lg-6 text-center text-md-left">
            <div className="divider-60 divider-lg-0"></div>
            <h3 className="special-heading fs-60 color-main">
              <span>Aviso <br/>Importante:</span>
            </h3>
            <div className="divider-30"></div>
            <p>
              De acuerdo con las legislaciones vigentes, se establece que:
              Las revelaciones, predicciones, clarividencias psíquicas, lecturas del Tarot, hechizos de
              amor y otros, limpiezas y protecciones se hacen con fines para entretener a personas adultas
              mayores de edad y con facultades mentales para entender que en ningún caso se sustituirá
              las debidas atenciones médicas, psicológicas, psiquiátricas, financieras, legales o jurídicas
              que puedan requerir en cualquier caso.
            </p>

            <p>
              Por ningún motivo este sitio web solicitará información personal como números de
              identificación, información financiera como tarjetas de crédito o débito ni tampoco
              información privada o religiosa.
            </p>

            <p>
              El valor de los procedimientos y materiales varía de acuerdo a cada caso en particular, por
              ende, dicho valor será acordado con el Maestro que sea asignado a su consulta
              personalizada.
            </p>
            {/*<blockquote>*/}
            {/*  <p>*/}
            {/*    For over 30 years, has been at the forefront of cultural change, accelerating*/}
            {/*  </p>*/}
            {/*  <footer>*/}
            {/*    <span>Larry N. Hall</span>*/}
            {/*  </footer>*/}
            {/*</blockquote>*/}
            <p>
              Nos reservamos el derecho de atenderlo.
            </p>
            <div className="divider-30 divider-xl-50"></div>
            <AniLink fade to="/contacto" className="btn btn-outline-maincolor btnCall">
              Consulta Ahora
            </AniLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Author
