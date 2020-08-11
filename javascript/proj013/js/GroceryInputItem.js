class GroceryInputItem {

    constructor() {
        this.element = $('.inputItem');
        this.attachEvents();
    }

    attachEvents() {
        $('input', this.element).addEventListener('focus', this.onFocusInput.bind(this));
        $('.minus', this.element).addEventListener('click', this.onClickMinus.bind(this));
        $('.plus', this.element).addEventListener('click', this.onClickPlus.bind(this));
        $('.save', this.element).addEventListener('click', this.onClickSave.bind(this));
        $('.cancelInput', this.element).addEventListener('click', this.onClickCancelInput.bind(this));
    }

    onClickSave() {
        if (this.getData().name.length == 0) {
            alert('Digite um produto!');
        }
        else {
            groceryList.add(this.getData());
            $('input', this.element).value = '';
            this.hideMinimumStock();
        }
    }


    onFocusInput() {
       this.showMinimumStock();
       $('.description').classList.add('margin');
       $('.cancelInput').classList.remove('hidden');
    }

    hideMinimumStock() {
        $('.minimumStock', this.element).classList.add('hidden');
        $('.amount', this.element).innerHTML = 1;
    }

    showMinimumStock() {
        $('.minimumStock', this.element).classList.remove('hidden');
    }

    getData() {
        return {
            name: $('input', this.element).value,
            minimumStock: parseInt($('.amount', this.element).innerHTML),
            amountStock: 0
        };
    }

    onClickMinus() {
        if (this.getData().minimumStock > 0) {
            $('.amount', this.element).innerHTML = this.getData().minimumStock - 1;
        }
    }

    onClickPlus() {
        $('.amount', this.element).innerHTML = this.getData().minimumStock + 1;

    
    }

    onClickCancelInput() {
        this.hideMinimumStock();
        $('.description').classList.remove('margin');
        $('.cancelInput').classList.add('hidden');
        $('input').value = '';
    }
}
