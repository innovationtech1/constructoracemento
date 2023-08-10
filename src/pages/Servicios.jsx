import "../App.css";
import Navegacion from "../components/navegacion"
import Footer from "../components/Footer";
import CreandoProyecto from "../components/CreandoProyecto";
import Desarrollo from "../components/Desarrollo";
function Servicios() {
  return (
    <div className="title">
      Servicios
      <Navegacion />
      <Desarrollo/>
    
      <Footer/>
    </div>
  );
}

export default Servicios