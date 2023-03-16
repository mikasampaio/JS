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

const listVipOrNot = person.map((people) => {
    let listVipOrNot
    if (people.name && people.vip === true) {
        listVipOrNot = "Black"
    } else {
        listVipOrNot = "Green"
    }

    const peopleResult = {
        name: people.name,
        vip: people.vip,
        Sector: listVipOrNot
    }

    return peopleResult
})

console.log(listVipOrNot)


/* -------------------------------- */

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

const newArray = students.map((student) => {
    if (student.testGrade >= 7) {
        console.log(`O aluno ${student.name}, finalResult: ${student.testGrade}, aprovado`)
    } else {
        console.log(`O aluno ${student.name}, finalResult: ${student.testGrade}, reprovado`)
    }

    return student

})

const newArrayTwo = students.map((student) => {
    let aprovadoOrNot
    if (student.testGrade >= 7) {
        aprovadoOrNot = "Aprovado"
    } else {
        aprovadoOrNot = "Reprovado"
    }

    const students = {
        name: student.name,
        finalResult: aprovadoOrNot
    }

    return students
})

console.log(newArrayTwo)



