'use strict'

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
let fs = require('fs')

function readFile(input: string) {
  let line = 0;
  try {
    let reading = fs.readFileSync(input, 'utf-8');
    
    let makeLine = reading.split('\n');
    console.log(makeLine);

    line = makeLine.length;
  } catch{
    line = 0;
  }
  console.log(line);
}

readFile('count_lines.txt')


//            key words
// 1- vaghti file txt ra az jaye dige dar function seda mikonid bayad dakhele ' ' qutation bezarid ta ghabol bokoneh
// 2- ba dadan varible mitavanim meghdare try va catch ra dashte bashim va bazi konim 
// 3- dar akhare function cosole.log gerftim ta line ra az har do ja dashte bashim 
// 4- ba split be rahati mishavad txt ke migirim ra khat be khat khand 
// 5- qutation kheyli moham ast dar  split('\n');  va bayad gozashte shavad va error migirid age nabashe 