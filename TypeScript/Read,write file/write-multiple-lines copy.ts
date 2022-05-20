
// Create a function that takes 3 parameters: a path, a word and a number
let fs = require('fs');

function wirtefiles(path: string, word: string, line: number) {
  let repat = [];
  for (let i = 0; i < line; i++) { repat.push(`${word}\n`) }
  console.log(repat);
  try {
    fs.writeFileSync(path, repat);
  } catch (error) {
    throw new Error("can't read the file");
  }
}
wirtefiles('file.txt', 'apple', 3);

//    ----------------------------------------------
let read;
try {
  read = fs.readFileSync('file.txt', 'utf-8');
  console.log(read);

} catch (err) {
  console.log('ther is some mistake');
}

//                  key words 
//  1- har moghe khasti az list khali baraye .push() estefadeh konid hatma alamte list khali [] ra begzarid ta betavand befahmad ke in list montezere push hast
