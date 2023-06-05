import "./Home.scss";
import Svg_hi from "../../componentes/svg-hi/Svg_hi";
("../../componentes/svg-hi/Svg_hi");
import Svg_face from "../../componentes/svg-face/Svg_face";
import Nav from "../../componentes/nav/Nav";
const Home = () => {
  return (
    <>
      <body className="body">
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
          <div className="content-hi"><Svg_hi /></div>
          <Svg_face />
        </section>
      </body>
    </>
  );
};

export default Home;
