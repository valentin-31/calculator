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
    
    if(secondNumber == 0) {
        return "Cant divide by zero :P"
    } else {
        division = firstNumber / secondNumber;
        return division;
    } 
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
let displayArray = [];
let operatorArray = [];
let firstTermArray = [];
let secondTermArray = [];
let resultArray = [];

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
        // check if the operatorArray is empty, if true means that no calculation had taken place
        if(operatorArray.length == 0){
            firstTermArray.push(...displayArray);
            displayArray.length = 0;
            operatorArray = operator.value
            display.textContent = operatorArray;
        }else if(operatorArray.length >= 1){
            // do the current calculation 
            secondTermArray.push(...displayArray);
            resultArray = operate(firstTermArray.join(""), secondTermArray.join(""), operatorArray);
            display.textContent = resultArray;

            // clear previous values from the arrays
            firstTermArray.length = 0;
            secondTermArray.length = 0;
            operatorArray.length = 0;

            // the result of the previous operation is the new firstTerm
            firstTermArray.push(resultArray);
            displayArray.length = 0;
            operatorArray = operator.value
            display.textContent = operatorArray;
        }
    })
})

const equal = document.querySelector(".equalButton");
equal.addEventListener("click", () => {
    secondTermArray.push(...displayArray);
    displayArray.length = 0;
    resultArray = operate(firstTermArray.join(""), secondTermArray.join(""), operatorArray);
    display.textContent = resultArray;
})

// when  is clicked call the operate function


const clear = document.querySelector(".clearButton");

// clear all the arrays data

clear.addEventListener("click", () => {
    display.textContent = "0"
    firstTermArray.length = 0;
    secondTermArray.length = 0;
    operatorArray.length = 0;
    displayArray.length = 0;
    resultArray.length = 0;
})