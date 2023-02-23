// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var regenerateBtn = document.querySelector("#regenerate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Write password to the #password input
function rewritePassword() {
  var password = regeneratePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
regenerateBtn.addEventListener("click", rewritePassword);

// password min and max length
const passCharacterMin = 8;
const passCharacterMax = 128;

// password character arrays
var lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var symbolCharacters = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

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
  includeSpecial: false,
};

// prompt 1 - password length
function passwordLengthPrompt() {
  var passLengthTest = false;
  while (passLengthTest === false) {
    // ask user how long the password should be(must be between 8 and 128)
    passLength = window.prompt(
      "Enter the number of characters for the password.\n(Must be between 8 and 128)"
    );

    // converts prompt response to number
    passLength = parseInt(passLength);

    if (passLength >= passCharacterMin && passLength <= passCharacterMax) {
      passLengthTest = true;
    } else {
      window.alert("You did not enter correct criteria. Please try again.");
    }
  }

  return passLength;
}

// prompt 2, 3, 4, 5 - lower, upper, numeric, special boolean prompts
function passwordBooleonPrompt(passwordPropertyType) {
  // ask user if they would like upper, lower, numeric, special characters
  var passwordPropertyBooleon = window.confirm(
    "Do you want " + passwordPropertyType + " characters in your password?"
  );

  return passwordPropertyBooleon;
}

// holds password criteria as properties
var passwordCriteria = {
  charCount: 0,
  includeLower: false,
  includeUpper: false,
  includeNumeric: false,
  includeSpecial: false,
};

// creates custom array filled with all characters based on the user selected criteria (lowercase, uppercase, numbers, symbols)
function createCharacterList() {
  var i = 0;
  var len = 0;
  var allCharacterList = [];

  if (passwordCriteria.includeLower) {
    len = allCharacterList.length;
    for (i = 0; i < lowerCaseLetters.length; i++) {
      allCharacterList[i + len] = lowerCaseLetters[i - len];
    }
  }

  if (passwordCriteria.includeUpper) {
    len = allCharacterList.length;
    for (i = 0; i < lowerCaseLetters.length; i++) {
      allCharacterList[i + len] = lowerCaseLetters[i].toUpperCase();
    }
  }

  if (passwordCriteria.includeNumeric) {
    len = allCharacterList.length;
    for (i = 0; i < 10; i++) {
      allCharacterList[i + len] = i.toString();
    }
  }

  if (passwordCriteria.includeSpecial) {
    len = allCharacterList.length;
    for (i = 0; i < symbolCharacters.length; i++) {
      allCharacterList[i + len] = symbolCharacters[i];
    }
  }
  return allCharacterList;
}

// start password creation after all parameters accepted
function createPassword() {
  // stores the password character criteria
  var characterList = createCharacterList();
  var generatedPassword = [];

  // while loop to ensure password contains each type of character user chose
  //creating variables outside loops to avoid redundancy
  var passwordTypeCount =
    passwordCriteria.includeLower +
    passwordCriteria.includeUpper +
    passwordCriteria.includeNumeric +
    passwordCriteria.includeSpecial;
  var passwordPass = 0;
  var j = 0;
  var k = 0;
  var l = 0;

  while (passwordPass < passwordTypeCount) {
    // for loop to fill each custom character into an array equal to the size of the password
    for (j = 0; j < passwordCriteria.charCount; j++) {
      // creates a random number between 0 and one less the length of the characterList array as the position in the character list array
      // assigns to the next position in the generatedPassword array
      generatedPassword[j] =
        characterList[Math.floor(Math.random() * characterList.length)];
    }

    // Resetting pass count for each time it loops
    passwordPass = 0;

    //TEST START
    // Testing a lowercase letter exists in password if chosen
    if (passwordCriteria.includeLower) {
      for (k = 0; k < lowerCaseLetters.length; k++) {
        for (l = 0; l < generatedPassword.length; l++) {
          if (generatedPassword[l] === lowerCaseLetters[k]) {
            passwordPass++;
            l = generatedPassword.length;
            k = lowerCaseLetters.length;
          }
        }
      }
    }

    // Testing a uppercase letter exists in password if chosen
    if (passwordCriteria.includeUpper) {
      for (k = 0; k < lowerCaseLetters.length; k++) {
        for (l = 0; l < generatedPassword.length; l++) {
          if (generatedPassword[l] === lowerCaseLetters[k].toUpperCase()) {
            passwordPass++;
            l = generatedPassword.length;
            k = lowerCaseLetters.length;
          }
        }
      }
    }

    // Testing a number exists in password if chosen
    if (passwordCriteria.includeNumeric) {
      for (k = 0; k < 10; k++) {
        for (l = 0; l < generatedPassword.length; l++) {
          if (generatedPassword[l] === k.toString()) {
            passwordPass++;
            l = generatedPassword.length;
            k = 10;
          }
        }
      }
    }

    if (passwordCriteria.includeSpecial) {
      for (k = 0; k < symbolCharacters.length; k++) {
        for (l = 0; l < generatedPassword.length; l++) {
          if (generatedPassword[l] === symbolCharacters[k]) {
            passwordPass++;
            l = generatedPassword.length;
            k = symbolCharacters.length;
          }
        }
      }
    }
    //TEST END
  }

  // after password is created and passed, combining array into a single string
  var customPassword = combineArrayToString(
    generatedPassword,
    generatedPassword.length
  );

  // sending back to generate password function to provide to the html
  return customPassword;
}

function combineArrayToString(array, arrayLength) {
  var newString = "";
  for (var m = 0; m < arrayLength; m++) {
    newString = newString + array[m];
  }
  return newString;
}

// button start function
var generatePassword = function () {
  passwordCriteria.charCount = parseInt(
    document.querySelector("#passwordLength").value
  );

  console.log(passwordCriteria.charCount);

  passwordCriteria.includeLower =
    document.querySelector("#includeLowercase").checked;
  passwordCriteria.includeUpper =
    document.querySelector("#includeUppercase").checked;
  passwordCriteria.includeNumeric =
    document.querySelector("#includeNumeric").checked;
  passwordCriteria.includeSpecial =
    document.querySelector("#includeSpecial").checked;

  // saving password criteria in local storage for re-generation button
  localStorage.setItem("passLength", passwordCriteria.charCount);
  localStorage.setItem("passLower", passwordCriteria.includeLower);
  localStorage.setItem("passUpper", passwordCriteria.includeUpper);
  localStorage.setItem("passNumber", passwordCriteria.includeNumeric);
  localStorage.setItem("passSpecial", passwordCriteria.includeSpecial);

  // generating password
  var newPassword = createPassword();

  // passing password to display
  return newPassword;
};

// button start function
var regeneratePassword = function () {
  // retrieving password criteria in local storage for re-generation button
  passwordCriteria.charCount = parseInt(localStorage.getItem("passLength"));
  passwordCriteria.includeLower =
    localStorage.getItem("passLower") === "true" ? true : false;
  passwordCriteria.includeUpper =
    localStorage.getItem("passUpper") === "true" ? true : false;
  passwordCriteria.includeNumeric =
    localStorage.getItem("passNumber") === "true" ? true : false;
  passwordCriteria.includeSpecial =
    localStorage.getItem("passSpecial") === "true" ? true : false;

  // generating password
  var newPassword = createPassword();

  // passing password to display
  return newPassword;
};
