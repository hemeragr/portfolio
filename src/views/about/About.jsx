//rafce
import "./About.scss";
import svg from "../../assets/aboutImg.svg";

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
            <p className="paragraph">
              Hey, hola, hola! 👋 Me llamo Hemera,<br></br> Este es el código
              que mueve mi mundo, con él me podréis entender.<br></br> Después
              de graduarme en Bellas Artes, he logrado encontrar un equilibrio
              perfecto entre el diseño y el arte, creando una simbiosis
              armoniosa. Gracias a esta combinación, tengo la habilidad de
              llevar cualquier proyecto al mundo digital de forma eficiente y
              efectiva. ¡Es como magia! <br></br>Soy una persona apasionada del
              diseño que encuentra en cada proyecto una oportunidad para crear
              experiencias únicas y cautivadoras. Amo la forma en que el diseño
              web fusiona la creatividad con la funcionalidad, permitiéndome dar
              vida a ideas y conectar con personas en todo el mundo.<br></br>{" "}
              Cuando no estoy inmersa en el código, mi corazón se llena de
              música. Esta me transporta a un lugar donde puedo expresar mis
              emociones y soñar con mis próximos proyectos. También me encanta
              experimentar con sabores y texturas, mancharme las manos creando
              platos deliciosos que deleitan el paladar. Además, a través de
              trazos y colores, puedo plasmar mis ideas y emociones en papel,
              creando ilustraciones que transmiten un mensaje sin necesidad de
              palabras.<br></br>
              Mis amigos son una parte esencial en mi vida. Junto a ellos,
              encuentro la inspiración y el apoyo necesario para continuar
              persiguiendo mis sueños. Además, en los momentos más difíciles,
              son mi vía de escape.<br></br> Cuando necesito un tiempo para
              relajarme y sumergirme en nuevas historias, nada se compara con un
              buen libro o una buena partida a la Nintendo Switch. Esto me
              permite escapar a mundos fascinantes, inspirarme de nuevas ideas y
              descubrir personajes memorables. Cada aventura es un portal hacia
              la imaginación y el conocimiento. <br></br>Aquí tienes una pequeña
              muestra de quién soy. Si deseas descubrir más, sigue navegando.
              ¡Bienvenidos a mi mundo!
            </p>
            <span className="ornament">&lt;/p&gt;</span>
          </div>
        </main>
        <section className="content-img-about">
          <div className="content-svg-about">
            <div className="img-container-about">
              <img
                className="Svg-about"
                src={svg}
                alt="Ilustracion de barias cosas a linea haciendo referencia a los gustos"
              />
            </div>
          </div>
        </section>
      </body>
    </>
  );
};

export default About;
