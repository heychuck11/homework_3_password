// Assignment codes for the letters, numbers, special, and characters
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c", "e", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var characters = ["!","@", "#", "$", "%", "^", "&", "*", "?"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword("write your password");
  var passwordText = document.querySelector(lowerCase + upperCase + numbers + characters );
  localStorage.setItem(passwordText)
  for(i = 0; i < 9; i++) {
    Math.floor(Math.random() * 9)
  }
}

for(i = 0; i < 9; i++) {
  Math.floor(Math.random() * 9)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


