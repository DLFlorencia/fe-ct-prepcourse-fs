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

 