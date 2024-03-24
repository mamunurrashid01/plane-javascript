console.log("Hello World!");
let arr = [12, 43, 554, 67, 87, 87, 90, 122];
let Arr = [56, 65, 75, 73, 78, 23];
// let concate = Arr.concat(arr);
// to add an array to another use
// console.log(concate);
// console.log(Array.isArray(arr));

let friends = [12, 43, 54, 665, 78, 98, 89, 990, 98, 100];

let slice = friends.slice(2, 5);
// slice dont change the original array
// console.log(friends);
// console.log(slice);
// let slices = friends.splice(2, 7);
let slices = friends.splice(2, 7, 444, 7777, 9999, 10000);
// splice function says us what index you want to start and then how many element you want to get
// it is help us to remove the element from an array in any index
// and it also change the original array
// It also return the deleted array
// console.log(slices);
// console.log(friends);

// Remove duplicate element from an array => the method is under the array

let fName = [
  "Mamunur",
  "Rashid",
  "Ratan",
  "Sakib",
  "Rakib",
  "Rashid",
  "Sakib",
  "Tata",
  "Maruf",
  "Tata",
  "snaider",
];
// function removeDuplicate() {
//   let uniqueName = [];
//   for (let i = 0; i < fName.length; i++) {
//     const element = fName[i];
//     if (uniqueName.includes(element) === false) {
//       uniqueName.push(element);
//     }
//   }
//   return uniqueName;
// }
// let findUnique = removeDuplicate(fName);
// console.log(findUnique);

function getOutDuplicate(name) {
  let uniqueName = [];
  for (let i = 0; i < fName.length; i++) {
    const element = fName[i];
    if (uniqueName.includes(element) === false) {
      uniqueName.push(element);
    }
  }
  return uniqueName;
}
let getName = getOutDuplicate(fName);
console.log(getName);

// foo bar problems solving

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} is divisible by both 3 & 5 then show : "foobar"`);
  } else if (i % 3 === 0) {
    console.log(`${i} is divisible by 3 then show : "foo"`);
  } else if (i % 5 === 0) {
    console.log(`${i} is divisible by 5 then show : "bar"`);
  } else {
    console.log(`${i} there is show only undivisible number`);
  }
}

// wood calculation
function woodCalculation(chairQuant, tableQunt, bedQuant) {
  const chairWood = 2;
  const tableWood = 3;
  const bedWood = 5;

  const chairTotalWood = chairWood * chairQuant;
  const tableTotalWood = tableQunt * tableWood;
  const bedTotalWood = bedQuant * bedWood;
  const totalResult = chairTotalWood + tableTotalWood + bedTotalWood;
  return totalResult;
}
const getResult = woodCalculation(2, 3, 4);
const getResultInt = parseInt(getResult);
// console.log(`${getResultInt} cft`);

const phones = [
  {
    name: "samnung",
    camera: "13mp",
    storage: "64gb",
    price: 12050,
    color: "black",
  },
  {
    name: "Walton",
    camera: "12mp",
    storage: "32gb",
    price: 12050,
    color: "silver",
  },
  {
    name: "Xiami",
    camera: "16mp",
    storage: "128gb",
    price: 35500,
    color: "black",
  },
  {
    name: "Apple",
    camera: "13mp",
    storage: "256gb",
    price: 120500,
    color: "white",
  },
  {
    name: "Motorolla",
    camera: "10mp",
    storage: "6gb",
    price: 10050,
    color: "white",
  },
];
// function cheapestPrice(phone) {
//   let cheapestPhone = phone[0];
//   for (let i = 0; i < phone.length; i++) {
//     const element = phone[i];
//     if (element.price < cheapestPhone.price) {
//       cheapestPhone = element;
//     }
//   }
//   return cheapestPhone;
// }
// let callFunc = cheapestPrice(phones);
// console.log(callFunc);

// function findCheapest(phone) {
//   let cheapest = phone[0];
//   for (let i = 0; i < phone.length; i++) {
//     let element = phone[i];
//     if (element.price < cheapest.price) {
//       cheapest = element;
//     }
//   }
//   return cheapest;
// }
// let inputVal = findCheapest(phones);
// console.log(inputVal);

// function cheapestFunc(phone) {
//   let theCheapestPrice = phone[0];
//   for (let i = 0; i < phone.length; i++) {
//     let element = phone[i];
//     if (element.price /*use '>' to get bigger number*/ < theCheapestPrice.price) {
//       theCheapestPrice = element;
//     }
//   }
//   return theCheapestPrice;
// }
// let thePhone = cheapestFunc(phones);
// console.log(thePhone);

function addTotalPrice(phone) {
  let sum = 0;
  for (let i = 0; i < phone.length; i++) {
    let getVal = phone[i].price;
    sum += getVal;
  }
  // return sum; to get total amount
  return sum / phone.length; //to get average of the price;
}
let thePhone = addTotalPrice(phones);
// console.log(thePhone);

let products = [
  { name: "shirt", price: 1299, quantity: 5 },
  { name: "pant", price: 2000, quantity: 10 },
  { name: "soack", price: 899, quantity: 4 },
  { name: "belt", price: 800, quantity: 6 },
  { name: "trowser", price: 1099, quantity: 4 },
  { name: "T-shirt", price: 1200, quantity: 5 },
];

function getProductPrice(props) {
  let sum = 0;
  for (let i = 0; i < props.length; i++) {
    let element = props[i];
    let eachProductsTotalPrice = element.price * element.quantity;
    sum += eachProductsTotalPrice;
  }
  return sum;
}
let findPrice = getProductPrice(products);
console.log(findPrice);

function ticketPrice(ticketQuantity) {
  if (typeof ticketQuantity !== "number") {
    return "Please input a valid number only!";
  }
  const first100Ticket = 100;
  const second100Ticket = 90;
  const third100Ticket = 70;

  if (ticketQuantity <= 100) {
    let thePriceOfTickets = ticketQuantity * first100Ticket;
    return thePriceOfTickets;
  } else if (ticketQuantity <= 200) {
    const first100TicketPrice = 100 * first100Ticket;
    const second100TicketPrice = (ticketQuantity - 100) * second100Ticket;
    const second100TicketTotal = first100TicketPrice + second100TicketPrice;
    return second100TicketTotal;
  } else {
    const first = 100 * first100Ticket;
    const second = 100 * second100Ticket;
    const thirds = (ticketQuantity - 200) * 70;
    const result = first + second + thirds;
    return result;
  }
}

let quantity = 220;
let callticketFunc = ticketPrice(quantity);
console.log(callticketFunc);

function add(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Please input a valid number only";
  }
  return num1 + num2;
}
let shoe = add(10, 20);
console.log(shoe);

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log("Hello!", i);
}
