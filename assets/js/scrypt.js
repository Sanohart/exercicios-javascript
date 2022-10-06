//Exercicio 01
document.getElementById('botao-ex-um').onclick = function concatenarString() {
  {
    var nome = document.getElementById('input-nome-ex-um').value;
    var sobrenome = document.getElementById('input-sobrenome-ex-um').value;
    var resConcatString;
    if (nome != '' && sobrenome != '') {
      resConcatString = `${nome} ${sobrenome}`;
      document.getElementById('resposta-ex-um').innerHTML = resConcatString;
    } else {
      document.getElementById('resposta-ex-um').innerHTML =
        'Preencha os dois campos!';
    }
  }
};

//Exercicio 02

document.getElementById('botao-ex-dois').onclick =
  function calcularExpressoes() {
    var n = Number(prompt('Insira o valor de n:'));
    var resultA;
    var resultB;
    var resultC;

    resultA = Math.pow(n, 5);
    resultB = ((50 % 9) + 9 * (10 + 5 * n)) / 2;
    resultC = (n + 60 - (50 % 6)) / ((10 + 3) * 5);
    resultC = resultC.toFixed(2);
    if (isNaN(resultA)) {
      document.getElementById('resposta-ex-dois-a').innerHTML =
        'Favor inserir um valor numérico...';
      document.getElementById('resposta-ex-dois-b').innerHTML = '';
      document.getElementById('resposta-ex-dois-c').innerHTML = '';
    } else {
      document.getElementById('resposta-ex-dois-a').innerHTML = `a. ${resultA}`;
      document.getElementById('resposta-ex-dois-b').innerHTML = `b. ${resultB}`;
      document.getElementById('resposta-ex-dois-c').innerHTML = `c. ${resultC}`;
    }
  };

//Exercicio 03

document.getElementById('botao-ex-tres').onclick = function atribuirAumento() {
  var nomeDoTrabalhador = document.getElementById('input-nome-ex-tres').value;
  var salario = Number(document.getElementById('input-salario-ex-tres').value);
  var aumento = salario * 0.05;
  var novoSalario = salario + aumento;

  if (salario > 0) {
    document.getElementById(
      'resposta-ex-tres-a'
    ).innerHTML = `a. Salário de ${nomeDoTrabalhador}: ${salario.toFixed(
      2
    )} reais..`;
    document.getElementById(
      'resposta-ex-tres-b'
    ).innerHTML = `b. Aumento de 5% no valor de: ${aumento.toFixed(
      2
    )} reais...`;
    document.getElementById(
      'resposta-ex-tres-c'
    ).innerHTML = `c. Novo salário: ${novoSalario.toFixed(2)} reais!`;
  } else {
    document.getElementById('resposta-ex-tres-a').innerHTML =
      'Salário incorreto, favor inserir valores positivos...';
    document.getElementById('resposta-ex-tres-b').innerHTML = '';
    document.getElementById('resposta-ex-tres-c').innerHTML = '';
  }
};

//Exercicio 04

document.getElementById('botao-ex-quatro').onclick = function operarBooleans() {
  var resultOpA;
  var resultOpB;

  resultOpA = 10 + 12 == 11 && (true == false || 10 < 11);
  resultOpB = !((10 < 11 != true) == !false);

  document.getElementById(
    'resposta-ex-quatro-a'
  ).innerHTML = `a. ${resultOpA} (Falso).`;
  document.getElementById(
    'resposta-ex-quatro-b'
  ).innerHTML = `a. ${resultOpB} (Verdadeiro).`;
};

//Exercicio 05

document.getElementById('botao-ex-cinco').onclick =
  function converterRealParaPesos() {
    var valor = Number(document.getElementById('input-valor-ex-cinco').value);
    var valorAConverter = 0.037;
    var valorConvertido = valor * valorAConverter;

    if (valor > 0) {
      document.getElementById(
        'resposta-ex-cinco-a'
      ).innerHTML = `Conversão: ${valor.toFixed(
        2
      )} pesos para ${valorConvertido.toFixed(2)} reais.`;
    } else {
      document.getElementById('resposta-ex-cinco-a').innerHTML =
        'Favor inserir valores positivos...';
    }
  };

//Exercicio 06

