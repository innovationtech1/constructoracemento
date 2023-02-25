import Navegacion from "../components/navegacion"
import "../App.css";
import Footer from "../components/Footer";
import CreandoProyecto from "../components/CreandoProyecto";
function Informacion() {
  return (
    <div className="title">Informacion
      <Navegacion />
      <div className="container">
      <CreandoProyecto/>
      </div>
      <Footer/>
    </div>
  )
}

export default Informacion