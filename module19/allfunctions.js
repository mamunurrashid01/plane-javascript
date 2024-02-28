//All function discussion(from freecodecamp)
/**
 * Function & Methods
 * Declaration & Definition
 * Arguments & Parameters
 * Callback & Higher Order Function
 */

//function initialize
function functionName() {
  // function is the key word /functionName/ is the name of the function
  console.log("this is function body"); //this is function body
}
functionName(); //it's called function call;

//function initialize with parameter
function withParam(param) {
  //here /param/ is a parameter
  console.log(param);
}
withParam("this is argument"); //inside this parathisis it's called argument

//function declar where assign with a variable

let functionNameVariable = function () {
  console.log("function declare with assign a variable");
};
functionNameVariable();

//functin declare with parameter in assign by variable

let functionParam = function (param) {
  console.log(param);
};
functionParam("this function assign in variable with parameter");

//return function methods

function returnFunc() {
  return "This is return rule function";
}
console.log(returnFunc());

//return function with param

function functionReturn(a, b) {
  return a + b;
}
console.log(functionReturn(10, 20));

//arrow function discussion
//arrow function 1
let arrFunc = (x, y) => {
  return x + y; //if return value will multiple line
};
console.log(arrFunc(5, 15));

// arrow function 2 (if return value is single line then)
let arrowFunc = (x, y) => x + y; //if the return value be single
console.log(arrowFunc(2, 3));

//arrow function 3 (if parameter are single )then

let arFunc = (x) => x; //no need to bracket close;
console.log(arFunc(500));

//nested function discussion

function nestedFunc() {
  console.log("outer function of nested function");
  function nestedInside() {
    console.log("It is a inner function nested function");
  }
  nestedInside(); //if i have no call the function then nestedInside() function no shows any output
}
nestedFunc(); //when i call nestedFunc() then it will show its output but after call nestedInside() function only then get output the inside function result

//scoope discussion

function scopeFunc() {
  //It's a block scope function,That's means if i declared the varible inside the function then i can get it's value only inside the function not from outside
  let x = 10;
  let y = 20;
  let z = 30;
  console.log(x, y, z); //the function is a block scope ;it means the variable x , y , z those functions values output get only inside the function not outside
}
//It's means if i do console.log(x, y, z) i can't get the output
scopeFunc();

//global scope

let x = 10; //those variable declared globaly.for this reason we can access it's value from every where,
let y = 20;
let z = 30;
function globalFunc() {
  //It's a global scope function that means if the variable declared outside the function we can access it's value inside the function
  console.log(x, y, z);
}
globalFunc();

//discussion about closures
function outerFunc(x) {
  function innerFunc(y) {
    return x + y;
  }
  return innerFunc;
}

const returnValue = outerFunc(5);
// console.log(returnValue);it will return whole innerFunc();
let seeTheClosure = returnValue(5);
console.log(seeTheClosure); //now it will show the result 10;
