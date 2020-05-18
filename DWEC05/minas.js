/**
 * Minijuego de buscaminas
 */
/*Mensajes de la aplicacion*/
let tituloJuego = "Juego evita la bomba y llega al destino (EBLD)";
let win = "Has ganado";
let gameOver = "Has perdido";
let rendicion = "Te has rendido";
let botonInicioMsg = "Iniciar Partida";
let botonRendicionMsg = "Rendirse";

/*Variables globales de la aplicacion*/
let identificadorCasilla = 0;
let alto = 4;
let ancho = 4;
let dimension = alto * ancho;
let movimiento;
let meta;
let bomba;
/*Variables con los atributos de elementos*/
let atributoAncho = "width";
let atributoAlto = "height";


window.addEventListener('load', inicializacion);

function inicializacion() {
    generaCabecera();

}
/**
 * Funcion encargada de generar la cabecera del juego,
 * incluyendo los botones necesarios para poder iniciar o parar el juego
 */
function generaCabecera() {
    /*Montamos el titulo del juego */
    let cabecera = document.createElement("div");
    cabecera.setAttribute("id", "contenedor");
    cabecera.appendChild(document.createTextNode(tituloJuego));
    document.body.appendChild(cabecera);

    generaBoton("botonInicio", botonInicioMsg);
    generaBoton("botonRendicion", botonRendicionMsg);

    document.getElementById("botonInicio").addEventListener('click', generaBombaMeta);
    document.getElementById("botonRendicion").addEventListener('click', generaBombaMeta);
}
/**
 * Funcion encargada de pintar al usuario el tablero de juego
 */
function generaTablero() {

    /*Generamos la tabla que usaremos para el juego*/
    let tablero = document.createElement("table");
    tablero.setAttribute("border", 1);
    tablero.setAttribute("id", "tableroJuego");
    tablero.setAttribute(atributoAncho, 600);
    tablero.setAttribute(atributoAlto, 600);

    let tablaCuerpo = document.createElement("tbody");
    for (let i = 0; i < 4; i++) {
        let fila = document.createElement("tr");
        for (let j = 0; j < 4; j++) {
            let casilla = document.createElement("th");
            casilla.setAttribute("id", identificadorCasilla++);
            casilla.setAttribute(atributoAncho, "25%");
            casilla.setAttribute(atributoAlto, "25%");
            fila.appendChild(casilla);
        }
        tablaCuerpo.appendChild(fila);
    }
    identificadorCasilla = 0;
    tablero.appendChild(tablaCuerpo);

    document.body.appendChild(tablero);



    document.body.addEventListener('keypress', muevePorTablero, false);

}
/**
 * Funcion encarga de generar la meta, la salida y la bomba. Asegurandose de que
 * -meta no sea igual a la salida ni a la bomba
 * -salida no sea igual a la meta ni a la bomba
 */
function generaBombaMeta() {
    resetView();
    generaTablero();
    meta = posicionAleatoria();
    let salida = posicionAleatoria();
    movimiento = salida;
    bomba = posicionAleatoria();
    /*Eliminamos el evento de click en la casilla correspondiente a la meta y alteramos su color*/
    eliminaEventoCambiaColor(meta, "blue");
    cargaImg(meta, "end");
    while (meta == salida) {
        salida = posicionAleatoria();
    }

    /*Eliminamos el evento de click en la casilla correspondiente a la meta y alteramos su color*/
    eliminaEventoCambiaColor(salida, "yellow");
    cargaImg(salida, "start");
    /*Bucle para evitar que meta y bomba esten en la misma casilla*/
    while (bomba == meta || salida == bomba) {
        bomba = posicionAleatoria();
    }
    /*Una vez determinado el valor final de la bomba, eliminamos el evento de cambio de color*/
    eliminaEventoCambiaColor(bomba, "black");
    cargaImg(bomba, "bomb");
}
/**
 * Funcion auxiliar usada para cambiar el color de la casilla por la que se esta
 * pasando
 */
function cambiarColor(id) {
    document.getElementById(id).style.backgroundColor = "green";

}
/*
* Funcionalidad para cargar las imagenes iniciales del jugador
*/
function cargaImg(idPadre, tipo) {
    let imgExtra = document.createElement("img");
    imgExtra.setAttribute("id", tipo);
    imgExtra.setAttribute("src", tipo + ".png");
    imgExtra.setAttribute(atributoAncho, 80);
    imgExtra.setAttribute(atributoAlto, 80);
    document.getElementById(idPadre).appendChild(imgExtra);
}

