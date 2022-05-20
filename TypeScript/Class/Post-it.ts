'use strict';

class PostIt {
  backgrandColor;
  text;
  textColor;

  constructor(backgrand: string, text: string, textColor: string) {
    this.backgrandColor = backgrand;
    this.text = text;
    this.textColor = textColor;
  }
}

let orange = new PostIt('orange', 'Idea1', 'blue');
console.log(orange);

let pink = new PostIt('pink', 'Awsome', 'black');
console.log(pink);

let yellow = new PostIt('yellow', 'Superb', 'green');
console.log(yellow);
