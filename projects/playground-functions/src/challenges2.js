// Desafio 11
function generatePhoneNumber(arr) {
  let phoneNumber = '(';
  let i = 0;
  if (arr.length < 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let num in arr) {
    if (i === 2) {
      phoneNumber += ') ';
      i += 1;
    }
    if (i === 8) {
      phoneNumber += '-';
      i += 1;
    }
    phoneNumber += arr[num];
    i += 1;
  }
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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
