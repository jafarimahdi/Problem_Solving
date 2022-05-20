'use strict';

function substrlist(word: string, list: string[]) {
  let find: string = '';

  find = (list.filter(item => {
    if (item.indexOf(word) !== -1) { return word }
  })[0])

  return (list.indexOf(find))
}

//  Example
console.log(substrlist('ching', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `4`
console.log(substrlist('not', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `-1`

  //                                key words 

// 1- agar mikhahid varibli ra return konid badan , an ra biron az shart dorost konid ta besahavd return  kard badan  be rahati
// 2-  filter dar inja be dakhele tak tak itemha rafte va check mikoneh char ha ro  dar vagheh mesle ForEach ya Map LOOP kar mikonad FILTER
// 3- indexOf( ) -1   yeki az rahaye check kardan dar array baray peyda kardan  YEK kalame ya charecteri ke mikhahim hast 