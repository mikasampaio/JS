//Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor

const firstNumber = 50
const seccondNumber = 10
const thirdNumber = 30

if(firstNumber > seccondNumber && firstNumber > thirdNumber) {
    console.log("O primeiro número é maior")
} else if (seccondNumber > thirdNumber) {
    console.log("O segundo número é maior")
} else {
    console.log("O terceiro número é maior")
}

if(firstNumber < seccondNumber && firstNumber < thirdNumber) {
    console.log("O primeiro número é o menor")
} else if (seccondNumber < thirdNumber) {
    console.log("O segundo número é o menor")
} else {
    console.log("O terceiro é o menor")
}
