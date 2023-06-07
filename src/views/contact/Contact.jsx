import Nav from "../../componentes/nav/Nav";
import "./Contact.scss";
import Svg_hi from "../../componentes/svg-hi/SvgHi";
import Footer from "../../componentes/footer-rrss/Footer";
import Form from "../../componentes/form/Form";
import hand from "../../assets/hand.svg";

const Contact = () => {
  return (
    <body className="body-contact">
      <main className="content-text">
        <div className="title">
          <span className="ornament">&lt;h2&gt;</span>
          <h2 className="headers header-h2">Salúdame</h2>
          <span className="ornament">&lt;/h2&gt;</span>
        </div>
        <div className="container-paragraph">
          <span className="ornament">&lt;p&gt;</span>
          <p className="paragraph">
            ¡Esto es un poquito de mí! Si quieres llevar tus proyectos al
            siguiente nivel, ¡estoy aquí para ayudarte! No dudes en contactarme
            y juntos haremos realidad tus ideas. ¡Espero saber de ti pronto!
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
        <div className="nav-contact">
          <Nav />
        </div>
        <div className="hi-contact">
          {" "}
          <Svg_hi />
        </div>

        <div className="img-container-contact">
          <img
            className="Svg-contact"
            src={hand}
            alt="Ilustracion a linea de una mano haciendo el simbolo de la paz como saludo"
          />
        </div>
      </section>
    </body>
  );
};

export default Contact;
