import BarSkill from "../../componentes/component-bar/BarSkill";
import Nav from "../../componentes/nav/Nav";
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend elementum quam a sagittis. Proin tincidunt nisl est, vitae venenatis lorem fermentum et. Vestibulum eget consectetur orci, eget dapibus nulla. Duis condimentum nibh a laoreet consequat. Ut eu pharetra turpis. Quisque eleifend nisl sed turpis luctus elementum.",
  },
  {
    title: "UX/UI",
    paragraph:
      "Donec maximus odio sed erat sagittis gravida. Aliquam ac mauris ut mauris blandit dictum sit amet a justo. Quisque non odio justo. Sed interdum in velit id suscipit. Donec quis libero nec nisl interdum efficitur lobortis a turpis. ",
  },
];

const Skills = () => {
  return (
    <>
      <body>
        <section className="content-home">
          <main>
            <div className="title">
              <span className="ornament">&lt;h2&gt;</span>
              <h2 className="headers header-h2">Habilidades</h2>
              <span className="ornament">&lt;/h2&gt;</span>
            </div>
            <span className="ornament">&lt;p&gt;</span>
            <p className="paragraph">
              Donec maximus odio sed erat sagittis gravida. Aliquam ac mauris ut
              mauris blandit dictum sit amet a justo. Quisque non odio justo.
              Sed interdum in velit id suscipit. Donec quis libero nec nisl
              interdum efficitur lobortis a turpis.
            </p>
            <span className="ornament">&lt;/p&gt;</span>

            <div>
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
      
        <Nav />
          <div className="contents">
            {TX.map((text) => (
              <div key={text.title} className="content-cardText">
                <Cardtxt card={text} />
              </div>
            ))}
          </div>
          <Footer />
        </section>
      </body>
    </>
  );
};

export default Skills;
