const data = require("../beers.json");

// let brands = [...new Set(data.map((item) => item.brand))];

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

// console.log(result);
// console.log(convertToNestedArray);

console.log(out);

