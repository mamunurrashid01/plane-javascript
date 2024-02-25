// let numArray = [10, 14, 25, 26, 50, 84, 60, 98, 100, 72, 56, 95, 55, 123, 157];
// let sum = 0;
// for (let i = 0; i < numArray.length; i++) {
//   let findIdex = i;
//   let findValue = numArray[findIdex];
//   sum += findValue;
// }
// console.log(sum);
//While loop discusion
// syntex of while loop

// let loopVariable = 0;
// while(condition){
//   loop body
//   console.log(loopVariable);
//   loopVariable++
// }

let x = 0;
while (x < 10) {
  x++; // it will work for pre increment , that means it firstly add 1 with 0 then print out 1 until equqls to 10;
  // console.log(x);
}
let n = 0;
while (n < 10) {
  // console.log(n);
  n++; // it will work like   a post increment;that means at first print out initial value of n is 0 then add 1
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

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
