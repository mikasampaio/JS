/* A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, 
coletando dados sobre o salário e número de filhos. 
A prefeitura deseja saber: 
- média do salário da população;
 - média do número de filhos; - maior salário; 
 - O final da leitura de dados se dará com a entrada de um salário negativo. 
 - Faça isso usando uma função! */

const person = [
    {
        salary: 1500,
        numbersOfChildren: 1
    },

    {
        salary: 4000,
        numbersOfChildren: 3
    },

    {
        salary: 3500,
        numbersOfChildren: 4
    },

    {
        salary: 1000,
        numbersOfChildren: 1
    },

    {
        salary: 4500,
        numbersOfChildren: 2
    },

    {
        salary: -1500,
        numbersOfChildren: 0
    }
]

const informationPersons = (peopleInformation) => {


    let i = 0
    let salaryMedia = 0
    let childrenMedia = 0

    while (peopleInformation[i].salary > 0) {
        salaryMedia += peopleInformation[i].salary
        childrenMedia += peopleInformation[i].numbersOfChildren
        i++
    }

    console.log(`A média do salário é R$${(salaryMedia / i).toFixed(0)}`)
    console.log(`A média de filhos é ${(childrenMedia / i).toFixed(0)}`)

}

informationPersons(person)