function getRandomNumber() {
  return Math.floor(Math.random() * (100 - 1) + 1);
}
var result = prompt("Please, enter a number", "1");
var count = 1;
var boolean = false;
number = getRandomNumber();
while (Boolean != true) {
  if (result != number) {
    count++;
    if (result < number) {
      console.log("the number is higher");
    } else {
      console.log("the number is minor");
    }
    var result = prompt("Please, enter a number", "1");
    break;
  } else if (result == number) {
    console.log("Take this: :D  ");
    boolean == true;
    console.log(count);
    break;
  }
}
