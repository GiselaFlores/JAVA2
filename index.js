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

*/

//let nombre = prompt("Ingrese su nombre:");
//console.log(nombre);

//let edad = parseInt(prompt("Ingrese su edad:"));
//console.log(edad);

//document.write("Hola bienvenido " + nombre);
//document.write("Su edad es de: " + edad);
/*
if (criterio){
    acciones
} else {
    acciones
}

if (edad){
    document.write("Su edad es de: " + edad);
    console.log(edad);
} else {
    document.write("Su edad es de: " + edad + " no podes ingresar");
    console.log(edad);
}

let nota = parseInt(prompt("Ingrese su nota:"));

if (nota >= 7){
    document.write("aprobado");
    console.log(nota);
} else if (nota < 4){
    document.write("desaprobado");
    console.log(nota);
} else {
    document.write("va a final");
    console.log(nota);
}

let calificacion = nota>=4 ? "aprobado" : "desaprobado";
document.write(calificacion);


let numero = parseInt(prompt("Ingrese un numero: "));


if (numero % 2 == 1){
    document.write("El numero " + numero + " es impar");
} else {
    document.write("El numero " + numero + " es par");
}

let nota = parseInt(prompt("Ingrese su nota: "));

switch (nota) {
    case 10:
    case 9:
    case 8:
    case 7:
        condicion = "aprobado";
        console.log(condicion);
        document.write("Tu condición final de la cursada es: " + condicion);
        break;

    case 4:
    case 5:
    case 6:
        condicion = "a final";
        console.log(condicion);
        document.write("Tu condición final de la cursada es: " + condicion);
        break;

    case 3:
    case 2:
    case 1:
        condicion = "desaprobado";
        console.log(condicion);
        document.write("Tu condición final de la cursada es: " + condicion);
        break;

    default:
        condicion = "Ingresa una nota válida";
        console.log(condicion);
        document.write(condicion);
        break;
}


// Bucles
/*
for (let i=0; i<10; i++){
    console.log(i);
    document.write("Posición de fila: " + i);
}

i=0;
while (i<10){
    console.log(i);
    document.write(i);
    i++;
}

do {
    i++;
    console.log(i);
    document.write(i);
}
while (i<5);
*/

// Funciones

let notaUno = parseInt(prompt("Ingrese nota 1: "));
let notaDos = parseInt(prompt("Ingrese nota 2: "));
/*
//declaración
function promedio(nota1, nota2){
    let promedio = (nota1 + nota2)/2;
    console.log(promedio);

    return promedio;
}

function promedio2(){
    let notaUno = parseInt(prompt("Ingrese nota 1: "));
    let notaDos = parseInt(prompt("Ingrese nota 2: "));
    
    let promedio = (notaUno + notaDos)/2;
    console.log(promedio);

    return promedio;

}

//llamado

console.log(promedio(4, 9));
console.log(promedio(notaUno, 8));

let promedioFinal = promedio(notaUno, notaDos);

console.log(promedioFinal);

//console.log(promedio2());

//if (promedio(notaUno, notaDos)>7){}

//Resumida

function promedioR(nota1, nota2){
    return (nota1 + nota2)/2 ;
}

console.log(promedioR(notaUno, notaDos));



let promedioR = function (nota1, nota2){
    return (nota1 + nota2)/2 ;
}

console.log(promedioR(notaUno, notaDos));
*/

// arrow function

let promedioR = nota1 => nota1*2;

let promedioR2 = (notaUno, notaDos) => (notaUno + notaDos)/2;

//simplificado

function (nota1, nota2){
    return (nota1 + nota2)/2 ;
}

(nota1, nota2) => {return nota1 + nota2}

(nota1, nota2) => nota1 + nota2

nota1, nota2 => nota1 + nota2



