function isLeapYear(year) {
  if (
    (year % 4 == 0 && year % 100 !== 0) ||
    (year % 4 == 0 && year % 100 == 0 && year % 400 == 0)
  ) {
    return "This is Leap year.";
  } else {
    return "This is not Leap year";
  }
}
console.log(isLeapYear(2032));

let arr = [12, 32, 44, 54, 67, 87, 90, 54, 80, 14, 26, 870];
let sum = 0;
for (let i in arr) {
  // console.log(i);
  let getValue = arr[i];
  sum += getValue;
}
console.log(sum);

function sumOddNum(oddNum) {
  let sumOdd = 0;
  for (let i = 0; i < oddNum.length; i++) {
    let getValue = oddNum[i];
    if (getValue % 2 !== 0) {
      // also i get odd number if i use !==0
      // to get even number just replace 1 to 0;
      sumOdd += getValue;
    }
  }
  return sumOdd;
}

let arraY = [
  12, 43, 54, 555, 665, 76, 67, 87, 78, 98, 88, 99, 909, 87, 76, 65, 54, 43, 33,
];
let viewResult = sumOddNum(arraY);
console.log(viewResult);

function getArrFromNewArr(array) {
  let getNewArr = [];
  for (let i = 0; i < array.length; i++) {
    let getValue = array[i];
    if (getValue % 2 !== 0) {
      // get even number just remove !
      getNewArr.push(getValue);
    }
  }
  return getNewArr;
}
let Newarrya = [
  11, 32, 33, 44, 5, 54, 65, 76, 67, 78, 88, 78, 887, 998, 998, 8889, 12,
];
let shoWresult = getArrFromNewArr(Newarrya);
console.log(shoWresult);

function addFactorial(fact) {
  let multipli = 1;
  for (let i = 1; i <= fact; i++) {
    multipli *= i;
  }
  return multipli;
}
let inputNum = addFactorial(7);
console.log(inputNum);

function reverseFact(nub) {
  let multip = 1;
  for (let i = nub; i >= 1; i--) {
    multip *= i;
  }
  return multip;
}
console.log(reverseFact(7));

function whileLoop(num) {
  let number = num;
  let result = 1;
  while (number >= 1) {
    result *= number;
    number--;
  }
  return result;
}
console.log(whileLoop(7));

function findLeap(year) {
  let leapYear = [];
  for (let i = 0; i < year.length; i++) {
    let getValue = year[i];
    if (
      (getValue % 4 == 0 && getValue % 100 !== 0) ||
      (getValue % 100 == 0 && getValue % 400 == 0)
    ) {
      leapYear.push(getValue);
    }
    // console.log(getValue);
  }
  return leapYear;
}
let Year = [2023, 2024, 2028, 2030];
let callFunc = findLeap(Year);
console.log(callFunc);
