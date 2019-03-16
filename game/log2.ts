// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

function uniqe(input) {

  let fs = require('fs');
  let readFile = fs.readFileSync(input, 'utf-8');
  let makeList = readFile.split('\n');
  //console.log(makeList);

  let makeSpace = makeList.map(element => element.split('  '));
  //console.log(makeSeprate);

  let uniqNumber = [];
  makeSpace.forEach(value => uniqNumber.push(value[2]))
  return uniqNumber
}
console.log(uniqe('log.txt'))

// --------------------------------------------------

function request(input) {
  let fs = require('fs');
  let readFile = fs.readFileSync(input, 'utf-8');

  let makeList = readFile.split('\n');
  let makeLine = makeList.map(value => value.split(' '));
  //console.log(makeLine);

  let get = [];
  let post = [];
  makeLine.forEach(line => {
    if (line[11] === 'POST') {
      post.push(line[11]);
    }
    else if (line[11] === 'GET') {
      get.push(line[11]);
    }
  })
  let postLength = post.length;
  let getLength = get.length;
  let ratio = postLength / getLength;

  return ratio
}

console.log(request('log.txt'));


//            KEY WORDS

// 1- dar Split(' ') fasele beyne qutqtion kheyli mohom ast
// 2- split(' ') faghat ba string ya element stringe dakhele array kar mikinad, nemitavanid mostaghim ba array estafadeh konid 
// 3- mishavad be sadegi elemnthaye array ra estefadeh kard faghat be index[] an 
// 4- fasele ya jaye khali ya alametha besyar mohom ast va khodash yek character be hesab miayad