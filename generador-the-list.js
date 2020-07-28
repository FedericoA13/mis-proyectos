// Faltantes: asignar índices, generar el random de acuerdo a ellos y publicar solo el random

console.log("Hola");

const headlines = []

const cantidad = document.querySelectorAll("p")
console.log(cantidad.length);

function numeroRandom(headlines){
  headlines[Math.floor(Math.random() * headlines.length)]
}

const button = document.querySelector("#generador")


for (let i = 0; i < cantidad.length; i++) {
  headlines.push(cantidad[i].innerText);
}

console.log(headlines)


button.onclick = function (){
    document.querySelector(".oculto").className = " ";
    const nodoPagina = document.querySelector('body');
    const espacioTexto = document.createElement('p');
    const headline = document.createTextNode(numeroRandom);
    espacioTexto.appendChild(headline);
    nodoPagina.appendChild(espacioTexto)

}



/*for (let i = 0; i < cantidad.length; i++) {
    console.log(cantidad[i].innerText);
  }

  const nodoPagina = document.querySelector('body');
    const espacioTexto = document.createElement('p');
    const headline = document.createTextNode(texto);
    espacioTexto.appendChild(headline);
    nodoPagina.appendChild(espacioTexto)

    */
   