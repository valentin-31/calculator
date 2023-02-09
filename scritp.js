// Basic functions 

function add(firstNumber, secondNumber){
    let sum = 0;
    sum = firstNumber + secondNumber;

    display.textContent = sum;
}

function subtract(firstNumber, secondNumber){
    let rest;
    rest = firstNumber - secondNumber;
    
    display.textContent = rest;
}

function multiply(firstNumber, secondNumber){
    let multi;
    multi = firstNumber * secondNumber;

    display.textContent = multi;
}

function divide(firstNumber, secondNumber){
    let division;
    division = firstNumber / secondNumber;
    
    display.textContent = division;
}

// We take an operator and two numbers, then call the needed function

function operate(firstNumber, secondNumber, operator){
    
    if(operator == "+") {
        return add(+firstNumber, +secondNumber);
    } else if(operator == "-") {
        return subtract(+firstNumber, +secondNumber);
    } else if(operator == "*"){
        return multiply(+firstNumber, +secondNumber);
    } else if(operator == "/"){
        return divide(+firstNumber, +secondNumber);
    }
}

// event listeners and functionality of the display
const display = document.querySelector(".display");

// assignment arrays
let displayArray = []
let operatorArray = []
let firstTermArray = []
let secondTermArray = []

const numbers = document.querySelectorAll(".numberButton");
numbers.forEach(number => {
    number.addEventListener("click", () => {
        displayArray.push(number.value);
        display.textContent = displayArray.join("");
    })
});

const operators = document.querySelectorAll(".operatorButton");
operators.forEach(operator => {
    operator.addEventListener("click", () => {
        firstTermArray.push(...displayArray);
        displayArray.length = 0;
        operatorArray = operator.value
        display.textContent = operatorArray;
    })
})

const equal = document.querySelector(".equalButton");
equal.addEventListener("click", () => {
    secondTermArray.push(...displayArray);
    displayArray.length = 0;
    
})

// when  is clicked call the operate function

equal.addEventListener("click", () => {
    operate(firstTermArray.join(""), secondTermArray.join(""), operatorArray);
    
})

const clear = document.querySelector(".clearButton");

// clear all the arrays data

clear.addEventListener("click", () => {
    display.textContent = "0"
    firstTermArray.length = 0;
    secondTermArray.length = 0;
    operatorArray.length = 0;
})

// regular expression for checking if the display data is a number
let regExp = /\d+/g;
