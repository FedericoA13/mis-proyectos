// Faltantes: asignar índices, generar el random de acuerdo a ellos y publicar solo el random

console.log("Hola");

const headlines = []

const cantidad = document.querySelectorAll("p")
console.log(cantidad.length);

const button = document.querySelector("#generador")

button.onclick = function (){
    for (let i = 0; i < cantidad.length; i++) {
            headlines.push(cantidad[i].innerText);
          }
          console.log(headlines)
    const nodoPagina = document.querySelector('body');
    const espacioTexto = document.createElement('p');
    const headline = document.createTextNode(headlines);
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
   