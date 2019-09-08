var scorePlayerOne = 0;
var scorePlayerTwo = 0;
var playingTo = 5

//add point to player if the max score isn't reached
//when the max score is reached turn green and make it
//impossible to add score to anyone 
document.getElementById("pointPlayerOne").onclick = function() {
    if (scorePlayerOne < playingTo-1 && scorePlayerTwo < playingTo) {
    scorePlayerOne++;
    document.getElementById("scorePlayerOne").innerHTML = scorePlayerOne;
    } else if (scorePlayerOne < playingTo && scorePlayerTwo < playingTo){
        scorePlayerOne++;
        document.getElementById("scorePlayerOne").innerHTML = scorePlayerOne;
        document.getElementById("scorePlayerOne").style.color = "green";
    }}

//add point to player if the max score isn't reached
//when the max score is reached turn green and make it
//impossible to add score to anyone
document.getElementById("pointPlayerTwo").onchange = function() {
    if (scorePlayerTwo < playingTo-1 && scorePlayerOne < playingTo) {
    scorePlayerTwo++;
    document.getElementById("scorePlayerTwo").innerHTML = scorePlayerTwo;
    } else if (scorePlayerTwo < playingTo && scorePlayerOne < playingTo){
        scorePlayerTwo++;
        document.getElementById("scorePlayerTwo").innerHTML = scorePlayerTwo;
        document.getElementById("scorePlayerTwo").style.color = "green";
    }}

//reset both scores to zero and also the max games to standard
//Tried it with an addEventListener
document.getElementById("resetButton").addEventListener("click", function(){
    scorePlayerOne = 0;
    scorePlayerTwo = 0;
    playingTo = 5;
    document.getElementById("scorePlayerOne").innerHTML = scorePlayerOne;
    document.getElementById("scorePlayerOne").style.color = "black";
    document.getElementById("scorePlayerTwo").innerHTML = scorePlayerTwo;
    document.getElementById("scorePlayerTwo").style.color = "black";
    document.getElementById("playingTo").innerHTML = playingTo;
    document.getElementById("playingToAdjustor").value = "";
});

//when the game is not yet started, make it possible to change the max score
document.getElementById("playingToAdjustor").onclick = function () {
    if (scorePlayerOne === 0 && scorePlayerTwo === 0 ){
    var playingToAdjustor = document.getElementById("playingToAdjustor").value;
    playingTo =playingToAdjustor;
    document.getElementById("playingTo").innerHTML = playingToAdjustor;
    }
}