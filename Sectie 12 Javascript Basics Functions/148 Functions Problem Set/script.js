//for testing
// function sayHi(str) {
//     return str;
// }
// // sayHi("hello")


function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function factorial(num) {
    var solution = 1;
    for (i = 1; i <= num; i++) {
        solution = solution * i;
        //  solution *= i;
    }
    return solution;
}