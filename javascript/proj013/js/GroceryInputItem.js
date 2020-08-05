class GroceryInputItem {

    constructor() {
        // this.element = $('.inputItem');
        console.log('O construtor foi chamado!');
    }

    // hideMinimumStock() {
    //    $('.minimumStock', this.element).classList.add('hidden');
    // }

    // showMinimumStock() {
    //     $('.minimumStock', this.element).classList.remove('hidden');
    // }

    hideMinimumStock() {
        $('.minimumStock').classList.add('hidden');
    }
}

const g = new GroceryInputItem();

