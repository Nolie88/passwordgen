// input variables:
var enter;

function userInput() {
  var confirmNumber = confirm("Do you want to include a number?");
  var confirmCharacter = confirm("How many characters would you like?");
  var confirmUppercase = confirm("Do you want to include Upper case letters?");
  var confirmLowercase = confirm("Do you want to include Lower case letters?");
  return {
    confirmNumber,
    confirmLowercase,
    confirmUppercase,
    confirmCharacter,
  };
}
// password values:
// special characters:
character = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  " < ",
  "=",
  " > ",
  " ? ",
  "@",
  "[",
  "\\",
  "]",
  " ^ ",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
// Numbers:
number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Alphabetic characters:
lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var space = [];

// Choices declared outside the if statement so they can be concatenated upon condition
var choices = "";

// converts letters to uppercase
var toUpper = function (x) {
  return x.toUpperCase();
};

// creates a variable for uppercase conversion
// alpha2 = alpha.map(toUpper);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var userChoice = userInput();
  getPassword(userChoice);
}

function getPassword(userChoice) {
  var options = "";
  if (userChoice.confirmNumber === true) {
    options += number[Math.floor(Math.random() * number.length)];
    space = space.concat(number);
    console.log(options);
  }
  if (userChoice.confirmLowercase === true) {
    options += lower[Math.floor(Math.random() * number.length)];
    space = space.concat(lower);
    console.log(options);
  }

  if (userChoice.confirmUppercase === true) {
    options += upper[Math.floor(Math.random() * number.length)];
    space = space.concat(upper);
    console.log(options);
  }
  if (userChoice.confirmCharacter === true) {
    options += character[Math.floor(Math.random() * number.length)];
    space = space.concat(character);
    console.log(options);
  }
  console.log(space);
  return options;
}
