class GroceryItem {

    constructor(item) {
        this.name = item.name;
        this.minimumStock = item.minimumStock;
        this.amountStock = item.amountStock;
    }

    hasToBuy() {
        return this.amountStock < this.minimumStock;
    }

    render(element) {
        this.element = element;
        const cssClass = this.hasToBuy() ? 'hasToBuy' : '';
        element.innerHTML = $('#templateItem').innerHTML
        .replace(/{{cssClass}}/g, cssClass)
        .replace(/{{name}}/g, this.name) //pode-se usar {{name}} .... /{{name}}/g é uma expressão regular (pesquisar)
        .replace(/{{minimumStock}}/g, this.minimumStock)
        .replace(/{{amountStock}}/g, this.amountStock);
        this.attachEvents();
    }

    attachEvents() {
        $('.description', this.element).addEventListener('click', this.onClickDescription.bind(this));
        $('.delete', this.element).addEventListener('click', this.onClickDelete.bind(this));
        $('.minus', this.element).addEventListener('click', this.onClickMinus.bind(this));
        $('.plus', this.element).addEventListener('click', this.onClickPlus.bind(this));
    }

    onClickDescription(event) {
        const actions = event.currentTarget.nextElementSibling;
        actions.classList.toggle('hidden');
        // groceryList.inputItem.hideMinimumStock();
    }

    onClickDelete() {
        this.element.remove();
    }

    onClickMinus() {
        const amount = $('.amountStock', this.element);
        if (parseInt(amount.innerHTML) > 0) {
            // amount.innerHTML = parseInt(amount.innerHTML) - 1 + $('.supAmount').innerHTML;
            amount.innerHTML = parseInt(amount.innerHTML) - 1;
        }
    }

    onClickPlus() {
        const amount = $('.amountStock', this.element);
        // amount.innerHTML = parseInt(amount.innerHTML) + 1 + $('.supAmount').innerHTML;
        amount.innerHTML = parseInt(amount.innerHTML) + 1;
    }
}