

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
