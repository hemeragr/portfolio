import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import Card from "../card/Card";

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

const Slider = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        spaceBetween={10}
        slidesPerView={5}
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
