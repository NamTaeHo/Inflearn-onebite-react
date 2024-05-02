let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f1) {
  console.log("Falsy");
}

let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t5) {
  console.log("Truthy");
}

function printName(person) {
  if (!person) {
    console.log("person.name 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "남태호" };
printName(person);

let person2;
printName(person2);
