

// Answer1

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var userFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
var userLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

var fullName = userFirstName + " " + userLastName;

alert("Hello " + fullName + "!");
console.log("Hello " + fullName + "!");

// Answer2

var model = prompt("Enter your favorite mobile phone model:");

var lengthOfInput = model.length;

alert("Length of your input is: " + lengthOfInput);
console.log("Length of your input is: " + lengthOfInput);

// Answer3

var word = "Pakistani";

var index = word.indexOf("n");

alert("Index of 'n' in 'Pakistani' is: " + index);
console.log("Index of 'n' in 'Pakistani' is: " + index);

// Answer4

var text = "Hello World";

var lastIndex = text.lastIndexOf("l");

alert("Last index of 'l' in 'Hello World' is: " + lastIndex);
console.log("Last index of 'l' in 'Hello World' is: " + lastIndex);

// Answer5

var word = "Pakistani";

var result = word.charAt(3);

alert("Character at index 3 is: " + result);
console.log("Character at index 3 is: " + result);

// Answer6

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

firstName = firstName.charAt(0).toUpperCase().concat(firstName.slice(1).toLowerCase());
lastName = lastName.charAt(0).toUpperCase().concat(lastName.slice(1).toLowerCase());

var fullName = firstName.concat(" ", lastName);

alert("Hello " + fullName);
console.log("Hello " + fullName);

// Answer7

var word = "Hyderabad";

var newWord = word.replace("Hyder", "Islam");

console.log("Original word: " + word);
console.log("After replacement: " + newWord);

alert("After replacement: " + newWord);

// Answer8

var message = "Ali and Sami are best friends. They play cricket and football together.";

var newMessage = message.replaceAll("and", "&");

console.log("Original message:");
console.log(message);

console.log("Updated message:");
console.log(newMessage);

alert(newMessage);


// Answer9

var str = "472";

var num = Number(str);

console.log("Value as string:", str);
console.log("Type:", typeof str);

console.log("Value as number:", num);
console.log("Type:", typeof num);

alert("String value: " + str + " (type = " + typeof str + ")" +
    "\nNumber value: " + num + " (type = " + typeof num + ")");

// Answer10

var userInput = prompt("Enter any text:");

var upperCase = userInput.toUpperCase();

console.log("Original Input: " + userInput);
console.log("In Capital Letters: " + upperCase);

alert("In Capital Letters: " + upperCase);

// Answer11

var userInput = prompt("Enter any text:");

var words = userInput.split(" ");

for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() +
        words[i].slice(1).toLowerCase();
}

var titleCase = words.join(" ");

console.log("Original Input: " + userInput);
console.log("Title Case: " + titleCase);

alert("Title Case: " + titleCase);


// Answer12

var num = 35.36;

var str = num.toString();
var result = str.replace(".", "");

console.log("Original number:", num);
console.log("After removing dot:", result);

alert(result);

// Answer13

var username = prompt("Enter your username:");

var isValid = true;

for (var i = 0; i < username.length; i++) {

    var code = username.charCodeAt(i);

    if (code === 64 || code === 46 || code === 44 || code === 33) {
        isValid = false;
        break;
    }
}

if (isValid) {
    alert("Username stored successfully: " + username);
} else {
    alert("Please enter a valid username without special symbols (@ . , !)");
}

// Answer14

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Enter item to search:");

var searchItem = userInput.toLowerCase();

var isFound = false;

for (var i = 0; i < A.length; i++) {

    if (A[i].toLowerCase() === searchItem) {
        isFound = true;
        break;
    }
}

if (isFound) {
    alert("Yes, \"" + userInput + "\" is available in the list.");
} else {
    alert("Sorry, \"" + userInput + "\" is not available in the list.");
}

console.log("User searched:", userInput);
console.log("Found:", isFound);

// Answer15

var password = prompt("Enter your password:");
var valid = true;

var hasLetter = false;
var hasNumber = false;

if (password.length < 6) {
    valid = false;
}

var firstCode = password.charCodeAt(0);
if (firstCode >= 48 && firstCode <= 57) {
    valid = false;
}

for (var i = 0; i < password.length; i++) {

    var code = password.charCodeAt(i);

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        hasLetter = true;
    }

    if (code >= 48 && code <= 57) {
        hasNumber = true;
    }
}

if (!hasLetter || !hasNumber) {
    valid = false;
}

if (valid) {
    alert("Password accepted!");
} else {
    alert("Invalid password! Please enter a valid password.");
}

console.log("Password:", password);
console.log("Valid:", valid);