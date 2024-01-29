//metemos en un array las imagenes pequeñas a mostrar
let imagenesPequenias = [
  "url(../img/01.jpg)",
  "url(../img/02.jpg)",
  "url(../img/03.jpg)",
  "url(../img/04.jpg)",
];

//metemos en un array las imagenes grandes que se pueden mostrar
let imagenesGrande = [
  "url(../img/01.jpg)",
  "url(../img/02.jpg)",
  "url(../img/03.jpg)",
  "url(../img/04.jpg)",
];

//acciones al hacer click en una imagen
function accion0() {
  imagenPrincipal.style.backgroundImage = imagenesGrande[0];
}
function accion1() {
  imagenPrincipal.style.backgroundImage = imagenesGrande[1];
}
function accion2() {
  imagenPrincipal.style.backgroundImage = imagenesGrande[2];
}
function accion3() {
  imagenPrincipal.style.backgroundImage = imagenesGrande[3];
}

// guardamos las referencias de las clases
let imagenPrincipal = document.querySelector(".principal");
let subimagenes = document.querySelectorAll(".imagen");

//metemos las imagenes que se van a mostrar por defecto en la página nada más entrar
imagenPrincipal.style.backgroundImage = imagenesGrande[0];
subimagenes[0].style.backgroundImage = imagenesPequenias[0];
subimagenes[1].style.backgroundImage = imagenesPequenias[1];
subimagenes[2].style.backgroundImage = imagenesPequenias[2];
subimagenes[3].style.backgroundImage = imagenesPequenias[3];

//si hacemos click en alguna de las subimagenes salta la acción definida
subimagenes[0].addEventListener("click", accion0);
subimagenes[1].addEventListener("click", accion1);
subimagenes[2].addEventListener("click", accion2);
subimagenes[3].addEventListener("click", accion3);
