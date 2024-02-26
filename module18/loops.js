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
