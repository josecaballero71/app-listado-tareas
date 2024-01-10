import React, { useState } from "react";
import TareaForm from './TareaForm.jsx';
import TareaComponent from './TareaComponent.jsx';
import '../hojas-estilos/ListaTareas.css';

function ListaTareas(){
    const [tareas, setTareas] = useState([]);
    const agregarTarea = tarea => {
        if (tarea.texto.trim()){
            tarea.texto = tarea.texto.trim()
            const tareasActualizadas = [tarea, ...tareas]
            setTareas(tareasActualizadas)
        }
    }
    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
        setTareas(tareasActualizadas)
    }
    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada
            }
            return tarea
        })
        setTareas(tareasActualizadas)
    }


    return(
        <div className='container-tarea'>
            <h2>Tareas</h2>
            <TareaForm onSubmit={agregarTarea}/>
            {
                tareas.map((tarea)=>
                <TareaComponent 
                    key={tarea.id}
                    id={tarea.id}
                    texto={tarea.texto}
                    completada={tarea.completada}
                    eliminarTarea={eliminarTarea}
                    completarTarea={completarTarea}
                />)
            }
        </div>
    )
}

export default ListaTareas;