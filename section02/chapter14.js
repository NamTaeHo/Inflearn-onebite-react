//async

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "이정환",
        id: "winterlood",
      });
    }, 3000);
  });
}

console.log(getData());

//await

async function printData() {
  const data = await getData();
  console.log(data);
}

printData();
