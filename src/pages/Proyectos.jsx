import "../styles/Proyectos.css";
import Footer from "../components/Footer";
import Navegacion from "../components/navegacion";
import CreandoProyecto from "../components/CreandoProyecto";
function Proyectos() {
  return (
    <div>
      <div className="titleProyectos">Proyectos</div>
      <Navegacion />
      <CreandoProyecto/>
      <Footer />
    </div>
  );
}

export default Proyectos;
