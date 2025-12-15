

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
