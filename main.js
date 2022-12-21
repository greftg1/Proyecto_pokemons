
const response = await fetch('./pokemons.json');
const pokemons = await response.json();

let pokemon = ""

function Elemento(i) {
  let tipos = " "
  for (let n = 0; n < pokemons[i].type.length; n++) {
  if (pokemons[i].type[n] == "bug") {
    tipos = tipos + `<p class="bicho">Bicho</p> `
  }
  if (pokemons[i].type[n] == "dark") {
    tipos = tipos + `<p class="siniestro">Siniestro</p> `
  }
  if (pokemons[i].type[n] == "dragon") {
    tipos = tipos + `<p class="dragon">Dragon</p> `
  }
  if (pokemons[i].type[n] == "electric") {
    tipos = tipos + `<p class="electrico">Electrico</p> `
  }
  if (pokemons[i].type[n] == "fairy") {
    tipos = tipos + `<p class="hada">Hada</p> `
  }
  if (pokemons[i].type[n] == "fighting") {
    tipos = tipos + `<p class="lucha">Lucha</p> `
  }
  if (pokemons[i].type[n] == "fire") {
    tipos = tipos + `<p class="fuego">Fuego</p> `
  }
  if (pokemons[i].type[n] == "flying") {
    tipos = tipos + `<p class="volador">Volador</p> `
  }
  if (pokemons[i].type[n] == "ghost") {
    tipos = tipos + `<p class="fantasma">Fantasma</p> `
  }
  if (pokemons[i].type[n] == "grass") {
    tipos = tipos + `<p class="pasto">Planta</p> `
  }
  if (pokemons[i].type[n] == "ground") {
    tipos = tipos + `<p class="tierra">Tierra</p> `
  }
  if (pokemons[i].type[n] == "ice") {
    tipos = tipos + `<p class="hielo">Hielo</p> `
  }
  if (pokemons[i].type[n] == "normal") {
    tipos = tipos + `<p class="normal">Normal</p> `
  }
  if (pokemons[i].type[n] == "poison") {
    tipos = tipos + `<p class="veneno">Veneno</p> `
  }
  if (pokemons[i].type[n] == "psychic") {
    tipos = tipos + `<p class="psiquico">Psiquico</p> `
  }
  if (pokemons[i].type[n] == "rock") {
    tipos = tipos + `<p class="roca">roca</p> `
  }
  if (pokemons[i].type[n] == "steel") {
    tipos = tipos + `<p class="hierro">Acero</p> `
  }
  if (pokemons[i].type[n] == "water") {
    tipos = tipos + `<p class ="agua">Agua</p> `
  }
  }
  return tipos
}
Elemento(1)

for (let i = 0; i < pokemons.length; i++) {

  if (i == 0) {

    pokemon = pokemon + `<div class="imagenes col"> 
      <img src="${pokemons[i].ThumbnailImage}"> 
      <p class="numero"> N°.${pokemons[i].number}</p>
      <h3 class="nombre"> ${pokemons[i].name}</h3>
      ${Elemento(i)}  
      </div>`

  }
  else {
    if (pokemons[i].ThumbnailImage == pokemons[i-1].ThumbnailImage){
    }
    else {
      pokemon = pokemon + `<div class="imagenes col"> 
      <img src="${pokemons[i].ThumbnailImage}"> 
      <p class="numero"> N°.${pokemons[i].number}</p>
      <h3 class="nombre"> ${pokemons[i].name}</h3>
      ${Elemento(i)}    
      </div>`
    }
  }
}

document.getElementById("Cimagenes").innerHTML = pokemon

let busqueda = document.getElementById('search')
busqueda.addEventListener('change', (e) => {
    e.target.value;
})
const boton = document.getElementById("buscar")
buscar.addEventListener("click", (e) => {
    e.target.value;
    
})

