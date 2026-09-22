function checkTemperature(temperature) {
  let message = "";

  if (temperature < 20) {
    message = "Cold";
  } else if (temperature >= 20 && temperature <= 30) {
    message = "Normal";
  } else {
    message = "Hot";
  }

  return message;
}

console.log(checkTemperature(15)); // "Cold"
console.log(checkTemperature(25)); // "Normal"
console.log(checkTemperature(35)); // "Hot"
console.log(checkTemperature(20)); // "Normal" (boundary case)
console.log(checkTemperature(30)); // "Normal" (boundary case)