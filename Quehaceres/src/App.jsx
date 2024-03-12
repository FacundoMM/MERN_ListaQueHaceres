import { useState } from 'react'
import Formulario from '../Componentes/Formulario'


function App() {
  const [quehacer, setQuehacer] = useState([]);
  const [hecho, setHecho] = useState([]);


  const check = (i, check) => {
    const newHecho = [...hecho];
    newHecho.splice(i, 1, check);
    setHecho(newHecho);
  }

  const eliminar = (i) => {
    const newQuehacer = [...quehacer];
    newQuehacer.splice(i, 1);
    setQuehacer(newQuehacer);
  }

  return (
    <>
      <h1 className='text-center'>Lista de quehaceres</h1>
      <Formulario
        quehacer={quehacer}
        setQuehacer={setQuehacer}
        hecho={hecho}
        setHecho={setHecho}
      />
      <div className='text-center'>
        {quehacer.map((quehacer, i) => (
          <div key={i} className='mx-auto p-3 '>
            <label className='form-check-label' style={{ textDecoration: hecho[i] ? 'line-through' : 'none' }}>
              {quehacer}
              <input type="checkbox" className='form-check-input ms-2' onChange={(e) => check(i, e.target.checked)} />
            </label>

            <button type="button" className='ms-5 btn btn-secondary' onClick={() => eliminar(i)}>Delete</button>
          </div>
        ))} 
      </div>
    </>
  )
}

export default App
