const display = document.getElementById("display");

// let result

let isResultDisplayed = false;

// unils functions

const sum = (a, b) =>  a + b;
const sub = (a, b) => a - b
const divis = (a, b) => a / b
const mult = (a, b) => a * b

//function for arrange elem in input

function putInDisplay(index) {
    if(isResultDisplayed) {
        clearDisplay();
        isResultDisplayed = false;
    }
    display.value += index;
}

//function for clear input

function clearDisplay() {
    display.value = '';
}

//del last element

function backspace() {
    let myArr = display.value.split('').slice(0, -1).join('');
    display.value = myArr;
}

//calculating function

function calculate() {
    let res = '';

    if(display.value.includes('*')) {
        const arr = display.value.split('*');
        res = mult(arr[0], arr[1]);
        display.value = res;
    } else if (display.value.includes('/')) {
        const arr = display.value.split('/');
        if(arr[1] == '0') {
            isResultDisplayed = true;
            return display.value = '=^..^=';  
        }
        res = divis(arr[0], arr[1]);
        display.value = res;
    } else if (display.value.includes('-')) {
        const arr = display.value.split('-');
        res = sub(arr[0], arr[1]);
        display.value = res;
    } else if (display.value.includes('+')){
        const arr = display.value.split('+');
        res = sum(Number(arr[0]), Number(arr[1]));
        display.value = res;
    } else {
        return res;
    }

    return isResultDisplayed = true;
}
