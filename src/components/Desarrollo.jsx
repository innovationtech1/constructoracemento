import "../styles/Desarrollo.css";
import React from 'react'
import slider0 from "../assets/slider.jpg";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";


function Desarrollo() {
  return (
    <div>
      <br />

      <div className="text-container">
        <h2 className="subtitle"> Diseño y Planificación </h2>
        Muchas constructoras ofrecen servicios de diseño y planificación en
        colaboración con arquitectos y diseñadores. Ayudan a crear planos,
        diseños y modelos para visualizar el proyecto antes de la construcción.
        <br /> <br />
        <img className="foto" src={slider0} />
        <h2 className="subtitle"> Construcción Residencial</h2>
        Esto incluye la construcción de viviendas unifamiliares, casas adosadas,
        apartamentos y condominios. Las constructoras residenciales trabajan en
        proyectos que van desde pequeñas remodelaciones hasta nuevos desarrollos
        residenciales. <br />
        <br /> <h2 className="subtitle">Construcción Comercial</h2> Ofrecen la
        construcción de edificios y espacios comerciales como oficinas, locales
        comerciales, restaurantes y hoteles. Construcción Industrial: Realizan
        proyectos de construcción para instalaciones industriales, como
        fábricas, almacenes y plantas de producción. <br />
        <br />
        <img className="foto" src={slider1} />
        <h2 className="subtitle">Construcción de Infraestructura</h2> Se
        encargan de construir infraestructuras públicas como carreteras,
        puentes, túneles, sistemas de transporte y servicios públicos.
        <br /> <br />
        <h2 className="subtitle"> Construcción de Obras Civiles:</h2> Incluye la
        construcción de obras de ingeniería civil como presas, represas,
        sistemas de agua y alcantarillado, entre otros.
        <br />
        <br /> <h2 className="subtitle"> Renovaciones y Remodelaciones </h2>
        Proporcionan servicios de renovación y remodelación de edificios
        existentes, desde cambios menores hasta remodelaciones completas.
        <br /> <br />
        <img className="foto" src={slider2} />
        <h2 className="subtitle"> Gestión de Proyectos</h2>
        Muchas constructoras ofrecen servicios de gestión de proyectos, donde
        supervisan y coordinan todas las fases del proyecto, desde la
        planificación hasta la ejecución y la finalización. <br />
        <br /> <h2 className="subtitle"> Desarrollo de Terrenos</h2> Algunas
        constructoras se dedican a adquirir y desarrollar terrenos para futuros
        proyectos de construcción. <br /> <br />
        <h2 className="subtitle">Servicios de Mantenimiento y Reparación</h2>
        Ofrecen servicios de mantenimiento y reparación para edificios
        existentes, asegurando que estén en condiciones óptimas. <br /> <br />{" "}
        <img className="foto" src={slider3} />
        <h2 className="subtitle"> Gestión de Residuos y Sostenibilidad</h2>
        Algunas constructoras se enfocan en prácticas de construcción sostenible
        y gestión de residuos para minimizar el impacto ambiental. <br /> <br />
        <h2 className="subtitle"> Ingeniería y Consultoría </h2> Proporcionan
        servicios de consultoría y asesoramiento en ingeniería civil,
        estructural y otros aspectos técnicos.
      </div>
    </div>
  );
}

export default Desarrollo