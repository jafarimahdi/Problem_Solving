const data = require("../beers.json");

function customerChoice(choice) {
    let result = [];

    for (let item of data) {
        if (item.type !== choice) {
            result.push(item.id);
        }
    }

    return result;
}

console.log(customerChoice("Wheat"));
