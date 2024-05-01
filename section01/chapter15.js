let obj1 = new Object();

let obj = {};

let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
  job: "개발자",
  extra: {},
  10: 20,
};

console.log(person);

let name = person.name;

console.log(name);

let age = person["age"];

console.log(age);

let property = "hobby";
let hobby = person[property];

console.log(hobby);

person.jobbb = "aaaa";

console.log(person);

person.jobbb = "bbbbbb";

console.log(person);

delete person.job;
delete person["jobbb"];

let result1 = "name" in person;

console.log(result1);

let result2 = "cat" in person;

console.log(result2);
