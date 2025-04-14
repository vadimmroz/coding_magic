const theme = document.getElementById("theme");
const theme_switcher = document.getElementById("theme-switcher");
const circle = document.getElementById("circle");
const html = document.querySelector("html");
theme_switcher.addEventListener("click", () => {
    if(html.getAttribute("data-theme") === "dark") {
        document.querySelector("html").setAttribute("data-theme", "light");
    }else{
        document.querySelector("html").setAttribute("data-theme", "dark");
    }

    circle.classList.toggle("left-[22px]");
    circle.classList.toggle("left-px");
    circle.classList.toggle("bg-white");
    circle.classList.toggle("bg-black");
})