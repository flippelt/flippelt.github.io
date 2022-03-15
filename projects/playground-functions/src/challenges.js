/* eslint-disable complexity */
// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  const split = string.split(' ');
  return split;
}

// Desafio 4
// Fonte para o return foi pega no seguinte site:
// https://eslint.org/docs/rules/prefer-template
function concatName(array) {
  let lastItem = array.pop();
  let firstItem = array[0];

  return `${lastItem}, ${firstItem}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  // Definindo o maior número dentro do array.
  // Referêncoas usadas:
  // Para encontrar o maior número foi usada a função Math.max()
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  // Como a operação acima causava retorno NaN, a pesquisa de como usar a função Math.max() em arrays resultou no resultado do uso de Spread (...) para situações em que uma expressão array precisa ser expandida.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  let high = Math.max(...array);
  let total = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === high) {
      total += 1;
    }
  }
  return total;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // Considero esse um dos mais difíceis até o momento, encontrei a resposta vendo como ignorar se um número é negativo ou positivo, encontrando a função abs que mostra o valor absoluto de um número independente dele ser negativo ou positivo.
  // Fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  let posCat1 = Math.abs(mouse - cat1);
  let posCat2 = Math.abs(mouse - cat2);
  if (posCat1 < posCat2) {
    return 'cat1';
  }
  if (posCat1 > posCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      result.push('fizz');
    } else if (array[i] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
// Agradecimentos ao MD pela clarificação do uso do replace
// Fonte:
// https://www.w3schools.com/jsref/jsref_replace.asp
function encode(string) {
  let code = string;
  for (i = 0; i < string.length; i += 1) {
    if (string[i] === "a") {
      code = string.replace("a", "1");
    }
    else if (string[i] === "e") {
      code = string.replace("e", "2");
    }
    else if (string[i] === "i") {
      code = string.replace("i", "3");
    }
    else if (string[i] === "o") {
      code = string.replace("o", "4");
    }
    else if (string[i] === "u") {
      code = string.replace("u", "5");
    }
    string = code;
  }
  return code;
}

function decode(string) {
  let code = string;
  for (i = 0; i < string.length; i += 1) {
    if (string[i] === "1") {
      code = string.replace("1", "a");
    }
    else if (string[i] === "2") {
      code = string.replace("2", "e");
    }
    else if (string[i] === "3") {
      code = string.replace("3", "i");
    }
    else if (string[i] === "4") {
      code = string.replace("4", "o");
    }
    else if (string[i] === "5") {
      code = string.replace("5", "u");
    }
    string = code;
  }
  return code;
}

// Desafio 10
function techList(arr, name) {
  let list = [];
  if (arr.length === 0) {
    return 'Vazio!';
  }
  arr.sort();
  for (let i = 0; i < arr.length; i += 1) {
    list.push({
      tech: arr[i],
      name,
    });
  }
  return list;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
