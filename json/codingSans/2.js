const data = require("./beers.json");

function customerChoice(choice, data) {
    let result = [];

    for (let item of data) {
        if (item.type !== choice) {
            result.push(item.id);
        }
    }

    return JSON.stringify(result);
}

console.log(customerChoice("Brown", data));
