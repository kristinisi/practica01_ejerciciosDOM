let eliminar = document.querySelectorAll(".borrar");
let jugadores = document.querySelector(".jugadores");
let jugadoresEliminar = document.querySelectorAll(".jugadores tr");
let eliminarTodo = document.getElementById("eliminarTodo");
let datos = document.createElement("div");
datos.classList.add("datos");
let filaActual = null;
arr = [];

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
  //Limpiamos todos los datos
  datos.innerHTML = "";

  if (fila.style.backgroundColor === "") {
    //modificamos el estilo
    fila.style.backgroundColor = "lightgray";

    //Mostramos los datos eliminados
    str = `${fila.cells[0].textContent} - ${fila.cells[1].textContent} - ${fila.cells[2].textContent} - ${fila.cells[3].textContent}`;
    arr.push(str);

    strDatos = arr.join(", ");

    datos.textContent = strDatos;
  } else {
    fila.style.backgroundColor = "";

    //cogemos los datos para buscarlos
    str = `${fila.cells[0].textContent} - ${fila.cells[1].textContent} - ${fila.cells[2].textContent} - ${fila.cells[3].textContent}`;
    //sacamos el indice en el que se encuentra
    const index = arr.indexOf(str);
    if (index !== -1) {
      arr.splice(index, 1);
    }
    strDatos = arr.join(", ");
    datos.textContent = strDatos;
  }
  //Insertamos el div de datos al final
  eliminarTodo.parentNode.insertBefore(datos, eliminarTodo.nextElementSibling);
});

//tercer evento, dando al botón eliminar todo, eliminamos todos los datos
eliminarTodo.addEventListener("click", function (event) {
  for (let jugador of jugadoresEliminar) {
    if (jugador.style.backgroundColor === "lightgray") {
      jugador.remove();
    }
  }
  datos.remove();
  arr = [];
});

//tercer evento, dando al botón eliminar todo, eliminamos todos los datos
document.addEventListener("keydown", function (event) {
  console.log(event.code);
  if (event.code === "Delete") {
    for (let jugador of jugadoresEliminar) {
      if (jugador.style.backgroundColor === "lightgray") {
        jugador.remove();
      }
    }
    datos.remove();
    arr = [];
  }
});
