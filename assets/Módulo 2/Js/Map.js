/* 
- Ele cria um novo array, a partir do array original.
- Cria um novo array, com a mesma quantidade itens do array antigo
- Aceita 3 parâmetros
    - Item do array
    - index
    - array completo
*/

const students = [
    {name: "Mikaeli", age: 18, },
    {name: "Rodolfo", age: 43, },
    {name: "Gabriela", age: 46, },
    {name: "Amanda", age: 36, },
    {name: "Rafaela", age: 15, },
    {name: "Jessica", age: 19, },
    {name: "Duda", age: 18, },
    {name: "Lucas", age: 34, }
];

const newArrayStudents = students.map ( (student) => {
    const NewNames = {
        name: student.name + ' da Silva',
        age: student.age - 5
    }

    return NewNames
})

console.log(students) /* ARRAY ORIGINAL */
console.log(newArrayStudents) /* ARRAY NOVO */

/* Resposta: [
  { name: 'Mikaeli da Silva', age: 13 },
  { name: 'Rodolfo da Silva', age: 38 },
  { name: 'Gabriela da Silva', age: 41 },
  { name: 'Amanda da Silva', age: 31 },
  { name: 'Rafaela da Silva', age: 10 },
  { name: 'Jessica da Silva', age: 14 },
  { name: 'Duda da Silva', age: 13 },
  { name: 'Lucas da Silva', age: 29 } */

/* ------------------------------------------ */

const number = [1,2,3,4,5]

const newArray = number.map ( (number) => {
    return number * 2 
})

console.log(number) /* -> ARRAY ORIGINAL */
console.log(newArray) /* -> ARRAY NOVO */
/* Resposta: [ 2, 4, 6, 8, 10 ] */

/* ------------------------------------------ */

const numberOne = [0,1,2,3,4,5]

const sum = number1 => number1 + 2
const double = number1 => number1 * 2

const newArrayNumber = numberOne.map(sum).map(double)
console.log(newArrayNumber)
/* Resposta: [ 4, 6, 8, 10, 12, 14 ]*/

/* Dinheiro */
const numberTwo = [2,3,4,5,6]
const doubleTwo = number1 => number1 * 2
const result = number1 => `R$ ${number1.toFixed(2)}`

const newArrayDinheiro = numberTwo.map(doubleTwo).map(result)
console.log(newArrayDinheiro)

/* Resposta: [ 'R$ 4.00', 'R$ 6.00', 'R$ 8.00', 'R$ 10.00', 'R$ 12.00' ] */

