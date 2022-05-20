'use strict';

const args = process.argv.splice(2); // Just a helper for you to get started

function calculate(simbol, first, secound) {

  if (simbol == '+') { return first + secound }
  if (simbol == '-') { return first - secound }
  if (simbol == '*') { return first * secound }
  if (simbol == '%') { return first % secound }
  if (simbol == '/') { return first / secound }
}

console.log(calculate('+', 10, 5));