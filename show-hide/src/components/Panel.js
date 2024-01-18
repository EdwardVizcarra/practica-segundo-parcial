import React, {useState} from 'react';
import Cuadroboton from '../components/Cuadro-boton';
import '../styles/Panel.css';

function Panel({mostrar}){
    const [show, setShow] = useState(true);
    const [cuadroboton, setCuadroboton] = useState(Array(1).fill(null));
    const [usuario, setUsuario] = useState("O");
    const click = (i) => {
        const cuadrosbotonV = [...cuadroboton];
        cuadrosbotonV[i] = usuario;
        setCuadroboton( cuadrosbotonV);
        if (usuario === "0") {
            setUsuario("1");
        } else {
            setUsuario("0");
        }
    }
return(
    <div className="panel">
    <Cuadroboton valor={"Mostrar/Ocultar"} funcion={() => setShow((show) => !show)}/> {show ?  <input id="recuperar" className="cuadro-texto"></input>:null}
   
    </div>
   
);
};
function OcultaryMostrar(i) {
    const [show, setShow] = useState(true);
    return (
        <Cuadroboton
            funcion={() => setShow((show) => !show)}
        />
    );
}
export default Panel;