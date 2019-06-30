'use strict';

const fs = require('fs');

function A66(input) {

  let readFile = fs.readFileSync(input, 'utf-8').split('\n');
  let rows = readFile.map(value => value.split(' '));   // make list by rows
  //console.log(rows);

  let uniqList = [];
  for (let element of rows) {
    if (element[6] === '04' || element[6] === 'F-1')
      uniqList.push(element)
  }
  let newUniqList = uniqList.map(value => { return value[11].slice(-11, -1) })    //  make Array just for  IDCode or CardNumber and use the RETURN*
  //console.log(newuniqList);

  let ArrayToObject = {};           // converting Array to object to find elelemnts how many time repeat it

  for (let idCode of newUniqList) {
    if (ArrayToObject[idCode] === undefined) {
      ArrayToObject[idCode] = 1
    } else {
      ArrayToObject[idCode]++
    }
  }

  let objectToArray = [];                 // converting Object to Array for sorting element

  for (let item in ArrayToObject) {
    objectToArray.push([item, ArrayToObject[item]])
  }

  let sort = objectToArray.sort((a, b) => b[1] - a[1]);   // sort from the biggest to small
  return sort
}
console.log(A66('1.csv'));


//                  key words
// 1- har moghe ke undifind dashti dar jayi mitavanid az  return estefadeh koni khah function bashad ya varible ba tavajoh be method

//              Mate
/*
const fs = require('fs');

function count_ids(filename) {
  let rows = fs.readFileSync(filename, 'utf-8').split('\n');
  let result = {};

  for (let row of rows) {
    let parts = row.split(',');
    if (parts[5] === 'A66 - 04 FÕBEJÁRAT (F-1) Door #1') {
      let card_number = parts[parts.length - 1];
      if (result[card_number] === undefined) {
        result[card_number] = 1;
      } else {
        result[card_number]++;
      }
    }
  }
  return result;
}
console.log(count_ids('1.csv'));
*/