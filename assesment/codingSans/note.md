

build nested Object and defined the key and value   

let result = data.reduce((acc, order) => {
    return {
        ...acc,
        [order.brand]: (acc[order.brand] || []).concat([order.id])
    };
}, {});

let convertToNestedArray = Object.entries(result);

let out = convertToNestedArray.map((element) => {
    let output = {};

    output["brand"] = element[0];
    output["beers"] = element[1];

    return output;
});



>merge two array to one object 

var result = {};
keys.forEach((key, i) => result[key] = values[i]);




find the smallest value of an array and it's index

let smallest= hash[0];

for(let i = 0; i < hash.length; i++){
    if(hash[i]< smallest){
        smallest = hash[i];

    }
}
