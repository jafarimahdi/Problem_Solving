'use strict';

class Sharpie {
  color: string;
  width: number;
  inkAmount: number;

  constructor(color, width) {
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
  }

  use(input?) {
    if (input) {
      this.inkAmount -= input;
    } else {
      this.inkAmount--;
    }
  }
}

export { Sharpie };
