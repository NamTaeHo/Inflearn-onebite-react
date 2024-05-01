
let num = 9;

if(num >= 10) {
  console.log("num은 10 이상입니다.")
}
else if (num >= 5){
  console.log("num은 5 이상입니다.")
}
else {
  console.log("거짓입니다.")
}



let animal = "cat";

switch ( animal){
  case "cat":{
    console.log("고양이");
    break;

  }
  case "dog":{
    console.log("강아지");
    break;

  }
  case "bear":{
    console.log("곰");
    break;
  }
  default:{
    console.log("그런 동물은 없습니다");
  }
}