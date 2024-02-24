let price1 = 10; //it's a number
let price2 = "50"; //it's a string
console.log(price1 + price2);
//or
let price3 = "10"; //it's a string
let price4 = 50; //it's a number
console.log(price1 + price2);
//we will get same result in this two case;

//convert string to integer  number
let number = parseInt(price3);
console.log(number); //the result will show 10, just in number;

//convert string to float  number
let gpa = 3.25;
let show = parseFloat(gpa); //it will return a string with 3.25;

//how to check type of a variable

console.log(typeof gpa); //the result is number
let isHappy = true;
console.log(typeof isHappy); //the result is boolean;
let defineFind;
console.log(defineFind); //the result will undefine;

let num1 = 0.1;
let num2 = 0.2;
let result = num1 + num2;
console.log(result); //the will show 0.3000000004;
//to fixed the problems
console.log(result.toFixed(2)); //the result will show 2 digit after point, is 0.30 and will return string type data;

//How to get  remainder from number

let remainder = 50;
console.log(remainder % 6); //the result is 2, that means we get remainder 2; '%' the sign is remainder;

//There are 7 types of data type in  js
/*
those are :
1.primitive data
*Number;
*String;
*Undefine;
*Null;
*Boolean

2.non-premative data
*Object;
*Array;
*Function;
*/