document.getElementById('botao-ex-seis').onclick =
  function converterValorCarlos() {
    var valorCarlos = 1450;
    var valorAConverterCarlos = 0.036;
    var taxaDeCambio = valorCarlos * 0.03;
    var taxaDeCambioConvertido = taxaDeCambio * valorAConverterCarlos;
    var valorTaxado = valorCarlos - taxaDeCambio;
    var valorConvertidoCarlos = valorTaxado * valorAConverterCarlos;

    document.getElementById(
      'resposta-ex-seis-a'
    ).innerHTML = `Carlos Trocou ${valorCarlos.toFixed(
      2
    )} pesos por ${valorConvertidoCarlos.toFixed(2)} reais.`;
    document.getElementById(
      'resposta-ex-seis-b'
    ).innerHTML = `Taxa de cambio: ${taxaDeCambio.toFixed(
      2
    )} pesos (${taxaDeCambioConvertido.toFixed(2)} reais).`;
  };

//Exercicio 07

document.getElementById('botao-ex-sete').onclick =
  function converterValorCarlos() {
    var tabelaNome = document.getElementById('input-nome-ex-sete').value;
    var tabelaIdade = Number(
      document.getElementById('input-idade-ex-sete').value
    );
    var tabelaSalario = Number(
      document.getElementById('input-salario-ex-sete').value
    );
    var tabelaProfissao = document.getElementById(
      'input-profissao-ex-sete'
    ).value;

    if (
      tabelaNome != '' &&
      tabelaIdade > 0 &&
      tabelaSalario > 0 &&
      tabelaProfissao != ''
    ) {
      document.getElementById('div-tabela').innerHTML =
        '<table id="tabela-ex-sete" ><thead><tr><th>Nome</th><th>Idade</th><th>Salario</th><th>Profissão</th></tr></thead><tbody><tr><th id="celula-nome"></th><th id="celula-idade"></th><th id="celula-salario"></th><th id="celula-profissao"></th></tr></tbody></table>';
      document.getElementById('celula-nome').innerHTML = tabelaNome;
      document.getElementById('celula-idade').innerHTML = tabelaIdade;
      document.getElementById('celula-salario').innerHTML =
        tabelaSalario.toFixed(2);
      document.getElementById('celula-profissao').innerHTML = tabelaProfissao;
    } else {
      document.getElementById('div-tabela').innerHTML =
        '<strong>Preencha corretamente as lacunas!</strong>';
    }
  };

//Exercicio 08

document.getElementById('botao-ex-oito').onclick = function checarIdade() {
  var idade = Number(document.getElementById('input-idade-ex-oito').value);

  if (idade > 0) {
    if (idade > 17) {
      document.getElementById(
        'resposta-ex-oito-a'
      ).innerHTML = `Com ${idade}, voce já é adulto`;
    } else {
      document.getElementById(
        'resposta-ex-oito-a'
      ).innerHTML = `Com ${idade}, voce ainda é menor de idade`;
    }
  } else {
    document.getElementById(
      'resposta-ex-oito-a'
    ).innerHTML = `Insira corretamente sua idade!`;
  }
};

//Exercicio 09

document.getElementById('botao-ex-nove').onclick = function autenticacao() {
  var nomeCorreto = 'RAFAEL';
  var senhaCorreta = 1603;
  var nomeAutenticar = prompt(
    'Insira seu nome para autenticação: '
  ).toUpperCase();

  if (nomeAutenticar === nomeCorreto) {
    var senhaAutenticar = Number(
      prompt('Insira sua senha para autenticação: ')
    );

    if (senhaAutenticar === senhaCorreta) {
      document.getElementById(
        'resposta-ex-nove-a'
      ).innerHTML = `Acesso autorizado!`;
    } else {
      document.getElementById(
        'resposta-ex-nove-a'
      ).innerHTML = `Senha incorreta!`;
    }
  } else {
    document.getElementById(
      'resposta-ex-nove-a'
    ).innerHTML = `Usuário não autorizado!`;
  }
};

//Exercicio 10

