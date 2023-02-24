
import logo1 from "../assets/logo.png";
import logo from "../assets/logoconcreto1.png";
import "../styles/CreandoProyecto.css";

function CreandoProyecto() {


  return (
    <div className="bodyColor">
      <img className="animacionLogo" src={logo1} alt="logo" />
      <p className="title2">INNOVATIONTECH  2023</p>
      <div className="tilte">Iniciando Proyecto</div>
      <h1 className="title2">Construyendo sitio web</h1>
      <img className="reconstruccion-pieza" src={logo} alt="logo" />
    </div>
  );
}

export default CreandoProyecto;
