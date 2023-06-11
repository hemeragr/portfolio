import BarSkill from "../../componentes/component-bar/BarSkill";
import "./Skills.scss";
import {
  IconAngular,
  IconCss,
  IconFigma,
  IconGit,
  IconHtml,
  IconId,
  IconIlus,
  IconJs,
  IconNetifly,
  IconPhp,
  IconPs,
  IconReact,
  IconSass,
  IconVisual,
  IconWordpress,
} from "../../componentes/component-bar/bar-skills/icons-skills/index";

import {
  Bar75,
  Bar100,
  Bar25,
  Bar50,
} from "../../componentes/component-bar/bar-skills/bar";

import Cardtxt from "../../componentes/text-card/CardTxt";
import Footer from "../../componentes/footer-rrss/Footer";

const IC = [
  {
    icon: <IconVisual />,
    bar: <Bar100 />,
  },
  {
    icon: <IconHtml />,
    bar: <Bar75 />,
  },
  {
    icon: <IconCss />,
    bar: <Bar75 />,
  },
  {
    icon: <IconJs />,
    bar: <Bar75 />,
  },
  {
    icon: <IconReact />,
    bar: <Bar50 />,
  },
  {
    icon: <IconAngular />,
    bar: <Bar25 />,
  },
  {
    icon: <IconSass />,
    bar: <Bar50 />,
  },
  {
    icon: <IconGit />,
    bar: <Bar50 />,
  },
  {
    icon: <IconPhp />,
    bar: <Bar25 />,
  },
  {
    icon: <IconWordpress />,
    bar: <Bar50 />,
  },
  {
    icon: <IconNetifly />,
    bar: <Bar25 />,
  },
  {
    icon: <IconFigma />,
    bar: <Bar75 />,
  },
  {
    icon: <IconPs />,
    bar: <Bar100 />,
  },
  {
    icon: <IconId />,
    bar: <Bar100 />,
  },
  {
    icon: <IconIlus />,
    bar: <Bar100 />,
  },
];

const TX = [
  {
    title: "Frontend",
    paragraph:
      "Como front-end, mi pasión radica en romper la estática de los sitios web y hacer que cobren vida. Disfruto enormemente añadiendo ese toque mágico que transforma las páginas en experiencias interactivas y cautivadoras. Mi enfoque se basa en escribir un código limpio y eficiente que permita la fluidez y funcionalidad necesarias.",
  },
  {
    title: "UX/UI",
    paragraph:
      "Como front-end, mi pasión radica en romper la estática de los sitios web y hacer que cobren vida. Disfruto enormemente añadiendo ese toque mágico que transforma las páginas en experiencias interactivas y cautivadoras. Mi enfoque se basa en escribir un código limpio y eficiente que permita la fluidez y funcionalidad necesarias.",
  },
];

const Skills = () => {
  return (
    <div className="body-home">
      <section className="content-skills">
        <main>
          <div className="title tilte-skills">
            <span className="ornament">&lt;h2&gt;</span>
            <h2 className="headers header-h2">Habilidades</h2>
            <span className="ornament">&lt;/h2&gt;</span>
          </div>
          <span className="ornament margin-skills">&lt;p&gt;</span>
          <p className="paragraph txt-skills">
            Soy una persona que disfruta del{" "}
            <span className="stress">trabajo en equipo </span> y me encanta
            animar el ambiente con alguna que otra broma.{" "}
            <span className="icon-text" role="img" aria-label="Cara sonriente">
              {" "}
              😄{" "}
            </span>{" "}
            Me considero una compañera de
            <span className="stress"> equipo aplicada y responsable</span>,
            dispuesta a dar ese esfuerzo adicional para asegurarnos de que el
            proyecto avance sin problemas.{" "}
            <span
              className="icon-text"
              role="img"
              aria-label="Brazo sacando musculo"
            >
              {" "}
              💪{" "}
            </span>{" "}
            Soy como el pegamento que mantiene unido al equipo, fomentando la
            colaboración y la comunicación efectiva.{" "}
            <span className="icon-text" role="img" aria-label="Dos siluetas">
              {" "}
              👥{" "}
            </span>{" "}
            Puedes contar conmigo para mantener una{" "}
            <span className="stress"> actitud positiva </span>, motivar a los
            demás y hacer que el trabajo en equipo sea divertido y gratificante.{" "}
            <span className="icon-text" role="img" aria-label="Saludo festivo">
              {" "}
              🎉{" "}
            </span>
          </p>
          <span className="ornament">&lt;/p&gt;</span>

          <div className="content-skills-bars">
            <span className="ornament">&lt;div&gt;</span>
            <div className="columns-bar">
              {IC.map((object) => (
                <div key={object.icon} className="content-barskills">
                  <BarSkill cita={object} />
                </div>
              ))}
            </div>
            <span className="ornament">&lt;/div&gt;</span>
          </div>
        </main>
      </section>
      <section className="content-cards">
        <div className="contents">
          {TX.map((text) => (
            <div key={text.title} className="content-cardText">
              <Cardtxt card={text} />
            </div>
          ))}
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default Skills;
