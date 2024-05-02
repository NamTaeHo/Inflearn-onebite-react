let arr = [1, 2, 3];

let [one, two, three, four = 10] = arr;

console.log(one, two, three, four);

let person = {
  name: "이정환",
  age: "27",
  hobby: "테니스",
};

let { name, age, hobby, job = "개발자" } = person;

console.log(name, age, hobby, job);

console.log(person);

let { age: myAge, hobby1, nameextra = "hello" } = person;

console.log(myAge, hobby1, nameextra);

const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
