//rafce
import Nav from "../../componentes/nav/Nav";
import "./About.scss";
import svg from "../../assets/aboutImg.svg";

const About = () => {
  return (
    <>
      <body className="body-about">
        <main className="content-text-about">
          <div className="title">
            <span className="ornament">&lt;h2&gt;</span>
            <h2 className="headers header-h2">Yo, Yo misma</h2>
            <h2 className="headers header-h2-ligth  secondtitle">
              y mis cosas
            </h2>
            <span className="ornament">&lt;/h2&gt;</span>
          </div>
          <div className="container-paragraph">
            <span className="ornament">&lt;p&gt;</span>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              condimentum blandit magna. Aenean aliquam hendrerit sem at cursus.
              Donec erat libero, vehicula a neque ut, sodales varius massa.
              Fusce a ante ac nibh euismod ornare. Donec eget felis gravida,
              posuere purus a, venenatis nibh. Aliquam mollis nulla sed enim
              pulvinar luctus. Quisque nec dapibus est. Cras justo felis,
              sodales non condimentum nec, ultrices quis risus. Aliquam sagittis
              aliquam mattis. Integer viverra quam metus, a rhoncus mi sagittis
              quis.<br></br> Nunc non nibh interdum, condimentum nulla eget,
              ullamcorper ante. In aliquam risus libero, ut semper nibh
              scelerisque vitae. Nullam neque elit, rutrum in dui eu, vestibulum
              rhoncus orci. Duis vehicula dapibus lorem, ut pellentesque diam
              elementum nec. Pellentesque lobortis elit blandit, semper lorem
              quis, venenatis urna. Proin in molestie tellus, sit amet vulputate
              nunc.<br></br> Cras luctus nisi massa, sit amet tempus ante
              ultricies et. Curabitur consectetur posuere ex, a suscipit lorem
              porttitor nec. Vestibulum vestibulum dapibus dolor, in pulvinar
              quam rhoncus sed. Proin pharetra nec nisl eget ultricies. Quisque
              tellus neque, varius a porta ac, accumsan ut dui. Nam at quam eget
              nunc sodales tempor eu et purus.
            </p>
            <span className="ornament">&lt;/p&gt;</span>
          </div>
        </main>
        <section className="content-img-about">
          <div className="content-nav">
            <Nav />
          </div>
          <div className="content-svg-about">
          <div className="img-container-about">
            <img
              className="Svg-about"
              src={svg}
              alt="Ilustracion de barias cosas a linea haciendo referencia a los gustos"
            />
          </div>
          </div>
        </section>
      </body>
    </>
  );
};

export default About;
