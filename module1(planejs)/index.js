// basic javascript discussion

// first discussion of variable
// There 5 things to declare a variable
// i - there 3 reserve word to declare a variable (let, var, const);
//The variable is a storage that can store a value;
let myName = "Mamunur rashid"; //here "let" is key word or reserv word; myName is variable name; = (equal) is a assignmet operator ; 'Mamunur rashid' is a value of the variable;"let" is the most useable key word;
const fatherName = "Abdul kader"; //"cost" also is the most useable variable key word when we use some constant object;
var motherName = "Moyna Begum"; //now a days "var" key word not suitable in js;

//variable naming convartion
//we cant use variable name with reserv word;and variable name is case sensitive;
let myAgeIs = 36; //'myAgeIs' a camalcase variable name;we will mostly use camalcase variable naming;
const my_favourite_food = "meet"; //"my_favourite_food" is snakecase variable name;
var YourFatherName = "Mr John"; //"YourFatherName" is a pascalcase variable name;

//Mathmatical operation discusion (+, -, /, *, = , %, ++, --, ** )those are operator
/* Addition rules */
let price1 = 10;
let price2 = 20;
let totalPrice = price1 + price2; //here price1 and price2 are operand
console.log(totalPrice);

/* Substraction rules */
let Substraction = price2 - price1;
console.log(Substraction);

/* Multiplication rule */
let unitNumber = 50;
let priceOfUnit = 10;
let multiplication = unitNumber * priceOfUnit;
console.log(multiplication);

/* divided rule */
let number1 = 5600;
let number2 = 100;
let dividedNumber = number1 / number2;
console.log(dividedNumber);

// How change of a variable value
//declaration of a variable
let tomatoPrice = 25;
console.log(tomatoPrice);

//Update variable value/set new value in same variable
tomatoPrice = 50;
console.log(tomatoPrice);

//add some value to the h existing value
tomatoPrice = tomatoPrice + 50;
console.log(tomatoPrice);

//sorthand for same code of before codes for addition
tomatoPrice += 90;
console.log(tomatoPrice);

//sorthand for same code of before codes for substraction
tomatoPrice -= 40;
console.log(tomatoPrice);

//sorthand for same code of before codes for multiplication
tomatoPrice *= 10;
console.log(tomatoPrice);

//sorthand for same code of before codes for division
tomatoPrice /= 5;
console.log(tomatoPrice);

//incremantal operator (++)
let number3 = 90;
console.log(number3);

//increment 1 for the variable number3
number3 = number3 + 1;
console.log(number3);

//or same code for number3 variable
//(++) means add 1 to existing value
number3++;
console.log(number3);

//decremental operator (--)
let number4 = 100;

number4 = number4 + 1;
console.log(number4);

//or same code for number4 variable
// (--) means diducting 1 from existing value
number4--;
console.log(number4);

// (*=) means multiplication shorthand
let height = 70;
height *= 10;
console.log(height); //the result will 700;

// (/=) means division shorthand
let num1 = 50;
num1 /= 10;
console.log(num1); //the result will show 5;

//string concatination ,type conversion, parseInt, parseFloat discusion

let firstName = "Mamunur";
let lastName = "Rashid";
let concatinationString = firstName + " " + lastName; //this is called string concatination;
let anotherConcatination = `${firstName} + " " +${lastName}`; //this is called string concatination;
console.log(concatinationString);
