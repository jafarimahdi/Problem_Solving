'use strict ';
/*
An organization focused on environment protection kept track of the average temperature of three European countries to raise 
awareness of climate change. They stored their data of the last 22 years in a txt file that you can find here. Your job is to 
parse the data and find the relevant information as described in the task below.

Every data piece is seperated by a whitespace
Each line represents the average temperature of each country in the given year
The actual year can be found at the end of each line
Task
The organization would like to know the coldest and hottest year in each country. Please write a method that can read and parse the txt file mentioned above.

The application should have one parameter, the file path
The application should write to the console if the file was not found and stop gracefully
The application should write the data to the console as key => value pairs.
Example
Input

France Sweden Germany Year
16 16 17 1996
16 15 18 1997
17 18 18 1998
17 17 18 1999 
Output

France => 1996, 1998
Sweden => 1997, 1998
Germany => 1996, 1997
*/
const fs = require('fs');

function weather(input) {

  let readFile = fs.readFileSync(input, 'utf-8');
  let rows = readFile.split('\n');

  let header = rows[0].split(' ');
  //console.log(header);

  let others = [];
  for (let item = 0; item < header.length - 1; item++) {
    others[item] = { country: header[item] };
  }
  

//---------------------------------------------------------------------
  let item = rows.map(value => {return value.split(' ')})
  let first = item.map(value => { return [value[0],value[3]]})
  
  let sort = first.map(value => {return value.sort(function (a,b) { return a[0] - b[0]})})
  console.log(sort)



  //--------------------------------------------------------------------
  let year2 = [];
  for(let item = 0 ; item < rows.length; item ++){
    rows[item].split(' ');
    
  }
  





}
console.log(weather('2.txt'))









/*

let listAval = [['zia', 'rejmond'], ['peter', 'blanka'], ['mate', 'frozsi']];

let listDovom = [];

for (let element = 0; element < listAval.length; element++) {
  listDovom[element] = { name: listAval[element] };

}
console.log(listDovom);
*/
// besyar sadeh va manteghi hast shoma elemnthayi ra ke mikhahid dar list jadid dashte bashid  ra ba dadan key va list ghabli va elemenet value midahid





