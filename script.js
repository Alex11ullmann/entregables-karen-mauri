let api = document.querySelector(".api");

fetch ("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
.then (resp => resp.json())
.then (data => {
    let i=1;
    data.results.forEach(pokemon =>{
        api.innerHTML += `<div><h4>Nombre = ${pokemon.name} </h4>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${i}.png" alt="imagen de ${pokemon.name}"</div>`
        i++;
})})
.catch(err => alert ("Ocurrio un error"))
