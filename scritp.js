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

function operate(operator, firstNumber, secondNumber){
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

function displayResult(){
    display.textContent = result;
    // falta la variable de result
}

const numbers = document.querySelectorAll(".numberButton")

numbers.forEach(element => {
    element.addEventListener("click", () => {
        display.textContent = "9876543210"
    })
});

const operators = document.querySelectorAll(".operatorButton")

const equalClear = document.querySelectorAll(".extraButton")