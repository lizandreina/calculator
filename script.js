function sum(first, second) {
    display = first + second;
    return display;
}

function substract(first, second) {
    display = first - second;
    return display;
}

function multiply(first, second) {
    display = first * second;
    return display;
}

function divide(first, second) {
    display = first / second;
    return display;
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

const screen = document.querySelector('.display');
const digits = document.querySelectorAll('.digit');

digits.forEach((button) => {
    button.addEventListener("click", (e) => {
        display.push(e.target.innerText);
        if (display.length > 9) {
            digits.disabled = true;
        }
        if (logged === 0) {
            first = display.join('');
            screen.textContent = first;
            first = Number(first);
            second = 0;
        } else if (logged === 1) {
            second = display.join('');
            screen.textContent = second;
            second = Number(second);
        }
    })
});

const clear = document.querySelector('.AC');
clear.addEventListener('click', () => {
    first = 0;
    second = 0;
    logged = 0;
    display = [];
    screen.textContent = 0;
  });

let logged = 0;
let operators = document.querySelector('.operators');
operators.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.className) {
    case 'plus':
        if (logged === 0) {
        logged++
        } else if (logged === 1) {
        operate(operator, first, second);
        screen.textContent = display;
        first = display;
        second = 0;
        }
        operator = 'plus';
        display = [];
        break;
    case 'minus':
        if (logged === 0) {
        logged++
        } else if (logged === 1) {
        operate(operator, first, second);
        screen.textContent = display;
        first = display;
        second = 0;
        }
        operator = 'minus';
        display = [];
        break;
    case 'multiply':
        if (logged === 0) {
        logged++
        } else if (logged === 1) {
        operate(operator, first, second);
        screen.textContent = display;
        first = display;
        second = 0;
        }
        operator = 'multiply';
        display = [];
        break;
    case 'divide':
        if (logged === 0) {
        logged++
        } else if (logged === 1) {
        operate(operator, first, second);
        screen.textContent = display;
        first = display;
        second = 0;
        }
        operator = 'divide';
        display = [];
        break;
    }
});

const assignment = document.querySelector('.equal');
assignment.addEventListener('click', () => {
    operate(operator, first, second);
    screen.textContent = display;
    logged = 0;
});