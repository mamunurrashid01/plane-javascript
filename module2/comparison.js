// Comparison operator discusion
/**
 * There are those comparison operator, here it is
 * >, greater then
 * <,less then
 * ==,equal to
 * ===,equals to(with type)
 * !=isnot equal to
 * !==,isnot equal to
 * >=, greater then or equal
 * <=,less then or equal
 * &&, and sign => when multiple condition use in a condition
 * || or sign => when multiple condition use in a condition
 */
//Condition discusion(if, else, else if)
let iPhone = 79000;
let myBudget = 50000;
if (myBudget < iPhone) {
  console.log("I can not buy the phone");
} else {
  console.log("I can buy the phone");
}
let myMarks = 80;
let yourMarks = 96;
if (myMarks <= yourMarks && myBudget >= iPhone) {
  //when two condition are true then get result true
  console.log("I will get a tour for seven days");
} else {
  console.log("You should to do a lot of hard work");
}

let isGraduate = false;
let salary = 80000;
let jobHolder = false;
// if (isGraduate !== true || salary < 8000) {
//   //when one condition will true then the result will true
//   console.log("You are able to married now");
// } else {
//   console.log("You are not able to married");
// }
if ((isGraduate === true && salary == 80000) || jobHolder == true) {
  console.log("Now you are succed person");
} else if (isGraduate === true && jobHolder == true && salary >= 100000) {
  console.log("You are a hard worker person");
} else if (jobHolder == true || (salary == 10000 && isGraduate !== true)) {
  console.log("Ok no problems , i want to marry him");
} else {
  console.log("Go to the hell");
}
