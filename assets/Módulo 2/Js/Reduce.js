/* 
 - Retorna valor -> (podendo ser array, objeto, string, number, etc)
 - 4 parâmetros
    - Acumulador
    - Valor atual 
    - Index
    - Array completo
*/

const list = [1,2,3,4]

const listNumber = list.reduce ((acc, valueAtual) => {
    return acc + valueAtual
} ,0)

console.log(listNumber)