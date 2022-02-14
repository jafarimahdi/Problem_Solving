const data = require("./beers.json");

let result = data.reduce(function (acc, obj) {
    let key = Number([obj.price]);
    // console.log(key);

    // let random = Math.ceil(key);
    // console.log(random);


    // if ((Math.round(key) % 100) == 0) {




        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj.id);
        return acc;
    // }
}, {});

console.log(result);
