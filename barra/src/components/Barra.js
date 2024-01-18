import React, {useState} from 'react';
import "../styles/Barra.css";
function Barra({barracreciente}){
    return (
      <div className="container">
       
          <div className="innerContainer">
            {barracreciente}%
          </div>       
        </div>
          );
         };
         export default Barra;

