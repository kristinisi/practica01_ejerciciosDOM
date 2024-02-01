let eliminar = document.querySelectorAll(".borrar");
let jugadores = document.querySelector(".jugadores");
let eliminarTodo = document.getElementById("eliminarTodo");
let datos = document.createElement("div");
datos.classList.add("datos");

console.log(eliminar);
console.log(jugadores);
console.log(eliminarTodo);

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
      eliminarTodo.parentNode.insertBefore(
        datos,
        eliminarTodo.nextElementSibling
      );

      // Eliminamos la fila
      fila.remove();
    }
  }
});
