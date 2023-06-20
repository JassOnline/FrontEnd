import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Home = () => {
    //Creamos el array vacio para la info
    const [pokemons, setPokemons] = useState([])
    //Creamos el string vacio para el buscador
    const [searchTerm, setSearchTerm] = useState('')

    //Llamas la info del appi, y la acomodamos para pasarla al array vacio
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(data => setPokemons(data.results))
        .catch(error => console.log(error))
    }, [])

    //Lo que busca lo guarda
    const handleInputChange = event => {
        setSearchTerm(event.target.value)
    }

    //para el buscador. Lo convertimos a minusculas
    const filteredPokemons = pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

  return (
    //El profe tenia esto preparado y nos lo mando
    <div className='container'>
        <h1>Pokédex</h1>

        <form className='form-inline my-2 my-lg-0 w-75'>
          <input type='text' className='form-control' id='search' placeholder='Enter name' value={searchTerm} onChange={handleInputChange} />
        </form>

        <div className='row'>
          {filteredPokemons.map(pokemon => (
            <div className='col-sm-4 mb-4' key={pokemon.name}>
              <div className='card'>
                <img className='card-img-top' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt={pokemon.name} />
                <div className='card-body'>
                    <Link to={`/pokemon/${pokemon.url.split('/')[6]}`} alt = {pokemon.name}>
                  <h4 className='card-title'>{pokemon.name}</h4>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Home