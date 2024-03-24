function validaTion(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Please input a number only";
  }
  return a + b;
}
console.log(validaTion(3, "munu"));

function findSum(arr) {
  if (/*Array.isArray(arr) !== true*/ !Array.isArray(arr)) {
    return "Please input an array only";
  }
  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  return sum;
}
let arr = [12, 24, 55, 65, 76, 87, 88, 98, 200];
// let arr = "Mamunur rashid";
let x = findSum(arr);
console.log(x);

function findVowel(vowel) {
  if (vowel !== "string") {
    return "please input a valid  string";
  }
  let getVowel = 0;
  let consonant = 0;
  let space = 0;
  for (let i = 0; i < vowel.length; i++) {
    if (
      vowel[i] === "a" ||
      vowel[i] === "e" ||
      vowel[i] === "i" ||
      vowel[i] === "o" ||
      vowel[i] === "u"
    ) {
      getVowel++;
    } else if (vowel[i] !== " ") {
      consonant++;
    } else {
      space++;
    }
  }
  let obj = {
    vowelCount: getVowel,
    consonantCount: consonant,
    spaceCount: space,
  };
  return obj;
}

let sentence = "54";
let p = sentence.toLowerCase();
let y = findVowel(p);
console.log("The total vowel is : ", y);

// function findLargeName(name) {
//   let largeName = name[0];
//   for (let i = 0; i < name.length; i++) {
//     if (name[i].length > largeName.length) {
//       largeName = name[i];
//     }
//   }
//   return largeName;
// }

// let arrs = ["mamunur", "rashid", "khalil"];
// let yes = findLargeName(arrs);
// console.log(yes);
