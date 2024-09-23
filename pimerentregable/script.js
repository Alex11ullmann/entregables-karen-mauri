let api = document.querySelector(".api");
/*

fetch ("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
.then (resp => resp.json())
.then (data => {
    let i=1;
    data.results.forEach(pokemon =>{
        api.innerHTML += `<div><h4>Nombre = ${pokemon.name} </h4>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${i}.png" alt="imagen de ${pokemon.name}"></div>`
        i++;
})})
.catch(err => console.log ("Ocurrio un error", err)) */

let url = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
async function fetchData () {
    try {
        let resp = await fetch (url);
        let data = await resp.json ();
        let i = 0;
        data.forEach(resp => {
            api.innerHTML +=
            `<div>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${i}.png" alt="imagen de ${pokemon.name}">
                <h3>${data.name}</h3>
                <h4>${data.url}</h4>
            </div>`
            i++;
        })
    } catch (error) {
        console.log ("Error al obtener datos "+error);
    }

}

fetchData();