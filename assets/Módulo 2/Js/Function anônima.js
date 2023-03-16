function sum(number1, number2){
    const result = number1 + number2

    return result
}

const firstNumber = 10
const seccondNumber = 20

const result = sum(firstNumber, seccondNumber)

console.log(`A soma dos dois números é ${result}`)

/* OU */

/* Armazenar a função dentro de uma variável */
const sum = function (number1, number2){
    const result = number1 + number2

    return result
}

