
function unique(arr) {
  let newlist = []
  arr.forEach(element => {
    if (!newlist.includes(element)) {
      newlist.push(element)
    }
  });
  return newlist;
}
//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`

