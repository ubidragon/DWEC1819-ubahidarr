function analizaFecha(){
	var msg = prompt("Por favor, indique su fecha de nacimiento. (formato admitido: MM-DD-YYYY)\nDonde MM es el mes y DD el dia.");
	
	var animal = "";

	var fecha = new Date(msg);

//Estructura if para comprobar que los datos son correctos
	if (!isNaN(fecha) || !(msg==null) && (fecha.getMonth()<12 && fecha.getMonth()>0)) {

		
		switch(fecha.getMonth()){
			//Enero
			case 0:
				if (fecha.getDate() > 9 ) {
					animal = "mono";
				}else if (fecha.getDate() <= 9 ){
					animal = "lagarto";
				}
				break;
			
			//Febrero
			case 1:
				if (fecha.getDate() <= 6 ) {
					animal = "mono";
				}else if (fecha.getDate() > 6 ){
					animal = "halcon";
				}
				break;
			
			//Marzo
			case 2:
				if (fecha.getDate() <=6 ) {
					animal = "halcon";
				}else if (fecha.getDate() > 6 ){
					animal = "jaguar";
				}
				break;
			
			//Abril
			case 3:
				if (fecha.getDate() <= 3 ) {
					animal = "jaguar";
				}else if (fecha.getDate() > 3 ){
					animal = "zorro";
				}
				break;
			
			//Mayo
			case 4:
				if (fecha.getDate() == 1 ) {
					animal = "zorro";
				}else if (fecha.getDate() > 1 && fecha.getDate() <= 29){
					animal = "serpiente";
				}else if(fecha.getDate() > 29){
					animal = "ardilla";
				}
				break;
			
			//Junio
			case 5:
				if (fecha.getDate() <= 26 ) {
					animal = "ardilla";
				}else if (fecha.getDate() > 26 ){
					animal = "tortuga";
				}
				break;
			
			//Julio
			case 6:
				if (fecha.getDate() <= 25 ) {
					animal = "tortuga";
				}else if (fecha.getDate() > 25 ){
					animal = "murcielago";
				}
				break;
			
			//Agosto
			case 7:
				if (fecha.getDate() <= 22 ) {
					animal = "murcielago";
				}else if (fecha.getDate() > 22){
					animal = "escorpion";
				}
				break;
			
			//Septiembre
			case 8:
				if (fecha.getDate() <= 19 ) {
					animal = "escorpion";
				}else if (fecha.getDate() > 19 ){
					animal = "venado";
				}
				break;
			
			//Octubre
			case 9:
				if (fecha.getDate() <= 17 ) {
					animal = "venado";
				}else if (fecha.getDate() >17 ){
					animal = "lechuza";
				}
				break;
			
			//Noviembre
			case 10:
				if (fecha.getDate() <= 14 ) {
					animal = "lechuza";
				}else if (fecha.getDate() > 14 ){
					animal = "pavo-real";
				}
				break;
			
			//Diciembre		
			case 11:
				if (fecha.getDate() <= 12 ) {
					animal = "pavo-real";
				}else if (fecha.getDate() > 12 ){
					animal = "lagarto";
				}
				break;
		}

		generaLink(animal);

	}else{
		/*
		En caso de que la fecha ha sido mal introducida se mostrara un mensaje al usuario.
		*/
			document.write("La fecha proporcionada no cumple con lo pedido.\nIntentelo de nuevo.");
		}

var recarga = "<div><button type='submit' onclick='recarga()'>Recargar</button></div>";
document.write(recarga);
document.write("<div><br/><a type='submit' href='./index.html'>Volver al Indice</a></div>");
}

/*
Funcion para generar la composicion del link del iframe en base a la fecha de nacimiento del usuario.
*/
function generaLink(animal){
	var link = "http://www.horoscopomaya2018.com/horoscopo-maya-";
	link+=animal+"/";
	var frameAnimal = "<iframe name='frameIzdo' src='"+link+"' title='Horosocopo Maya' width='500em' height='600em'></iframe>";

	document.write(frameAnimal);
}

function recarga(){
	location.reload();
}

window.onload = analizaFecha();