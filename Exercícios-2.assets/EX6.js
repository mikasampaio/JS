//Faça um programa onde os jurados vão dar a explicação para cada nota dada. 
//São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

const ponctuation = 5

switch (ponctuation) {
    case 0:
        console.log("Nota péssima")
        break;

        case 5:
        console.log("Nota moderada")
        break;

        case 10:
        console.log("Nota excelente")
        break;

    default: 
    console.log("Pontuação não encontrada")
        break;
}
