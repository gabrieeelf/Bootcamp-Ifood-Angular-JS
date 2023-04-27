const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(url)
    .then((response) => response.json())                                        //Executa os comandos 
    .then((jsonBody) => console.log(jsonBody))                                  //Executa os comandos
    .catch((error) => console.error(error))                                     //Acusa caso algo der erro