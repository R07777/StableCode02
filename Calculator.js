let display = document.getElementById("display");

function append(value) {
    display.value += value;
}

function operation(op) {
    display.value += " " + op + " ";
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    display.value = eval(display.value.replace("×", "*"));
}