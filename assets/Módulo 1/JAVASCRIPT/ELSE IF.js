// ELSE IF = mais se 

// IMPORTANTE 
// O ELSE IF deve ficar entre o IF e ELSE 
// É permitido utilizar vários ELSE IF 

//EXEMPLO 

const temperature = 40

if(temperature >=36 && temperature <=39) {
    console.log('A pessoa está saudável')
} else if (temperature > 39) {
    console.log('A pessoa está doente')
} else {
    console.log('A temperatura está baixa')
}
