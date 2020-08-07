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
        element.innerHTML = document.querySelector('#templateItem').innerHTML
        .replace(/{{cssClass}}/g, cssClass)
        .replace(/{{name}}/g, this.name) //pode-se usar {{name}}
        .replace(/{{minimumStock}}/g, this.minimumStock)
        .replace(/{{amountStock}}/g, this.amountStock);
        this.attachEvents();
    }

    attachEvents() {
        document.querySelector('.description', this.element).addEventListener('click', this.onClickDescription.bind(this));
    }

    onClickDescription() {
        console.log('Oiiiiii');
    }
}

const item1 = {
    name: 'Laranjas',
    minimumStock: 6,
    amountStock: 8
};

const item2 = {
    name: 'Ovos',
    minimumStock: 12,
    amountStock: 10
};

const item3 = {
    name: 'Chocolate',
    minimumStock: 3,
    amountStock: 5
};

const groceryItem1 = new GroceryItem(item1);
const element1 = document.querySelector('#GroceryList .item1');
groceryItem1.render(element1);

const groceryItem2 = new GroceryItem(item2);
const element2 = document.querySelector('#GroceryList .item2');
groceryItem2.render(element2);

const groceryItem3 = new GroceryItem(item3);
const element3 = document.querySelector('#GroceryList .item3');
groceryItem3.render(element3);