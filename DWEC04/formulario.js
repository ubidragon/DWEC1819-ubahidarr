//elementos del html que se usan
var enviar = document.getElementById("Enviar");
var limpiar = document.getElementById("LimpiarCampo");
var reiniciar = document.getElementById("Reiniciar");
var nombre = document.getElementById("Nombre");
var apellido = document.getElementById("Apellido");
var password = document.getElementById("Password");
var passwordCheck = document.getElementById("CheckPass");
var nacion = document.getElementById("Nacionalidad");
var elementoActivo = document.activeElement;
var inputss = document.getElementsByTagName("input");
var elementoEliminar;

//expresiones regulares

//Admite todas las letras del abecedario en minusculas y mayusculas, numeros del 0 al 9 y espacios.
//Todo esto con una aparicion minima de 3 y maxima de 40
var regexpNombre = new RegExp("[A-Za-z0-9 ]{3,40}");

//Admite todas las letras del abecedario en minusculas y mayusculas, numeros del 0 al 9 y espacios.
//Todo esto con una aparicion minima de 4 y maxima de 60
var regexpApellido = new RegExp("[A-Za-z0-9 ]{4,60}");

//Grupo 1 de coincidencia: Posee una longitud de entre 9 y 12 caracteres
//Grupo 2 de coincidencia: Admite cualquier mayusculas
//Grupo 3 de coincidencia: Debe de aparecer al menos 1 minuscula
//Grupo 4 de coincidencia: Debe de aparecer al menos 1 ú
//Grupo 5 de coincidencia: Apareceran de ninguna a 3 veces cualquier numero
//Grupo 6 de coincidencia: Debera de acabar con . ó # ó }
var regexpPasswordLetras = new RegExp("^.*(?=.{9,12})(?=.*[A-ZÑÁÉÍÓÚ])(?=.*[a-zñáéíó]+)(?=.*[ú]+)(?=.*\d{0,3})(?=.*[.#}]).*$");


//Creacion y uso de los eventos
reiniciar.addEventListener("click", resetAll);
limpiar.addEventListener("click", clearInput);
enviar.addEventListener("click", send);
enviar.addEventListener("click", checkParam);

//Eventos para realizar el cambio de color cuando se tiene o se pierde el foco
/*¿Mejora para el futuro? => He intentando realizar un bucle con getElementsByTagName y usando los 
indices de los elementos pero no creaba bien el evento...
Investigar porque no termina de funcionar, seguro que hay una forma mas elegante y eficiente de hacerlo
*/
nombre.addEventListener('focus', function() {
    changeColor(nombre, "foco")
});
nombre.addEventListener('blur', function() {
    changeColor(nombre, "noFoco");
    idActual(nombre);
});
apellido.addEventListener('focus', function() {
    changeColor(apellido, "foco")
});
apellido.addEventListener('blur', function() {
    changeColor(apellido, "noFoco");
    idActual(apellido);
});
password.addEventListener('focus', function() {
    changeColor(password, "foco")
});
password.addEventListener('blur', function() {
    changeColor(password, "noFoco");
    idActual(password);
});
passwordCheck.addEventListener('focus', function() {
    changeColor(passwordCheck, "foco")
});
passwordCheck.addEventListener('blur', function() {
    changeColor(passwordCheck, "noFoco");
    idActual(passwordCheck);
});

//Funciones 
function checkParam() {

    if (!regexpNombre.test(nombre.value) || nombre.value == null || nombre.value == "") {

       // alert("Introduzca un nombre correcto");
        document.getElementById("resNombre").style.backgroundColor = "red";
        nombre.style.backgroundColor = "red";
    }else{
        document.getElementById("resNombre").style.backgroundColor = "green";
        nombre.style.backgroundColor = "green";
    }
        
    if (!regexpApellido.test(apellido.value) || apellido.value == null || apellido.value == "") {
       // alert("Introduzca un apellido correcto");
        document.getElementById("resApellido").style.backgroundColor = "red";
        apellido.style.backgroundColor = "red";
    } else {
        document.getElementById("resApellido").style.backgroundColor = "green";
        apellido.style.backgroundColor = "green";
        
    }

    if (!regexpPasswordLetras.test(password.value) || password.value == null || password.value == "") {

       // alert("La contraseña no cumple las especificaciones de seguridad");
    document.getElementById("resPassword").style.backgroundColor = "red";
    password.style.backgroundColor = "red";
    
    } else if (!(password.value == passwordCheck.value)) {
        passwordCheck.style.backgroundColor = "red";
        
    document.getElementById("resPassword").style.backgroundColor = "red";
       // alert("Las contraseñas no coinciden");

    }else{
        password.style.backgroundColor = "green";
        document.getElementById("resPassword").style.backgroundColor = "green";
    }
}
function changeColor(id, focuseando) {
    if (focuseando == "foco") {
        id.style.backgroundColor = "#f2cd13";
    } else if (focuseando == "noFoco") {
        id.style.backgroundColor = "initial";
    }
}
//funcion que reinicia todos los campos del formulario
function resetAll() {
    document.getElementById("Inscripcion").reset();
}

function collectValues(){
    
    var values = "<label id='resNombre'>Nombre del caballero: <p>".concat(nombre.value,"</p></label><br/>");
	values += "<label id='resApellido'>Apellido del caballero: <p>"+apellido.value+"</p></label><br/>";
	values += "<label id='resPassword'>Contraseña: <p>"+password.value+"</p></label><br/>";
	values += "<label id='resNacion'>Nacionalidad: <p>"+nacion.value+"</p></label><br/>";
    document.getElementById("resultado").innerHTML= values;    
}

function send(){
     document.getElementById("Inscripcion").addEventListener("click", function(event){
        event.preventDefault()
});     
     collectValues();
     
}

function idActual(campo){
    elementoEliminar = campo.id;
}

function clearInput() {
    
   if(elementoEliminar ==  'Nombre'){
       nombre.value="";   
   }
   
      if(elementoEliminar ==  'Apellido'){
       apellido.value="";   
   }
      if(elementoEliminar ==  'Password'){
       password.value="";   
   }
   
      if(elementoEliminar ==  'CheckPass'){
       passwordCheck.value="";   
   }
   
   elementoEliminar="";
   
}
