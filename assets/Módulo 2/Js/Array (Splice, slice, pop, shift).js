const students = ['João', 'Maria', 'Fernanda', 'Carla', 'Amanda']

/* Splice -> Permite retire itens do array, exatamente na posição que quer */
students.splice(1,2) /* -> Retira a 'Maria' (1) e quantos elementos quer tirar (2), retirando a "Fernanda" */
console.log(students)
/* Resposta: [ 'João', 'Carla', 'Amanda' ] */

/* OU */

students.splice(1,0, "Rodolfo") /* -> "Rodolfo" irá entrar no índice 1, não retira ninguém [0], e adiciona o nome da pessoa */
console.log(students)
/* Resposta: [ 'João', 'Rodolfo', 'Maria', 'Fernanda', 'Carla', 'Amanda' ] */

/* SLICE */
const newStudents = students.slice(1,3) /* -> Retira o primeiro elemento e para no elemento 3 */
console.log(newStudents)
/* Resposta: ['Maria', 'Fernanda'] */

/* POP */
students.pop() /* -> Retira o último elemento */
console.log(students)

/* SHIFT */
students.shift() /* ->Retira o primeiro elemento */
console.log(students)


