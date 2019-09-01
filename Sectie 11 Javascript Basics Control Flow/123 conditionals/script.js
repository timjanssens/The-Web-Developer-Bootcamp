var age = prompt("How old are you? ");


if (age < 0) {

    console.log("ERROR --> it is not possible to have an age below 0");

} else if (age === 21) {

    console.log("Happy 21st birthday!")

}

if ( (age%2) !== 0){

    console.log("your age is odd");

}

var squareAge = Math.sqrt(age);

//testing
// console.log(squareAge);

if (Number.isInteger(squareAge)) {

    console.log("Perfect square!");
}




