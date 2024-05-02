//1. foreach

let arr1 = [1, 2, 3];

arr1.forEach(function (a, b, c) {
  console.log(b, a * 2);
  b = b * 2;
});

console.log(arr1);

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr);

//2. includes

let arr2 = [1, 2, 3];

let isInclude = arr2.includes(3);

console.log(isInclude);

//3. indexOf

let arr3 = [1, 2, 3];

let index = arr3.indexOf(2);

console.log(index);

//4. findindex

let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  if (item === 3) return true;
});

console.log(findedIndex);

//5. find
let arr5 = [{ name: "이정환" }, { name: "홍길동" }];

let finded = arr5.find((item) => item.name === "이정환");

console.log(finded);
