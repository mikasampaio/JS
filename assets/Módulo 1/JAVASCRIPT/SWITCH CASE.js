const temperature = 30

switch (temperature) {
    case 30: 
        console.log('A pessoa está com temperatura muito baixa')
        break;

        case 34: 
        console.log('A pessoa está com temperatura baixa')
        break;

        case 36: 
        console.log('A pessoa está com temperatura ideal')
        break;

    default:
        console.log('Temperatura não encontrada')
        break;
}

//Default é quando não tem algum tipo de variável acima especificado e então ele avisa que não foi encontrado
