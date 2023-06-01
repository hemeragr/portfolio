import Card from "../../componentes/card/Card";
import Footer from "../../componentes/footer-rrss/Footer";
import Nav from "../../componentes/nav/Nav";
import "./Work.scss";

const Work = () => {
  const DB = [
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

  return (
    <>
      <body>
        <section className="content-home">
          <header className="top-bar">
            <Nav />
          </header>
          <main>
            <span className="ornament">&lt;h2&gt;</span>
            <h2 className="headers header-h2">Mi código</h2>
            <span className="ornament">&lt;/h2&gt;</span>
            <div className="content">
              {DB.map((obj) => (
                <div className="content-card" key={obj.work}>
                  <Card cita={obj} />
                </div>
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
