function BrandAndId(input) {
    fetch(input)
        .then((response) => response.json())
        .then((data) => {

            for (let i of data) {

                // make array and push all the Brand and Beer name there and show in the result 

                document
                    .querySelector("#show")
                    .insertAdjacentHTML(
                        "beforebegin",
                        `<p> ${i.brand} : ${i.id}</p>`
                    );
                // console.log(i.brand + ":" + i.id);
            }
        });
}

BrandAndId("beers.json");
