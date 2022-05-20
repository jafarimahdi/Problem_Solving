
const fs = require('fs');

// first way 
/*
console.log(process.argv);
if (process.argv[2] === 'hello ') {
    console.log('oh helllo there ');
} else {
    console.log('please say hi next time');
}*/

// for the comenectiin 
// secound one 

let readlineSync = require('readline-sync');
let todoItem = readlineSync.question(
    'what wouls you like to add to your list?');
if (todoItem === '') {
    console.log(`command line todo application : 
 ------------------------------
 command line arguments :
 -l  Lists all the tasks
 -a  Adds a new task
 -r  Removes an task
 -c  Completes an task `);

}
