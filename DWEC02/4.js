window.onload = navegadorActual();
function navegadorActual() {
	//Usamos metodos de Js para identificar la plataforma en la que nos encontramos.
    document.write(navigator.platform); 
    /*Creo un boton que haga una llamada al boton de recargar la pagina para facilitar
    el lanzamiento de la aplicacion sin tener que usar el refresco del navegador*/
    var recarga = "<button type='submit' onclick='recarga()'>Recargar</button>";
	document.write(recarga);
	document.write("<div><br/><a type='submit' href='./index.html'>Volver al Indice</a></div>");
}


function recarga(){
	location.reload();
}

