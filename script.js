// Assignment code here
const lengthSlider = document.querySelector(".passwordRange")
generateBtn = document.querySelector(".generate");

const characters = { // object of letters, numbers & symbols
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}

generateBtn.addEventListener("click", function(writePasswordt) {
  writePassword.preventDefault()});

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button


