 export const pokemonService = {
    getPokemonsArr
}

async function _getPokemons() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
    const { results } = await response.json()
    return results
}

async function getRandomPokemon() {
    const pokemons = await _getPokemons()
    const randomIdx = Math.floor(Math.random() * pokemons.length)
    const response = await fetch(pokemons[randomIdx].url)
    const pokemon = await response.json()
    return pokemon
}

async function getPokemonsArr() { 
    const randomPokemons = await Promise.all(Array.from({length: 3}, getRandomPokemon))
    return randomPokemons
}

