const data = require("./beers.json");

function allergies(choice, data) {
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

console.log(allergies("wheat", data));
