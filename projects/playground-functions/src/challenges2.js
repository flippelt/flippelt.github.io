/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
// Desafio 11
// Crie uma função chamada generatePhoneNumber que receba uma array com 11 números e retorne um número de telefone, respeitando parênteses, traços e espaços.
// Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], generatePhoneNumber deverá retornar (12) 34567-8901.
// Se a função receber um array com tamanho diferente de 11, a mesma deve retornar "Array com tamanho incorreto.".
// Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, generatePhoneNumber deverá retornar a string "não é possível gerar um número de telefone com esses valores".

function generatePhoneNumber(arr) {
  let phoneNumber;
  // Retorne a string "Array com tamanho incorreto." caso o array tenha o tamanho diferente de 11
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  // Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum dos números do array seja menor que 0
  // Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número do array seja maior que 9
  for (let i of arr) {
    if (i < 0 || i > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  // Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número do array se repetir 3 vezes ou mais
  // código baseado no material do https://flexiple.com/find-duplicates-javascript-array/
  for (let i of arr) {
    let count = 0;
    for (let j of arr) {
      if (i === j) {
        count += 1;
        // console.log(count);
        if (count >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }

  }
  // Separar números do arrays
  // https://www.w3schools.com/jsref/jsref_slice_array.asp
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  // DDD
  let ddd = arr.slice(0, 2).join('');
  // console.log(ddd);
  // Primeira Parte
  let partOne = arr.slice(2, 7).join('');
  // console.log(partOne);
  // Segunda Parte
  let partTwo = arr.slice(7).join('');
  // console.log(partTwo);
  // Retorne um número de telefone, respeitando parênteses, traços e espaços caso os números do array estejam de acordo com as especificações
  // Esse espaço depois do parentese me travou por 2 horas!!!!
  phoneNumber = `(${ddd}) ${partOne}-${partTwo}`;
  return phoneNumber;
}

// Desafio 12
function triangleCheck(a, b, c) {
  if (a < Math.abs(b + c) && b < Math.abs(a + c) && c < Math.abs(b + a)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
// Fontes usadas para entender .match e expressões regulares
// https: //developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match
// https://www3.ntu.edu.sg/home/ehchua/programming/howto/Regexe.html#:~:text=%5Cd%20(digit)%20matches%20any,%5E0%2D9%5D%20).
function hydrate(drink) {
  let str = drink;
  // \d+ é usaado para encontrar qualquer digito /g é o modificador global usado para encontrar todos os matches.
  str = drink.match(/\d+/g).map(Number);
  let result = 0;
  for (let i = 0; i < str.length; i += 1) {
    result += str[i];
  }
  if (result === 1) {
    return `${result} copo de água`;
  }
  return `${result} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
