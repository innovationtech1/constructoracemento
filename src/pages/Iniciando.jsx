import "../App.css";
import Articulo from "../components/Articulo";
import Footer from "../components/Footer";
import Navegacion from "../components/navegacion";

function Iniciando() {
  return (
    <div >
      <div className="title">Inicio</div>
      <Navegacion />
    
      <Articulo/>

      <Footer/>
    </div>
  );
}

export default Iniciando;
