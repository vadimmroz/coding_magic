const main_func = () => {
    const input_of_num = document.getElementById("input_of_num");
    const first_half_of_time = document.getElementById("first_half_of_time");
    const second_half_of_time = document.getElementById("second_half_of_time");
    const third_half_of_time = document.getElementById("third_half_of_time");
    const btn1 = document.getElementById("btn1");


    btn1.addEventListener("click", () => {
        const num = input_of_num.value
        const output1 = String(Math.floor(num / 3600))
        let output2 = String(Math.floor(num / 60) % 60)
        let output3 = String(num % 60)
        first_half_of_time.innerText = output1
        second_half_of_time.innerText = output2;
        third_half_of_time.innerText = output3;
    })
}
main_func();