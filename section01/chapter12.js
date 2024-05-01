function funcA() {
  console.log("funcA");
}

let varA = funcA();

console.log(varA);

console.log(typeof funcA);

let varC = () => {
  return 1;
};

console.log(varC());

let varCC = (a, b, c) => {
  return a + b + c;
};

console.log(varCC(3, 4, 5));
