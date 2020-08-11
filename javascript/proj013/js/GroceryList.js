class GroceryList {

    constructor() {
      this.inputItem = new GroceryInputItem();
      this.updateList = new GroceryUpdateList();
      this.render();
    }

    // attachEvents() {
    //     $('.emptyList', this.element).addEventListener('click', this.onClickEmptyList.bind(this));
    // }

    loadData() {
        let listItems = [];
        const localData = localStorage.getItem('groceryList');
        if (localData) {
            listItems = JSON.parse(localData);
        }
        return listItems.map(item => new GroceryItem(item));
    }

    saveToLocalStorage(){
        localStorage.setItem('groceryList', JSON.stringify(this.items));
    }

    add(item) {
        this.items.push(item);
        this.saveToLocalStorage();
        this.render();
    }

    remove(index) {
        this.items.splice(index, 1);
        this.saveToLocalStorage();
        this.render();
    }

    // onClickEmptyList(event) {
    //     groceryList.inputItem.hideMinimumStock();
    // }

    render(element) {
        // this.element = element;
        this.items = this.loadData();
        $('#GroceryList').innerHTML = "";

       this.items.forEach(function(item, index) {
           $('#GroceryList').innerHTML += `<li id='_${index}'></li>`;
       });
       
       this.items.forEach(function(item, index) {
        item.render( $(`#_${index}`) );
      });

    //   this.attachEvents();
    }
}