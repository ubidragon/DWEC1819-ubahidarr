function calculosHexagono(){
	var msg = prompt("Introduzca el tamaño del lado de su hexagono:");
	var numero = new Number(msg);
	var datos="";
	if (isNaN(numero)) {

		datos = "<p>Ha introducido <strong>"+msg+"</strong> que no es un numero.</p>";
		
		document.write(datos);
		

	} else {
	var apotema = Math.sqrt(Math.pow(numero,2)-(Math.pow((numero/2),2)));
	var area = ((6*numero)*apotema)/2;

	datos = "<p>El lado de su Hexagono es: "+numero+"</p><br/><p>La apotema es: "+apotema+"</p><br/><p>El area es: "+area+"</p>";
	document.write(datos);
	}

	var recarga = "<button type='submit' onclick='recarga()'>Recargar</button>";
	document.write(recarga);
	document.write("<div><br/><a type='submit' href='./index.html'>Volver al Indice</a></div>");
	
}

function recarga(){
	location.reload();
}

window.onload = calculosHexagono();