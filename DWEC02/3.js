//Funcion para cambiar espacios por puntos y los puntos por comas.
function cambiaPuntos() {
    var msg = prompt("Inserta aqui el texto que quieres que se le cambien los puntos por espacios");
    var texto="";
    /*Recorremos todos los caracteres del texto en busca de espacios tras lo cual los sustituiremos.
    Tambien hacemos lo mismo con los puntos*/
    for (var i= 0; i<msg.length; i++ ){
        
        if (msg.charAt(i)==' '){
            
            texto+=".";
        }else if  (msg.charAt(i)=="."){
            texto+=",";
        }else{
            texto+= msg.charAt(i);
        }
    
    }
    //Imprimo el nuevo texto con los cambios realizados.
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

window.onload = cambiaPuntos();