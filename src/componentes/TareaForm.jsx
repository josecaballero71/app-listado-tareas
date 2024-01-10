import React, { useState } from "react";
import '../hojas-estilos/TareaForm.css';
import { v4 as uuidv4 } from 'uuid';

function TareaForm(props){
    const [input, setInput] = useState('')

    const handleChange = e => { setInput(e.target.value) }
    
    const handleSubmit = e => {
        e.preventDefault();
        const tareaNueva={
            id:uuidv4(),
            texto:input,
            completada:false
        }
        props.onSubmit(tareaNueva)
    }

    return (
        <form className='form-tarea' 
              onSubmit={handleSubmit} >
            <input 
                className='input-tarea'
                type='text'
                placeholder='Digita una nueva tarea'
                name='texto'
                onChange={handleChange}
            />
            <button className='boton-tarea'>Agregar</button>
        </form>
    )
}

export default TareaForm;