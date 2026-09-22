function findNumber(numbers, target) {
  let result = "Not Found";

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      continue; // skip negative numbers
    }

    if (numbers[i] === target) {
      result = "Found";
      break; // stop immediately once target is found
    }
  }

  return result;
}

console.log(findNumber([-5, 10, -2, 7, 20], 7)); // "Found"
console.log(findNumber([-5, -10, -2], 7)); // "Not Found"