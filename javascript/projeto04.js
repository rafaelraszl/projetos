/*******************************************************************************
	Tarefa 1: (USE SWITCH CASE) 
		Crie uma função chamada calcularFrete que recebe a sigla do estado como 
		parâmetro e retorne o valor do frete. O frete deve ser calculado de acordo 
		com a seguinte tabela de preços:
			MG     -> 12,50
			SP     -> 23,90
			RJ     -> 18,20
			Outros -> 35,90
*******************************************************************************/
function calcularFrete(estado) {
    switch (estado) {
      case "MG":
        return "12.50";
      case "SP":
        return "23.90";
      case "RJ":
        return "18.20";
      default:
        return "35.90";
    }
  }






/*******************************************************************************
	Tarefa 2: (USE SWITCH CASE)
		Crie um função chamada nomeMes, que recebe um número referente ao mês e 
		retorna o nome do mês equivalente. 1 para Janeiro, 2 para Fevereiro, 3 para 
		março e assim por diante, até 12 para dezembro. Deve retornar a mensagem
		"Mês inválido" caso seja usado algum número que não esteja entre 1 e 12.
*******************************************************************************/

function nomeMes(numero) {
    switch (numero) {
      case "01":
        return "Janeiro";
  
      case "02":
        return "Fevereiro";
  
      case "03":
        return "Março";
  
      case "04":
        return "Abril";
  
      case "05":
        return "Maio";
  
      case "06":
        return "Junho";
  
      case "07":
        return "Julho";
  
      case "08":
        return "Agosto";
  
      case "09":
        return "Setembro";
  
      case "10":
        return "Outubro";
  
      case "11":
        return "Novembro";
  
      case "12":
        return "Dezembro";
      default:
        return "Mês inválido!";
    }
  }





/*******************************************************************************
	Tarefa 3: (USE SWITCH CASE) 
		Crie uma função chamada tabelaPeriodica que recebe como parâmetro a sigla
		de um elemento químico e retorne o nome desse elemento. Para exemplificar, 
		passando a sigla Zn, vai retornar zinco e Pt vai retornar platina.
		Use essa referência para abranger todos os elementos:
		https://pt.wikipedia.org/wiki/Tabela_peri%C3%B3dica#Estrutura_da_tabela_peri%C3%B3dica		
*******************************************************************************/

function tabelaPeriodica(sigla) {
    switch (sigla) {
      case "Zn":
        return "Zinco";
      case "Pl":
        return "Platina";
      case "Sn":
        return "Estanho";
      case "Br":
        return "Bromo";
      default:
        return "Elemento inválido!";
    }
  }