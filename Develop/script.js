// What does this code do?


// Assignment Code
// I need to Define all possible characters that can be used in the password.
// I need to define the length of the password.
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()_+~`|}{[];?><,./-=";


// we are targeting the button with the id of generate
var generateBtn = document.querySelector("#generate") 


function generatePassword() {
  // This is confirming that the generatePassword function is running in the console
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
