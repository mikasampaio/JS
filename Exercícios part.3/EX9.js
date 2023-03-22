function information(name, value, firstCompra, typePayment) {

    if (firstCompra && typePayment) {

        if (value > 1000) {
            console.log("30% de desconto")
            console.log(`${name} agradecemos a sua preferência!, Valor total: R$${value}, Valor com desconto: R$${value - value * 0.3}, Desconto: 30%`)
        } else if (value < 500) {
            console.log("20% de desconto")
            console.log(`${name} agradecemos a sua preferência!, Valor total: R$${value}, Valor com desconto: R$${value - value * 0.2}, Desconto: 20%`)
        } else {
            console.log("25% de desconto")
            console.log(`${name} agradecemos a sua preferência!, Valor total: R$${value}, Valor com desconto: R$${value - value * 0.25}, Desconto: 25%`)
        }
    }

    if (firstCompra && !typePayment) {
        if (value > 1000) {
            console.log("20% de desconto")
            console.log(`${name} agradecemos a sua preferência!, Valor total: R$${value}, Valor com desconto: R$${value - value * 0.2}, Desconto: 20%`)

        } else if (value < 500) {
            console.log("10% de desconto")
            console.log(`${name} agradecemos a sua preferência!, Valor total: R$${value}, Valor com desconto: R$${value - value * 0.1}, Desconto: 10%`)

        } else {
            console.log("15% de desconto")
            console.log(`${name} agradecemos a sua preferência!, Valor total: R$${value}, Valor com desconto: R$${value - value * 0.15}, Desconto: 15%`)

        }
    }

    if (!firstCompra && typePayment) {
        if (value > 1000) {
            console.log("20% de desconto")
            console.log(`${name} agradecemos a sua preferência!, Valor total: R$${value}, Valor com desconto: R$${value - value * 0.2}, Desconto: 20%`)

        } else if (value < 500) {
            console.log("10% de desconto")
            console.log(`${name} agradecemos a sua preferência!, Valor total: R$${value}, Valor com desconto: R$${value - value * 0.1}, Desconto: 10%`)

        } else {
            console.log("15% de desconto")
            console.log(`${name} agradecemos a sua preferência!, Valor total: R$${value}, Valor com desconto: R$${value - value * 0.15}, Desconto: 15%`)

        }
    }

    if (!firstCompra && !typePayment) {

        if (value > 1000) {
            console.log("10% de desconto")
            console.log(`${name} agradecemos a sua preferência!, Valor total: R$${value}, Valor com desconto: R$${value - value * 0.1}, Desconto: 10%`)

        } else if (value < 500) {
            console.log("Sem desconto")
            console.log(`${name} agradecemos a sua preferência!, Valor total: R$${value}, Cupom de desconto: ${(Math.random() * (20 - 10) + 10).toFixed(0)}%`)

        } else {
            console.log("5% desconto")
            console.log(`${name} agradecemos a sua preferência!, Valor total: R$${value}, Valor com desconto: R$${value - value * 0.05}, Desconto: 5%`)
        }
    }

}

information("Mika", 1200, true, true)
information("Mika", 400, true, true)
information("Mika", 700, true, true)

information("Mika", 1200, true, false)
information("Mika", 400, true, false)
information("Mika", 700, true, false)

information("Mika", 1200, false, true)
information("Mika", 400, false, true)
information("Mika", 700, false, true)


information("Mika", 1200, false, false)
information("Mika", 400, false, false)
information("Mika", 700, false, false)




/* Se o cliente recebeu desconto, imprima na tela um agradecimento pela
 compra, o valor total sem desconto, o valor total com desconto e a 
 porcentagem de desconto que ele recebeu.

Se o cliente não recebeu desconto, imprima na tela um agradecimento pela
 compra, o valor total da sua compra e um cupom de desconto. Esse cupom 
 deve ser um valor aleatório entre 10 e 20% para a próxima compra. */