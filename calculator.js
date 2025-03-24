(() => {
    let op = "+"
    const first_num = Number(document.getElementById('1st_number').value);
    const second_num = Number(document.getElementById('2nd_number').value);
    const btn = document.getElementById('addition');
    const btn2 = document.getElementById('subtraction');
    const btn3 = document.getElementById('multiplication');
    const btn4 = document.getElementById('division');
    const result = document.getElementById('result');
    const equal = document.getElementById('equal');
    const operator = document.getElementById('operator');

    btn.addEventListener('click', () => {
        op = "+";
        operator.innerHTML = op;
    });
    btn2.addEventListener('click', () => {
        op = "-";
        operator.innerHTML = op;
    })
    btn3.addEventListener('click', () => {
        op = "*";
        operator.innerHTML = op;
    })
    btn4.addEventListener('click', () => {
        op = "/";
        operator.innerHTML = op;
    })
    equal.addEventListener('click', () => {
        switch (op) {
            case "+":
                result.innerText = String(first_num + second_num);
                break;
            case "-":
                result.innerText = String(first_num - second_num);
                break;
            case "*":
                result.innerText = String(first_num * second_num);
                break;
            case "/":
                result.innerText = String(first_num / second_num);
                break;
        }
    })
})()
