
let arr = [ 1, 2, [ 3, 4, [ 5 ] ] ];


function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

console.log(flatten(arr))