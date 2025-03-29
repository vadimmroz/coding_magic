const main_func = () => {
    const input_of_num = document.getElementById("input_of_num");
    const first_half_of_time = document.getElementById("first_half_of_time");
    const second_half_of_time = document.getElementById("second_half_of_time");
    const btn1 = document.createElement("btn1");
    const num = input_of_num.value

    btn1.addEventListener("click", () => {
        let output1 = String(Math.floor(Math.floor(num / 60)))
        let output2 = String(num % 60)
        first_half_of_time.p.innerText(output1);
        second_half_of_time.p.innerText(output2);

        /*воно чомусь не працює, але я думаю моя ідея була зрозуміла... */
    })
}
main_func();