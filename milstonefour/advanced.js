function isValidPhotoName(photoName, imageExtension) {
  if (typeof photoName !== "string" || !Array.isArray(imageExtension)) {
    return "There is no valid data";
  }
  for (let item of imageExtension) {
    if (photoName.toLowerCase().endsWith(item.toLowerCase())) {
      return true;
    }
  }
  return false;
}

let photo = "image.JPEG";
let photoExtension = ["jpg", "png", "gif", "jpeg", "ico"];
console.log(isValidPhotoName(photo, photoExtension));

// find prime numbers

function findPrimeNumber(prime) {
  if (!Array.isArray(prime)) {
    return "Please provide me a array of number";
  }
  let primeNum = [];
  for (item of prime) {
    if (item > 1) {
      let isPrime = true;
      for (let i = 2; i < item; i++) {
        if (item % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime === true) {
        primeNum.push(item);
      }
    }
  }
  return primeNum;
}

let arr = [1, 2, 34, 54, 2, 4, 5, 6, 7, 8, 9, 10];
let val = findPrimeNumber(arr);
console.log(val);

// recursion function
function sumOfn(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + sumOfn(n - 1);
  }
}

console.log(sumOfn(10));
