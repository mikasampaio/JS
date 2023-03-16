const calculate = (number1, number2, operation) => {

    switch (operation) {
        case "+":
            result = number1 + number2
            break;

        case "-":
            result = number1 - number2
            break;

        case "*":
            result = number1 * number2
            break;

        case "/":
            result = number1 / number2
            break;

        default:
            result = "undefined"
            break;
    }

    return result
}

console.log(calculate(2,4,"*"))