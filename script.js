// Assignment Code
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialChar = "!@#$%^&*()_+<>?'[]{},.`~";
var confirmUpperCase;
var confirmLowerCase;
var confirmNumbers;
var confirmSpecialChar;
var charSelections = "";
var password = "";
var pwLength;

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // NOTES PROMPT TO ENTER PASSWORD LENGTH CONVERTING TO NUMBERS
  var pwLength = parseInt(
    prompt(
      `What is the desired length of your password? Please type a number between 8 and 128.`
    )
  );

  if (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
    alert(`Oh no! Your password is not a valid length, please try again!`);

    return Error(`Invalid length, please try again.`);
  } else confirm(`Great! Your password will be ${pwLength} characters long.`);

  confirmUpperCase = confirm(
    `Would you like to include uppercase letters in your password? If yes, click "OK"! if no, click "Cancel".
  `
  );

  confirmLowerCase = confirm(
    `Would you like to include lowercase letters in your password? If yes, click "OK"! If no, click "Cancel".`
  );
  confirmNumbers =
    confirm(`Would you like to include numbers in your password? If yes, click "OK"! If no, click "Cancel".
    `);
  confirmSpecialChar =
    confirm(`Would you like to include special characters in your password? If yes, click "OK"! If no, click "Cancel".
    `);
  if (
    !confirmLowerCase &&
    !confirmUpperCase &&
    !confirmNumbers &&
    !confirmSpecialChar
  ) {
    alert(
      `Oh no! No character sets were selected. Please try again, confirming at least one of the character sets!`
    );
    return Error(
      `Please choose at least one character set: 
      Uppercase: ${upperCase}
      Lowercase: ${lowerCase}
      Numbers: ${numbers}
      Special character: ${specialChar})`
    );
  } else {
    alert(`Great! We are generating your secure password!`);
  }

  if (confirmUpperCase) {
    charSelections += upperCase;
  }
  if (confirmLowerCase) {
    charSelections += lowerCase;
  }
  if (confirmNumbers) {
    charSelections += numbers;
  }
  if (confirmSpecialChar) {
    charSelections += specialChar;
  }

  for (var i = 0; i < pwLength; i++) {
    password += charSelections.charAt(
      Math.floor(Math.random() * charSelections.length)
    );
  }
  return password;
}
