var answer = "test";
var task = "";
var toDos = [];
var toDelete =""

while (answer !== "quit") {

    // 
    answer = prompt("What would you like to do?");

    if (answer === "new") {
        //ask which task
        task = prompt("What task do you want to add?");
        //add a todo
        toDos.push(task);
    }
    
    else if (answer === "list") {
        //view all to do
        console.log("***********");
        //make function to print each item but don't execute
        function logArrayElements(element, index){
            console.log(index + ":   " +element);
        }

        //go through the array toDos and print console.log
        toDos.forEach(logArrayElements);
        console.log("***********");
    }

    else if (answer === "delete") {

        toDelete = prompt("Enter index of todo to delete");

        //delete te element that is on the index of toDelete, 1 item
        toDos.splice(toDelete,1);

    }   


}

console.log("You ended the program");