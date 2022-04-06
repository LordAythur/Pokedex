export function getPokemon(url = "https://pokeapi.co/api/v2/pokemon") {
    

    return fetch(url)
        .then((response)=> response.json())
        .catch((error) => console.log('error',error));
}

export function getPokemonInfo(url = "https://pokeapi.co/api/v2/pokemon/1") {
return fetch(url)
    .then((response)=> response.json())
    .catch((error) => console.log('error',error));
}