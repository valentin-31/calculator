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

// assignment arrays
let operatorArray = []
let firstTermArray = []
let secondTermArray = []

// regular expression for checking if the display data is a number
let regExp = /\d+/g;

// get the number or operator in the display and store in an array
function checkDisplay(){
    if(display.textContent.match(regExp) && operatorArray.length == 0){       // check if it is number and no operator has been assigned, if true goes to the first array
        firstTermArray.push(display.textContent);    
    } else if (!display.textContent.match(regExp)) {    // if it isn´t must be an operator
        operatorArray.push(display.textContent);
    } else if(display.textContent.match(regExp) ) {  
        secondTermArray.push(display.textContent);   // if it is a number and an operator has been selected
    }                                                  // the number goes to the second array
}

window.addEventListener("click",() => {
    checkDisplay();
})
   