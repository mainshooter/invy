class ProductListView {
    constructor(region) {
        let self = this;
        self.region = region;
    }

    present(){
        let container = document.createElement("div");
        container.classList.add("dropdown");
        let header = document.createElement("h1");
        header.innerText = "Producten";
        header.addEventListener("mouseover", (event) => {
            this.showMenu(event);
        });
        let dropdownMenu = document.createElement("div");
        for (let i = 1; i <= 3; i++){
            let item = document.createElement("a");
            item.setAttribute("href", "#");
            item.innerText = "Item " + i;
            dropdownMenu.appendChild(item);
        }

        container.appendChild(header);
        container.appendChild(dropdownMenu);
        return container;
    }

    showMenu(event){
            console.log(event);
    }

}