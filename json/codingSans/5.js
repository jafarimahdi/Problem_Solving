const data = require("./beers.json");

function ingredientRatio(data) {
    let definedRatio = data.map((element) => {
        let out = {};
        let myRatio = 0;

        for (let item of element.ingredients) {
            myRatio += Number(item.ratio);
        }
        out["id"] = element.id;
        out["ratio"] = myRatio;

        return out;
    });

    
    let sortWithRatio = definedRatio.sort((a, b) =>
        a.ratio > b.ratio ? 1 : b.ratio > a.ratio ? -1 : 0
    );

    let beersId = sortWithRatio.map((element) => element.id);

    return JSON.stringify(beersId)
}

console.log(ingredientRatio(data));
