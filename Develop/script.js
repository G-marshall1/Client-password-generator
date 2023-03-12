// What does this code do?


// Assignment Code
// I need to Define all possible characters that can be used in the password.
// I need to define the length of the password.
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_+~`|}{[];?><,./-=";
var password = "";

// I need to define the length of the password.
var passwordLength = prompt("How many characters would you like your password to be?");

// we are targeting the button with the id of generate
var generateBtn = document.querySelector("#generate") 

//we are targeting the text area with the id of password
var passwordText = document.querySelector("#password");

var lowerCase = confirm("Would you like to use lower case letters?");
var upperCase = confirm("Would you like to use upper case letters?"); 
var numbers = confirm("Would you like to use numbers?");
var specialCharacters = confirm("Would you like to use special characters?");
var password = "";

function generatePassword() {
console.log("generatePassword function is running")
}
// Write password to the #password input
function writePassword() {
  // Generate password is not defined
  // the generatePassword function should store the password when called (currently no generatePassword is being defined because no value is given)
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

// by clicking the button, the function writePassword should run
generateBtn.addEventListener("click", writePassword);
