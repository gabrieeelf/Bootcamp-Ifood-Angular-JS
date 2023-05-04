const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail){
  const pokemon = new Pokemon()
  pokemon.number = pokeDetail.id
  pokemon.name = pokeDetail.name

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
  const [type] = types

  pokemon.types = types
  pokemon.type = type

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

  return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
  .then((response) => response.json())
  .then(convertPokeApiDetailToPokemon)
};

pokeApi.getPokemons = (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  return fetch(url)
    .then((response) => response.json()) //.then -> Executa os comandos // Convertenndo HTTP response em JSON
    .then((jsonBody) => jsonBody.results) //Capturando a lista de dados (Pokemons)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) //Convertendo a lista de pokemons em uma lista de requisição de detalhes
    .then((detailRequests) => Promise.all(detailRequests)) //Lista de detalhes em JSON
    .then((pokemonsDetails) => pokemonsDetails) //Modelo da lista completa
};
