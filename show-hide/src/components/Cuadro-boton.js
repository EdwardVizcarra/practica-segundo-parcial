import React, {useState} from 'react';
import '../styles/Cuadro-boton.css';

function Cuadroboton({valor, funcion}) {
    return(
        <div>
   <button className="cuadro" onClick={funcion}>
            {valor}
        </button>
        </div>

    );
}
export default Cuadroboton;
