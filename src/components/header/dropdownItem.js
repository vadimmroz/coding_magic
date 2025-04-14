class DropdownItem extends HTMLElement{
    constructor() {
        super();
        const text = this.getAttribute("data-text");
        this.className = "hover:bg-[#F1F1F1] w-full flex-1 flex items-center justify-center cursor-pointer"
        this.innerHTML = `<li>${text}</li>`
    }
}

customElements.define('our-dropdown-item', DropdownItem);