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
        let dropdownMenuDiv = document.createElement("div");
        dropdownMenuDiv.setAttribute("id", "dropdownmenu");
        dropdownMenuDiv.classList.add("draggable-items");
        container.appendChild(header);
        container.appendChild(dropdownMenuDiv);
        return container;
    }

    showMenu(event){
            console.log(event);
    }

    refreshMenu(region){
        let dropdownElement = document.querySelector("#dropdownmenu");
        dropdownElement.innerHTML = '';
        dropdownElement.classList.add("draggable-items");
        let dropdownMenu = document.createElement("ul");
        for (let i = 1; i <= 3; i++){
            let item = document.createElement("a");
            item.setAttribute("href", "#");
            item.innerText = region + i;
            let listItem = document.createElement("li");
            listItem.setAttribute("draggable", "true");
            item.appendChild(listItem);
            dropdownMenu.appendChild(item);
        }
        dropdownElement.appendChild(dropdownMenu);
        return dropdownElement;
    }

    setupDragAndDrop() {
        const dropzones = document.querySelector('.dropzones');
        let el = null;
        document.querySelector('.draggable-items')
            .addEventListener(
                'dragstart', e => {
                    el = e.target.cloneNode(true);
                    el.removeAttribute('draggable');
                }
            );

        dropzones.addEventListener('dragover', e => {
            e.preventDefault();
        });


        dropzones.addEventListener('drop', e => {
            e.preventDefault();
            if(e.target.innerHTML === ''){
                e.target.appendChild(el);
                el = null;
            }

        });
    }


}