/*
* Funcion para creacion del personaje y poder ser usado en el movimiento del mismo por el tablero
*/
function muevePersonaje(id) {
    let personaje = document.createElement("img");
    personaje.setAttribute("id", "personaje");
    personaje.setAttribute("src", "person.png");
    personaje.setAttribute(atributoAncho, 80);
    personaje.setAttribute(atributoAlto, 80);
    document.getElementById(id).appendChild(personaje);
}

function eliminaPersonaje(id) {
    if (document.getElementById('personaje') != null) {
        document.getElementsByTagName('th')[id].removeChild(document.getElementById('personaje'));
    }
}
/**
 * Funcion auxiliar para eliminar un evento asociado a una casilla y cambiarle el color
 * por uno fijo.
 *
 * @param id id del elemento a modificar
 * @param color nuevo color que se asignara al elemento objetivo
 */
function eliminaEventoCambiaColor(id, color) {
    document.getElementById(id).removeEventListener('click', cambiarColor);
    document.getElementById(id).style.backgroundColor = color;
}
/**
 * Funcion auziliar generadora de numeros aleatorios de 0 a 15 ambos inclusive
 */
function posicionAleatoria() {
    return Math.floor(Math.random() * (+dimension - 1));
}
/**
 * Funcion para generar botones
 * @param idName id que se asignara al nuevo boton
 * @param  textoBoton texto que tendra el boton
 */
function generaBoton(idName, textoBoton) {
    let boton = document.createElement("button");
    boton.setAttribute("id", idName);
    let botonInicio = document.createElement("p");
    let textoInicio = document.createTextNode(textoBoton);
    botonInicio.setAttribute("id", idName);
    botonInicio.appendChild(textoInicio);
    boton.appendChild(botonInicio);
    document.body.appendChild(boton);
}
/*
* Funcionalidad para desplazarse por el tablero.
* Se controla que no se acceda a una zona indebida de la pantalla.
*/
function muevePorTablero(tecla) {
    let preMov = movimiento;

    switch (tecla.keyCode) {
        case 97: //Letra A
            preMov--;
            if (document.getElementById(preMov) != null && movimiento % 4 != 0) {
                eliminaPersonaje(movimiento);
                movimiento--;
            }
            break;
        case 119: //Letra W
            preMov -= 4;
            if (document.getElementById(preMov) != null) {
                eliminaPersonaje(movimiento);
                movimiento -= 4;
            }
            break;
        case 115: //Letra S
            preMov += 4;
            if (document.getElementById(preMov) != null) {
                eliminaPersonaje(movimiento);
                movimiento += 4;
            }
            break;
        case 100: //Letra D
            preMov++;
            if (document.getElementById(preMov) != null & movimiento % 4 != 3) {
                eliminaPersonaje(movimiento);
                movimiento++;
            }
            break;
    }
    if (preMov == movimiento) {
        cambiarColor(movimiento);
        muevePersonaje(movimiento);
    }
    if (movimiento == meta || movimiento == bomba) {
        gameEnd();
    }

}
/*
* Finalizacion del juego y en funcion de la forma de acabar, se muestra un resultado u otro.
*/
function gameEnd() {
    document.getElementsByTagName('body')[0].removeChild(document.getElementById('tableroJuego'));
    document.body.removeEventListener('keypress', muevePorTablero, false);
    let fin = document.createElement("p");
    fin.setAttribute("id", "fin");
    if (movimiento == meta) {
        fin.appendChild(document.createTextNode(win));
    }
    if (movimiento == bomba) {
        fin.appendChild(document.createTextNode(gameOver));
    }
    document.body.appendChild(fin);
}

/*
* Funcionalidad para reiniciar el juego
*
*/
function resetView() {
    if (document.getElementById("tableroJuego") != null) {
        document.getElementsByTagName('body')[0].removeChild(document.getElementById('tableroJuego'));
        document.body.removeEventListener('keypress', muevePorTablero, false);
    }
    if (document.getElementById("fin") != null) {
        document.getElementsByTagName('body')[0].removeChild(document.getElementById('fin'));
    }
}