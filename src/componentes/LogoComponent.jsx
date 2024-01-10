import React from "react";
import logo from '../imagenes/logoJC.png'
import '../hojas-estilos/LogoComponent.css'

function LogoComponent({texto}){
return(
    <div className="container-logo">
      <img src={logo}
      alt='logo' />
      <h2>{texto}</h2>
    </div>
)
}
export default LogoComponent;