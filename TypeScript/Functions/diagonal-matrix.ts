
let matrix = [];  // faghat yek list khali mamoli darim
let line = 5

for (let high = 0; high < line; high++) {
  matrix[high] = []                       // high yek list khali hast ke dakhele matrix jayash midahim
  for (let width = 0; width < line; width++) {
    if (high + width === line - 1) {  // kheyli mohem hast ke -1 dashte bashad ta taadol barghara bashad
      matrix[high][width] = 1   // inja az dakhele matrix be dakhele list width eshareh mikonim az bala be payieen va element midahim 
    } else {
      matrix[high][width] = 0
    }
  }
}
console.log(matrix);








