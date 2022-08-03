// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// password min and max length
const passCharacterMin = 8;
const passCharacterMax = 128;


//initial function
  var generatePassword = function () {
    passwordCriteria();

    //test line below
    var newPassword = Math.random();

    return newPassword;
    debugger;
}


// prompt 1 - password length
  var passLengthPrompt = function() {
    // ask user how long the password should be(must be between 8 and 128)
    var passLength = window.prompt(
      "Enter the number of characters for the password.\n(Must be between 8 and 128)"
    );

    // converts prompt response to number
    passLength = parseInt(passLength);

    if (passLength >=8 && passLength <= 128) {
      return passLength;
    } else {
      window.alert("You did not enter a valid number.");
      passLengthPrompt();
    }
  };

// prompt 2 - password length
  var passLengthPrompt = function() {
    // ask user how long the password should be(must be between 8 and 128)
    var passLength = window.prompt(
      "Enter the number of characters for the password.\n(Must be between 8 and 128)"
    );

    // converts prompt response to number
    passLength = parseInt(passLength);

    if (passLength >= passCharacterMin && passLength <= passCharacterMax) {
      return passLength;
    } else {
      window.alert("You did not enter a valid number.");
      passLengthPrompt();
    }
  };




var passwordCriteria = {
  // length between 8 8and 128 characters
    charCount: passLengthPrompt(),
  // include uppercase
    upperLowercase: function () {
      var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
    },
  // include lowercase
    upperLowercase: 100,
  // include numeric
    includeNumeric: 10,
  //include special characters
    includeSpecial: 10,




    // reset: function() {
    //   this.health = 100;
    //   this.money = 10;
    //   this.attack = 10;
    // },
    // refillHealth: function() {
    //   if (this.money >= 7) {
    //     window.alert("Refilling player's health by 20 for 7 dollars.");
    //     this.health += 20;
    //     this.money -= 7;
    //   } else {
    //     window.alert("You don't have enough money!");
    //   }
    // },
    // upgradeAttack: function() {
    //   if (this.money >= 7) {
    //     window.alert("Upgrading player's attack by 6 for 7 dollars.");
    //     this.attack += 6;
    //     this.money -= 7;
    //   } else {
    //     window.alert("You don't have enough money!");
    //   }
    // }
};




// Pseudocode
// Optional: Check local storage for password preference values
// If they exist, ask user if they want to reuse the same choices and provide the choices on prompt. OK or cancel.
//  *If yes, reuse the same password settings and generate password.
//
//
// Ask for password length
//  *test password length
// Ask if they want uppercase
//  * Only prompt with OK or cancel
//  * Test if variable is null or 0
//  * store true or false in password property
// Ask if they want lowercase
//  * Only prompt with OK or cancel
//  * Test if variable is null or 0
//  * store true or false in password property
// Ask if they want numbers
//  * Only prompt with OK or cancel
//  * Test if variable is null or 0
//  * store true or false in password property
// Ask if they want special characters
//  * Only prompt with OK or cancel
//  * Test if variable is null or 0
//  * store true or false in password property
//
// Store choices in local storage (optional)
// 
// Create array based on responses
//  *If yes to upper, store all upper letters in alphabet in array
//  *If yes to lower, store all lower letters in alphabet in array
//  *If yes to numbers, store all numbers letters in alphabet in array
//  *If yes to symbols, store all symbols in array
//
// Goal - force minimum 25% of each choice... If yes to numbers, and minimum
//        characters are 8, 25% numbers would mean at least 2 characters
//        would be numbers.
// How? Possibly pre-determine what each character would hold in the password array.
//      (e.g. Position 1, uppercase, position 2, symbol, position 3, uppercase, 
//      position 4, lowercase, position 5, number, ...)
//
// Create a password array that fills the characters using a for loop stopping
//  at the amount of the password size chosen by user.
//  *Within the for loop, use the random function to select a 
//   number with maximum size of the size of the alpha/numberic/symbol arrays.
//  *Select the character at the location within the array based on the random 
//   number as the next entry into the next position in the password array
//  
// Run the password through a for loop test for upper, lower, numeric, symbols.
//  * For loop for each character
//  * Variables to track true false if the upper, lower, numeric, symbol was found.
//  * Once all requested meets criteria, break out of loop
// 
// Present user with password




