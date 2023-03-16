/*

? se 
: se não

*/

const rain = true 
const umbrela = rain ? 'levar guarda-chuva' : 'deixar guarda-chuva'
console.log(umbrela)
//Resposta: "Levar guarda-chuva", pois a variável 'rain' é verdadeira 

const rain2 = false 
const umbrela2 = rain2 ? 'levar guarda-chuva' : 'deixar guarda-chuva'
console.log(umbrela2)
//Resposta: "Deixar guarda-chuva", pois a variável 'rain2' é falso

//--------------------

const balance = true 
const isNotBlocked = true
const accountExist = true

const transfer = balance && isNotBlocked && accountExist ? 'TRANFERÊNCIA REALIZADA' : 'TRANFERÊNCIA NEGADA'
//Se todos forem verdadeiros, a conta será aprovada. Caso algum seja falso, a conta será reprovada.