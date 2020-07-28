let botao = document.querySelector('button');

botao.innerHTML = 'Mudar cor';

let h1 = document.querySelector('h1');


botao.addEventListener('mouseover', function() {
    h1.style.opacity = 0.5;

});

botao.addEventListener('click', function() {
    let cor = document.querySelector('#cor').value;
    // console.dir(cor.value);
    document.querySelector('body').style.backgroundColor = cor;
})