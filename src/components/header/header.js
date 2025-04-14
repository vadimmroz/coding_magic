import "./dropdown.js"

class Header extends HTMLElement{
    constructor() {
        super();
        this.innerHTML = `<header class="p-5">
    <div class="container mx-auto flex items-center">
        <img src="./src/images/logo.svg" alt="Code magic logo " class="dark:invert"/>
        <nav class="ml-20 flex max-w-90 w-full items-center justify-between">
            <our-dropdown></our-dropdown>
            <a href="#">Наша команда</a>
            <a href="#">Контакти</a>
        </nav>
        <div class="ml-auto" id="theme">
            <div id="theme-switcher" class="w-10 relative h-5 rounded-full bg-[#7A7A7A] flex ">
                <figure id="circle" class="w-4 h-4 absolute left-px top-[50%] -translate-y-[50%] bg-white rounded-full transition"></figure>
            </div>
        </div>
        <h4 class="ml-12">Вітаємо, User!</h4>
    </div>
</header>`
    }
}

customElements.define("our-header", Header);