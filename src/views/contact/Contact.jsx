import Nav from "../../componentes/nav/Nav";
import "./Contact.scss";
import ContactSvg from "../../componentes/svg-hand/ContactSvg";
import Svg_hi from "../../componentes/svg-hi/Svg_hi";
import Footer from "../../componentes/footer-rrss/Footer";

const Contact = () => {
  return (
    <>
      <body>
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
              Donec erat libero, vehicula a neque ut, sodales varius massa.
              Fusce a ante ac nibh euismod ornare.
            </p>
            <span className="ornament">&lt;/p&gt;</span>
          </div>
          <form action="" className="contact-form">
            <div className="cont-name">
              <div className="input-block">
                <label>Nombre</label>
                <input type="text" className="input-name" />
              </div>
            </div>
            <div className="cont-mail">
              <div className="input-block">
                <label>@mail</label>
                <input type="mail" className="input-mail" />
              </div>
            </div>
            <div className="cont-text">
              <div className="input-block textarea">
                <label>Cuéntame tus ideas...</label>
                <textarea
                  rows="3"
                  type="text"
                  className="input-text"
                ></textarea>
              </div>
            </div>
            <div className="cont-btn">
              <button className="button-send button-send">&gt;</button>
            </div>
          </form>
          <Footer />
        </main>
        <section className="content-Nav&Img">
          <Nav />
          <Svg_hi />
          <ContactSvg />
        </section>
      </body>
    </>
  );
};

export default Contact;
