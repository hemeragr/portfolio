import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import Card from "../card/Card";

const PROJECTS = [
  {
    work: "One page",
    description:
      " Mi primer proyecto del postgrado, titulado About me, ofrece la oportunidad de conocerme más a fondo, ya que cuenta con una introducción más detallada sobre mi persona, mis estudios, habilidades y gustos.",
    skills_used: "#CSS #HTML #JS",
    github: "https://github.com/hemeragr/proyectAlpha",
    url: "https://about-hemeragr.netlify.app/",
  },
  {
    work: "BocaVerda",
    description:
      "Plataforma dedicada a la alimentación basada en plantas y estilo de vida consciente, donde se ofrecen soluciones prácticas y deliciosas para aquellos que buscan adoptar este tipo de vida. A través de recetas veganas, productos y recomendaciones de restaurantes.",
    skills_used: "#CSS #PHP #Wordpress ",
    github: "",
    url: "https://esatdev.com/2022/hemera/bocaverda/",
  },
  {
    work: "Cronometro",
    description:
      "Proyecto realizado para afianzar lo aprendido en las primeras clases, un contados de timepo.",
    skills_used: "#JS #HTML #CSS ",
    github: "https://github.com/hemeragr/proyect_cronometro",
    url: "https://esatdev.com/2022/hemera/bocaverda/",
  },
  {
    work: "GimWeb",
    description: "https://github.com/hemeragr/gymWebsite",
    skills_used: "#vue #figma",
    github: "https://github.com/hemeragr/gymWebsite",
    url: "https://esatdev.com/2022/hemera/bocaverda/",
  },
  {
    work: "Trabajo 5",
    description: "Trabajo calculadora",
    skills_used: "#css #sumas",
    github: "https://github.com/hemeragr/proyect_cronometro",
    url: "https://esatdev.com/2022/hemera/bocaverda/",
  },
  {
    work: "Trabajo 6",
    description: "Trabajo super chulo hecho wordpress",
    skills_used: "#php #wprdpress",
    github: "https://github.com/hemeragr/proyect_cronometro",
    url: "https://esatdev.com/2022/hemera/bocaverda/",
  },
];

const Slider = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        spaceBetween={10}
        slidesPerView={4}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <div className="content">
          {PROJECTS.map((obj) => (
            <SwiperSlide key={obj.work}>
              <Card className="content-card" cita={obj} key={obj.work} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
