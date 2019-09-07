var scorePlayerOne = 0;
var scorePlayerTwo = 0;
var playingTo = 5

document.getElementById("pointPlayerOne").onclick = function() {
    if (scorePlayerOne < playingTo-1 && scorePlayerTwo < playingTo) {
    scorePlayerOne++;
    document.getElementById("scorePlayerOne").innerHTML = scorePlayerOne;
    } else if (scorePlayerOne < playingTo && scorePlayerTwo < playingTo){
        scorePlayerOne++;
        document.getElementById("scorePlayerOne").innerHTML = scorePlayerOne;
        document.getElementById("scorePlayerOne").style.color = "green";
    }}


document.getElementById("pointPlayerTwo").onclick = function() {
    if (scorePlayerTwo < playingTo-1 && scorePlayerOne < playingTo) {
    scorePlayerTwo++;
    document.getElementById("scorePlayerTwo").innerHTML = scorePlayerTwo;
    } else if (scorePlayerTwo < playingTo && scorePlayerOne < playingTo){
        scorePlayerTwo++;
        document.getElementById("scorePlayerTwo").innerHTML = scorePlayerTwo;
        document.getElementById("scorePlayerTwo").style.color = "green";
    }}

document.getElementById("resetButton").onclick = function(){
    scorePlayerOne = 0;
    scorePlayerTwo = 0;
    playingTo = 5;
    document.getElementById("scorePlayerOne").innerHTML = scorePlayerOne;
    document.getElementById("scorePlayerOne").style.color = "black";
    document.getElementById("scorePlayerTwo").innerHTML = scorePlayerTwo;
    document.getElementById("scorePlayerTwo").style.color = "black";
    document.getElementById("playingTo").innerHTML = playingTo;
    document.getElementById("playingToAdjustor").value = "";
}

document.getElementById("playingToAdjustor").onclick = function () {
    if (scorePlayerOne === 0 && scorePlayerTwo === 0 ){
    var playingToAdjustor = document.getElementById("playingToAdjustor").value;
    playingTo =playingToAdjustor;
    document.getElementById("playingTo").innerHTML = playingToAdjustor;
    }
}