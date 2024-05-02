// 1. filter

let arr = [
  { name: "이정환", hobby: "테니스" },
  { name: "홍길동", hobby: "테니스" },
  { name: "이주빈", hobby: "독서" },
];

const filtered = arr.filter((item) => {
  if (item.hobby === "테니스") {
    return true;
  }
});

console.log(filtered);

//2. map

let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, i, arr) => {
  console.log(item, i);
  return item * 2;
});

console.log(mapResult1);

let names = arr.map((item) => {
  return item.name;
});

console.log(names);

//3. sort

let arr3 = ["b", "c", "a"];

arr3.sort();

console.log(arr3);

let arr4 = [10, 3, 5];

arr4.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});

console.log(arr4);

//4. toSorted
let arr5 = ["a", "c", "b"];

const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

//5. join
let arr6 = ["hi", "im", "winterlood"];

const joined = arr6.join("_");

console.log(arr6);
console.log(joined);
