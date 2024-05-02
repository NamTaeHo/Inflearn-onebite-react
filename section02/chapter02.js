function returnFalse() {
  console.log("false 함수");
  return false;
}

function returnTrue() {
  console.log("true 함수");
  return true;
}

console.log(returnFalse() && returnTrue());

console.log(returnTrue() && returnFalse());

let person = { name: "남태호" };
let person1;

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName(person);
printName(person1);
