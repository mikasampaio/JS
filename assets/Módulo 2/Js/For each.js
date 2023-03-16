const students = [
    {name: "Mikaeli", age: 18, },
    {name: "Rodolfo", age: 43, },
    {name: "Gabriela", age: 46, },
    {name: "Amanda", age: 36, },
    {name: "Rafaela", age: 15, },
    {name: "Jessica", age: 19, },
    {name: "Duda", age: 18, },
    {name: "Lucas", age: 34, }
]

students.forEach( (student, index) => {
    console.log(`O aluno chama-se ${student.name}, tem ${student.age} anos e está na posição ${index} do array`)
}
)

let studentAge = 0

 students.forEach( (student, index) => {
    studentAge = studentAge + student.age
}
)

const ageMédia = studentAge / students.length
console.log(`A idade média dos alunos é ${ageMédia.toFixed(0)}`) 