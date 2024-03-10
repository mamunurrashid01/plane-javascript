//Object discussion in multiple properties
let secondLanguage = "English";
let person = {
  firstName: "Mamunur",
  lastName: "Rashid",
  age: 36, //here name, age, Qualification, salry,joinDate etc are called keys/key,
  Qualification: "HSC", //here Rasid, 36, HSC, 25000, 15/08/2024 those are called value
  salary: 25000,
  joinDate: "15/08/2024",
  "#time": 10,
  "blood-group": "B+",
  [secondLanguage]: 98,
  greeting: function () {
    console.log("Hi");
  },
  // fullName: function () {
  //   return person.firstName + " " + person.lastName;
  // },
  fullName: function () {
    return this.firstName + " " + this.lastName; //this key word is replace to person objects
  },
};
// console.log(person);

//There are two aways to get access properties of a object /DOT notation/ and /Bracket notation
// console.log(person.name); //it is dot notation
// console.log(person["age"]); //it is bracket notation,

// console.log(person["#time"]);
// let x = "Qualification";
// console.log(person[x]);
// console.log(person.greeting());
// console.log(person.fullName());

// let studenId = 123;
// let student = {
// studenId:1,
// studenId: studenId,
// studenId, //when out side of the object declared a same variable of inside of the object the do that;
//   firstName: "Mamunur",
//   lastName: "Rashid",
//   deparment: "CS",
//   getFullName() {
//     return this.firstName + " " + this.lastName;
//   },
// };
// console.log(student);

//how can we delete , remove or modifi of an object
let student = {
  // studenId:1,
  // studenId: studenId,
  studenId: 123, //when out side of the object declared a same variable of inside of the object the do that;
  firstName: "Mamunur",
  lastName: "Rashid",
  deparment: "CS",
  getFullName() {
    return this.firstName + " " + this.lastName; //that means we can use function inside the object
  },
};
console.log(student);
//thats the rules to add value in an object
student.age = 24;
student["bloodGoup"] = "B+";
console.log(student);

//update the value in an object
student.studenId = 456;

//delete the property from an object
delete student.getFullName;
console.log(student);

//how to nested object to array or array to object
let students = [
  //it is an array
  {
    studenId: 123,
    studentFullName: "Mamunur rashid",
  },
  {
    studenId: 124,
    studentFullName: "Wahid tausif",
  },
  {
    studenId: 125,
    studentFullName: "Mamunur rashid",
  },
];

console.log(students);
console.log(students[0]);
console.log(students[0].studentFullName);

//Object  to array

let studentDetails = {
  // studenId:1,
  // studenId: studenId,
  studenId: 123, //when out side of the object declared a same variable of inside of the object the do that;
  firstName: "Mamunur",
  lastName: "Rashid",
  deparment: "CS",
  getFullName() {
    return this.firstName + " " + this.lastName; //that means we can use function inside the object
  },
  hobbis: ["gamming", "travaling", "swimming", "gardening"],
};
console.log(studentDetails.hobbis);
console.log(studentDetails.hobbis[0]);

//destructuring array and objects

// let fruits = ["🍒", "🍏", "🥑"];

// let [cherries, greenApple, avocado] = fruits;
// console.log(cherries, greenApple, avocado);
// console.log(avocado, greenApple, cherries); //after change the order then the arrays order also change

//to skip any element of an araay
// let cherries, greenApple, avocado;
// [cherries, , avocado] = fruits; //when use  ,, then that positions value will seen undefine;
// console.log(cherries, greenApple, avocado);

//if there was not a value in an array then we can set a default value in this case
// let fruits = ["🍒", "🍏", "🥑"];

// let cherries, greenApple, avocado, apple;
// [cherries, greenApple, avocado, apple = "none"] = fruits;
// console.log(cherries, greenApple, avocado, apple);

//swap 2 number with destructuring
let num1 = 10,
  num2 = 20;
// let temp = num1;
// num1 = num2;
// num2 = temp;
[num2, num1] = [num1, num2]; //in single coding we can get same output
console.log(num1, num2); //here num1 assign with 20 and num2 assign with 10

//rest syntex
let fruits = ["🍒", "🍏", "🥑", "🍌", "🍇", "🥜", "🍓"];
let [cherries, greenApple, avocado, ...rest] = fruits;
console.log(cherries, greenApple, avocado);
console.log(rest); //output will be after avocado to last element;

let myComputer = {
  name: "mackBook",
  processor: "corei5",
  price: 150000,
  gen: "14gen",
  date: "02/ 05 / 2024",
};
myComputer.bloodGoup = "AB+";
console.log(myComputer);
myComputer.price = 1750000;
myComputer["processor"] = "corei8";
// console.log(myComputer);
let properties = Object.keys(myComputer);
// let propertiess = Object.values(myComputer);
// console.log(properties);

for (let i = 0; i < properties.length; i++) {
  let getKeys = properties[i];
  let getValue = myComputer[getKeys];
  // console.log(getValue);
}

for (let i in myComputer) {
  let getValue = myComputer[i];

  console.log(getValue);
}
