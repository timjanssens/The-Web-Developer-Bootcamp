//set current date in a var to use afterwards
var currentDate = new Date();

//testing
//console.log(currentDate);

var dateOfBirth =  prompt("What is your date of birth?");

//split into an array
var parts = dateOfBirth.split('/');

//get new date by getting things out of the array and put in date format "year - month - day"
var myDate = new Date(parts[2], parts[1] - 1, parts[0]); 

//testing
//console.log(myDate.toDateString());

var ageInMilliseconds = currentDate - myDate;

//The number of milliseconds in one day
var oneDay = 1000 * 60 * 60 * 24;

var ageInDays = ageInMilliseconds / oneDay;

console.log("You are " +  Math.floor(ageInDays) + " days old.");

