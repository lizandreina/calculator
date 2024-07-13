let result = 0;

function sum(first, second) {
    let number = first + second;
    result = Math.round(number * 10) / 10;
    return result;
}

function substract(first, second) {
    let number = first - second;
    result = Math.round(number * 10) / 10;
    return result;
}

function multiply(first, second) {
    let number = first * second;
    result = Math.round(number * 10) / 10;
    return result;
}

function divide(first, second) {
    let number = first / second;
    result = Math.round(number * 10) / 10;
    return result;
}

let first = 0;
let second = 0;
let operator = 0;

function operate(operator, one, two){
    if (operator === 'plus') {
        sum(one, two);
    } else if (operator === 'minus') {
        substract(one, two);
    } else if (operator === 'multiply') {
        multiply(one, two);
    } else if (operator === 'divide') {
        divide(one, two);
    }
}

let display = [];

const dot = document.querySelector('.dot');
const screen = document.querySelector('.display');
const digits = document.querySelectorAll('.digit');
let clickEvent = new Event('click');

digits.forEach((button) => {
    button.addEventListener("click", (e) => {
        display.push(e.target.innerText);
        if (display.length > 9) {
            digits.disabled = true;
        }
        if (display.includes('.')) {
            dot.disabled = true;
        }
        if (logged === 0) {
            first = display.join('');
            if (display === '.') {
                first = 0.;
            }
            first = Number(first);
            second = first;
            result = first;
            screen.textContent = result;
        } else if (logged === 1) {
            second = display.join('');
            second = Number(second);
            result = second;
            screen.textContent = result;
            if (operator === 'divide' && second === 0) {
                assignment.dispatchEvent(clickEvent);
            }
        }
    })
});

const clear = document.querySelector('.AC');
clear.addEventListener('click', () => {
    dot.disabled = false;
    first = 0;
    second = 0;
    logged = 0;
    display = [];
    result = 0;
    screen.textContent = 0;
  });

const sign = document.querySelector('.sign');
sign.addEventListener('click', () => {
    result *= -1;
    screen.textContent = result;
    if (logged === 0) {
        first = result;
        second = first;
    } else if (logged === 1) {
        second = result;
    }
})

const percentage = document.querySelector('.percentage');
percentage.addEventListener('click', () => {
    result *= 0.01;
    screen.textContent = result;
    if (logged === 0) {
        first = result;
        second = first;
    } else if (logged === 1) {
        second = result;
    }
})

let logged = 0;

function operateWithSign(e) {
    if (logged === 0) {
        logged++
    } else if (logged === 1) {
    operate(operator, first, second);
    screen.textContent = result;
    first = result;
    second = first;
    }
    operator = e.target.className;
    display = [];
    dot.disabled = false;
}

let plus = document.querySelector('.plus');
plus.addEventListener('click', operateWithSign);

let minus = document.querySelector('.minus');
minus.addEventListener('click', operateWithSign);

let multi = document.querySelector('.multiply');
multi.addEventListener('click', operateWithSign);

let div = document.querySelector('.divide');
div.addEventListener('click', operateWithSign);

const assignment = document.querySelector('.equal');
assignment.addEventListener('click', () => {
    if (operator === 'divide' && second === 0) {
        screen.textContent = 'NaN';
    } else {
        operate(operator, first, second);
        screen.textContent = result;
    }
    first = result;
    if (!Number.isInteger(first)) {
        dot.disabled = true;
    }
    second = first;
    logged = 0;
    display = [];
});