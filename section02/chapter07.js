let arr1 = [1, 2, 3];
// 1. push
arr1.push(4, 5, 6, 7);

console.log(arr1);

// 2.pop
let popped = arr1.pop();

console.log(popped);
console.log(arr1);

//3. shift
let shifted = arr1.shift();

console.log(shifted);
console.log(arr1);

//4. unshift
arr1.unshift(0);

console.log(arr1);

//5. slice

let sliced1 = arr1.slice(2, 4);
let sliced2 = arr1.slice(2);
let sliced3 = arr1.slice(-3);

console.log(arr1);
console.log(sliced1);
console.log(sliced2);
console.log(sliced3);

//6. concat

let arr2 = [1, 2];
let arr3 = [3, 4];

let concatted = arr2.concat(arr3);

console.log(concatted);
