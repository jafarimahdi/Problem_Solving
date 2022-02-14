const data = require("./beers.json");

function cheapestBrand(data) {
    let collectBeers = data.reduce((acc, order) => {
        // collect all the beers by them brand and price
        return {
            ...acc,
            [order.brand]: (acc[order.brand] || []).concat([order.price]),
        };
    }, []);

    let allBrands = Object.keys(collectBeers); // only brands
    let beersPrice = Object.values(collectBeers); // only prices

    let calculateTheAverage = []; // average of the prices for each brand
    for (let element of beersPrice) {
        let sum = 0;
        for (let i of element) {
            sum += Number(i);
        }
        calculateTheAverage.push(sum / element.length);
    }

    let findCheapest = calculateTheAverage[0]; // find the cheapest
    for (let i = 0; i < calculateTheAverage.length; i++) {
        if (calculateTheAverage[i] < findCheapest) {
            findCheapest = calculateTheAverage[i];
        }
    }

    let getCheapestIndex = calculateTheAverage.indexOf(findCheapest);

    return allBrands[getCheapestIndex]; // find the brand by help of index
}

console.log(cheapestBrand(data));

