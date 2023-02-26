import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import slider0 from "../assets/slider.jpg";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";

const Data = [
  {
    title: "CONTAMOS CON TODO PARA LA CONSTRUCION",
    description: "CONOCE NUESTROS SERVICIOS Y PRODUCTOS",
    image: slider0,
  },
  {
    title: "CONTAMOS CON TODO PARA LA CONSTRUCION",
    description: "CONOCE NUESTROS SERVICIOS Y PRODUCTOS",
    image: slider1,
  },
  {
    title: "CONTAMOS CON TODO PARA LA CONSTRUCION",
    description: "CONOCE NUESTROS SERVICIOS Y PRODUCTOS",
    image: slider2,
  },
  {
    title: "CONTAMOS CON TODO PARA LA CONSTRUCION",
    description: "CONOCE NUESTROS SERVICIOS Y PRODUCTOS",
    image: slider3,
  },
];

const Slider = () => {
  return (
    <Carousel>
      {Data.map((image, index) => (
        <div key={index}>
          <h3 className="carusel-title-react">{image.title}</h3>
          <p carusel-description-react>{image.description}</p>
          <img src={image.image} alt={image.title} />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
