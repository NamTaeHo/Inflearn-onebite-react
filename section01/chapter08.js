let var1;
let var2 = 10;
let var3 = 20;


let var4 = var1 ?? var2; 

console.log(var4);

let var5 = var1 ?? var3;

console.log(var5);

let var6 = var2 ?? var3;

console.log(var6);

let var7;

console.log(var1??var7??var3);

let var8 = 10

console.log(var8);

let res = var8 % 2 === 0 ? "짝수" : "홀수"

console.log(res);