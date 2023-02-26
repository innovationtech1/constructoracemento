import "../App.css";
import Articulo from "../components/Articulo";
import Footer from "../components/Footer";
import Navegacion from "../components/navegacion";
import Slider from "../components/Slider";

function Iniciando() {
  return (
    <div >
      <div className="title">Inicio</div>
      <Navegacion />
      <Slider/>
    
      <Articulo/>

      <Footer/>
    </div>
  );
}

export default Iniciando;
