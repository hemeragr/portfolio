import Card from "../../componentes/card/Card";
import Footer from "../../componentes/footer-rrss/Footer";
import "./Work.scss";
import "./index.js";

const PROJECTS = [
  {
    work: "Trabajo 1",
    description: "Trabajo about",
    skills_used: "#css #html #js",
  },
  {
    work: "Trabajo 2",
    description: "Trabajo super chulo hecho con react",
    skills_used: "#css #html",
  },
  {
    work: "Trabajo 3",
    description: "Trabajo figma",
    skills_used: "#js #react",
  },
  {
    work: "Trabajo 4",
    description: "Trabajo html y css",
    skills_used: "#vue #figma",
  },
  {
    work: "Trabajo 5",
    description: "Trabajo calculadora",
    skills_used: "#css #sumas",
  },
  {
    work: "Trabajo 6",
    description: "Trabajo super chulo hecho wordpress",
    skills_used: "#php #wprdpress",
  },
];

const Work = () => {
  return (
    <>
      <body>
        <section className="content-home">
          <main>
            <span className="ornament">&lt;h2&gt;</span>
            <h2 className="headers header-h2">Mi código</h2>
            <span className="ornament">&lt;/h2&gt;</span>
            <div className="content">
              {PROJECTS.map((obj) => (
                <Card className="content-card" cita={obj} key={obj.work} />
              ))}
            </div>
          </main>
          
          <footer>
            <Footer />
          </footer>
        </section>
      </body>
    </>
  );
};

export default Work;
