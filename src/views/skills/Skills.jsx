import BarSkill from "../../componentes/bars-skills/BarSkill";
import Nav from "../../componentes/nav/Nav";
import "./Skills.scss";
import IconAngular from "../../componentes/bars-skills/bar-skills/icons-skills/IconAngular";
import IconHtml from "../../componentes/bars-skills/bar-skills/icons-skills/IconHtml";
import IconCss from "../../componentes/bars-skills/bar-skills/icons-skills/IconCss";
import IconFigma from "../../componentes/bars-skills/bar-skills/icons-skills/IconFigma";
import IconGit from "../../componentes/bars-skills/bar-skills/icons-skills/IconGit";
import IconId from "../../componentes/bars-skills/bar-skills/icons-skills/IconId";
import IconIlus from "../../componentes/bars-skills/bar-skills/icons-skills/IconIlus";
import IconJs from "../../componentes/bars-skills/bar-skills/icons-skills/IconJs";
import IconNetifly from "../../componentes/bars-skills/bar-skills/icons-skills/IconNetlify";
import IconPs from "../../componentes/bars-skills/bar-skills/icons-skills/IconPhotoshop";
import IconPhp from "../../componentes/bars-skills/bar-skills/icons-skills/IconPhp";
import IconReact from "../../componentes/bars-skills/bar-skills/icons-skills/IconReact";
import IconSass from "../../componentes/bars-skills/bar-skills/icons-skills/IconSass";
import IconVisual from "../../componentes/bars-skills/bar-skills/icons-skills/IconVisual";
import IconWordpress from "../../componentes/bars-skills/bar-skills/icons-skills/IconWordpress";

import Bar25 from "../../componentes/bars-skills/bar-skills/Bar25";
import Bar50 from "../../componentes/bars-skills/bar-skills/Bar50";
import Bar75 from "../../componentes/bars-skills/bar-skills/Bar75";
import Bar100 from "../../componentes/bars-skills/bar-skills/Bar100";

const Skills = () => {
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

  return (
    <>
      <body>
        <section className="content-home">
          <header className="top-bar">
            <Nav />
          </header>
          <main>
            <div className="title">
              <span className="ornament">&lt;h2&gt;</span>
              <h2 className="headers header-h2">Yo, Yo misma</h2>
              <span className="ornament">&lt;/h2&gt;</span>
            </div>
            <span className="ornament">&lt;p&gt;</span>
              <p className="paragraph">Web Developed - UX/UI Designer</p>
              <span className="ornament">&lt;/p&gt;</span>

            <div>
              <div className="columns-bar">
                {IC.map((object) => (
                  <div key={object.icon} className="content-barskills">
                    <BarSkill cita={object} />
                  </div>
                ))}
              </div>
            </div>
          </main>
          <footer></footer>
        </section>
        <section className="content-img"></section>
      </body>
    </>
  );
};

export default Skills;
