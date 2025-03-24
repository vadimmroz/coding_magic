let op = "+"
const first_num = document.getElementById('1st_number');
const second_num = document.getElementById('2nd_number');
const btn = document.getElementById('addition');
const btn2 = document.getElementById('subtraction');
const btn3 = document.getElementById('multiplication');
const btn4 = document.getElementById('division');
const result = document.getElementById('result');
const equal = document.getElementById('equal');
const operator = document.getElementById('operator');

const listener = (char) => {
    return () => {
        op = char;
        operator.innerHTML = op;
    }
}


btn.addEventListener('click', listener("+"));
btn2.addEventListener('click', listener("-"));
btn3.addEventListener('click', listener("*"));
btn4.addEventListener('click', listener("/"));

equal.addEventListener('click', () => {
    switch (op) {
        case "+":
            result.innerText = String(Number(first_num.value) + Number(second_num.value));
            break;
        case "-":
            result.innerText = String(Number(first_num.value) - Number(second_num.value));
            break;
        case "*":
            result.innerText = String(Number(first_num.value) * Number(second_num.value));
            break;
        case "/":
            result.innerText = String(Number(first_num.value) / Number(second_num.value));
            break;
    }
})
