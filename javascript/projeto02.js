/* Nas tarefas abaixo só é necessário declarar as funções, não é necessário
fazer as chamadas, pois o programa de correção já vai fazer isso. Seu objetivo
é deixar todos os testes na cor verde.
*/


/******************************************************************************* 
	Tarefa 1: 
		Definir uma função chamada triplicarValor. Se essa função receber o número 3 
		por exemplo, ela retorna 9. E se receber o número 100, ela retorna 300.	
*******************************************************************************/
function triplicarValor(valor) {
	return valor * 3;
}

let valor = 3;



/******************************************************************************* 
	Tarefa 2: 
		 Definir uma função chamada calcularComissao. Ela vai calcular a comissão dos 
		 vendedores de uma loja. O percentual de comissão é 10%.
*******************************************************************************/
function calcularComissao(venda) {
	retunr venda * 0.10;
}



/******************************************************************************* 
	Tarefa 3: 
		Definir uma função chamada calculaAnosAposentadoria. Ela calcula quantos anos 
		falta para sua aposentadoria. Essa função vai receber dois parâmetros, 
		o primeiro referente a idade da pessoa (30 anos por exemplo) e o segundo 
		referente a idade mínima para aposentar, 65 anos por exemplo.
*******************************************************************************/

calculaAnosAposentadoria(idade, idadeMinima) {
	return idadeMinima - idade;
}


/******************************************************************************* 
	Tarefa 4: 
		 Definir uma função chamada mostrarMensagem. Ela vai receber a idade da pessoa
		 como parâmetro e mostrar a mensagem:
		 "Faltam X anos para a sua aposentadoria". 
		 Dentro dessa função, use a função criada na tarefa anterior para calcular 
		 os anos que faltam para aposentadoria.
*******************************************************************************/
function mostrarMensagem(idade) {
    let anosFaltam = calculaAnosAposentadoria(idade, 65);
    return `Faltam ${anosFaltam} anos para a sua aposentadoria`;
  }



/******************************************************************************* 
	Tarefa 5: 
		Definir uma função chamda temperaturaNegativa. Ela vai verificar se a 
		temperatura está negativa. Se estiver abaixo de zero retorna true (verdadeiro) 
		e se estiver acima de zero retorna false (falso)	
*******************************************************************************/
function temperaturaNegativa(temperatura) {
    return temperatura < 0;
}



/* 
Nas próximas tarefas você não precisa definir funções, apenas usar funções
já existentes no Javascript para responder cada questão, colocando os valores de
retorno da chamada das funções dentro das variáveis indicadas, no lugar do null.
Fique a vontade para declarar variáveis de apoio, caso necessário.
Use essa referência Javascript para encontrar as funções:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects
*/


/******************************************************************************* 
	Tarefa 6: 
		Qual a raís quadrada de 289?
		https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
*******************************************************************************/

let respostaTarefa6 = Math.sqrt(289);



/******************************************************************************* 
	Tarefa 7: 
		Quantos caracteres tem a frase "Ordem e progresso" ?
*******************************************************************************/

let respostaTarefa7 = 'Ordem e progresso'.length;



/******************************************************************************* 
	Tarefa 8: 
		Qual é a sétima letra da palavra "Dinossauro"
*******************************************************************************/

let respostaTarefa8 = 'Dinossauro'.charAt(7);



/******************************************************************************* 
	Tarefa 9: 
		Use uma função que leia a frase "Eu sei programar em Ruby" e substitua a 
		palavra Ruby pela palavra Javascript.
*******************************************************************************/
let frase = "Eu sei programar em Ruby";
let respostaTarefa9 = frase.replace("Ruby", "Javascript");



/******************************************************************************* 
	Tarefa 10: 
		Que dia do mês é hoje?
*******************************************************************************/

let respostaTarefa10 = new Date().getDate();





/* ************************************* */
/* O código abaixo não deve ser alterado */
/* ************************************* */



describe("Projeto 02", function() {

  it("Tarefa 1", function() {
    expect(triplicarValor(3)).toBe(9);
  });

  it("Tarefa 2", function() {
    expect(calcularComissao(100)).toBe(10);
  });

  it("Tarefa 3", function() {
    expect(calculaAnosAposentadoria(30, 65)).toBe(35);
  });
  
  it("Tarefa 4", function() {
    expect(mostrarMensagem(55, 65)).toBe("Faltam 10 anos para a sua aposentadoria");
  });

  it("Tarefa 5", function() {
    expect(temperaturaNegativa(-5)).toBe(true);
  });
  
  it("Tarefa 6", function() {
    expect(respostaTarefa6).toBe(17);
  });
  
  it("Tarefa 7", function() {
    expect(respostaTarefa7).toBe(17);
  });

  it("Tarefa 8", function() {
    expect(respostaTarefa8).toBe("u");
  });

  it("Tarefa 9", function() {
    expect(respostaTarefa9).toBe("Eu sei programar em Javascript");
  });

  it("Tarefa 10", function() {
    expect(respostaTarefa10).toBe(new Date().getDate());
  });



});
