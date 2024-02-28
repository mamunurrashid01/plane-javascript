//The discussion of default parameter

function defaultParam(a = 0, b = 0) {
  //here two parameter a and b both have default value, if there is no value set those variable then it automaticaly set their value 0, 0;
  return 5 * (a + b);
}
let showResult = defaultParam(10);
console.log(showResult);

//rest parameter discussion
function restParam(x, ...y) {
  // ...y is the rest parameter,N.B:rest parameter is used only for one time in function parameter and it will must take the last position as a function parameter
  console.log(x); //x takes the first argument (1);
  console.log(y); //and y will takes 2nd to last argument(accept first argument(1)) and it will return a array as like{[2, 3, 4, 5, 6, 7, 8, 9]}
}
restParam(1, 2, 3, 4, 5, 6, 7, 8, 9);
