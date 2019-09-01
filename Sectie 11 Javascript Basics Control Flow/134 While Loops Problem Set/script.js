console.log("Print all numbers between -10 and 19");

var firstNumber = -10;

while (firstNumber <= 19) {
    console.log(firstNumber);
    firstNumber++;
}

console.log("Print all even numbers between 10 and 40");

var secondNumber = 10;

while (secondNumber <= 40) {
    if (secondNumber % 2 === 0) {
        console.log(secondNumber);
    }
    secondNumber++;
}


console.log("Print all odd numbers between 300 and 333");

var thirdNumber = 300;

while (thirdNumber <= 333) {
    if (thirdNumber % 2 !== 0) {
        console.log(thirdNumber);
    }
    thirdNumber++;
}


console.log("Print all numbers devisable by 5 AND 3 between 5 and 50");

var fourthNumber = 5;

while (fourthNumber <= 50) {
    if (fourthNumber % 3 === 0 && fourthNumber % 5 === 0){
        console.log(fourthNumber);
    }
    fourthNumber++;
}