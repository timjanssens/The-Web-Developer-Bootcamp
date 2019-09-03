//reverse the array
function printReverse(array) {
    for (i = (array.length-1) ; i >= 0 ; i--) {
        console.log(array[i]);
     }
    }

//check if the array is uniform (all the same)


function isUniform(array) {
    
    for (i = 0 ; i < (array.length-1) ; i++) {
        if (array[i] !== array[i+1]) {
          return  false;
        } 
    }
    return true;
}

//second solution

// function isUniform(array) {
//     var first = array[0];
//     for(var i = 1 ; i < array.length ; i++){
//         if (array[i] !== first){
//             //return false and end the function
//             return false;
//         }
//     }
//     return true;
// }

//Make the sum of the entire array

function sumArray(array){

    var sum = 0;

    for (i = 0; i < array.length ; i++) {
        sum += array[i] 
    }
    
    return sum;
   
}

