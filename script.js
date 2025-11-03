let display = document.querySelector(".display");
let oneButton = document.querySelector(".one");

//functions to do the operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

//var to store the numbers and operator
let firstNum = 0;
let secondNum = 0;
let operator = "";

//function handles the operation, to be called by "=" or if a second operator is clicked after a second number.
function operate(op, fNum, sNum) {
    if ((op = "+")) {
        return add(fNum, sNum);
    } else if ((op = "-")) {
        return subtract(fNum, sNum);
    } else if ((op = "x")) {
        return multiply(fNum, sNum);
    } else if ((op = "÷")) {
        return divide(fNum, sNum);
    } else {
        return;
    }
}

let displayOutput = 0;

function displayText(sum) {
    display.innerText = sum;
}

oneButton.addEventListener("click", () => {
    displayOutput += 1;
    displayText(displayOutput);
});

//when showing on the display, only show the current number.
// get the operator to clear the screen ready for the second number (equals button to show the total.)
// Option to show a second small screen with a running total somewhere else.
