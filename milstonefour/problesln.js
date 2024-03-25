function isInteger(number) {
  if (typeof number !== "number") {
    return "Please input a valid number";
  }
  if (number % 1 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isInteger(102));

function isJavascriptFile(str) {
  if (typeof str !== "string") {
    return "You must input a string only";
  } else {
    // i can used also used this method
    return str.toLocaleLowerCase().endsWith(".js");
  }
  /*
  i can also used under this method
  // if (str.toLocaleLowerCase().endsWith(".js") == true) {
  //   return true;
  // }
  // return false;
  */
}
console.log(isJavascriptFile("index.js"));

// Another method to check file extension
function isCorrectFile(file) {
  if (typeof file !== "string") {
    return "Please input a valid string";
  }
  let arr = file.split(".");
  // console.log(arr);
  let getFile = arr.pop();
  return getFile.toLocaleLowerCase() == "js";
}
console.log(isCorrectFile("index.js"));

function mindGame(posNum) {
  if (typeof posNum !== "number" || posNum <= 0) {
    return "You must input a positive number";
  }
  let val = (posNum * 3 + 10) / 2 - 5;
  return val;
}
console.log(mindGame(0));
function isLGSeven(num) {
  if (typeof num !== "number" || num <= 0) {
    return "Please provide a number only";
  }
  let getNum = num - 7;
  if (getNum < 7) {
    return getNum;
  }
  return num * 2;
}
console.log(isLGSeven(15));
