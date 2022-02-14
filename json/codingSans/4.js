const data = require("./beers.json");

function customerChoice(choice) {
    let result = [];
    let out = data.map((element) => {
        for (let i of element.ingredients) {
            if (i.name == choice && i.ratio == 0) {
                result.push(element.id);
            }
        }
    });
    return result;
}

console.log(customerChoice("wheat"));
