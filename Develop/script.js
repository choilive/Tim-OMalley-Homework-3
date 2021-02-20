// Assignment Code
var generateBtn = document.querySelector("#generate");

let passwordLenght  = 0;
let includeSpecial = false;
let includeLowercase = true;
let includeUppercase = true;

//Stores users password length
passwordLenght = window.prompt("How long would you like to make you password?");

//Stores if users wants special characters
includeSpecial = window.confirm("Would you like your password to include special characters?");

//Stores if users wants uppercase letters
includeUppercase = window.confirm("Would you like your password to include uppercase letters?");

//Stores if users wants lowercase letters
includeLowercase = window.confirm("Would you like your password to include lower case letters?");

function generatePassword(passwordLenght, includeSpecial, includeLowercase, includeUppercase) 
{
  //creating arrays with the possible letters/characters to choose from and an array to create the password in.
  let characterOptions = []
  let lowcase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let special = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "(", ")", "-", "=", "+"];

  //checks if special characters/uppercase letters/lower case letters and adds them to the array to generate the password from if included 
  if (includeSpecial){
    characterOptions = characterOptions.concat(special);
  }
  if (includeUppercase){
    characterOptions = characterOptions.concat(uppercase);
  }
  if (includeLowercase){
    characterOptions = characterOptions.concat(lowcase);
  }

  //sets password to null then generates a password based on the length given from the user
  let password = "";
  for (i = 0; i<passwordLenght; i++){
    console.log(i);
    password += characterOptions[Math.floor(Math.random() * characterOptions.length)];
  }
  return password;
}

// Write password to the #password input
function writePassword() {

  //checks if any parameters were given by user and returns if not
   if (passwordLenght != 0 || includeSpecial || includeUppercase || includeUppercase) {
     wasAnythingSelected = true;
    }else{
      window.alert("No parameters were selected");
      return;
    }
  
  //if any paramters were selected generates a password and stores it in a variable
  if(wasAnythingSelected){
    var password = generatePassword(passwordLenght, includeSpecial, includeLowercase, includeUppercase);
    var passwordText = document.querySelector("#password");
  }


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 