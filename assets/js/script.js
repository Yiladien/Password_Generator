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


// object containing all password criteria
  var passwordCriteria = {
    // length between 8 8and 128 characters
      charCount: 0,
    // include lowercase
      includeLower: false,
    // include uppercase
      includeUpper: false,
    // include numeric
      includeNumeric: false,
    //include special characters
      includeSpecial: false
  }


// prompt 1 - password length
  function passwordLengthPrompt() {
    // ask user how long the password should be(must be between 8 and 128)
    var passLength = window.prompt(
      "Enter the number of characters for the password.\n(Must be between 8 and 128)"
    );

    // converts prompt response to number
    passLength = parseInt(passLength);

    if (passLength >=8 && passLength <= 128) {
      passwordCriteria.charCount;
    } else {
      window.alert("You did not enter a valid number.");
      passwordLengthPrompt();
    }
  }


// prompt 2, 3, 4, 5 - lower, upper, numeric, special boolean prompts
  function passwordBooleonPrompt(passwordPropertyType) {
    // ask user if they would like upper, lower, numeric, special characters
    var passwordPropertyBooleon = window.confirm("Do you want " + passwordPropertyType + " characters in your password?");

      return passwordPropertyBooleon;

  }



// holds password criteria as properties
  var passwordCriteria = {
      charCount: 0,
      includeLower: false,
      includeUpper: false,
      includeNumeric: false,
      includeSpecial: false
  }

// creates custom array filled with all characters based on the user selected criteria (lowercase, uppercase, numbers, symbols)
  function createCharacterList () {
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
    return allCharacterList;
  }

// start password creation after all parameters accepted
function createPassword() {
  // stores the password character criteria
    var characterList = createCharacterList ();
    var generatedPassword = [];

  // while loop to ensure password contains each type of character user chose
    //creating variables outside loops to avoid redundancy
    var passwordTypeCount = passwordCriteria.includeLower + passwordCriteria.includeUpper + passwordCriteria.includeNumeric + passwordCriteria.includeSpecial;
    var passwordPass = 0
    var j = 0
    var k = 0
    var l = 0

    while (passwordPass < passwordTypeCount) {
      // for loop to fill each custom character into an array equal to the size of the password
        for (j = 0; j < passwordCriteria.charCount; j++) {
          // creates a random number between 0 and one less the length of the characterList array as the position in the character list array
          // assigns to the next position in the generatedPassword array
            generatedPassword[i] = characterList[(Math.floor(Math.random() * characterList.length))];
        }
        
        // Resetting pass count for each time it loops
        passwordPass = 0;

        // Testing a lowercase letter exists in password if chosen
        if(passwordCriteria.includeLower) {
          for (k = 0; k < lowerCaseLetters.length; k++) {
            for(l = 0; l < generatedPassword.length; l++) {
              if (generatedPassword[l] === lowerCaseLetters[k]) {
                passwordPass++;
                l=generatedPassword.length;
                k=lowerCaseLetters.length;
              }
            }
          }
        }
        
        // Testing a uppercase letter exists in password if chosen
        if(passwordCriteria.includeUpper) {
          for (k = 0; k < lowerCaseLetters.length; k++) {
            for(l = 0; l < generatedPassword.length; l++) {
              if (generatedPassword[l] === lowerCaseLetters[k].toUpperCase()) {
                passwordPass++;
                l=generatedPassword.length;
                k=lowerCaseLetters.length;
              }
            }
          }
        }

        // Testing a number exists in password if chosen
        if(passwordCriteria.includeNumeric) {
          for (k = 0; k < 10; k++) {
            for(l = 0; l < generatedPassword.length; l++) {
              if (generatedPassword[l] === k.toString()) {
                passwordPass++;
                l=generatedPassword.length;
                k=10;
              }
            }
          }
        }
    
        if(passwordCriteria.includeSpecial) {
          for (k = 0; k < symbolCharacters.length; k++) {
            for(l = 0; l < generatedPassword.length; l++) {
              if (generatedPassword[l] === symbolCharacters[k]) {
                passwordPass++;
                l=generatedPassword.length;
                k=symbolCharacters.length;
              }
            }
          }
        }
    }

  // after password is created and passed, combining array into a single string
    var customPassword = combineArrayToString(generatedPassword,generatedPassword.length) 
    for (var m = 0; m < generatedPassword.length; m++) {
      customPassword = customPassword + generatedPassword[m];
    }
  
  // sending back to generate password function to provide to the html
  return customPassword;
}

function combineArrayToString(array,arrayLength) {
  var newString = ""
  for (var m = 0; m < arrayLength; m++) {
    newString = newString + array[m];
  }
  return newString;
}

// button start function
  var generatePassword = function () {
    
    // Request password length
      passwordCriteria.charCount = passwordLengthPrompt();
    
    // Request password criteria (lowercase, uppercase, numeric, symbols)
      // while loop if no criteria is selected
      while(!passwordCriteria.includeLower && !passwordCriteria.includeUpper && !passwordCriteria.includeNumeric && !passwordCriteria.includeSpecial) {
        passwordCriteria.includeLower = passwordBooleonPrompt("LOWERCASE");
        passwordCriteria.includeUpper = passwordBooleonPrompt("UPPERCASE");
        passwordCriteria.includeNumeric = passwordBooleonPrompt("NUMERIC");
        passwordCriteria.includeSpecial = passwordBooleonPrompt("SPECIAL SYMBOL");
      }

    // generating password
      var newPassword = createPassword();
    
    // passing password to display
      return newPassword;
  }



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


