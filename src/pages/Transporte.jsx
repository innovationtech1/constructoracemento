import "../styles/Transporte.css";
import Footer from "../components/Footer";
import Navegacion from "../components/navegacion";
import CreandoProyecto from "../components/CreandoProyecto";

function Transporte() {
  return (
    <div>
      <div className="titleTransporte">Transporte</div>
      <Navegacion />

      <CreandoProyecto />
      <Footer />
    </div>
  );
}

export default Transporte;
