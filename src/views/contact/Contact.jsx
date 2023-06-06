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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            condimentum blandit magna. Aenean aliquam hendrerit sem at cursus.
            Donec erat libero, vehicula a neque ut, sodales varius massa. Fusce
            a ante ac nibh euismod ornare.
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
      <section className="content-NavImg">
        <div className="nav-contact">
          {" "}
          <Nav />
        </div>
        <div className="hi-contact">
          {" "}
          <Svg_hi />
        </div>

        <img
          className="Svg-hand"
          src={hand}
          alt="Ilustracion a linea de una mano haciendo el simbolo de la paz como saludo"
        />
      </section>
    </body>
  );
};

export default Contact;
