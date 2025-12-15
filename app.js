

// Answer1

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var userFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
var userLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

var fullName = userFirstName + " " + userLastName;

alert("Hello " + fullName + "!");
console.log("Hello " + fullName + "!");
