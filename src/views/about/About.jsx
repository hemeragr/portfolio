//rafce
import "./About.scss";
import svg from "../../assets/aboutImg.svg";
import FooterRRSS from "../../componentes/footer-rrss/FooterRRSS";

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
            <p className="paragraph text-about">
              <p className="text-salute ">
                <span className="salute"> ¡Hey, hola, hola! </span>{" "}
                <span className="icon-text" role="img" aria-label="Saludo">
                  👋
                </span>
                Me llamo <span className="stress"> Hemera</span>,{" "}
              </p>
              <p className="margin">
                Este es el código que mueve mi mundo, con él me podréis
                entender.
              </p>
              <p className="margin">
                {" "}
                Después de graduarme en{" "}
                <span className="stress">Bellas Artes</span>, he logrado
                encontrar un equilibrio entre el diseño y el arte en el
                front-end, creando una simbiosis armoniosa. Gracias a esta
                combinación, tsoy capaz de convertir proyectos digitales de
                manera eficiente. ¡Es como magia!{" "}
                <span className="icon-text" role="img" aria-label="Magia">
                  ✨
                </span>
              </p>
              <p className="margin">
                Soy una persona apasionada del diseño que encuentra en cada
                proyecto una oportunidad para crear{" "}
                <span className="stress">
                  experiencias únicas y cautivadoras
                </span>
                .
              </p>
              <p className="margin">
                {" "}
                Cuando no estoy inmersa en el código, me sumerjo en la
                <span className="stress"> música</span>.
                <span
                  className="icon-text"
                  role="img"
                  aria-label="Notas musicales"
                >
                  🎵
                </span>{" "}
                Esta me transporta a un lugar donde puedo expresar mis emociones
                y soñar con mis próximos proyectos. También me encanta
                experimentar con sabores y texturas, mancharme las manos creando
                platos deliciosos que deleitan el paladar. Además, a través de
                trazos y colores, puedo plasmar mis{" "}
                <span className="stress">ideas y emociones</span> en papel,
                creando ilustraciones que transmiten un mensaje sin necesidad de
                palabras.{" "}
                <span
                  className="icon-text"
                  role="img"
                  aria-label="Paleta de colores"
                >
                  🎨
                </span>
              </p>
              <p className="margin">
                Mis amigos son una parte esencial en mi vida. Junto a ellos,
                encuentro la inspiración y el apoyo necesario para continuar
                persiguiendo mis sueños. Además, en los momentos más difíciles,
                son mi <span className="stress">vía de escape</span>. ❤️
                <span className="icon-text" role="img" aria-label="Corazón">
                  ❤️
                </span>
              </p>{" "}
              <p className="margin">
                Cuando necesito un tiempo para relajarme y sumergirme en nuevas
                historias, nada se compara con un buen libro o una buena partida
                a la Nintendo Switch.{" "}
                <span className="icon-text" role="img" aria-label="Libro">
                  📚
                </span>{" "}
                <span className="icon-text" role="img" aria-label="Videojuego">
                  🎮
                </span>{" "}
                Esto me permite escapar a mundos fascinantes, inspirarme de
                nuevas ideas y descubrir personajes memorables. Cada aventura es
                un portal hacia la imaginación y el conocimiento.{" "}
                <span className="icon-text" role="img" aria-label="Estrella">
                  🌟
                </span>
              </p>
              <p className="margin">
                Aquí tienes una pequeña muestra de quién soy. Si deseas
                descubrir más,<span className="stress">sigue navegando</span> .
                ¡Bienvenidos a mi mundo!{" "}
                <span
                  className="icon-text"
                  role="img"
                  aria-label="Globo terráqueo"
                >
                  🌍
                </span>
                muestra de quién soy. Si deseas descubrir más, sigue navegando.{" "}
              </p>
              <p className="salute margin">
                {" "}
                ¡Bienvenidos a mi mundo!{" "}
                <span
                  className="icon-text"
                  role="img"
                  aria-label="Cara timida sonriente"
                >
                  😊
                </span>
              </p>
            </p>
            <span className="ornament">&lt;/p&gt;</span>
          </div>
        </main>
        <section className="content-img-about">
          <div className="img-container-about">
            <img
              className="Svg-about"
              src={svg}
              alt="Ilustracion de varias cosas a línea haciendo referencia a los gustos"
            />
          </div>

          <FooterRRSS />
        </section>
      </body>
    </>
  );
};

export default About;
