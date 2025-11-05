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
        if (sNum === "0") {
            return "Divide by 0 not possible";
        } else {
            console.log("dividing");
            let div = divide(numA, numB);
            return div.toFixed(3);
        }
    } else {
        return;
    }
}

// function to display text on screen
function displayText(output) {
    display.textContent = output;
}

// function to handle button functioning
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
        fNum = "";
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
            fNum = "";
            sNum = "";
            operator = "";
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

// handles button input and passes button value to button input function.
anyButton.forEach((button) => {
    button.addEventListener("click", () => {
        let value = button.textContent;
        console.log(value + " clicked");
        getButtonInput(value);
    });
});
