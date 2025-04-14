import "./dropdownItem.js"
class Dropdown extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div id="dropdown" class="relative ">
                <button class="flex items-center gap-2 mx-auto justify-center">Інтерактив <img
                        src="src/images/arrow_down.svg" class="transition dark:invert" alt="arrow"/></button>
                <ul class="h-28 !h-0 w-40 flex items-center flex-col absolute top-[100%] left-[50%] -translate-x-[50%] overflow-hidden transition duration-200 bg-white dark:bg-black box-border  rounded-b-[20px] border-t-0">
                    <our-dropdown-item data-text="Числовий"></our-dropdown-item>
                    <our-dropdown-item data-text="Ігровий"></our-dropdown-item>
                    <our-dropdown-item data-text="Ознайомчий"></our-dropdown-item>
                </ul>
            </div>
`
    }
}

customElements.define("our-dropdown", Dropdown);