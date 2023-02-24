import React, { useState, useEffect } from "react";

import "../App.css";
import Navegacion from "../components/navegacion";

function Iniciando() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowButton(true);
    }, 7200);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div >
      {showButton && (
       <Navegacion/>
      )}
    </div>
  );
}

export default Iniciando;
