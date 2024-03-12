import { useState } from 'react'


function App() {
  const [pokemons, setPokemons] = useState([])

  const handleLoadPokemons = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=807`)
    .then(response => response.json())
    .then(data => {setPokemons([...pokemons, ...data.results])})
  }

  return (
    <div className='container mt-5'>
      <div className="d-grid gap-2">
        <button onClick={handleLoadPokemons} className="btn btn-primary" type="button">Fetch Pokemons</button>
      </div>
      <ol>
        {
          (pokemons.length === 0) 
            ? <p className='text-danger text-center mt-3'>Aun no presionas el botón!</p>
            : pokemons.map((pokemon, index) => (
            <li key={index}>{pokemon.name}</li>
          ))
        }
      </ol>
    </div>
  )
}

export default App