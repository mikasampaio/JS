//Faça um programa onde ele leia 4 números. 
//Em cada caso, ele deve retornar a mensagem condizente: 
//- Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES 
//- Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. 
//Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.

const firstNumber = 10
const seccondNumber = 20
const thirdNumber = 37
const fourthNumber = 40

if(firstNumber % 2 === 0 && seccondNumber % 2 === 0 && thirdNumber % 2 === 0 && fourthNumber % 2 === 0) {
    console.log("Todos os números são pares")
} else if(firstNumber % 2 !== 0 && seccondNumber % 2 !== 0 && thirdNumber % 2 !== 0 && fourthNumber % 2 !== 0) {
console.log("Todos os números são ímpares")
} else {
    console.log("Há ímpares e pares")
}