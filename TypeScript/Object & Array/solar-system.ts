'use strict';

let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn",  "Uranus", "Neptune"

function putSaturn(input) {
  input.splice(5, 0, 'Saturn')
  return input
}

console.log(putSaturn(planetList))


