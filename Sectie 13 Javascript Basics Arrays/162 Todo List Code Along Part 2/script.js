var answer = "test";
var task = "";
var toDos = [];

while (answer !== "quit") {

    answer = prompt("What would you like to do?");

    if (answer === "new") {
        //ask which task
        task = prompt("What task do you want to add?");
        //add a todo
        toDos.push(task);
    }
    else if (answer === "list") {
        //view all to do
        console.log(toDos);
    }

}