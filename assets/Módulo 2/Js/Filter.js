/* FILTER 
- Cria um novo array do original, mas simplificado */

const person = [
    { name: "Mikaeli", vip: true },
    { name: "Rodolfo", vip: false },
    { name: "Gabriela", vip: true },
    { name: "Amanda", vip: true },
    { name: "Rafaela", vip: false },
    { name: "Jessica", vip: true },
    { name: "Duda", vip: true },
    { name: "Lucas", vip: false }
]

const newVips = person.filter(personVip => {
    return personVip.vip
})

console.log(newVips)


const students = [
    { name: "Mikaeli", age: 18, testGrade: 4 },
    { name: "Rodolfo", age: 43, testGrade: 8 },
    { name: "Gabriela", age: 46, testGrade: 9 },
    { name: "Amanda", age: 36, testGrade: 0 },
    { name: "Rafaela", age: 15, testGrade: 6 },
    { name: "Jessica", age: 19, testGrade: 9 },
    { name: "Duda", age: 18, testGrade: 7 },
    { name: "Lucas", age: 34, testGrade: 10 }
]

const newStudents = students.filter( student => {
    return student.testGrade >= 7
})

console.log(newStudents)