import Navegacion from "../components/navegacion"
import Footer from "../components/footer"
import "../App.css";
import CreandoProyecto from "../components/CreandoProyecto";

function About() {
  return (
    <div className="title">About
      <Navegacion />
      <CreandoProyecto/>
      <Footer/>
    </div>
  )
}

export default About