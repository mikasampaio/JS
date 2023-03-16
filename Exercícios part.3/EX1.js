//Escreva um programa onde, você chame uma função enviando um número, 
//a função deve imprime na tela os número de 1 até o número que você enviou

const number = (numberOne) => {
    for(let i = 0; i < numberOne; i++){
        console.log(i)
    }
}

number(30)