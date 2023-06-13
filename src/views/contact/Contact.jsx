import "./Contact.scss";
import SvgHiBlue from "../../componentes/svg-hi/SvgHiBlue";
import Footer from "../../componentes/footer-rrss/Footer";
import Form from "../../componentes/form/Form";
import hand from "../../assets/hand.svg";

const Contact = () => {
  return (
    <div className="body-contact">
      <main className="content-text-contact">
        <div className="title">
          <span className="ornament">&lt;h2&gt;</span>
          <h2 className="headers header-h2">Salúdame</h2>
          <span className="ornament">&lt;/h2&gt;</span>
        </div>
        <div className="container-paragraph">
          <span className="ornament">&lt;p&gt;</span>
          <p className="paragraph-small text-contact">
            <p className="salute">
              ¡Esto es un poquito de mí!
              <span role="img" aria-label="Saludo">
                {" "}
                ✨
              </span>
            </p>
            <p>
              Si quieres llevar tus proyectos al siguiente nivel,
              <span className="stress margin">¡estoy aquí para ayudarte!</span>
              <span role="img" aria-label="Cohete">
                {" "}
                🚀
              </span>
            </p>
            <p>
              No dudes en contactarme y juntos haremos realidad tus ideas.
              <span role="img" aria-label="Manos estrechadas">
                🤝
              </span>
            </p>
            <p>
              ¡Espero saber de ti pronto!{" "}
              <span role="img" aria-label="Correo y estrellas">
                📩💫
              </span>
            </p>
            <a className=" btn-cv" href="cv-2023.pdf" download>
              Descarga mi CV
            </a>
          </p>

          <span className="ornament">&lt;/p&gt;</span>
        </div>
        <span className="ornament">&lt;form&gt;</span>
        <Form />
        <span className="ornament">&lt;/form&gt;</span>
        <div className="footer-contact">
          {" "}
          <Footer />
        </div>
      </main>
      <section className="content-NavImg-contact">
        <div className="hi-contact">
          {" "}
          <SvgHiBlue />
        </div>

        <div className="img-container-contact">
          <img
            className="Svg-contact"
            src={hand}
            alt="Ilustracion a linea de una mano haciendo el simbolo de la paz como saludo"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
