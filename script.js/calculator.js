
const inputField = document.getElementById('input-field')


function inputButton(number) { 
     inputField.value;
     inputField.value += number;      
}

function allClear() {
    inputField.value = ''
}

function deleteNumber() {
    inputField.value = inputField.value.toString().slice(0,-1)
}

function calculateInput() {
    inputField.value = eval(inputField.value)
}
