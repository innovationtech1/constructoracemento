import Navegacion from "../components/navegacion"
import "../App.css";
import Footer from "../components/Footer";
import CreandoProyecto from "../components/CreandoProyecto";
function Servicios() {
  return (
    <div className="title">
      Servicios
      <Navegacion />
      
      <CreandoProyecto/>
      <Footer/>
    </div>
  );
}

export default Servicios