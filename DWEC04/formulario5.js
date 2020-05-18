var enviar = document.getElementById("Enviar");
var borrar = document.getElementById("Borrar");
var nombre = document.getElementById("nombre");
var part = document.getElementById("numParticipantes");
var des = document.getElementById("Descripcion");
var armas = document.getElementById("Armas");

borrar.addEventListener("click", resetAll);

function resetAll() {
    localStorage.clear();
    document.getElementById("intentos").innerHTML = "Numero de intentos: 0";
}


function contadorClicks() {
    // Si existe contador se incrementa y sino se inicializa
    if (localStorage.contador) {
        // Se convierte el contador a entero porque por defecto es una cadena
        localStorage.contador = parseInt(localStorage.contador) + 1;
    } else {
        localStorage.contador = 1;
    }
    document.getElementById("intentos").innerHTML =
        "Numero de intentos: " + localStorage.contador;
}

if (enviar.addEventListener) {
    enviar.addEventListener("click", contadorClicks, false);
    enviar.addEventListener("click", collectValues, false);
} else if (enviar.attachEvent) {
    // IE
    enviar.attachEvent("click", contadorClicks);
}


function collectValues(){
    
    var values = "<label id='resNombre'>Nombre del caballero: <p>".concat(nombre.value,"</p></label><br/>");
	values += "<label id='resDescripcion'>Descripcion del caballero: <p>"+des.value+"</p></label><br/>";
	values += "<label id='resArmas'>Armas: <p>"+armas.value+"</p></label><br/>";
	values += "<label id='resParticipantes'>Participantes: <p>"+part.value+"</p></label><br/>";
    document.getElementById("resultado").innerHTML= values;    
}
