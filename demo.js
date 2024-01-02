variables

var numero = 123;

var nombre = "Alejandro";

var Var = 23;

operadores

var resultado = 2 + 7;

var resultadologico = (100 > 200) && (3 >= 3);

metodos

var nombre = "Alejo";

Funciones

function sumar(a,b) {
var suma = a + b;
return suma;
}
console.log(sumar(8,9));

condicionales

var edad = 15;
if(edad>18) {
console.log("soy mayor de edad");
} else {
console.log("soy menor de edad");
}


function dominioDelPais(dominio){
    if(dominio==="co"){
        console.log ("el pais es colombia");
    }else if (dominio==="br"){
        console.log("el pais es brasil");
    }else{
        console.log("el pais es argentina");
    } 
}

dominioDelPais("br");
//for

function encontrarVocalA (string){
    for (var i = 0; i < string.length; i++){
        if(string[i] === "a"){
            return "Encontramos la vocal a"
        }
    }
     return "El string no tiene ninguna letra a"
}
console.log(encontrarVocalA("hola"))

//while
var contador = 1;
  while(contador < 6) {
    console.log( "contador es: ", contador);
    contador++;
}


// for
function encontrarVocalA(string){
    for(var i=0; i < string.length; i++){
        if(string[i] === "a"){
            return "Encontramos la vocal a"
        }
    }
     return "El string no tiene ninguna letra a"
}
    
console.log(encontrarVocalA("holo"))

//while

var contador = 1;
while(contador < 6) {
    console.log("contador es: "+ contador);
    contador++;
}
// dowhile

 var count = 1;
 do {
    console.log("count es: " + count);
    count++;
 }
 while(count < 6)

 //switch
function diaSemana(dia) {
    switch (dia) {
        case "Lunes":
            console.log("Hoy es lunes");
            break;
        case "Martes":
            console.log("Hoy es Martes");
            break;
        case "Miercoles":
            console.log("Hoy es Miercoles");
            break;
        case "Jueves":
            console.log("Hoy es Jueves");
            break;
        case "Viernes":
            console.log("Hoy es Viernes");
            break;
        default:
            console.log("El dia no es valido");
    }
}

 diaSemana("Miercoles")

 var comidas = ["Pizza", "Hamburguesa", "Pastas", "Lasagna"];
 comidas.push("Sandwich", "Empanadas");
 console.log(comidas);

 var comidas = ["Pizza", "Hamburguesa", "Pastas", "Lasagna"];
 comidas.pop();
 console.log(comidas);

var comidas = ["Pizza", "Hamburguesa", "Pastas", "Lasagna"];
comidas.unshift("Hot dog")
console.log(comidas);

var comidas = ["Hot dog", "Pizza", "Hamburguesa", "Pastas", "Lasagna"];
comidas.shift();
console.log(comidas);

var autos = ["Ford", "Chevrolet", "Toyota", "Tesla"];
function mostrarNombres(elemento) {
    console.log(elemento);
}
autos.forEach(mostrarNombres);

var numeros = [2, 3, 4, 5];
function multiplicar(elemento) {
    return elemento * 3;
}
var triple = numeros.map(multiplicar)
console.log(triple)

var numeros = [1,2,3,4,5,6,7,8,9];
function sumatoria (acc, elemento) {
    return acc + elemento;
}
var suma = numeros.reduce(sumatoria)
    

console.log(suma);

function saludo(nombre,apellido) {
    console.log(arguments[0])
}
saludo("Auri", "Sandoval")

// Objetos

var usuario = {
    nombre: "Alejo",
    password: "hola123",
    edad: 26,
    online: true,
    amigos: ["Maria", "Jose", "Luis"]
};
console.log(usuario);

// dot notation
console.log(usuario.nombre);

console.log(usuario.edad);

// bracket notation
console.log(usuario["amigos"]);
console.log(usuario["online"]);

//asignar y modificar

usuario.pais = "Colombia";
usuario["identificacion"] = 41276073;
usuario["telefono"] = 4250340;

usuario.pais = "Argentina";
usuario["pais"] = "Uruguay";

var profesion = "Developer";

usuario.profesion = profesion;
usuario["profesion"] = profesion;

// eliminar propiedad
delete usuario["profesion"];

usuario.decirHola = function(name) {
    return "Hola!" + name;
}
console.log(usuario.decirHola("Lucas"));

//hasOwnProperty

console.log(usuario.hasOwnProperty("pais"));

console.log(Object.values(usuario));

console.log(usuario.amigos.length);

//bucle for...in

for(var clave in usuario){
    console.log(usuario[clave]);
}

// this

usuario.decirHola = function() {
    return "Hola!" + this.nombre + "tienes " + this.edad;
}
console.log(usuario.decirHola());

// CLASES

// function Gato(nombre, edad, dueno, color) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.dueno = dueno;
//     this.color = color;
//     this.maullar = function() {
//         return "Mi nombre es " + this.nombre + "...Meow!"
//     }
// }
// // prototype
// Gato.prototype.decirEdad = function(){
//     return this.edad;
// }
// Gato.prototype.color = function(color){
//     this.color = color;
// }
// console.log(gato1.color("negro"));
// console.log(gato1);

// // var gato1 = new Gato("michi", 10, "Alejo");
// // console.log(gato1.decirEdad());

// // var gato2 = new Gato("canela", 3);

// console.log(gato1);
// console.log(gato2); 

// console.log(gato1.maullar());

//HERENCIA
class Animal {
    constructor(nombre, raza, filum) {
        this.nombre = nombre;
        this. raza = raza;
        this.filum = filum;
        this.ladrar = function (){
            console.log("guau!");
        }
    }
}

class Perro extends Animal {
    constructor(nombre, raza, color) {
        super (nombre);
        this.color = color;
        this.raza = raza;
    }
}

var perrito1 = new Perro("Firulais", "Dalmata", "blanco")
console.log(perrito1); 

perrito1.ladrar();
// var animal1 = this.Animal("firulais");
