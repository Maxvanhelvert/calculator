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

    if (op == "+") {
        console.log("adding up");
        return add(numA, numB);
    } else if (op == "-") {
        console.log("taking away");
        return subtract(numA, numB);
    } else if (op == "x") {
        console.log("multiplying");
        return multiply(numA, numB);
    } else if (op == "÷") {
        console.log("dividing");
        return divide(numA, numB);
    } else {
        return;
    }
}

function displayText(output) {
    display.textContent = output;
}

// if you enter =, run "operate"
// if you enter an operator and the operator var is empty, add operator, else run "operate"
// if you add a number and firstNum is empty, add it there, else add it to secondNum.
function getButtonInput(value) {
    if (value === "C") {
        console.log("Clearing");
        fNum = "";
        sNum = "";
        operator = "";
        displayText("clear");
    } else if (value === "=") {
        console.log("getting result");
        total = operate(operator, fNum, sNum);
        displayText(total);
        fNum = total;
        sNum = "";
        operator = "";
    } else if (
        (value === "+") |
        (value === "-") |
        (value === "x") |
        (value === "÷")
    ) {
        if (operator === "") {
            console.log("operator is " + value);
            operator = value;
            displayText(operator);
        } else {
            console.log("getting result after second operator");
            total = operate(operator, fNum, sNum);
            displayText(total);
            fNum = total;
            sNum = "";
            operator = value;
        }
    } else if (operator === "") {
        console.log("adding to first number");
        fNum += value;
        displayText(fNum);
    } else {
        console.log("getting second number");
        sNum += value;
        displayText(sNum);
    }
}

anyButton.forEach((button) => {
    button.addEventListener("click", () => {
        let value = button.textContent;
        console.log(value + " clicked");
        getButtonInput(value);
    });
});

//when showing on the display, only show the current number.
// get the operator to clear the screen ready for the second number (equals button to show the total.)
// Option to show a second small screen with a running total somewhere else.
