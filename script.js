let showAllPokemon;

async function loadPokemon(){

    let urlParams = new URLSearchParams(window.location.search);
    let pokeName = urlParams.get('name');
    
    
    let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`; // load api link
    let response = await fetch(url); // to upload the url
    showAllPokemon = await response.json(); // to response as a JSON
    
   
    pokemonInfo();
    
   
    
}

function pokemonInfo(){

    document.getElementById('pokeName').innerHTML = showAllPokemon['name'];
    document.getElementById('showPoke').src = showAllPokemon['sprites']['front_default'];
    document.getElementById('infos').innerHTML = showAllPokemon['height'];
    document.getElementById('attack').innerHTML = showAllPokemon['moves']['0']['move']['name'];
    document.getElementById('weight').innerHTML = showAllPokemon['weight'];
    document.getElementById('type').innerHTML = showAllPokemon['types']['0']['type']['name'];
    document.getElementById('forms').innerHTML = showAllPokemon['forms']['0']['name'];    


}

function openPokeDex(){

    let pokeName = document.getElementById('searchPoke').value;
    window.location.href = `index.html?name=${pokeName}`;

}

