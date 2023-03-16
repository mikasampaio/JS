const firstPerson = "Maria"
const seccondPerson = "João"

console.log(firstPerson == seccondPerson)
// -> IGUAL, ele compara o valor, mas não compara o tipo do valor

console.log(firstPerson === seccondPerson)
// -> TOTALMENTE IGUAL, ele compara, mas ele compara se são do mesmo tipo
// -> Sempre utilizar esta ferramenta

console.log(firstPerson != seccondPerson)
// -> Diferente, ele compara o valor, mas não compara o tipo do valor

console.log(firstPerson !== seccondPerson)
// -> TOTALMENTE DIFERENTE, ele verifica se o valor é diferente, mas ele verifica o tipo
// -> Sempre utilizar esta ferramenta

const firstNumber = 10
const seccondNumber = 20

console.log(firstNumber > seccondPerson)
// FALSE, pois 10 não é maior que 20

console.log(firstNumber >= seccondPerson)
//FALSE, pois 10 não é maior que 20 e não é igual a 20

console.log(firstNumber < seccondPerson)
//TRUE, o 10 é menor que 20

console.log(firstNumber <= seccondPerson)
//TRUE, o 10 é menor e igual a 20