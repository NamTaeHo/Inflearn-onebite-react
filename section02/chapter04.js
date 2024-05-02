let arr1 = [1, 2, 3];
let arr2 = [4, arr1, 5, 6];

console.log(arr2);

let arr3 = [4, ...arr1, 5, 6];

console.log(arr3);

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

console.log(obj2);

function funcB(...rest) {
  console.log(rest);
}
