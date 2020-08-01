// Variables

const clearButton = $('.clear');
const display = $('.display input');
const currencyButton = $('.currency');
const buttons = Array.from(document.querySelectorAll('button'));
const numberButtons = buttons.filter(onlyNumbers);


// Events

clearButton.addEventListener('click', onClickClearButton);

currencyButton.addEventListener('click', onclickCurrencyButton);

numberButtons.forEach(function(btn) {
    btn.addEventListener('click', onClickNumberButton);
});


// Functions

function $(element) {
    return document.querySelector(element);
}

function onClickClearButton() {
    display.value = '';
}

function onclickCurrencyButton(event) {
    const btn = event.target;
    if (btn.classList.contains('select')) {
        toggleCurrency(btn);
    }
    else if (btn.classList.contains('convert')) 
        console.log('Clique para converter.');
}

function toggleCurrency(btn) {
    if (btn.classList.contains('brl-usd')) {
        btn.classList.remove('brl-usd');
        btn.classList.add('usd-brl');
    }
    else if (btn.classList.contains('usd-brl')) {
        btn.classList.remove('usd-brl');
        btn.classList.add('brl-usd');
    }
}

function onlyNumbers(btn) {
    return btn.classList.length == 0;
}

function onClickNumberButton(event) {
    display.value += event.target.innerHTML;
}