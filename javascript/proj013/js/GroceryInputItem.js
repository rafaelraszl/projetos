class GroceryInputItem {

    constructor() {
        this.element = $('.inputItem');
        this.attachEvents();
    }

    attachEvents() {
        document.querySelector('input', this.element).addEventListener('focus', this.onFocusInput.bind(this));
        // $("input", this.element).addEventListener("focus", this.onFocusInput.bind(this));
        document.querySelector('.minus', this.element).addEventListener('click', this.onClickMinus.bind(this));
        document.querySelector('.plus', this.element).addEventListener('click', this.onClickPlus.bind(this));
        document.querySelector('.save', this.element).addEventListener('click', this.onClickSave.bind(this));
    }

    onClickSave() {
        if (this.getData().name.length == 0) {
            alert('Digite um produto!');
        }
        else {
            console.dir(this.getData());
        }
    }


    onFocusInput() {
       this.showMinimumStock();
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

    getData() {
        return {
            name: document.querySelector('input', this.element).value,
            minimumStock: parseInt(document.querySelector('.amount', this.element).innerHTML),
            amountStock: 0
        };
    }

    onClickMinus() {
        if (this.getData().minimumStock > 0) {
            document.querySelector('.amount', this.element).innerHTML = this.getData().minimumStock - 1;
        }
    }

    onClickPlus() {
        document.querySelector('.amount', this.element).innerHTML = this.getData().minimumStock + 1;

    
    }
}

const g = new GroceryInputItem();

