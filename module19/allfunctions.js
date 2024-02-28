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

//callback function discussion

function discussCallback(bar) {
  bar(); //this bar() is called callback function
}
// discussCallback();
discussCallback(function () {
  //this function is a annonymous function because the function has no name;the function who has no name it's called annonymous function;
  console.log("bar..");
});

//another example of callback function

function myName() {
  console.log("Another example of callback function");
}
discussCallback(myName); //it means myname() function is the argument of the bar() function;

//another example of callback function
function foo(bar) {
  if (isOver) {
    bar(); //bar() is a callback function
  }
  if (isStillNow) {
    bar(); //it means when your needed you can call which function at a certain time it's call callback function
  }
}

//pure function discussion
function pureFunc(name) {
  console.log(`Hello ${name}`); //this is pure function
}
pureFunc("Mamunur");

//another example of pure function
let myVillage = "Momipur";
function pureFun(name) {
  console.log(`my village name is ${myVillage} and my name is ${name}`);
}
pureFun("Mamunur rashid");

myVillage = "Boro Monipur"; //now when i want to get output then myVillage is set to Boro Monipur not only Monipur,it's call side effect;

pureFun("Mamunur rashid");

//IIFE(Immediately Invoc function expression)

(function () {
  console.log("This is Immediately Invoc Function Expression");
})(); //that mean you no need declare whith a name of the fuction,it just need to write to inside a paranthisis

//Discussion about call stack function with function exicution
function fun1() {
  console.log("Hello world!, I am call stack function");
}
function fun2() {
  console.log("This is also function 2 to invoc");
  fun1();
}
function fun3() {
  fun2();
}
fun3(); //the function fun3 goes to fun2 to exicute but when it goes to fun2 the it's also goes to fun1 and then they execute fun1 value,then execute fun2 's value and then goes to fun3() and finaly it stop himself;

//discussion about recursion
//recursion
//base condition
function recur() {
  recur();
}
// recur();when you try to execute it then it will redursion for meximum time

//another example

function reCurse() {
  if (base_condition) {
    console.log("Do somthings");
    return; //if do not return then it will make recursion
  }
  reCurse();
}

//recursion example
function takeMedicine(count) {
  if (count === 0) {
    console.log("Take medicine until get well");
    return;
  }
  console.log("Take medicine");
  takeMedicine(count - 1);
}
takeMedicine(5); //this method mostly use to fectorial mmathmatical operation/NB:it also like or same to  for loop
