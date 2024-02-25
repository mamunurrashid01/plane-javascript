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

//nested condition discusion
let math = true;
let geometry = true;
let straightLine = false;
if (math == true) {
  if (geometry == true) {
    if (straightLine == true) {
      console.log("You are a briliant, you can apply for BUET");
    } else {
      console.log("You are not able to apply for BUET");
    }
  }
  // console.log("You are able to apply for DU");
} else {
  console.log("You are not able to apply for BUET");
}
let myMoney = 100;
let priceOrange = 50;
let priceApple = 120;
if (myMoney > priceApple) {
  console.log("I will buy an kilo Apple");
} else if (myMoney > priceOrange) {
  console.log("I will buy a kilo Orange");
} else {
  console.log("I can not buy any kind of products");
}

//another nested condition
let mathMark = 80;
let physicsMark = 89;
let chemistryMark = 85;
if (mathMark < physicsMark) {
  if (mathMark > chemistryMark) {
    console.log("You can able to apply for BUET");
  } else if (physicsMark > chemistryMark) {
    console.log("You are  able to apply for DUET");
  } else if (physicsMark > mathMark) {
    console.log("You are able to apply for RUET");
  } else if (chemistryMark > physicsMark) {
    console.log("You are able to apply for CHUET");
  }
} else {
  console.log("This loop is finished");
}

//revision of module 2

let arr = ["mamunur", "Rashid", "khan", "AbulHaider"];
arr[3] = "wahid";
let findIndex = arr.indexOf("khan");
let findIndexOf = arr.includes("khan");
let sliceOf = arr.slice(0, 2);
let findArr = arr[1];
console.log(arr, findIndex, findArr, findIndexOf, sliceOf);

if (arr[1] === "haider") {
  console.log("This is my last name");
} else if (arr[3] === "tausif") {
  console.log("This is unknown person");
} else if (arr.length !== 5) {
  console.log("This length of the array is not 5");
} else {
  console.log("The array element is out of array");
}
