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
