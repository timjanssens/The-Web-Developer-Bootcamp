var button = document.getElementById("button");
button.addEventListener("click", function() {
    var backcolor = document.body.style.backgroundColor;
    document.body.style.backgroundColor =  backcolor === "green" ? "white": "green";
})