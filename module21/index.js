const name = "mamunur";
const Fname = "Kader";
console.log(name.toUpperCase());
console.log(Fname.toLowerCase());
const para = "Higher Education is very important for every person";
let find1 = para.toLocaleLowerCase().includes("education");
console.log(find1);
let find2 = para.indexOf("important");
console.log(find2);
let find3 = para.startsWith("Higher");
console.log(find3);
let find4 = para.endsWith("person");
console.log(find4);

let describe =
  "Proper education is important for every nation, In that case in Bangladesh is very poor on she's education system. It's totaly currupted by government of Bangladesh.";
let divid = describe.split(" ");
let char = describe.split("");
let getFind = char[10];
getFind = "L";
console.log(getFind);

let partial = describe.slice(5, 10);
console.log(typeof partial);
let partial2 = describe.substring(5, 10);
console.log(typeof partial2);
let findAt = describe.at(4);
console.log(findAt);

let lyrics = '"    Thumi bondhu kala pakhi ami jaeno ki  "';
console.log(lyrics);
let trim = lyrics.trimStart();
console.log(trim);
// let joint = lyrics.join(": ");

//to get value not mension positive or negetive
let num1 = 55;
let num2 = 60;
let gap = Math.abs(num1 - num2);
if (gap < 9) {
  console.log("You can be friend.");
} else {
  console.log("You guy stay apart.");
}

let power = Math.pow(2, 3);
console.log(power);
let num3 = 4.023;
// let round = Math.round(num3);
// let round = Math.floor(num3);
let round = Math.ceil(num3);
console.log(round);

// let random = Math.random() * 10;
let random = Math.round(Math.random() * 10);
console.log(random);

// swap discussion

let numb1 = 10;
let numb2 = 20;
// let numb = numb1;
// numb1 = numb2;
// numb2 = numb;
console.log(numb1, numb2);

// destructuring discussion
[numb1, numb2] = [numb2, numb1];
console.log(numb1, numb2);

let jim = 90;
let della = 95;
let chinku = 99;
if (jim > della && jim > chinku) {
  console.log("Jim will get the cake");
} else if (della > jim && della > chinku) {
  console.log("Della will get the cake.");
} else {
  console.log("chinku will get the cake.");
}

// get the highest number from an array
function maxNumber(numbers) {
  let initialValue = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    let getElement = numbers[i];
    if (getElement > initialValue) {
      initialValue = getElement;
    }
  }
  return initialValue;
}
let heights = [167, 170, 155, 172, 165, 160, 260];
let getHeight = maxNumber(heights);
console.log("The largest number is : ", getHeight);

// string forward mathods
// function reverseString(str) {
//   for (let i = 0; i < str.length; i++) {
//     let getStr = str[i];
//     console.log(getStr);
//   }
// }
// let str = "Hello World!, I am mamunur rashid, I am a Bangladeshi.";
// let getres = reverseString(str);
// console.log(getres);

// reverse string method
// function reverseString(str) {
//   for (let i = str.length - 1; i >= 0; i--) {
//     let getStr = str[i];
//     console.log(getStr);
//   }
// }
// let str = "Hello World!, I am mamunur rashid, I am a Bangladeshi.";
// let getres = reverseString(str);

// string concatination discussion

// function reverseString(str) {
//   let strConcat = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     let getStr = str[i];
//     strConcat += getStr;
//     console.log(getStr, strConcat);
//   }
//   return strConcat;
// }
// let str = "Hello World!, I am mamunur rashid, I am a Bangladeshi.";
// let getres = reverseString(str);
// console.log(getres);

// word reverse from a sting
function reverseWord(word) {
  let Word = word.split(" ");
  let getArrWord = [];
  for (let i = Word.length - 1; i >= 0; i--) {
    let getWord = Word[i];
    // console.log(getWord);
    getArrWord.push(getWord);
  }
  let getReWord = getArrWord.join(" ");
  return getReWord;
}
let word = "I am a good boy";
let resul = reverseWord(word);
console.log(resul);

let stri = "I love my country very much.";
let findStr = stri.split(" ");
console.log(findStr);
let reverseSplit = findStr.reverse();
console.log(reverseSplit);
let joinStr = reverseSplit.join(" ");
console.log(joinStr);

// shortCurt Reverse string

function shortCurtStr(Strg) {
  return Strg.split(" ").reverse().join(" ");
}
let myName = "My name is Mamunur rashid";
let view = shortCurtStr(myName);
console.log(view);

// discussion about fibonacci
let fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);
