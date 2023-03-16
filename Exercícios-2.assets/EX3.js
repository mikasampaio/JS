// Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. 
// Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. 
// Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

const number = Math.floor(Math.random() * (10 - 1) + 1)

const awarded = Math.floor(Math.random() * (10 - 1) + 1)

if(number === awarded) {
    console.log("Você ganhou")
} else {
    console.log("Você não ganhou")
}