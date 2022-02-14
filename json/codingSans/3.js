const data = require("./beers.json");

let result = data.reduce((acc, order) => {
    return {
        ...acc,
        [order.brand]: (acc[order.brand] || []).concat([order.price]),
    };
}, []);

console.log(result);

let out = Object.values(result);

// console.log(out);

let hash = [];
for (let element of out) {
    let sum = 0;
    for (let i of element) {
        sum += Number(i);
    }
    hash.push((sum / element.length));
}
let isKey = Object.keys(result);

// console.log('the keys:',Object.keys(result));
// console.log('the value:',hash);

let smallest= hash[0];

for(let i = 0; i < hash.length; i++){
    if(hash[i]< smallest){
        smallest = hash[i];

    }
}
let myIndex = hash.indexOf(smallest)
// console.log(myIndex);

// console.log(isKey[myIndex]);      // + " " for making a string output 

var done = {};
isKey.forEach((key, i) => done[key] = hash[i]);




// console.log('COMPLETE', done);
