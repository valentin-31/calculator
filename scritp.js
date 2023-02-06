// Basic functions 

function add(firstNumber, secondNumber){
    let sum = 0;
    sum = firstNumber + secondNumber;

    return sum;
}

function subtract(firstNumber, secondNumber){
    let rest;
    rest = firstNumber - secondNumber;
    
    return rest;
}

function multiply(firstNumber, secondNumber){
    let multi;
    multi = firstNumber * secondNumber;

    return multi;
}

function divide(firstNumber, secondNumber){
    let division;
    division = firstNumber / secondNumber;

    return division;
}

// We take an operator and two numbers, then call the needed function

function operate(firstNumber, operator, secondNumber){
    if(operator == "+") {
        return add(firstNumber, secondNumber);
    } else if(operator == "-") {
        return subtract(firstNumber,secondNumber);
    } else if(operator == "*"){
        return multiply(firstNumber,secondNumber);
    } else if(operator == "/"){
        return divide(firstNumber,secondNumber);
    }
}

// event listeners and functionality of the display
const display = document.querySelector(".display");



const numbers = document.querySelectorAll(".numberButton");
numbers.forEach(number => {
    number.addEventListener("click", () => {
        display.textContent = number.value;
    })
});

const operators = document.querySelectorAll(".operatorButton");
operators.forEach(operator => {
    operator.addEventListener("click", () => {
        display.textContent = operator.value;
    })
})

const equal = document.querySelector(".equalButton");
equal.addEventListener("click", () => {
    display.textContent = equal.value
})

const clear = document.querySelector(".clearButton");
clear.addEventListener("click", () => {
    display.textContent = result
})
