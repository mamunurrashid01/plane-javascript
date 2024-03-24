// let arr = ["sajid", "mamun", "kamal", "jubayer bin rased", "Chinku"];
// function bestFriend(friends) {
//   let getName = [];
//   for (let i = 0; i < friends.length; i++) {
//     let getVal = friends[i];
//     console.log(getVal);
//     if (getVal.length > getName.length) {
//       getName = getVal;
//     }
//   }
//   return getName;
// }

// let inputVal = bestFriend(arr);
// // console.log("THis is the value of bigger name:", inputVal);

// let num = [45, 87, 90, 63, -56, 71, 28];
// function onlyPositive(number) {
//   for (let i = 0; i < number.length; i++) {
//     let element = number[i];
//     console.log(element);
//     if (element < 0) {
//       break;
//     }
//   }
// }
// let calFun = onlyPositive(num);

// // Assignment of module 23

// function cubeNumber(number) {
//   if (typeof number !== "number") {
//     return "Please input a valid number not strings or others";
//   }
//   return number ** 3;
// }
// let inputValue = cubeNumber(3);
// // console.log(inputValue);

// function matchFinder(string1, string2) {
//   if (typeof string1 !== "string" || typeof string2 !== "string") {
//     return "Please input a valid string not others types of data.";
//   }
//   let result = string1.includes(string2);
//   return result;
// }
// let str1 = "Mamunur";
// let str2 = "ras";
// let strr = matchFinder(str1, str2);
// // console.log(strr);

// let address = { street: "", house: "15A", society: "Earth perfect" };
// let addressFind = Object.values(address);
// console.log(addressFind);
// function findAdress(obj) {
//   let getnal = [];
//   for (let i = 0; i < obj.length; i++) {
//     let element = obj[i];
//     if (element[0] == " " || element[1] == " " || element[2] == " ") {
//       get.push(element);
//     }
//   }
//   return getnal;
// }
// // let get = findAdress(addressFind);
// // console.log(get);
// // console.log(getnal);

// // 3no problems
// let pet = ["elephant", "cat", "dog", "rat", "parrot"];
// // let result = pet.slice(1, 4);
// // console.log(result);
// let orResult = pet.splice(1, 0, "horse");
// // console.log(orResult);
// console.log(pet);

// // if you want to loop throw in any object you need for in loop
// const person = {
//   name: "mamunur",
//   address: "monipur",
//   phone: 11233444,
//   hobbis: {
//     swiming: true,
//     player: "Tamim",
//     gkolf: "Himilton masakadza",
//   },
// };
// let add = person.address;
// add = "camalpur";
// console.log(person);
// // console.log(person);
// // console.log(person.hobbis);
// // console.log(person["phone"]);
// // console.log(person.hobbis["player"]);
// // let key = Object.keys(person);
// // let val = Object.values(person);
// // console.log(val);
// // for (let i of key) {
// //   console.log(person[i]);
// // }
// // for (let i = 0; i < key.length; i++) {
// //   console.log(i);
// //   console.log(key[i]);
// //   console.log(person[key[i]]);
// // }

// // if you want to loop throw in any object you need for in loop
// // for (let i in person) {
// //   console.log(i);
// //   console.log(person[i]);
// // }

// function printMe() {
//   console.log("hello world!");
// }
// printMe();
// function printH(param) {
//   console.log(param);
// }
// printH("Hello friend!");

// let printMeAgain = function () {
//   console.log("print....");
// };
// printMeAgain();

// const printFun = function (a, b) {
//   console.log(a, b);
// };
// printFun(12, 45);
// function sum(a, b) {
//   return "the summation of those two param", a + b;
// }
// let val = sum(12, 45);
// console.log(val);
// function defaultVal(a, b = 0) {
//   return 2 * (a + b);
// }
// let valu = defaultVal(5);
// console.log(valu);

function restParametere(x, ...y) {
  console.log(x);
  console.log(y);
  let sum = 0;
  for (let i of y) {
    // console.log(y[i]);
    sum += y[i];
  }
  console.log(sum);
}
// console.log(sum);
// here ...y is rest parameter
restParametere(1, 2, 3, 4, 5, 6, 7, 8, 9);
// here 1 is the value of first parameter and 2 to 9 is the value of rest parameter y
// NB:rest parameter is must be secont parameter always and rest parameter always return an array
let arro = (a, b) => {
  return a + b;
};
let res = arro(2, 4);
console.log(res);
let anRoo = (x) => x;
console.log(anRoo(50));
function outer() {
  console.log("outer function");
  function inner() {
    console.log("inner");
  }
  inner();
}
outer();
// let z = 10;
// const y = 20;
// var x = 30;
let arroFunc = () => {
  let z = 10;
  const y = 20;
  var x = 30;
  console.log(x, y, z);
};
arroFunc();

