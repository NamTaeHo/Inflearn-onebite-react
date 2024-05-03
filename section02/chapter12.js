function task() {
  setTimeout(() => {
    console.log("안녕하세요!");
  }, 3000);
}

task();

function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    console.log(sum);
    callback(sum);
  }, 3000);
}

add(1, 2, (value) => {
  console.log(value);
});

function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 4000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 3000);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
