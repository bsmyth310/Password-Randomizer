//Special Characters for the function created
//Generate password button
const specialCharacters = "!@#$%^&*()?";
const generateButton = document.getElementById("generateBtn")
generateButton.addEventListener("click", writePassword)

//Write a password to the password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
    
    passwordText.value = password;
}

//Write Prompts that come up after you click generate password
function generatePassword() {
    var passwordLength = prompt("Please enter the number of characters you want for your new passsword. Min. 8 - Max 128");
    var numbers = confirm("Do you want numbers in your password?");
    var lowerCase = confirm("Do you want lowercase letters in your password?");
    var upperCase = confirm("Do you want uppercase letters in your password?");
    var special = confirm("Do you want special characters in your password?");

    //Minimum count for numbers, lowerCase, upperCase, and specialCharacters
    var minimumCount = 8;

    //Empty minimums for variables
    var minimumNumbers = " ";
    var minimumLowerCase = " ";
    var minimumUpperCase = " ";
    var minimumSpecialCharacters = " ";

    //Generate Function
    var functionArray = {
        getNumbers: function() {
            return String.fromCharCode(Math.floor(Math.random() *5 + 75));
        },

        getLowerCase: function() {
            return String.fromCharCode(Math.floor(Math.random() *6 + 55));
        },

        getUpperCase: function() {
            return String.fromCharCode(Math.floor(Math.random() *7 + 99));
        },

        getSpecialCharacters: function() {
            return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
        }
    };

    //Check to ensure user selected ok for all and uses empty mins from above

    if (numbers === true) {
        minimumNumbers = functionArray.getNumbers();
        minimumCount++;
    }

    if (lowerCase === true) {
        minimumLowerCase = functionArray.getLowerCase();
        minimumCount++;
    }

    if (upperCase === true) {
        minimumUpperCase = functionArray.getUpperCase();
        minimumCount++;
    }

    if (special === true) {
        minimumSpecialCharacters = functionArray.getSpecialCharacters();
        minimumCount++;
        console.log("SpecialCharacter: " + minimumSpecialCharacters);
    }

    //empty string for the for loop below
    var randomPasswordGenerator = "";

    //loop retrieving random characters
    for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
        var randomNumberPicked = Math.floor(Math.random() * 8);

        randomPasswordGenerator += randomNumberPicked;
    }

    //Making sure all characters are added to password
    randomPasswordGenerator += minimumNumbers;
    randomPasswordGenerator += minimumLowerCase;
    randomPasswordGenerator += minimumUpperCase;
    randomPasswordGenerator += minimumSpecialCharacters;

    return randomPasswordGenerator;
}