function outerFunct(x) {
  function innerFunc(y) {
    return x + y;
  }
  return innerFunc;
}

const outerReturn = outerFunct(10);
// outerFunct(2);
console.log(outerReturn(2));
// console.log(outerReturn);

// function foo(bar) {
//   bar();
// }
// foo(function () {
//   console.log("hello foo");
// });
// let named = function () {
//   console.log("hello world!");
// };
// foo(named);

// function higher(camera) {
//   camera();
// }
// higher(function () {
//   console.log("higher order function");
// });
// const func = function (x, y) {
//   return x / y;
// };
// let fn = func(10, 2);
// console.log(fn);

// // in acording to syntex there are function is four types
// // no parameter no return
// function show() {
//   console.log("No parameter no return");
// }
// show();

// // has parameter but no return
// function add(a, b) {
//   console.log(a + b);
// }
// add(1, 2);

// // no parameter but has return
// function noParam() {
//   return "No param but has return";
// }
// console.log(noParam());

// // has parameter has return
// function yesParam(a, b) {
//   return a + b;
// }
// console.log(yesParam(12, 20));

// function arrAdd(arr) {
//   let sum = 0;
//   let getHighest = arr[0];
//   for (let item of arr) {
//     // console.log(item);
//     if (getHighest < item) {
//       getHighest = item;
//     }
//     // sum += item;
//   }
//   // for (let i = 0; i < arr.length; i++) {
//   //   let element = i;
//   //   console.log(i);
//   // return sum;
//   return getHighest;
// }
// let arr = [10, 12, 34, 65, 76, 23, 22, 76, 87, 990];
// let call = arrAdd(arr);
// // console.log(call);
// console.log(call);

// function oddSum(odd) {
//   let sum = 0;
//   for (let item of odd) {
//     if (item % 2 == 0) {
//       sum += item;
//     }
//   }
//   return sum;
// }

// let arr = [10, 12, 34, 65, 76, 23, 22, 76, 87, 990];
// console.log(oddSum(arr));

// function infoMe(info) {
//   return `My name is ${info.name}, my village name is ${info.address}, my age is ${info.age} and my phone number is ${info.mobile}`;
// }
// const person = {
//   name: "Mamunur",
//   address: "Monipur",
//   mobile: 112145635,
//   age: 35,
//   quali: "Bsc",
// };
// console.log(infoMe(person));

// let num = 5;
// let multipl = 1;
// for (let i = num; i >= 1; i--) {
//   multipl *= i;
// }
// console.log(multipl);
// function fectorial(number) {
//   if (number === 0 || number === 1) {
//     return 1;
//   }
//   let result = 1;
//   for (let i = number; i >= 1; i--) {
//     result *= i;
//   }
//   return result;
// }
// console.log(fectorial(10));

// let fibo = [0, 1];
// for (let i = 2; i <= 10; i++) {
//   fibo[i] = fibo[i - 1] + fibo[i - 2];
//   for (let item in fibo) {
//     console.log(item);
//   }
// }
// console.log(fibo);

function findHighest(num) {
  let firstInd = num[0];
  // for (let i = 1; i < num.length; i++) {
  //   if (firstInd < num[i]) {
  //     firstInd = num[i];
  //   }
  for (let item of num) {
    if (item > firstInd) {
      firstInd = item;
    }
  }
  return firstInd;
}

let arr = [12, 23, 43, 55, 65, 76, 88, 90, 29, 38, 45, 100];
let highest = findHighest(arr);
console.log("The highest number is: ", highest);

function getLargestName(name) {
  let largeName = name[0];
  for (let i = 0; i < name.length; i++) {
    if (name[i].length > largeName.length) {
      largeName = name[i];
    }
  }
  return largeName;
}

let name = ["Mamunur", "Rashid", "Sajal", "Abdullah"];
let y = getLargestName(name);
console.log(y);
