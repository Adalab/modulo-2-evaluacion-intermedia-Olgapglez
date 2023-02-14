'use strict';

/* Pasos a ejecutar

	1.Crear HTML y enlazar el JS
	2.Escribir mi HTML
	3.Cojo los elementos del HTML desde JS (añadir classes en HTML con "js-xxxx") 
	4.Evento sobre boton click
	5.Crear funcion y programar todo
*/

//constantes y variables

const inputNumber = document.querySelector(".js-inputNumber");
const inputNumberValue = inputNumber.value;
console.log (inputNumberValue);

const button = document.querySelector(".js-button");
const clue  = document.querySelector(".js-clue");
const attempts = document.querySelector(".js-attempts");
const randNumber = getRandomNumber (100);
console.log (randNumber);


//funciones

//Function random number
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

function handleClick() {
    if (inputNumberValue === randNumber) {
        clue.innerHTML = "Has ganado campeona!!!";
    } else if (inputNumberValue < randNumber) {
        clue.innerHTML = "Demasiado bajo.";
    } else if (inputNumberValue > randNumber) {
        clue.innerHTML = "Demasiado alto.";
    } else if (inputNumberValue <= 0) {
        clue.innerHTML = "El número debe estar entre 1 y 100";
    } else if (inputNumberValue > 100) {
        clue.innerHTML = "El número debe estar entre 1 y 100";
    }
}


//eventos
button.addEventListener ("click", handleClick);


