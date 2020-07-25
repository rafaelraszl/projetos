// Esse código captura o nome digitado na caixa de diálogo e mostra uma frase
// contatenando com o nome digitado

var pessoa = prompt("Por favor, digite seu nome", "Seu nome aqui");
if (pessoa !== null) {
    alert("Bom dia " + pessoa + "! Como você está hoje?");
    }

/******************************************************************************* 
	Tarefa 1: 
		Atribuir o número 8 a uma variável chamada tomates
*******************************************************************************/
let tomates = 8;

/******************************************************************************* 
	Tarefa 2: 
		Atribuir o número quatro e meio, a uma variável chamada melancias 
*******************************************************************************/
let melancias = 4.5;

/******************************************************************************* 
  Tarefa 3: 
  	Atribuir o texto Bom dia à uma variável chamada mensagem 
*******************************************************************************/
let mensagem = "Bom dia";
/******************************************************************************* 
	Tarefa 4: 
    Atribuir o valor booleano verdadeiro à uma variável chamada ligado e o valor
    booleano falso para uma variável chamada desligado.
*******************************************************************************/
let ligado = true;
let desligado = false;
/* 
Fixar um valor de uma variável no código não faz muito sentido, pois só 
o programador poderia alterar os valores. Faz mais sentido capturarmos os 
dados de entrada digitados pelo usuário. Vamos usar o comando prompt para 
pegar os dados do usuário e o comando alert para exibit os dados capturados. 

## Referências:

https://www.w3schools.com/jsref/met_win_prompt.asp
https://www.w3schools.com/jsref/met_win_alert.asp

*/

/******************************************************************************* 
	Tarefa 5:
    Coletar o nome do usuário e mostrar concatenado com a frase, exibindo 
    Bom dia Bia, caso o nome informado seja Bia.
*******************************************************************************/
var nome = prompt("Digite seu nome:", "seu nome aqui");
alert("Bom dia " + nome + "!");

/* 
Variáveis podem receber o retorno expressões de lógicas que retornam verdadeiro
ou false (true ou false) e o retorno de cálculos feitos com operadores
aritméticos. 

## Referências:

https://developer.mozilla.org/pt-PT/docs/Web/JavaScript/Guia/Guia_express%C3%B5es_e_operadores
https://www.w3schools.com/js/js_comparisons.asp
https://www.w3schools.com/jsref/jsref_operators.asp

*/

/******************************************************************************* 
	Tarefa 6: 
	Faça um programa que captura a idade do usuário. Usa uma variável maiorIdade 
	para saber se a idade é maior ou igual a 18. E mostra true em um alert caso o 
	usuário seja maior de idade.
*******************************************************************************/

var maiorIdade = prompt("Digite a sua idade");

if (maiorIdade >= 18) {
    alert(maiorIdade = true);
} else {
    alert(maioridade = false);
}


// var maiorIdade = 18;

// if (maiorIdade >= 18) {
//   maiorIdade = true;
// }

// var maiorIdade = prompt("Digite a sua idade");

// if (maiorIdade >= 18) {
//     alert("Você é maior de idade!");
// } else {
//     alert("Vá dormir, você é menor de idade!!!");
// }
