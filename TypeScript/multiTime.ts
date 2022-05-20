' uses strict'

let matrix = [
  [1, 3, 6, 2],
  [7, 5, 6, 1],
  [3, 3, 1, 5],
  [9, 0, 5, 3]
]

function multitime(matrix) {
  let counter = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i % 2 === 0) {
        if (matrix[i][j] % 2 === 0) {
          matrix[i][j] *= 2
        }
      } else {
        if (matrix[i][j] % 2 !== 0) {
          matrix[i][j] *= 2
        }
      }
    }
  }
  /*
   for (let rows of matrix) {
 
     if (counter % 2 === 0) {
       rows.forEach(element => {
         if (element % 2 === 0) {
           element *= 2
         }
       })
     }
     else {
       for (let item of rows) {
         if (item % 2 !== 0) {
           item *= 2
         }
       }
     }
     counter ++
   }*/
  return matrix
}
console.log(multitime(matrix));

/*
[
  [1,  3,  12, 4],
  [14, 10, 6,  2],
  [3,  3,  1,  5],
  [18, 0,  10, 6]
] */