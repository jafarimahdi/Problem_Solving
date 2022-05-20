
let nameToGreet = 'Greenfox';

function greet(input?) {
  if (input === undefined) {
    return 'Greeting ' + nameToGreet;
  } else {
    return 'Greetings, dear ' + input;
  }
}
console.log(greet('mahdi'));
