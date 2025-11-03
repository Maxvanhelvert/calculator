let display = document.querySelector(".display");

let anyButton = document.querySelectorAll("button");

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
let fNum = "";
let sNum = "";
let operator = "";
let total = "";

//function handles the operation, to be called by "=" or if a second operator is clicked after a second number.
function operate(op, fNum, sNum) {
    let numA = Number(fNum);
    let numB = Number(sNum);

    if ((op = "+")) {
        return add(numA, numB);
    } else if ((op = "-")) {
        return subtract(numA, numB);
    } else if ((op = "x")) {
        return multiply(numA, numB);
    } else if ((op = "÷")) {
        return divide(numA, numB);
    } else {
        return;
    }
}

let displayOutput = "";

function displayText(output) {
    display.textContent = output;
}

// if you enter =, run "operate"
// if you enter an operator and the operator var is empty, add operator, else run "operate"
// if you add a number and firstNum is empty, add it there, else add it to secondNum.
function getButtonInput(value) {
    if (value === "=") {
        total = operate(operator, fNum, sNum);
        displayText(total);
        fNum = total;
        sNum = "";
        op = "";
    } else if (
        (value === "+") |
        (value === "-") |
        (value === "x") |
        (value === "÷")
    ) {
        if (operator === "") {
            displayText((operator = value));
        } else {
            total = operate(operator, fNum, sNum);
            displayText(total);
            fNum = total;
            sNum = "";
            op = "";
        }
    } else if (operator === "") {
        fNum += value;
        displayText(fNum);
    } else {
        sNum += value;
        displayText(sNum);
    }
}

anyButton.forEach((button) => {
    button.addEventListener("click", () => {
        let value = button.textContent;
        getButtonInput(value);
    });
});

//when showing on the display, only show the current number.
// get the operator to clear the screen ready for the second number (equals button to show the total.)
// Option to show a second small screen with a running total somewhere else.