document.getElementById('botao-ex-dez').onclick = function entradaBoate() {
  var nomeDoUsuario = document.getElementById('input-nome-ex-dez').value;
  var idadeDoUsuario = Number(
    document.getElementById('input-idade-ex-dez').value
  );
  if (idadeDoUsuario > 0 && nomeDoUsuario != '') {
    if (idadeDoUsuario < 16) {
      document.getElementById(
        'resposta-ex-dez-a'
      ).innerHTML = `${nomeDoUsuario}, está proibido a sua entrada!`;
    } else if (idadeDoUsuario >= 16 && idadeDoUsuario < 18) {
      document.getElementById(
        'resposta-ex-dez-a'
      ).innerHTML = `${nomeDoUsuario}, está proibido a sua entrada sem acompanhante!`;
    } else {
      document.getElementById(
        'resposta-ex-dez-a'
      ).innerHTML = `${nomeDoUsuario}, a sua entrada está liberada!`;
    }
  } else {
    document.getElementById(
      'resposta-ex-dez-a'
    ).innerHTML = `Preencha corretamente os dados requeridos!`;
  }
};

//Exercicio 11

document.getElementById('botao-ex-onze').onclick = function atacado() {
  var quantidadeProduto = document.getElementById(
    'input-quantidade-ex-onze'
  ).value;
  var valorProduto = document.getElementById('input-valor-ex-onze').value;
  var totalSemDesconto = valorProduto * quantidadeProduto;
  var desconto = 0;
  var porcentagem = '';
  if (quantidadeProduto >= 1 && valorProduto > 0) {
    if (totalSemDesconto > 1000.0) {
      desconto = totalSemDesconto - totalSemDesconto * 0.1;
      porcentagem = '10%';
    } else if (totalSemDesconto > 100.0) {
      desconto = totalSemDesconto - totalSemDesconto * 0.05;
      porcentagem = '5%';
    } else {
      porcentagem = '0%';
    }
    document.getElementById(
      'resposta-ex-onze-a'
    ).innerHTML = `Valor total da compra: R$${totalSemDesconto.toFixed(2)}.`;
    document.getElementById(
      'resposta-ex-onze-b'
    ).innerHTML = `Valor total com desconto: R$${desconto.toFixed(2)}.`;
    document.getElementById(
      'resposta-ex-onze-c'
    ).innerHTML = `O desconto foi de ${porcentagem}`;
  } else {
    document.getElementById(
      'resposta-ex-onze-a'
    ).innerHTML = `Por favor, preencha corretamente os campos.`;
    document.getElementById('resposta-ex-onze-b').innerHTML = ``;
    document.getElementById('resposta-ex-onze-c').innerHTML = ``;
  }
};

//Exercicio 12

document.getElementById('botao-ex-doze').onclick = function atacado() {
  var cumprimento = document.getElementById('input-cumprimento-ex-doze').value;
  var resposta = cumprimento.toUpperCase();
  switch (resposta) {
    case 'BOM DIA':
      document.getElementById('resposta-ex-doze-a').innerHTML =
        'Tenha uma ótima manhã';
      break;
    case 'BOA TARDE':
      document.getElementById('resposta-ex-doze-a').innerHTML =
        'Tenha uma ótima tarde';
      break;
    case 'BOA NOITE':
      document.getElementById('resposta-ex-doze-a').innerHTML =
        'Tenha uma ótima noite';
      break;
    default:
      document.getElementById('resposta-ex-doze-a').innerHTML = 'Não entendi';
      break;
  }
};

//Exercicio 13

document.getElementById('botao-ex-treze').onclick = function cadastro() {
  var numRegistro = Number(prompt('Quantos clientes serão cadastrados?'));
  if (numRegistro > 0) {
    var i = 1;
    var registros = {};
    while (i <= numRegistro) {
      var nameCidadao = prompt('Insira o nome para cadastro:');
      var idadeCidadao = Number(prompt('Agora insira a idade:'));
      registros[nameCidadao] = idadeCidadao;
      i++;
    }

    console.table(registros);

    for (var [key, value] of Object.entries(registros)) {
      if (value > 0) {
        if (value <= 17) {
          console.log(`${key} é menor de idade`);
        } else if (value >= 18) {
          console.log(`${key} é maior de idade`);
        }
      } else {
        console.log(`${key}, favor inserir corretamente sua idade`);
      }
    }
  } else {
    console.log('Usuário, por favor insira o número correto de cadastros');
  }
};
