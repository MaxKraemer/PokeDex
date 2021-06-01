let currentPokemon;

async function loadPokemon(){

    let url = 'https://pokeapi.co/api/v2/pokemon/charizard'; // load api link
    let response = await fetch(url); // to upload the url
    currentPokemon = await response.json(); // to response as a JSON
    
    console.log('load Pokemon', currentPokemon); 

    renderPokemonInfo();
    
}

function renderPokemonInfo(){

    document.getElementById('pokeName').innerHTML = currentPokemon['name'];
    document.getElementById('showPoke').src = currentPokemon['sprites']['front_default'];
    document.getElementById('infos').innerHTML = currentPokemon['height'];
    document.getElementById('attack').innerHTML = currentPokemon['moves']['0']['move']['name'];
    document.getElementById('weight').innerHTML = currentPokemon['weight'];
    document.getElementById('type').innerHTML = currentPokemon['types']['0']['type']['name'];
    document.getElementById('forms').innerHTML = currentPokemon['forms']['0']['name'];    


}

