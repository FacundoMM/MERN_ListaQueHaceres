import React, { useState } from 'react'

const Formulario = ({ quehacer, setQuehacer, hecho, setHecho }) => {
    const [tareas, setTareas] = useState('');


    const Subir = (e) => {
        e.preventDefault();
        if (tareas.trim() != ''){
            setQuehacer([...quehacer, tareas]);
            setHecho([...hecho, false]);
            setTareas('');
        }
        
    }

    return (
        <div>
            <form className="row g-3 align-items-center justify-content-center mt-3" onSubmit={Subir}>
                <div className='col-auto'>
                    <input
                        type='text'
                        name='tareas'
                        value={tareas}
                        className='form-control'
                        placeholder='Agrega nuevas tareas'
                        onChange={(e) => (setTareas(e.target.value))}
                    />
                </div>
                <div className='col-auto'>
                    <button type="submit" className="btn btn-primary">Agregar</button>
                </div>
            </form>
        </div>
    )
}

export default Formulario
