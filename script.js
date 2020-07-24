//LISTA DE ELEMENTOS
var botonEmpezar = document.getElementById("boton-empezar") //boton empzar juego.
var listado = document.getElementById("listado"); //UL de la lista.
var espacioMensaje = document.getElementById('contenedor-lista'); //DIV que contiene la lista.
var botonesSecundarios = document.getElementById('botones-secundarios')//DIV que contiene los botones secundarios.
var botonNuevoGanador = document.getElementById('btn-nuevo-ganador'); //boton dpar abuscar un nuevo ganador dentro de la lista

var mensajeListaVacia = document.createElement('P'); //Crea la etiqueta P para contener un mensaje de que no hay jugadores en lista.

let listaNombres; //Array que engloba los nombres de los jugadores.




function mostrarNombres(listaNombres)
//Muestra en el HTML la lista de los jugadores.
{
    botonEmpezar.classList.add('d-none'); //deshabilita el boton de empezar

    var fragment = document.createDocumentFragment();

    if (listaNombres.length != 0)
    //Define si la lista esta vacia o no, y dependiendo de eso retorna la lista o un mensaje de advertencia.
    {
        for (nombre of listaNombres)
        //Agrega los nombres a cada fila de la lista y las coloca en el fragment.
        {
            var listaNombre = document.createElement('LI'); //Crea el elemento LI para colocarla en mi lista.

            listaNombre.classList.add('list-group-item', 'text-dark');
            listaNombre.textContent = nombre;
    
            fragment.appendChild(listaNombre);
        }
    
        listado.classList.remove('d-none');
    
        listado.appendChild(fragment);

        mostrarGanador(listaNombres);
    }
    else
    {
        mensajeListaVacia.classList.remove('d-none');
        mensajeListaVacia.classList.add('h1', 'text-danger', 'bg-light', 'rounded', 'p-1');
        mensajeListaVacia.textContent = "No podemos elegir a nadie! Faltan jugadores :c";

        espacioMensaje.appendChild(mensajeListaVacia);

        botonNuevoGanador.classList.add('d-none');
    }

    botonesSecundarios.classList.remove('d-none'); //hace aparecer los botones secundarios. 
}




function darNombres()
//Genera la lista de los jugadores introducidos por texto.
{
    listado.classList.add('d-none');
    mensajeListaVacia.classList.add('d-none');
    botonNuevoGanador.classList.remove('d-none');

    listaNombres = [];
    
    console.log(listaNombres.length);

    do
    {
        var nombre = prompt("Introduce el nombre de tu compañero:")

        listaNombres.push(nombre);

    } while (nombre != null & nombre != "");

    listaNombres.pop(); //elimina el elemento null del array.

    mostrarNombres(listaNombres);
}




function recargarPagina()
//Recarga la pagina para poder empezar otra vez.
{
    location.reload();
}




function mostrarGanador(listaNombres)
{
    var numAleatorio = Math.floor(Math.random() * listaNombres.length);

    Swal.fire({
        title: 'El ganador es: ' + listaNombres[numAleatorio] + '!',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
}