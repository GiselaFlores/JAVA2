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

// declaracion

function promedio(){
    //sentencias
    console.log("hola funciones");
}

//retorna
function promedio2(nota1, nota2){
    let promedio = (nota1 + nota2)/2;
    console.log(promedio);
    document.write(promedio);

    return promedio;
}

//resumida
function promedio2b(nota1, nota2){
    return (nota1 + nota2)/2;
}

let notaUno = parseInt(prompt("Ingrese nota 1: "));
let notaDos = parseInt(prompt("Ingrese nota 2: "));

// llamado
promedio();
let notaFinal = promedio2(notaUno, notaDos);
console.log(notaFinal);

console.log(promedio2b(10, 5));
console.log(promedio2b(notaUno, 5));

//funciones anonimas

let prome = function(nota1){
    return nota1 + 10;
}

prome(5);

//arrow function

let flecha = nota1 => nota1 +10;

let promedioAf = (notaUno, notaDos) => (notaUno + notaDos)/2;

notaUno, notaDos => (notaUno + notaDos)/2;

//declarada
function factorial (n){
    let total=1;
    for(let i=1; i<=n; i++){
        total*=i;
    }

    return total;
}

let resultado= factorial(notaUno);
console.log("factorial: ", resultado);

let nombre = ["Laura", 45, true, "queso"];
nombre.forEach(obj =>{
    console.log(obj);
})

let objetoCasa = {
    ancho: 65,
    altura: 5,
    tipoDeTecho: ["madera", "chapa", "cemento"],
    tipoDePiso:["madera", "tierra", "cemento", "ceramica"],
    habitaciones: 5,
    antiguedad: 10,
    alarma: true,
    precio: function (){
        return this.ancho * this.altura;
    } ,
    seguridad(){return this.alarma ? "llamar a la policia" : "alarma funionando"}
}

console.log(objetoCasa.seguridad());

console.log(objetoCasa.tipoDePiso[3]);

objetoCasa.habitaciones = 3;
console.log(objetoCasa.habitaciones);

let letra = "hola";
let palabra = new String("hola");

class Animal {
    constructor(nombre, edad, peso, altura){
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
        this.altura = altura;
    }

    //metodos
    
}

let perro = new Animal("Odie", 5, "5kg", "60cm");
console.log({perro});
document.write(perro.nombre);

let gato = new Animal("Garfield", 10, "8kg", "30cm");
console.log({gato});
document.write(gato.nombre);

let otro = new Animal("Otro mas");
console.log({otro});


let nombre = "       Laura Andrea Lorena Del Campo";

console.log(nombre.length); 

console.log(nombre.charAt(12));

console.log(nombre[12]);

nombre.indexOf("o"); //devuelve posicion
nombre.indexOf("a", 5); //devuelve el primer a despues posicion 5

console.log(nombre.toUpperCase());
console.log(nombre.trim());


document.write(`<h1> Hola ${nombre.toUpperCase()}</h1>`);


let numeros = [1, 5, 52, -3, 12, 9, 2.3];

console.log(Math.max(5, 10)); 

console.log(Math.min(1, 5, 52, -3, 12)); 

console.log(Math.pow(numeros[1], 10)); 

let random = Math.random();
console.log(Math.round(random *= 1000));

console.log(Math.round(Math.sqrt(numeros[4])));

console.log(Math.sqrt(numeros[4]));

console.log(Math.trunc(numeros[6]));

// array


let nombre, apellido="perez";

const frutas = ["pera", "banana", "manzana"];
const verduras = ["papa", "tomate", "lechuga", "zanahoria"];

const legumbres = new Array("a", 56, 89, true);

for(i=0; i<verduras.length; i++){
    console.log(verduras[i].toUpperCase());
    document.write(`${verduras[i].toUpperCase()} <br>`);
}

verduras.forEach(verdu => {
    document.write(`${verdu.toUpperCase()} <br>`);
});

verduras.push("zapallo", "repollo");
verduras.pop();

verduras.unshift("zapallo", "repollo");
verduras.shift();

console.log({verduras});

const ventasVerduras = verduras.concat(frutas);
console.log({ventasVerduras});

let pos = ventasVerduras.indexOf("zanahoria");
console.log(pos);

let pos2 = ventasVerduras.lastIndexOf("zanahoria");
console.log(pos2);


let cortoVerdura = ventasVerduras.slice(2, 5);
console.log(cortoVerdura);

ventasVerduras.splice(2, 0, "naranja");
console.log({ventasVerduras});

ventasVerduras.map( fruta => document.write(`<h2>la fruta elegida es: ${fruta}</h2>`));
*/


const nodoPrincipal = document.getElementById("nodo");

const nodoPClass = document.getElementsByClassName("nodoPClass");

const nodoTag = document.getElementsByTagName("div");

const nodoName = document.getElementsByName("mundo");

const nodoComodin = document.querySelector("#nodo");

const nodoComodin2 = document.querySelectorAll(".nodoClass");

const verduras = ["papa", "tomate", "lechuga", "zanahoria"];

const ul = document.getElementByTagName("ul");

verduras.forEach(verdu => {
    
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent= verdu;

    li.appendChild(p);
    ul.appendChild(li);
    

})

<ul>
    <li>
        <p>
            sfmskfg
        </p>
    </li>
</ul>