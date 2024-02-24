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
