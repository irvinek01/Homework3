// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var userpwLength = window.prompt("How many characters would you like your Password to contain?"+
  "\nChoose at least 8 characters length" +
  "\nAnd no more than 128 characters length");

  // THEN I choose a length of at least 8 characters 
  // and no more than 128 characters
  if (userpwLength == null || userpwLength == "") {
    alert("You did not enter anything");
  } else if(parseInt(userpwLength) >= 8 && 
  parseInt(userpwLength) <= 128) {

    console.log(userpwLength);

    var lowerCharBoolean = confirm("Click OK to confirm including lowercase Characters");
    var upperCharBoolean = confirm("Click OK to confirm including uppercase Characters");
    var numericCharBoolean = confirm("Click OK to confirm including numeric Characters");
    var specialCharBoolean = confirm("Click OK to confirm including special Characters");
    if (!lowerCharBoolean && !upperCharBoolean && !numericCharBoolean && !specialCharBoolean) {
      alert("YOU MUST SELECT ONE CHARACTER CRITERIA");
      return false;
    }

    // Reference
    // https://stackoverflow.com/questions/1497481/javascript-password-generator
    length = userpwLength;
    var string="";

    if ((lowerCharBoolean && !upperCharBoolean) || 
        (upperCharBoolean && lowerCharBoolean)) {
      string ="abcdefghijklmnopqrstuvwxyz";
    } else if (upperCharBoolean && !lowerCharBoolean) {
      string=("abcdefghijklmnopqrstuvwxyz").toUpperCase();
    }

    var numeric = numericCharBoolean ? "0123456789" : "";
    // if (numericCharBoolean) {
    //   numeric="0123456789";
    // } else {
    //   numeric="";
    // } equivalent to numericCharBoolean ? "0123456789" : "";
    var punctuation = specialCharBoolean ? "!@#$%^&*()_+~`|}{[]\:;?><,./-=" : "";
    var password = "";
    var character = "";
    var crunch = true;

    while( password.length<length ) {
        entity1 = Math.ceil(string.length * Math.random()*Math.random());
        entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
        entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
        hold = string.charAt( entity1 );

        // For uppercase check
        if (upperCharBoolean) {
          hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
        }        

        character += hold;
        character += numeric.charAt( entity2 );
        character += punctuation.charAt( entity3 );
        password = character;
    }

    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
    alert(password.substr(0,length));

    console.log(lowerCharBoolean);
    console.log(upperCharBoolean);
    console.log(numericCharBoolean);
    console.log(specialCharBoolean);

  } else {
    alert("You did not meet the required character length!");
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// LACK OF INPUT VALIDATION AND PASSWORD GENERATED DISPLAY IN PAGE
