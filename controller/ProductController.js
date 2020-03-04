class ProductController{
    listViews;

    constructor(store) {
        let self = this;
        self.store = store;
        let listViews = {};

        for(let i = 0; i < self.store.region.length; i++){
            listViews.add(new ProductListView(store.region[i]))
        }
    }


}