// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var password = window.alert ("Welcome to Password Generator")
// Tell users to add a password

var passwordciteria = window.alert( "Password must have minimum of at least 8 characters and no more than 128 characters")

// characters to include options 
var promptcharacter1 = window.prompt('Would you like to add a lowercase letter? Enter "Yes" or "No" to choose.');
var promptcharacter2 = window.prompt('Would you like to add a uppercase letter? Enter "Yes" or "No" to choose.');
var promptcharacter3 = window.prompt('Would you like to add a numberic number? Enter "Yes" or "No" to choose.');
var promptcharacter4 = window.prompt('Would you like to add a special character ? Enter "Yes" or "No" to choose.');








// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
