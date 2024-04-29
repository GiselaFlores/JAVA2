/* comentario 
// comentario de linea

// declaracion + nombre + = + contenido;

let nombre="Roberto";
let numero=45;
let numeroDos="40";
let edad;

let nombreDos, num=10, sapo="pepe";

edad= num*numero;

console.log(edad*20);

console.log("Bienvenido " + nombre + " sos el alumno numero: " + num);

constantes 

const PI=3.14;

numeroDos= PI*10;
console.log(numeroDos);

console.log(PI);

let booleana=true;

let objeto={};



let nombre =  prompt("Ingrese su nombre:");
console.log(nombre);
*/
//document.write("Hola bienvenido " + nombre);

//let edadDos, edadTres=50, edadCuatro="40";

let edad =  parseInt(prompt("Ingrese su edad:"));
let profe =  prompt("Ingrese su carrera:");
/*
edadDos = edad + 10;
edad += 10;
edad = edad +10;

console.log("Tu edad en 10 años será de: " + edad);

document.write("Tu edad en 10 años será de: " + edad);
*/

if (edad >= 18) {
        document.write("Tenes permiso para navegar en el sitio");
} else {
    document.write("NO TENES permiso para navegar en el sitio");
}

let nota = parseInt(prompt("Ingrese su nota:"));

let calificacion = nota>=7 ? "aprobado" : "desaprobado";
console.log(calificacion);

if (edad >= 18) {
    document.write("verifique los padrones");
} else if (edad === 16 || edad === 17){
    document.write("podes votar");
} else {
    document.write("no podes podes votar");
}