// Faltantes: asignar índices, generar el random de acuerdo a ellos y publicar solo el random

console.log("Hola");


//console.log(headlines.length); //165 frases
//const aleatorio = Number(Math.floor(Math.random()*(headlines.length)));

/*for (let i = 0; i < headlines.length; i++) {
  console.log(headlines[i].innerText);
}
*/


/*function tituloRandom(headlines) {
  for (let i = 0; i < headlines.length; i++) {
    (headlines[i].innerText);
  }
  return Math.random() * (headlines);
}
*/

// console.log(tituloRandom(headlines[Number]))


const button = document.querySelector("#generador")

button.onclick = function (){
  const headlines = document.querySelectorAll(".oculto")

    let aleat = Math.random() * (headlines.length)
    let aleatorios = Math.floor(aleat)
    console.log(aleatorios)
    let mostrar = console.log(headlines[aleatorios].innerText);
    let mostrarNumero = headlines[aleatorios].innerText

    while (Number (mostrarNumero) === Number(mostrar)){
      document.querySelector(".oculto").className = " "; 
      const nodoDiv = document.querySelector("#headline");
      const texto = document.createTextNode(mostrar);
      document.querySelector("#headline").appendChild(texto)
    }
}

/*
const nuevoParrafo = document.createElement('p');
const textoTest = document.createTextNode("Armaniiii el taco no...")
nuevoParrafo.appendChild(textoTest);
document.querySelector("body").appendChild(nuevoParrafo)

// Ahora coloco ese texto dentro del nuevo párrafo creado, y con appendChild los llevo a la página
// Y con el .querySelector para el body, indico en qué parte del HTML va el nuevo párrafo. .appendChild es al final.
*/



// No me hace falta insertar texto. Como ya están ocultos en el html, con desocultar uno alcanza para que sea visible.

/*for (let i = 0; i < cantidad.length; i++) {
    console.log(cantidad[i].innerText);
  }

  const 

    */