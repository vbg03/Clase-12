import React, {useState, useEffect} from 'react'

const PokemonApi = () => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(()=>{
    //consumir
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((Response)=>Response.json())
    .then((data)=>{
        setPokemonData(data)
    })
    .catch((error)=>{
        console.error("error consumiendo el api", error)
    })
  },[]);
  return (
    <div>
        PokemonApi
        {
            pokemonData?(
                <div className='card'>
                    <img src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.className} className='pokemon-image' />
                    <h3>{pokemonData.name}</h3>
                    <h2>altura: {pokemonData.height}</h2>
                    <h2>peso: {pokemonData.weight}</h2>

                </div>
            ):(<p>cargando....</p>)
        }
    </div>
  )
}

export default PokemonApi