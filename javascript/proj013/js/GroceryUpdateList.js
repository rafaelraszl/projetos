class GroceryUpdateList {

    constructor() {
        this.element = $('.updateList');
        this.attachEvents();
    }

    attachEvents() {
        $('.save', this.element).addEventListener('click', this.onClickSave.bind(this));
        $('.cancel', this.element).addEventListener('click', this.onClickCancel.bind(this));

    }

    show() {
        this.element.classList.remove('hidden');
        $('.inputItem').classList.add('hidden');
    }

    hide() {
        this.element.classList.add('hidden');
        $('.inputItem').classList.remove('hidden');
    }

    onClickSave() {
        groceryList.saveToLocalStorage();
        groceryList.render();
       this.hide();
    }

    onClickCancel() {
        this.hide();
    }

}