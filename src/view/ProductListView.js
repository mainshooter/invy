class ProductListView {

    constructor(region, changeRegionService) {
        this.region = region;
        this.changeRegionService = changeRegionService;
        this.changeRegionService.register((region) => {
          this.refreshMenu(region);
        });
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
    }

    refreshMenu(region){
        let dropdownElement = document.querySelector("#dropdownmenu");
        dropdownElement.innerHTML = '';
        dropdownElement.classList.add("draggable-items");
        let dropdownMenu = document.createElement("ul");
        for (let i = 0; i < region.products.length; i++) {
          let product = region.products[i];
          let item = document.createElement("a");
          item.setAttribute('id', product.id);
          item.setAttribute("href", "#");
          item.classList.add('draggable-item');
          item.innerText = product.name;
          item.setAttribute("draggable", "true");
          let listItem = document.createElement("li");
          listItem.appendChild(item);
          dropdownMenu.appendChild(listItem);
        }

        dropdownElement.appendChild(dropdownMenu);
        this.setupDragAndDrop();
        return dropdownElement;
    }


    setupDragAndDrop() {
        const dropzones = document.querySelectorAll('.dropzones');

        let dragItems = document.querySelectorAll('.draggable-item');
        for (let i = 0; i < dragItems.length; i++) {
          let item = dragItems[i];
          item.addEventListener('dragstart', e => {
            e.dataTransfer.setData('text', e.target.id);
          });
        }
        for(let i = 0; i < dropzones.length; i++){
            dropzones[i].addEventListener('dragover', e => {
                e.preventDefault();
            });

            dropzones[i].addEventListener('drop', e => {
                e.preventDefault();
                let id = e.dataTransfer.getData('text');
                if(e.target.innerHTML === ''){
                  e.target.appendChild(document.getElementById(id));
                }
            });
        }
    }
}
export { ProductListView }
