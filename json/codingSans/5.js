const data = require("./beers.json");

let result = data.map((element) => {
    let out = {};
    let myRatio = 0;

    for (let item of element.ingredients) {
        myRatio += Number(item.ratio);
    }
    out["id"] = element.id;
    out["ratio"] = myRatio;

    return out;
    // console.log(out);
});
// console.log(result);

let fortToSmall = result.sort((a, b) =>
    a.ratio > b.ratio ? 1 : b.ratio > a.ratio ? -1 : 0
);
// console.log(findSmallest);

let output = fortToSmall.map((element) => element.id)

console.log(output);

