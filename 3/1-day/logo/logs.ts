'use strict';
// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.


let fs = require('fs');
let read = fs.readFileSync('log.txt', 'utf-8');
read = read.split('\n')
//console.log(read);

let makeList = read.map(value => value.split('  '))
console.log(makeList);

let uniqeNumber = [];
makeList.forEach(element =>  uniqeNumber.push(element[2]) )

console.log(uniqeNumber)



//              key words 

// 1- dar SPLIT(' ')  fasele beyn qutation besyar mohem hast va bayad ba deghat be an tavajoh konid
// 2- split(' ')  ba ARRAY kar nemikonad bayad hatman ba  element ya file string estefadeh shavad 