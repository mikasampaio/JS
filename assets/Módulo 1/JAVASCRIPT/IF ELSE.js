//IF : se 
//ELSE : se não

if(true) { // -> Toda vez que for 'true', o IF irá executar o que estiver dentro.
    console.log('Entrei aqui')
}

if(false) { // -> Toda vez quer for 'false', o IF irá ignorar o que estiver dentro.
    console.log('entrei aqui')
}

//EXEMPLO

const age = 18

if(age >= 18) { // -> O terminal irá executar normalmente, mas se a idade for menor que 18, o terminar irá ignorá-lo.
    console.log('Maior de idade')
} 

const age1 = 17

if(age1 >= 18) { // -> Caso a pessoa não for maior de 18 anos, o terminal irá executar a frase que está no ELSE
    console.log('Maior de idade')
} else {
    console.log('Menor de idade')
}

// IMPORTANTE
// -> O ELSE "NÃO" é obrigatório
// -> O ELSE só pode ser utilizado junto com o IF
// -> NÃO pode escrever código entre o IF e o ELSE


