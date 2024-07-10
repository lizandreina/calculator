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

let display = 0;
const screen = document.querySelector('.display');

let clicked = 0;
let keyboard = document.querySelector('.keyboard');

keyboard.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.className) {
    case 'digit cero':
        display = 0;
        screen.textContent = display;
        clicked++;
        if (clicked === 1) {
            first = 0;
        } else if (clicked === 2) {
            second = 0;
            clicked = 0;
        }
        break;
    case 'digit one':
        display = 1;
        screen.textContent = display;
        clicked++;
        if (clicked === 1) {
            first = 1;
        } else if (clicked === 2) {
            second = 1;
            clicked = 0;
        }
        break;
    case 'digit two':
        display = 2;
        screen.textContent = display;
        clicked++;
        if (clicked === 1) {
            first = 2;
        } else if (clicked === 2) {
            second = 2;
            clicked = 0;
        }
        break;
    case 'digit three':
        display = 3;
        screen.textContent = display;
        clicked++;
        if (clicked === 1) {
            first = 3;
        } else if (clicked === 2) {
            second = 3;
            clicked = 0;
        }
        break;
    case 'digit four':
        display = 4;
        screen.textContent = display;
        clicked++;
        if (clicked === 1) {
            first = 4;
        } else if (clicked === 2) {
            second = 4;
            clicked = 0;
        }
        break;
    case 'digit five':
        display = 5;
        screen.textContent = display;
        clicked++;
        if (clicked === 1) {
            first = 5;
        } else if (clicked === 2) {
            second = 5;
            clicked = 0;
        }
        break;
    case 'digit six':
        display = 6;
        screen.textContent = display;
        clicked++;
        if (clicked === 1) {
            first = 6;
        } else if (clicked === 2) {
            second = 6;
            clicked = 0;
        }
        break;
    case 'digit seven':
        display = 7;
        screen.textContent = display;
        clicked++;
        if (clicked === 1) {
            first = 7;
        } else if (clicked === 2) {
            second = 7;
            clicked = 0;
        }
        break;
    case 'digit eight':
        display = 8;
        screen.textContent = display;
        clicked++;
        if (clicked === 1) {
            first = 8;
        } else if (clicked === 2) {
            second = 8;
            clicked = 0;
        }
        break;
    case 'digit nine':
        display = 9;
        screen.textContent = display;
        clicked++;
        if (clicked === 1) {
            first = 9;
        } else if (clicked === 2) {
            second = 9;
            clicked = 0;
        }
        break;
    case 'symbol AC':
        first = 0;
        second = 0;
        display = 0;
        screen.textContent = display;
        break;
    case 'symbol plus':
        operator = 'plus';
        break;
    case 'symbol minus':
        operator = 'minus';
        break;
    case 'symbol multiply':
        operator = 'multiply';
        break;
    case 'symbol divide':
        operator = 'divide';
        break;
    case 'symbol equal':
        operate(operator, first, second);
        screen.textContent = display;
        break;
    }
});