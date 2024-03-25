function findingBadData(arr) {
  if (!Array.isArray(arr)) {
    return "please input a array only";
  }
  let getBadValue = 0;
  let getGoodValue = 0;
  for (let i of arr) {
    if (typeof i !== "number") {
      return "You must need a number only";
    }
    if (i < 0) {
      getBadValue++;
    } else if ((i) => 0) {
      getGoodValue++;
    }
  }
  return { getBadValue, getGoodValue };
}
// let str = "mamunur rashid";
let arr = [12, 43, 0, -54, -76, -90, 65, -120, 25, 30, -42, 50];
let x = findingBadData(arr);
console.log(x);

function gemsToDiamond(num1, num2, num3) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    typeof num3 !== "number"
  ) {
    return "Provide only number type input";
  } else if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Please input a positive number";
  } else if (num1 % 1 !== 0 || num2 % 1 !== 0 || num3 % 1 !== 0) {
    return "Please provide a intege number";
  }
  let firstFrnd = 21 * num1;
  let secondFrnd = 32 * num2;
  let thirdFrnd = 43 * num3;
  let totalDiamond = firstFrnd + secondFrnd + thirdFrnd;
  if (totalDiamond > 2000) {
    return totalDiamond - 2000;
  }
  return totalDiamond;
}
console.log(gemsToDiamond(20, 200, 125));

function makeSentence(obj) {
  if (typeof obj !== "object") {
    return "please input a object only";
  }
  const name = person.name || "--";
  const age = person.age || "--";
  const quality = person.quality || "--";
  const married = person.married || "--";
  return (
    "My name is " +
    name +
    " I am " +
    age +
    " years old " +
    "my qaulification is " +
    quality +
    " and my merital statas is " +
    married
  );
}
let person = {
  name: "mamunur rashid",
  age: 36,
  quality: "BSc",
};
console.log(makeSentence(person));
