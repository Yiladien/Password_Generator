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

// password character arrays
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var symbolCharacters = ["!","\"","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];




// prompt 1 - password length
  var passwordLengthPrompt = function() {
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
      passwordLengthPrompt();
    }
  };

// prompt 2, 3, 4, 5 - lower, upper, numeric, special boolean prompts
   function passwordBooleonPrompt(passwordPropertyType) {
    // ask user if they would like upper, lower, numeric, special characters
    var passwordPropertyBooleon = window.confirm("Do you want " + passwordPropertyType + " characters in your password?");

    // converts prompt response to number
    // passwordPropertyBooleon = parseInt(passwordPropertyBooleon);

      return passwordPropertyBooleon;

  };




var passwordCriteria = {
  // length between 8 8and 128 characters
    charCount: passwordLengthPrompt(),
  // include lowercase
    includeLower: passwordBooleonPrompt("LOWERCASE"),
  // include uppercase
    includeUpper: passwordBooleonPrompt("UPPERCASE"),
  // include numeric
    includeNumeric: passwordBooleonPrompt("NUMERIC"),
  //include special characters
    includeSpecial: passwordBooleonPrompt("SPECIAL SYMBOL")
};

function createCharacterList () {
  if(!passwordCriteria.includeLower && !passwordCriteria.includeUpper && !passwordCriteria.includeNumeric && !passwordCriteria.includeSpecial) {
    // window.alert("You did not provide criteria for the password. Try again.");
    passwordCriteria.includeLower = passwordBooleonPrompt("LOWERCASE");
    passwordCriteria.includeUpper = passwordBooleonPrompt("UPPERCASE");
    passwordCriteria.includeNumeric = passwordBooleonPrompt("NUMERIC");
    passwordCriteria.includeSpecial = passwordBooleonPrompt("SPECIAL SYMBOL");
    generatePassword();
  } else {
    var i = 0;
    var len = 0;
    var allCharacterList = [];

    if(passwordCriteria.includeLower) {
      len = allCharacterList.length;
      for (i = 0; i < lowerCaseLetters.length; i++) {
        allCharacterList[i+len] = lowerCaseLetters[i-len];
      }
    };

    if(passwordCriteria.includeUpper) {
      len = allCharacterList.length;
      for (i = 0; i < lowerCaseLetters.length; i++) {
        allCharacterList[i+len] = lowerCaseLetters[i].toUpperCase();
      }
    };

    if(passwordCriteria.includeNumeric) {
      len = allCharacterList.length;
      for (i = 0; i < 10; i++) {
        allCharacterList[i+len] = i.toString();
      }
    };

    if(passwordCriteria.includeSpecial) {
      len = allCharacterList.length;
      for (i = 0; i < symbolCharacters.length; i++) {
        allCharacterList[i+len] = symbolCharacters[i];
      }
    };
    return allCharacterList[5];
  };
}



//initial function
  var generatePassword = function () {
    

    //test line below
    // var newPassword = createCharacterList();
    var newPassword = createCharacterList();
    return newPassword;
    debugger;
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




// ,
//     reset: function() {
//       this.charCount = passwordLengthPrompt();
//       this.includeLower = passwordBooleonPrompt("LOWERCASE");
//       this.includeUpper = passwordBooleonPrompt("UPPERCASE");
//       this.includeNumeric = passwordBooleonPrompt("NUMERIC");
//       this.includeSpecial = passwordBooleonPrompt("SPECIAL SYMBOL");
//     }