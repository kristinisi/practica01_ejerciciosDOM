//metemos en un array las imagenes grandes que se pueden mostrar
let imagenesGrande = [
  "url(./img/01.jpg)",
  "url(./img/02.jpg)",
  "url(./img/03.jpg)",
  "url(./img/04.jpg)",
];

//Guardamos las referencias de las clases
let imagenPrincipal = document.querySelector(".principal");
let contenedor = document.querySelector(".contenedor");
let subimagenes = document.querySelectorAll(".imagen");

//Utilizamos la delegación de eventos para manejar los clicks en el contenedor
contenedor.addEventListener("click", function (event) {
  //verificamos si el click fue en una foto pequeña
  if (event.target.classList.contains("imagen")) {
    //obtenemos el indice de la foto clickada
    let indice = Array.from(subimagenes).indexOf(event.target);
    console.log(indice);
    //Cambiamos la imagen principal
    imagenPrincipal.style.backgroundImage = imagenesGrande[indice];
  }
});
