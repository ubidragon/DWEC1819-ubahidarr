/*
Funcion para pedir frase en la cual eliminar caracteres que sean iguales y que a su vez esten seguidos.
*/
function sustituyeDuplicados() {
    var msg = prompt("Inserta aqui el texto en el que quieres detectar duplicados.");
    var texto = "";
    /*Recorro el texto pasado caracter a caracter y lo voy comprobando con su caracter 
    anterior para saber si esta repetido*/
    for (var i = 0; i < msg.length; i++) {
        if (i != 0) {
            if (msg.charAt(i) != msg.charAt(i - 1)) {

                texto += msg.charAt(i);
            }
        }else{
            texto += msg.charAt(i);
        }

    }
    //Imprimo la palabra habiendo eliminado los caracteres extras.
    document.write(texto.toString());
    /*Creo un boton que haga una llamada al boton de recargar la pagina para facilitar
    el lanzamiento de la aplicacion sin tener que usar el refresco del navegador*/
    var recarga = "<button type='submit' onclick='recarga()'>Recargar</button>";
    document.write(recarga);
    document.write("<div><br/><a type='submit' href='./index.html'>Volver al Indice</a></div>");
}

function recarga(){
    location.reload();
}

window.onload = sustituyeDuplicados();
