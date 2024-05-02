let arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];

for (let item of arr2) {
  console.log(item);
}

let person = {
  name: "이정환",
  age: "27",
  job: "개발자",
};

let keys = Object.keys(person);
console.log(keys);

for (let key of keys) {
  console.log(key, person[key]);
}

let values = Object.values(person);
console.log(values);

for (let value of values) {
  console.log(value);
}

for (let key in person) {
  console.log(key, person[key]);
}
