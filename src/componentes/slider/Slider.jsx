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
    url: "",
  },
  {
    work: "Contador",
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
