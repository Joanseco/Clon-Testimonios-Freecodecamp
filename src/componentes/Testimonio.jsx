import React from "react";

//importo los estilos creados en la ruta 
import "../hojas-de-estilos/Testimonio.css";

//Creo el Componente de Testimonio y añado los props a las partes que quiero cambiar
function Testimonio(props){
    return(
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio" src={require(`../imagenes/${props.imagen}-testimonio.png`)}alt="Foto-Emma" />
            <div className="contenedor-texto-testimonio">
            <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais} </p>
            <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong> </p>
            <p className="texto-testimonio">"{props.testimonio}"</p>
            </div>
        </div>
    );    
}

export default Testimonio;