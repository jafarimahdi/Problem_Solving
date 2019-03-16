'use strict';

// Create a method that find the 5 most common lottery numbers in lottery.csv
const fs = require('fs');

function lottery(input) {

  let readFile = fs.readFileSync(input, 'utf-8').split('\n');
  let rows = readFile.map(value => value.split(';'))

  let myObject = {};

  rows.forEach((value, index) => {     // index faghat neshan dahendeh makan ast va migoyad ke in mitavanad object shavad
    value.forEach((item, makan) => {
      if (makan > 10) {
        if (myObject[item] === undefined) {   // object va item in array
          myObject[item] = 1
        } else {
          myObject[item]++
        }
      }
    })
  })


  let convertObjectToArray = [];  // converting object to array for soerting the element

  for (let item in myObject) {
    convertObjectToArray.push([item, myObject[item]])       //   [ [    ] ] mohem ast ta baray har element array jodaganeh dorst konad
  }

  let sortnumber = convertObjectToArray.sort((a, b) => b[1] - a[1])     // use function for sort from bigesst to small one

  let must5Common = sortnumber.slice(0, 5);

  return must5Common
}



console.log(lottery('lottery.csv'));








//            key words 

//  dalil asli in task tabdil kardan array be object va Object be Array hast 
// 1- dar split ( ), beyne parants neshan dahandeye meyari hast ke mikhahid joda kond elementha ra 
//       mitavand yek fasele bashad ya bishtar va ya comma ya semicolon ya dat ya alamathaye digar
// 2- dar functionhayi mesl forEach ya for loop ya map avalin parametr hamishe value va dovomi mitavanad index an bashad
// vgaghti ma parametr dovom ra dadim dar line-13 eshareh kardim ke mitavanad object shavd in file
// 3- dar line-16 esharaeh kardim be object khali ke darim va dar kenarash az item line-14 estefadeh kardim ke neshan dahandeh mix kardan anha ast









