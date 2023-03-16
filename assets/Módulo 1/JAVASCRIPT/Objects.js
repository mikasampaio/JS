const person = {
    name: "Mikaeli",
    age: 18,
    sex: "female",
    height: 1.6 /* --> Não coloca vírgula no último item */
}

console.log(person)

/* OU */

console.log(person.height) 
/* Result: 1.6, ou seja]] o "." específica a informação que você quer */

/* OU */

const person1 = {
    name: "Mikaeli", 
    age: 18,
    address: {
        street: "Cohab2",
        number: 144
    }
}

console.log(person1.address.number) /* Result: 144 */