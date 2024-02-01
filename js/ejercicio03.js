let eliminar = document.querySelectorAll(".borrar");
let jugadores = document.querySelector(".jugadores");
let eliminarTodo = document.getElementById("eliminarTodo");
let datos = document.createElement("div");
datos.classList.add("datos");
let filaActual = null;

console.log(eliminar);
console.log(jugadores);
console.log(eliminarTodo);

//primer evento que borra con un botón de borrar
jugadores.addEventListener("click", function (event) {
  //verificamos si el click fue en el boton borrar
  if (event.target.classList.contains("borrar")) {
    //obtenemos la fila tr mas cercana al botón clickado
    let fila = event.target.closest("tr");

    if (fila) {
      //Limpiamos todos los datos
      datos.innerHTML = "";

      //Mostramos los datos eliminados
      datos.textContent = `Jugador eliminado: ${fila.cells[0].textContent} - ${fila.cells[1].textContent} - ${fila.cells[2].textContent} - ${fila.cells[3].textContent}`;

      //Insertamos el div de datos al final
      eliminarTodo.parentNode.insertBefore(
        datos,
        eliminarTodo.nextElementSibling
      );

      // Eliminamos la fila
      fila.remove();
    }
  }
});

//segudo evento, con un doble click se selecciona la fila
jugadores.addEventListener("dblclick", function (event) {
  //obtenemos el elemento tr donde hemos hecho click
  let fila = event.target.closest("tr");

  if (fila.style.backgroundColor === "") {
    //modificamos el estilo
    fila.style.backgroundColor = "gray";
  } else {
    fila.style.backgroundColor = "";
  }
});
