class GroceryInputItem {

    constructor() {
        // this.element = $('.inputItem');
    }

    // hideMinimumStock() {
    //    $('.minimumStock', this.element).classList.add('hidden');
    // }

    // showMinimumStock() {
    //     $('.minimumStock', this.element).classList.remove('hidden');
    // }

    hideMinimumStock() {
        // $('.minimumStock').classList.add('hidden');
        document.querySelector('.minimumStock').classList.add('hidden');
    }

    showMinimumStock() {
        // $('.minimumStock').classList.remove('hidden');
        document.querySelector('.minimumStock').classList.remove('hidden');
    }
}

const g = new GroceryInputItem();

