//Definimos clase Infante con sus propiedades de nombre, edad y altura
class Infante {
    constructor(nombre, edad, altura) {
            this._nombre = nombre;
            this._edad = edad;
            this._altura = altura;
        }
        //Se declaran los metodos get y set de cada propiedad
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get edad() {
        return this._edad;
    }
    set edad(nuevaEdad) {
        this._edad = nuevaEdad;
    }

    get altura() {
        return this._altura;
    }
    set altura(nuevaAltura) {
        this._altura = nuevaAltura;
    }

    /*Se construye el metodo que determina si un infante esta en edad de jubilacion. 
    Para ello se usa un operador ternario.
    Devolvera verdadera en caso de que tenga una edad igual o superior a 45
    */
    jubilar() {
        let jubilacion = this.edad >= 45 ? true : false;

        return ("" + jubilacion);
    }

    /*Metodo toString para mostrar por pantalla la informacion de la clase
     */
    toString() {
        let info = "<p>El nombre del Infante es " + this.nombre + "<br>";
        info += "El edad del Infante es " + this.edad + " años<br>"
        info += "La altura del Infante es " + this.altura + " cm<br></p>";
        return (info);
    }
}

//Definimos clase Centurion con sus propiedades de nombre, edad, altura y tiempo en el cargo. Exntendera a la clase Infante y se heredaran las caracteristicas del constructor de Infante.
class Centurion extends Infante {

    constructor(nombre, edad, altura, tiempoEnCargo) {
        super(nombre, edad, altura);
        this._tiempoEnCargo = tiempoEnCargo;
    }

    get tiempoEnCargo() {
        return this._tiempoEnCargo;
    }
    set tiempoEnCargo(nuevoTiempo) {
        this._tiempoEnCargo = nuevoTiempo;
    }

    gritarOrden(orden) {
            let grito;
            if (orden == null) {
                let ordenes = ["Firrrrrrmes!", "A formar!!", "Formacion ofensiva!", "Arriba La Vida Moderna!", "El único día fácil fue ayer."];
                var resAleatorio = Math.floor((Math.random() * (4 - 0 + 1)) + 0);
                grito = ordenes[resAleatorio]
            } else {
                grito = orden;
            };


            return grito;
        }
        /*Metodo toString para mostrar por pantalla la informacion de la clase
         */
    toString() {
        let info = "<p>El nombre del Centurion es " + this.nombre + "<br>";
        info += "El edad del Centurion es " + this.edad + " años<br>"
        info += "La altura del Centurion es " + this.altura + " cm<br>";
        info += "El centurion lleva al cargo " + this.tiempoEnCargo + " años<br></p>";
        return (info);
    }
}

//Definimos clase Centurion con sus propiedades de nombreCenturia, nombreLegion y provincia.
class Centuria {
    constructor(nombreCenturia, nombreLegion, provincia) {
        this.nombreCenturia = nombreCenturia;
        this.nombreLegion = nombreLegion;
        this.provincia = provincia;
        this.arrayInfantes = [];
        this.centurionAsignado;
    }


    addInfante(infante) {
            if (this.arrayInfantes.length < 77) {
                this.arrayInfantes.push(infante);
                document.write("El infante ha sido añadido correctamente<br>");
            } else {
                document.write("No se pueden añadir mas de 77 infantes a la centuria<br>");
            };
        }
        //Elimina el primer infante que coincida con el nombre proporcionado.
    removeInfante(nombreInfante) {
        if (this.arrayInfantes.length - 1 < 10) {
            document.write("<br>El infante no ha sido eliminado ya que la centuria no puede tener menos de 10<br>");
        } else {

            for (var k = 0; k < this.arrayInfantes.length; k++) {
                if (this.arrayInfantes[k].nombre == nombreInfante) {
                    this.arrayInfantes.splice(k, 1);
                    document.write("<br>Se ha eliminado a " + nombreInfante + "<br>");
                    break;
                };
            };
        };
    }

    //Un método que devuelva el total de miembros de que tiene entre infantes y oficiales esta centuria. 
    totalMiembros() {
        return this.arrayInfantes.length;
    }

    //Asigna el oficial a la centuria. Cesa automáticamente al que había antes.
    asignarCenturion(objetocenturion) {
        if (this.centurionAsignado == null) {

            this.centurionAsignado = objetocenturion;
            document.write("<br>El nuevo Centurion asignado es " + this.centurionAsignado.nombre + "<br>");

        } else if (this.centurionAsignado != null) {
            document.write("<br>Se va a cesar a " + this.centurionAsignado.nombre + "<br>");
            this.centurionAsignado = objetocenturion;
            document.write("<br>El nuevo Centurion asignado es " + objetocenturion.nombre + "<br>");
            
        };

    }

    /*Metodo toString para mostrar por pantalla la informacion de la clase
     */
    toString() {
        let info = "<p>El nombre de la Centuria es " + this.nombreCenturia + "<br>";
        info += "El nombre de la Legion es " + this.nombreLegion + "<br>"
        info += "La centuria esta destinada en " + this.provincia + "<br></p>";
        return (info);
    }
}

