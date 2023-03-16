/* Push, length, sort e delete */

const students = ['João', 'Maria', 'Amanda', 'Pedro']

/* Push -> Adicionar novos itens no array */
students.push('Rodolfo')
students.push('Rodrigo')
console.log(students)
/* Resposta: ['João', 'Maria', 'Amanda', 'Pedro', 'Rodolfo', 'Rodrigo'] */

/* Length -> Tamanho/quantidade do array */
console.log(students.length)

/* Sort -> Organiza o array por ordem alfabética */
console.log(students.sort())
/* Resposta: [ 'Amanda', 'João', 'Maria', 'Pedro', 'Rodolfo', 'Rodrigo' ] */

/* Delete -> [] */
delete (students[0])
console.log(students[0])
/* Resposta: Eliminou o João */

