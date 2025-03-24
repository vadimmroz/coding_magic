const random_number = () => {
    const input = document.getElementById("input_for_random_number");
    const p = document.getElementById("p_for_random_number");
    const btn = document.getElementById("btn_for_random_number")
    const random_num = Math.floor(Math.random() * (10 - 1)) + 1
    let counter = 3

    btn.addEventListener("click", () => {
        const input_value = Number(input.value);

        if (input_value === random_num) {
            p.innerText = "Ти вгадав!"
            setTimeout(() => {
                random_number()
            }, 3000)
            return
        } else if (input_value > random_num) {
            p.innerText = "Спробуй менше"
        } else {
            p.innerText = "Спробуй більше"
        }

        counter = counter - 1
        if (counter === 0) {
            p.innerText = "Ти програв"
            setTimeout(() => {
                random_number()
            }, 3000)
        }
    })
}
random_number()