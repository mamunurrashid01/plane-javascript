// Assignment no 1
function cubeNumber(num) {
  if (typeof num !== "number") {
    return "Just input only number please.";
  }
  return num ** 3;
}
// console.log(cubeNumber(5));

// Assignment no 2

function matchFinder(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return "Please input only string type data.";
  }
  return str1.toLowerCase().includes(str2.toLowerCase());
}
let string1 = "John";
let string2 = "jo";
// console.log(matchFinder(string1, string2));

//Assignment no.3

function sortMaker(arr) {
  if (!Array.isArray(arr)) {
    return "You can only input an array.";
  }
  if (arr[0] < 0 || arr[1] < 0) {
    return "Invalid input.";
  } else if (arr[0] == arr[1]) {
    return "equal";
  } else if (arr[0] > 0 || arr[1] > 0) {
    return arr.sort((a, b) => b - a);
  }
}

let arr = [3338958, 33389];
// console.log(sortMaker(arr));

function findAddress(obj) {
  if (typeof obj !== "object") {
    return "Please input a object only.";
  }
  let road = obj.street || "__";
  let house = obj.house || "__";
  let society = obj.society || "__";
  let obj1 = { road, house, society };
  return Object.values(obj1);
}
let obj = {
  street: 10,
  house: "15A",
  society: "Earth Perfect",
};
// console.log(findAddress(obj));

function canPay(arr, num) {
  if (!Array.isArray(arr) || typeof num !== "number") {
    return "Please input a valid array and number.";
  }
  if (arr.length === 0) {
    return "This is an empty array also.";
  }
  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  // return sum;
  if (sum == num) {
    return true;
  }
  return false;
}

const array = [];
const num = 10;
console.log(canPay(array, num));
// console.log(sum);

// array of object discusion and spred operator discusion
function numCount(a, ...b) {
  console.log(a, b);
  console.log(arguments[5]);
}

numCount(1, 3, 4, 5, 6, 7);

const products = [
  { id: 101, name: "IPhone", price: 120000, color: "black", model: "M10" },
  { id: 102, name: "Samsung", price: 110000, color: "black", model: "S10" },
  { id: 103, name: "Xiami", price: 60000, color: "white", model: "M0" },
  { id: 104, name: "Macbook", price: 120000, color: "black", model: "W10" },
  { id: 105, name: "Motorolla", price: 40000, color: "white", model: "M10" },
  { id: 106, name: "Huawei", price: 120000, color: "blue", model: "S15" },
  { id: 107, name: "One Plus", price: 60000, color: "blue", model: "M10" },
];

function matchProduct(product, search) {
  let getProducts = [];
  for (let item of product) {
    if (item.color.toLowerCase().includes(search.toLowerCase())) {
      getProducts.push(item);
    }
  }
  return getProducts;
}

console.log(matchProduct(products, "white"));
