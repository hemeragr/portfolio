import "./Home.scss";
import Svg_hi from "../../componentes/svg-hi/Svg_hi";
("../../componentes/svg-hi/Svg_hi");
import Svg_face from "../../componentes/svg-face/Svg_face";
import Nav from "../../componentes/nav/Nav";
import BarSkill from "../../componentes/bars-skills/BarSkill";

const Home = () => {
  return (
    <>
      <body>
        <section className="content-home">
          <BarSkill />
          <main>
            <div className="title">
              <span className="ornament">&lt;h1&gt;</span>
              <h1 className="name">Hemera</h1>
              <h1 className="surname">Guerrero</h1>
              <span className="ornament">&lt;/h1&gt;</span>
            </div>
            <div className="container-subtitle">
              <span className="ornament">&lt;p&gt;</span>
              <p className="subtitile">Web Developed - UX/UI Designer</p>
              <span className="ornament">&lt;/p&gt;</span>
            </div>
          </main>
          <footer>
            <Nav />
          </footer>
        </section>
        <section className="content-img">
          <Svg_hi />
          <Svg_face />
        </section>
      </body>
    </>
  );
};

export default Home;
