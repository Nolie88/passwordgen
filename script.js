// input variables:
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

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
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetic characters:
alpha = [
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

// Space is for the Uppercase conversion
space = [];

// Choices declared outside the if statement so they can be concatenated upon condition
var choices;

// converts letters to uppercase
var toUpper = function (x) {
  return x.toUpperCase();
};

// creates a variable for uppercase conversion
alpha2 = alpha.map(toUpper);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
