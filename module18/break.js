//DISCUSION ABOUT BREAK
//USING FOR LOOP
for (let i = 0; i <= 10; i++) {
  // console.log(i);
  if (i >= 5) {
    break;
  }
}

//USING WHILE LOOP
let y = 0;
while (y < 10) {
  console.log("Roast den gift ansi", y);
  y++;
  if (y >= 4) {
    break;
  }
}

let friends = [
  "rashid",
  "ratan",
  "abdullah",
  "hashmi",
  "jahangir",
  "redwan",
  "jobayer",
];
for (let i = 0; i < friends.length; i++) {
  let getValue = friends[i];
  console.log(getValue);
  if (getValue == "jahangir") {
    break;
  }
}

//DISCUSION ABOUT CONTINUE METHOD
let numbers = [12, 43, 23, 43, 23, 45, 47, 67, 89, 90, 100];
for (let i = 0; i < numbers.length; i++) {
  let getValue = numbers[i];
  if (getValue > 45) {
    continue;
  }
  console.log(getValue);
}
