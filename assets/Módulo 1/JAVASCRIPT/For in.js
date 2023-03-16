//propriedade do objeto

const student = {
    name: "Caio",
    age: 18,
    genre: "male"
}

for(let property in student) {
    console.log(property)
} /* Result: name, age, genre */

for(let property in student) {
    console.log(student [property])
} /* Resulte: Caio, 26, male */

for(let property in student) {
    console.log(`${property}:${student[property]}`)
}


console.log(student.name)
//OU
console.log(student["name"])