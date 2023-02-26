import "../styles/Material.css";
import Footer from "../components/Footer";
import Navegacion from "../components/navegacion";
import CreandoProyecto from "../components/CreandoProyecto";

function Material() {
  return (
    <div>
      <div className="titleMaterial"> Material</div>
      <Navegacion />

    <CreandoProyecto/>

      <Footer />
    </div>
  );
}

export default Material