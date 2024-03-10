//return function discussion
// function returnAdd(num1, num2) {
//   return num1 + num2;
// }
// console.log(returnAdd(10, 60));

// function avarageFunc(assign1, assign2, assign3) {
//   let totalMarks = assign1 + assign2 + assign3;
//   let avarage = totalMarks / 3;
//   return avarage;
// }
// let first = 60;
// let second = 59;
// let third = 44;
// let showAvarage = avarageFunc(first, second, third).toFixed(3);
// console.log(showAvarage);
function loopFunc(doArr) {
  let sum = 0;
  for (let i = 0; i < doArr.length; i++) {
    let getValue = doArr[i];
    sum += getValue;
  }
  return sum / doArr.length;
}
let arr = [12, 32, 45, 67, 54, 87, 90, 92, 900];
let getResult = parseFloat(loopFunc(arr).toFixed(3));
console.log(getResult);

function valueFunc(data) {
  for (let i = 0; i < getKeys.length; i++) {
    let getValue = data[i];
    return getValue;
  }
}
let person = {
  name: "Abdullah",
  age: 35,
  salary: 5000,
  like: "swimming",
};
let getKeys = Object.keys(person);
console.log(getKeys);
let result = valueFunc(person);
console.log(result);
