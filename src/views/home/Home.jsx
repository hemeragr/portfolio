import "./Home.scss";
import Svg_hi from "../../componentes/svg-hi/SvgHi";
import face from "../../assets/face.svg";
import Nav from "../../componentes/nav/Nav";

const Home = () => {
  return (
    <body className="body-home">
      <section className="content-text">
        <main>
          <div className="title">
            <span className="ornament space2">&lt;h1&gt;</span>
            <h1 className="headers header-h1">Hemera</h1>
            <h1 className="headers surname">Guerrero</h1>
            <span className="ornament space2">&lt;/h1&gt;</span>
          </div>
          <div className="container-subtitle">
            <span className="ornament space2">&lt;p&gt;</span>
            <p className="subtitle">Web Developed - UX/UI Designer</p>
            <span className="ornament space2">&lt;/p&gt;</span>
          </div>
        </main>
        <footer className="footer">
          <Nav />
        </footer>
      </section>
      <section className="content-img">
        <div className="content-hi">
          <Svg_hi />
        </div>
        <div className="img-container">
          <img
            className="Svg-face"
            src={face}
            alt="Ilustracion a linea de una cara"
          />
        </div>
      </section>
    </body>
  );
};

export default Home;
