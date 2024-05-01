function greeting() {
  console.log("안녕하세요!");
}

greeting();

function getArea(width, height) {
  function another() {
    console.log("어나더");
  }

  let area = width * height;

  return area;
}

console.log(getArea(10, 200));
console.log(getArea(30, 20));
