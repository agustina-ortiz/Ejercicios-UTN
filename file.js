/* 1-Escribe un programa que sume dos números y muestre el resultado en la consola */

let numero1 = 3;
let numero2 = 7;
let suma = numero1 + numero2;
console.log(`La suma de ${numero1} y ${numero2} da como resultado ${suma}`);



/* 2-Crea una función que reciba dos números como parámetros y devuelva su suma */

function sumar(primerNumero, segundoNumero) {
    let cuenta = primerNumero + segundoNumero;
    console.log(`La suma entre ${primerNumero} y ${segundoNumero} da ${cuenta}`);
}
sumar(30, 70);



/* 3-Escribe un programa que determine si un número es par o impar. Muestra el resultado en
la consola. */

function parOImpar(suNumero) {
    if (suNumero % 2 === 0) {
        console.log(`${suNumero} es par`);
    } else
    console.log(`${suNumero} es impar`);
}
parOImpar(8);



/* 4-Crea una función que reciba una cadena de texto como parámetro y devuelva la cantidad
de caracteres que contiene. */

function contadorDeCaracteres(texto) {
    let cantidadCaracteres = texto.length;
    console.log(`${texto} tiene ${cantidadCaracteres} caracteres`);
}
contadorDeCaracteres("Buen dia")



/* 5-Escribe un programa que recorra los números del 1 al 20. Para cada número, muestra en
la consola "Fizz" si es divisible entre 3, "Buzz" si es divisible entre 5 y "FizzBuzz" si es
divisible entre ambos. Si no es divisible por ninguno, muestra el número. */

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

arrayNumeros.forEach(function(num){
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else {
        if (num % 3 === 0) {
            console.log("Fizz");
        } else {
            if (num % 5 === 0 ) {
                console.log("Buzz");
            } else {
                console.log(num);
            }
        }
    }
})



/* 6-Escribe un programa que calcule la suma de todos los números del 1 al 100 y muestre el
resultado en la consola. */

function sumandoElementos() {
    let contador = 0;
    for (let i = 1; i <= 100; i++) {
        contador += i;
    }
    console.log(contador);
}
sumandoElementos();



/* 7-Escribe un programa que recorra un array de números y muestre cada elemento en la
consola. */

const miArray = [10, 20, 30, 40, 50]

miArray.forEach(element => {
    console.log(element);
});



/* 8-Crea una función que tome un array de palabras como parámetro y devuelva la cantidad
total de caracteres en todas las palabras. */

const frutas = ["Kiwi", "Frutilla", "Frambuesa", "Melon"]

function totalDeCaracteres(arr) {
    arr.forEach(el => {
        console.log(`${el} tiene ${el.length} caracteres`);
    });
}
totalDeCaracteres(frutas);



/* 9-Escribe un programa que encuentre el elemento más grande en un array de números y lo
muestre en la consola. => Esto lo puedo trabajar con el método Math.max (leer al respecto) */

const arrayMayor = [2143, 6234, 4638, 2635, 2544, 7832, 4355, 7630]
console.log(Math.max(...arrayMayor));



/* 10-Dado un array de números crea una función que y devuelva un nuevo array con solo los
números pares. */

let arrayMezclado = [1, 32, 543, 74, 88, 345, 984, 1257, 569, 1000]

let arrayPares = arrayMezclado.filter(el => 
    el % 2 === 0
)
console.log(arrayPares);
