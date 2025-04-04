document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('findMaxBtn').addEventListener('click', findMaxNumber);
});

function findMaxNumber() {
    document.getElementById('error1').textContent = '';
    document.getElementById('error2').textContent = '';
    document.getElementById('error3').textContent = '';
    document.getElementById('result1').textContent = '';

    const num1Str = document.getElementById('num1').value;
    const num2Str = document.getElementById('num2').value;
    const num3Str = document.getElementById('num3').value;

    const numbers = [];
    let isValid = true;

    if (!isValidNumber(num1Str)) {
        document.getElementById('error1').textContent = 'Введіть коректне число';
        isValid = false;
    } else {
        numbers.push(parseNumber(num1Str));
    }
    if (!isValidNumber(num2Str)) {
        document.getElementById('error2').textContent = 'Введіть коректне число';
        isValid = false;
    } else {
        numbers.push(parseNumber(num2Str));
    }

    if (!isValidNumber(num3Str)) {
        document.getElementById('error3').textContent = 'Введіть коректне число';
        isValid = false;
    } else {
        numbers.push(parseNumber(num3Str));
    }
    if (isValid && numbers.length === 3) {
        const maxNumber = Math.max(...numbers);
        document.getElementById('result1').textContent = `Найбільше число: ${maxNumber}`;
    }
}
function isValidNumber(str) {
    if (str === '') return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
}
function parseNumber(str) {
    return str.includes('.') ? parseFloat(str) : parseInt(str, 10);
}