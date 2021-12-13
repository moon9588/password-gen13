// // Assignment Code

  var button = document.querySelector('button');
  button.onclick = function() {
    window.alert ("Welcome to Password Generator");

// Tell users to add a password

promptCharacterLength = window.alert( "Password must have minimum of at least 8 characters and no more than 128 characters");
// console.log(passwordciteria);
citeria = window.alert("Please choose lowercase letter, uppercase letter, numberic number and special character")

window.alert("Please choose now from the following character")

// characters to include options 
var passwordLength = window.prompt("Add 8 to 10 characters")
  console.log(passwordLength);

var promptCharacterA = window.prompt("Would you like to add a lowercase letter? Please Enter YES or NO to choose.");
  console.log(promptCharacterA);

var promptCharacterB = window.prompt("Would you like to add a uppercase letter? Please Enter YES or NO to choose.");
  console.log(promptCharacterB);

var promptCharacterC = window.prompt("Would you like to add a numberic number? Please Enter YES or NO to choose.");
  console.log(promptCharacterC);

var promptCharacterD = window.prompt("Would you like to add a special character? Please Enter YES or NO to choose.");
  console.log(promptCharacterD);



// If individual does not follow the max or minimum character requirements

if (passwordLength <8){
  window.alert ("Password must be at least 8 character. Please add additional characters");
  return;
}

if (passwordLength >128){
  window.alert ("Password can not be more then 128 character. Please remove any additional characters");
  return;
}

else {
  window.alert ("Password Criteria Satisfied ")

}
alert(generatePassword(8));  

}

  function generatePassword(passwordLength){
  var numberChars= "0123456789";
  var upperChars= "ABCDEFGHIJKLMNOPQRSTUVHOXYZ";
  var lowerChars= "abcdefghijklmnopqrstuvuxyz";
  var specialChars= "!,@,#,$,%,^,&,*,<,>,?,/,:,;,?,-";
  var allChars= numberChars + upperChars + lowerChars + specialChars;
  var randPasswordArray= Array(passwordLength);


  randPasswordArray[0] = numberChars;
  randPasswordArray[1] = upperChars;
  randPasswordArray[2] = lowerChars;
  randPasswordArray[3] = specialChars;
  randPasswordArray= randPasswordArray.fill(allChars, 4);
  return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] } )).join('');
  }

  function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
  var j= Math.floor(Math.random() * (i + 1));
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp
  }
  return array;
}
  

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
