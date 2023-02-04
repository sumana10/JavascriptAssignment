let nextEdge = (side1, side2) => {
    return side1 + side2 - 1;
};

console.log(nextEdge(8, 10)); // 17

function rightShift(num, shift) {
    return Math.floor(num / Math.pow(2, shift));
}

let num = 10;
let shift = 2;
let result = rightShift(num, shift);
console.log(result); // 2

function secondDerivative(b, m) {
    return b * (b - 1) * Math.pow(m, b - 2) + Math.exp(b * m);
}
let b = 2;
let m = 3;
result = secondDerivative(b, m);
console.log(result); // (2 * 1 * Math.pow(3, 2 - 2)) + Math.exp(2 * 3) = 6 + Math.exp(6)

let sumTriangleSequence = (n) => {
    let sum = 0;
    let terms = [];
    for (let i = 1; i <= n; i++) {
      terms.push(sum += i);
    }
    sum = terms.reduce((accu, curr)=>accu+curr);
    return sum;
};

console.log(sumTriangleSequence(6))

const changeEnough = (arr, due) => {

    const coins = [0.25, 0.1, 0.05, 0.01];
    const amount = arr.reduce((sum, val, i) => sum + val * coins[i], 0);
  
    return amount >= due;
};

console.log(changeEnough([2, 100, 0, 0], 14.11)); // false