let html = [];

/**
Metodo auxiliar para ir almacenando lo que finalmente se mostrará por pantalla y de esta forma solo hacer uso de un document.write
**/


//metodo factoria para crear un array con multiples soldados
function factorySoldier() {
    let datos;
    let nombres = ["Decimus", "Manius", "Marcus", "Publius", "Gaius", "Servius", "Quintus", "Titus", "Tiberius"];
    let apellidos = ["Hidalgo", "Maximus", "Cesar", "Neron", "Aurelio", "Sofocles"];

    //var resAleatorio = Math.floor((Math.random() * (77 - 10 + 1)) + 10);
    let infantes = [200];

    for (var i = 0; i < 200; i++) {
        var nombreAleatorio = Math.floor((Math.random() * (8 - 0 + 1)) + 0);
        var apellidoAleatorio = Math.floor((Math.random() * (5 - 0 + 1)) + 0);
        let edad = Math.floor((Math.random() * (100 - 12 + 1)) + 12);
        let altura = Math.floor((Math.random() * (220 - 150 + 1)) + 150);
        datos = nombres[nombreAleatorio] + " " + apellidos[apellidoAleatorio];
        infantes[i] = new Infante(datos, edad, altura);

    };

    /*for (var j = 0; j < resAleatorio; j++) {
        html.push("<div><h3>Infante Nº" + j + "</h3>" + infantes[j] + " </div>");

    };*/
    return infantes;
}


let centurion = new Centurion("Davidus Broncanus", 26, 170, 4);
let centurion2 = new Centurion("Quequequs Cesareus", 15, 176, 6);
let centurion3 = new Centurion("Decimus Maximus", 42, 160, 12);
let centurion4 = new Centurion("Neronus Stigyus", 44, 190, 21);
// 35 años, 170 centímetros y cuatro años el cargo.
let centuria1 = new Centuria("Asterix", "Panoramix", "Galia");
let centuria2 = new Centuria("Obelix", "Ideafix", "Normandia");
//Almacenamos los infantes de la factoria en una variable para poder trabajar con ellos.


//Test de uso de clases
//declaramos un array con multiples soldados para tener ejemplos con los que trabajar
let infanteria = factorySoldier();
document.write("Se muestra la informacion de un <strong>Infante</strong>: <br>");
document.write(infanteria[Math.floor((Math.random() * (200 - 10 + 1)) + 10)]);
document.write("Se muestra la informacion de un <strong>Centurion</strong>: <br>");
document.write(centurion2);
document.write("<br><i>El centurion grita una orden al azar</i><br>");
document.write(centurion2.gritarOrden());
document.write("<br><i>El centurion grita una orden indicada por el usuario</i><br>");
document.write(centurion2.gritarOrden("Arriba Gandules!!!"));

document.write("<br>Se muestra la informacion de un infante: <br>");
document.write(infanteria[142]);
document.write("<br>Se procede a intentar jubilar al infante<br>");
document.write(infanteria[142].jubilar());
document.write("<br>Se modifica y se le pone edad superior o igual a 45: <br>");
infanteria[142].edad = 46;
document.write("<br>Se procede a intentar jubilar al infante<br>");
document.write(infanteria[142].jubilar());



document.write("<br><br><i>Se crea una centuria de 11 infantes.</i><br>");
document.write(centuria1);
for (var i = 0; i < 11; i++) {
    centuria1.addInfante(infanteria[Math.floor((Math.random() * (200 - 10 + 1)) + 10)]);
};
document.write("<br><i>Los nombres de los Infantes son: </i>");
for (var i = 0; i < 11; i++) {
    document.write(centuria1.arrayInfantes[i].nombre + ", ");
};
document.write("<br><br> <i>Se recuentan los infantes haciendo uso de totalMiembros: </i>" + centuria1.totalMiembros());

document.write("<br><i>Se intenta eliminar un infante que coincida con </i><br>");
centuria1.removeInfante(centuria1.arrayInfantes[2].nombre);
document.write("<br><i>Se intenta eliminar infantes por debajo de 10</i> <br>");
centuria1.removeInfante(centuria1.arrayInfantes[3].nombre);

document.write("<br> <i>Se recuentan los infantes haciendo uso de totalMiembros:</i> " + centuria1.totalMiembros());

document.write("<br><i>Se intenta crear una centuria de mas de 77 infantes.</i><br>");
document.write(centuria2);
for (var i = 0; i < 78; i++) {
    centuria2.addInfante(infanteria[Math.floor((Math.random() * (200 - 10 + 1)) + 10)]);
};

document.write("<br><br><i>Se asigna un centurion a una centuria.</i><br>" );
centuria1.asignarCenturion(centurion3);
document.write("<br><br><i>Se reasigna un centurion a una centuria.</i><br>");
centuria1.asignarCenturion(centurion2);
document.write("<br><i>El centurion anctual es:</i> "+  centuria1.centurionAsignado.nombre);

//document.write(html.join(""));