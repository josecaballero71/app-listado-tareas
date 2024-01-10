import React from "react";
import '../hojas-estilos/TareaComponent.css'
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai"

function TareaComponent( { id, texto, completada, completarTarea, eliminarTarea }){
    return(
        <div className={completada ? 'tarea-join completada' : 'tarea-join'}>
            <div className='tarea-texto'>
                { texto }
            </div> 
            <div className='hecho-tarea-icono' onClick={()=>completarTarea(id)}>
                <AiFillCheckCircle className='tarea-icono'/>
            </div>
            <div className='eliminar-tarea-icono' onClick={()=>eliminarTarea(id)}>
                <AiFillCloseCircle className='tarea-icono' />
            </div>
        </div>
    )
}
export default TareaComponent;