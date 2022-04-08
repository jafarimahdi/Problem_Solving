build nested Object and defined the key and value

let result = data.reduce((acc, order) => {
return {
...acc,
[order.brand]: (acc[order.brand] || []).concat([order.id])
};
}, {});

let convertToNestedArray = Object.entries(result);

let out = convertToNestedArray.map((element) => {
let output = {};

    output["brand"] = element[0];
    output["beers"] = element[1];

    return output;

});

> merge two array to one object

var result = {};
keys.forEach((key, i) => result[key] = values[i]);

find the smallest value of an array and it's index

let smallest= hash[0];

for(let i = 0; i < hash.length; i++){
if(hash[i]< smallest){
smallest = hash[i];

    }

}

<!-- 2022, 03,13 -->

### function those can be use in javascript

-   Regular Function

-   HighOrder :

        the functions can accept others and
          it can take 3 parameter ( element, index, array self )

        - Map,
        - forEach,
        - Filter,
        - Every,
        - find,
        - [ Reduce => 4 parameter ]

    there is 2 type of the function accepted by them

               1- regular function
               2- Arrow function

-   Arrow Function

-   Factory Function

-   Constructor Function

      <!-- Make the example for the This keyword -->

## This keyword

    This key in Regular function(){ } // it call the one upper scope

    This Key in Arrow function ()=>{} // it call the windows and not working well

## Reference variable vs Primitive

## the matter of the ' use strict '

## Reudce function call

        Array

        In Foreach: multiple the elements
