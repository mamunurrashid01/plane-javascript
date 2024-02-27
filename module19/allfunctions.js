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
