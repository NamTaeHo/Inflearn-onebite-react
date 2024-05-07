// async
// 어떤 한수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드

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
