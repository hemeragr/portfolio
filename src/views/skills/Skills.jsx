import BarSkill from "../../componentes/bars-skills/BarSkill";
import Nav from "../../componentes/nav/Nav";
import "./Skills.scss";

const Skills = () => {
  return (
    <>
      <body>
        <section className="content-home">
          <header className="top-bar">
            <Nav />
          </header>
          <main>
            <BarSkill />
          </main>
          <footer></footer>
        </section>
        <section className="content-img"></section>
      </body>
    </>
  );
};

export default Skills;
