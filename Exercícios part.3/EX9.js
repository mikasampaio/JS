function information(name, value, firstCompra, typePayment) {
    if (firstCompra && typePayment) {
        if(value > 1000) {
            console.log("30% de desconto")
        } else if (value < 500) {
            console.log("20% de desconto")
        } else {
            console.log("25% de desconto")
        }
    }

    if (firstCompra && !typePayment) {
        if(value > 1000) {
            console.log("20% de desconto")
        } else if (value < 500) {
            console.log("10% de desconto")
        } else {
            console.log("15% de desconto")
        }
    }

    if (!firstCompra && typePayment) {
        if(value > 1000) {
            console.log("20% de desconto")
        } else if (value < 500) {
            console.log("10% de desconto")
        } else {
            console.log("15% de desconto")
        }
    }

    if (!firstCompra && !typePayment) {
        if(value > 1000) {
            console.log("10% de desconto")
        } else if (value < 500) {
            console.log("Sem desconto")
        } else {
            console.log("5% desconto")
        }
    }

}



/* Se o cliente recebeu desconto, imprima na tela um agradecimento pela
 compra, o valor total sem desconto, o valor total com desconto e a 
 porcentagem de desconto que ele recebeu.

Se o cliente não recebeu desconto, imprima na tela um agradecimento pela
 compra, o valor total da sua compra e um cupom de desconto. Esse cupom 
 deve ser um valor aleatório entre 10 e 20% para a próxima compra. */