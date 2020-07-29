function $(elemento) {
    return document.querySelector(elemento);
}

function mostrarResultado() {
    $('.resultado').classList.remove('escondido');
    $('.botaoIMC').classList.add('escondido');

}

function mostrarBotaoIMC() {
    $('.botaoIMC').classList.remove('escondido');
    $('.resultado').classList.add('escondido');
}

$('.botaoIMC').addEventListener('click', function() {
    calcularResultado();
    mostrarResultado();
}); 

$('.voltar').addEventListener('click', function() {
    mostrarBotaoIMC();
});

function calcularResultado(){
    const imc = calcularIMC($('#altura').value, $('#peso').value);
    $('.imcValor').innerHTML = imc.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
    $('.imcDesc').innerHTML = 'Saudável';
}

function calcularIMC(altura, peso) {
    return peso / (altura * altura);
}
