let frinds = ["Mamunur", "Rashid", "Adib", "Adil", "Anower", "Faruk"];
console.log(frinds);
// get/ find element by index
console.log(frinds[3]); // use array name[index no.] to get element;

//find index by elements to "indexOf" method
console.log(frinds.indexOf("Rashid")); //use * indexOf * method; to get index number; if there was a index that has no exist then return value will -1;

//set a new element by index
frinds[5] = "Ahammed ali"; // set a new element * Ahmmed ali * by index 5;
console.log(frinds);

//some example index, get element, set new value
let num = [12, 13, 34, 53, 65, 50, 62, 63, 64];
let findIndex = num.indexOf(62);
console.log(findIndex);

let findValue = num[3];
console.log(findValue);

num[4] = 75;
console.log(num);

// num.push(456); //new element add at last of an array using by * push * method
console.log(num);

//remove element from at last of an array using by * pop * method
num.pop();
console.log(num);

// add new element at finrst of an array to use * unshift * method

num.unshift(600);
console.log(num);

// remove an element from at finrst of an array to use * shift * method

num.shift();
console.log(num);
