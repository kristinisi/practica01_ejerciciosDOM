let precios = document.querySelectorAll(".precio");
let precioSeleccionado = null;
let rutaActual = null;
let contenedor = document.querySelector(".contenedor");

for (let precio of precios) {
  precio.addEventListener("click", (event) => {
    //seleccionamos el padre del precio
    let padrePrecio = precio.parentElement;
    //cogemos toda la info de los div hijos
    let info = padrePrecio.children;

    //Si hay un precioSeleccionado y luego seleccionamos otro
    if (precioSeleccionado) {
      //reestablecemos el estilo
      precioSeleccionado.style = "";
      rutaActual.textContent = "";
    }

    //le damos estilo al nuevo precio
    precio.style.backgroundColor = "#d62d61";
    precio.style.color = "white";

    //y le lo adjudicamos al precio seleccionado
    precioSeleccionado = precio;

    //creamos un nuevo div con la información de lo que hemos seleccionado
    let divRuta = document.createElement("div");
    divRuta.classList.add("ruta");
    divRuta.textContent =
      "Ruta: " +
      padrePrecio.id +
      " - " +
      "Salida: " +
      info[0].textContent +
      " - Llegada: " +
      info[2].textContent +
      " - Precio " +
      info[3].textContent;
    divRuta.style.fontSize = "20px";

    rutaActual = divRuta;

    //Ahora ponemos debajo del div padre seleccionado el trayecto seleccionado
    contenedor.parentNode.insertBefore(divRuta, contenedor.nextElementSibling);
  });
}
