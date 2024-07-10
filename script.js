function sum(first, second) {
    return first + second;
}

function substract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    return first / second;
}

let first = 0;
let second = 0;
let operator = 0;

function operate(operator, one, two){
    first = one;
    second = two;
    if (operator === '+') {
        sum(first, second);
    } else if (operator === '-') {
        substract(first, second);
    } else if (operator === '*') {
        multiply(first, second);
    } else if (operator === '/') {
        divide(first, second);
    }
}