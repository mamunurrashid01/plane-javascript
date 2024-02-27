let numArray = [10, 14, 25, 26, 50, 84, 60, 98, 100, 72, 56, 95, 55, 123, 157];
let sumation = 0;
for (let i = 0; i < numArray.length; i++) {
  let findIdex = i;
  let findValue = numArray[findIdex];
  sumation += findValue;
}
console.log(sumation);
// While loop discusion
// syntex of while loop

// let loopVariable = 0;
// while (condition) {
//   // loop body
//   console.log(loopVariable);
//   loopVariable++;
// }

let x = 0;
while (x < 10) {
  x++; // it will work for pre increment , that means it firstly add 1 with 0 then print out 1 until equqls to 10;
  // console.log(x);
}
let n = 0;
while (n < 10) {
  console.log(n);
  n++; // it will work like   a post increment;that means at first print out initial value of n is 0 then add 1
}

let num = 0;
while (num <= 20) {
  console.log(num);
  num += 2; //out put even number
}

// GET EVEN NUMBER USING BY WHILE LOOP
let NUMBER = 0;
while (NUMBER <= 20) {
  if (NUMBER % 2 == 0) {
    console.log(`those are even number ${NUMBER}`);
  } else {
    console.log(`those are odd number ${NUMBER}`);
  }
  NUMBER++;
}

// FOR LOOP DISCUSION

/**
 * for(let i = 0; i < any condition; i++){
 * loop body
 * }
 */

for (let i = 1; i <= 10; i += 2) {
  // console.log("This is odd number : ", i);//output even number
}

for (let i = 20; i >= 0; i--) {
  // console.log("loop in decriment", i);//decremental output
}

let numberArr = [12, 23, 334, 54, 56, 77, 87, 87, 98, 88, 90];
for (let i = 0; i < numberArr.length; i++) {
  // let getIndex = i;
  // let getElement = numberArr[getIndex];
  let getElement = numberArr[i];
  console.log(getElement); //both comment and running code output will same;
}

//ADDITION OF TOTAL ELEMENT OF AN ARRAY USING FOR LOOP

let numbernum = [
  12, 32, 33, 22, 24, 23, 35, 54, 55, 65, 66, 76, 66, 68, 69, 677,
];
let sum = 0;
for (let i = 0; i < numbernum.length; i++) {
  let getElement = numbernum[i];
  sum += getElement;
}
console.log(sum); //get ouutput summation/addition of an array element ;
console.log(sum / numbernum.length); //get output average of an array element

//COMPARE BETWEEN THREE NUMBERS
let num1 = 120;
let num2 = 15;
let num3 = 30;
if (num1 > num2) {
  if (num1 > num3) {
    console.log(`The greatest number is ${num1}`);
  } else {
    console.log(`The greatest number is ${num3}`);
  }
} else {
  if (num2 > num3) {
    console.log(`The greatest number is ${num2}`);
  } else {
    console.log(`The greatest number is ${num3}`);
  }
}

let side1 = 10;
let side2 = 15;
let side3 = 10;
if (side1 == side2 || side1 == side3 || side2 == side3) {
  console.log("The rectangular is a isosceles");
} else {
  console.log("The rectanguler is not isosaceles");
}

//CONCATINATION OF STRING
let name = "Mamunur";
let Lname = "Rashid";
console.log(name + " " + Lname);

//ANOTHER DISCUSSION ABOUT LOOP

/**
 * 1. for loop discussion
 * 2.for in loop discussion
 * 3.for of loop discussion
 * 4.whole loop discussion
 * 5.do while loop discussion
 */
//use of for loop on array
// let arrNames = ["adil", "abir", "sifat", "uzzal", "shohel", "tanvir"];
// for (let i = 0; i < arrNames.length; i++) {
//   let showMe = arrNames[i];
//   console.log(showMe);
// }

//break use in for loop
// let arrNames = ["adil", "abir", "sifat", "uzzal", "shohel", "tanvir"];
// for (let i = 0; i < arrNames.length; i++) {
//   if (arrNames[i] == "uzzal") {
//     break;
//   }
//   let showMe = arrNames[i];
//   console.log(showMe);
// }

//continue use in for loop

//break use in for loop
// let arrNames = ["adil", "abir", "sifat", "uzzal", "shohel", "tanvir"];
// for (let i = 0; i < arrNames.length; i++) {
//   if (arrNames[i] == "uzzal") {
//     continue;
//   }
//   let showMe = arrNames[i];
//   console.log(showMe);
// }

//DISCUSSION OF FOR IN LOOP(IT IS USEFULL FOR BASICALY IN ARRAY AND OBJECT)

//use of for in loop on an array

// let arrNames = ["adil", "abir", "sifat", "uzzal", "shohel", "tanvir"];
// for (let index in arrNames) {
//   let showMe = arrNames[index];//here index variable give us the index of array;
//   console.log(showMe);
// }

//use of for in loop on an object

// let arrNames = {
//   name: "Mamunur",
//   salary: 25000,
//   joiningDate: "25 / 8 / 2004",
//   oficeAddress: "dhaka",
// };
// for (let key in arrNames) {
//   let getIndex = key; //here key variable give us the index of the object;
//   let showMe = arrNames[index];
//   console.log(getIndex, showMe);
// }

//use of for of loop on an array

// let arrNames = ["adil", "abir", "sifat", "uzzal", "shohel", "tanvir"];
// for (let index of arrNames) {
//   console.log(index); //here index variable give us directly value of the array;
// }

//use of for of loop on a string

// let arrNames = "Mamunur rashid";
// for (let index of arrNames) {
//   console.log(index);
// }

//N.B: WE USE / FOR IN / LOOP WHEN WE NEED KEYS OF OBJECT AND ARRAYS ETC. BUT WHEN WE NEED JUST VALUE OF AN ARRAY OR OBJECT DIRECTLY THEN WE USE / FOR OF / LOOP

//use of while loop on an array

// let arrNames = ["adil", "abir", "sifat", "uzzal", "shohel", "tanvir"];
// let initial = 0;
// while (initial <= 4) {
//   console.log(arrNames[initial]); //here the / initial / variable give us the value of the array;
//   initial++;
// }

//use of / do while / loop on an array

// let arrNames = ["adil", "abir", "sifat", "uzzal", "shohel", "tanvir"];

// let i = 1;
// do {
//   console.log("Comment zarur kare vai");
//   i++; //IF CONDITION WILL TRUE THEN IT WILL GIVE US OUTPUT WITH BASED CONDITION BUT IF CONDITION IS NOT TRUE THEN ALSO IT WILL GIVES US ATLIST ONE OUTPUT;
// } while (i <= 4);

//nested loop
for (let i = 0; i <= 2; i++) {
  for (let j = 0; j <= 3; j++) {
    console.log(
      "give me the value of " + i + " and" + "give the value of " + j
    );
  }
}
