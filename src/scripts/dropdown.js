const btn = document.querySelector("#dropdown button")
const list = document.querySelector("#dropdown ul")

btn.addEventListener("click", () => {
    list.classList.toggle("!h-0");
    list.classList.toggle("border");
    btn.classList.toggle("[&_img]:rotate-180");
})