// Variables

const clearButton = $('.clear');
const display = $('.display input');
const currencyButton = $('.currency');
const buttons = Array.from(document.querySelectorAll('button'));
const numberButtons = buttons.filter(onlyNumbers);
let displayDigits = '';
let displayValue = 0;


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
    displayDigits += event.target.innerHTML;
    displayValue = digitsToNumber(displayDigits);
    display.value = format(displayValue, 'BRL');
}

function digitsToNumber(digits) {
    const sizeFirstDigits = digits.length - 2;
    const firstDigits = digits.substr(0, sizeFirstDigits);
    const lastDigits = digits.substr(-2);
    return parseFloat(firstDigits + '.' + lastDigits);
}

function format(value, symbol) {
    const config = {style: 'currency', currency: symbol};
    if (symbol =='BRL') {
        return value.toLocaleString('pt-BR', config);
    }
    else if (symbol == 'USD') {
        return value.toLocaleString('en', config);

    }
}