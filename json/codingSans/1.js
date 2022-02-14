const data = require("./beers.json");

function groupBeerByBrand(data) {
    let definedObj = data.reduce((acc, order) => { 
        return {
            ...acc,
            [order.brand]: (acc[order.brand] || []).concat([order.id]),
        };
    }, {});

    let convertToNestedArray = Object.entries(definedObj);

    let output = convertToNestedArray.map((element) => {
        let out = {};

        out["brand"] = element[0];
        out["beers"] = element[1];

        return out;
    });
    return output;
}

console.log(groupBeerByBrand(data));
