function main(value) {
  console.log(value());
}

main(() => {
  console.log("i am sub");
});

function repeat(count, callback) {
  for (let i = 0; i <= count; i++) {
    callback(i);
  }
}

repeat(5, function (i) {
  console.log(i * 2);
});
