/* Os parâmetros da function somente existe dentro,
não adianta dar console.log externo, pois não irá funcionar */

/* Sem o RETURN a FUNCTION é vazia. */

function sum(number1, number2){
    return number1 + number2
}

/* OU */

function sum(number1, number2, number3){
    const result = number1 + number2 + number3
    return result
}

const firstNumber = 10
const seccondNumber = 20 
const threeNumber = 30

/* sum(firstNumber, seccondNumber)
Result = 30 */

console.log(`O primeiro número é ${firstNumber}`)
console.log(`O segundo número é ${seccondNumber}`)
console.log(`A soma dos dois números é ${sum(firstNumber,seccondNumber, threeNumber )}`)

