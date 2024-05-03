//1. Date
let date1 = new Date();
console.log(date1);

let date2 = new Date("1997-01-07/22:11:12");
console.log(date2);

//2. timeStamp

let ts1 = date1.getTime();
console.log(ts1);
let date4 = new Date(ts1);
console.log(date4);

//3. 시간 요소 추출

let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let day = date1.getDay();
let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();

console.log(year, month, day, hour, minute, second);

//4. 시간 수정하기

date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);

console.log(date1);

//5. 여러 포맷

console.log(date1.toDateString());
console.log(date1.toLocaleString());
