class GroceryList {

    constructor() {
      this.inputItem = new GroceryInputItem();
      this.updateList = new GroceryUpdateList();
      this.render();
      this.items = this.loadData();
    }

    loadData() {
        return [
            {name: 'Tomates', minimumStock: 6, amountStock: 3},
            {name: 'Cervejas', minimumStock: 2, amountStock: 7},
            {name: 'Chocolates', minimumStock: 3, amountStock: 15}
        ];
    }

    saveToLocalStorage(){
        localStorage.setItem('groceryList', JSON.stringify(this.items));
    }

    add(item) {
        this.items.push(item);
    }

    remove(index) {
        this.items.splice(index, 1);
    }

    render() {
        
    }
}