// The Password generator will provide a password with 8-128  characters based on criteria the user specifies.

//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);

// Various Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-",".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]","^","~", "}", "{", "|", "~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain? Must be between 8 and 128 characters"));

  // Loop if answer is outside the parameters 
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters. Please try again");
      var confirmLength = (prompt("How many characters would you like your password to contain? Must be between 8 and 128 character"));
      } 

      // Message confirming the number of characters user chose
      alert(`Your password will have ${confirmLength} characters`);

    // Determine parameters of password 
    var confirmSpecialCharacter = confirm("Would you like to include Special Characters? Click Ok to confirm.");
    var confirmNumericCharacter = confirm("Would you like to include Numeric Characters? Click Ok to confirm.");    
    var confirmLowerCase = confirm("Would you like to include Lower Case Characters? Click Ok to confirm.");
    var confirmUpperCase = confirm("Would you like to include Upper Case Characters? Click Ok to confirm.");
    
      // Loop if answer is outside the parameters 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmSpecialCharacter = confirm("Would you like to include Special Characters? Click Ok to confirm.");
        var confirmNumericCharacter = confirm("CWould you like to include Numeric Characters? Click Ok to confirm.");    
        var confirmLowerCase = confirm("Would you like to include Lower Case Characters? Click Ok to confirm.");
        var confirmUpperCase = confirm("Would you like to include Upper Case Characters? Click Ok to confirm.");
      }

      // Assign an action to the password parameters NEED TO FIX THIS
      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      console.log(passwordCharacters)

      // Empty string to be filled based on for loop selecting random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});
// This copies the password value - works

function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}