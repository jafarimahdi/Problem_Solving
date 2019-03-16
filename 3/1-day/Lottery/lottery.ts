'use strict';
// Create a method that find the 5 most common lottery numbers in lottery.csv

const fs = require('fs');

function lottery(input) {

  let rows = fs.readFileSync(input, 'utf-8').split('\n');

  let cells = rows.map(value => value.split(';'))
  let numberCounts = {}
  //let numberCounts = new Map()

  // we will collect the count of the lottery numbers in a form of {'12':3, '14': 5}
  cells.forEach((row, i) => {
    row.forEach((value, j) => {
      if (j > 10) {
        //console.log(i, j, value)

        if (numberCounts[value] === undefined) {
          numberCounts[value] = 1
        } else {
          numberCounts[value]++
        }
      }
    })
  })




  //{'12':3, '14': 5}   =>    [['12', 3],['14', 5]]
  let numberCountArray = []
  for (let item in numberCounts) {
    numberCountArray.push([item, numberCounts[item]])    // make list inside other is important
  }
  //console.log(numberCountArray);

  let sortnumber = numberCountArray.sort((a, b) => b[1] - a[1])


  // sort the array


  return sortnumber.slice(0,5);
}
console.log(lottery('lottery.csv'));










/*
let testArray = [[1,2,3],[4,5,6]]

testArray.forEach((row, i) => {
console.log(i, row)
  row.forEach((cell, j) => {
    console.log(i, j, testArray[i][j])
  })
})
*/

// secound parametr is always index

