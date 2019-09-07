var scorePlayerOne = 0;
var scorePlayerTwo = 0;

document.getElementById("pointPlayerOne").onclick = function() {
    if (scorePlayerOne < 6 && scorePlayerTwo < 7) {
    scorePlayerOne++;
    document.getElementById("scorePlayerOne").innerHTML = scorePlayerOne;
    } else if (scorePlayerOne < 7 && scorePlayerTwo < 7){
        scorePlayerOne++;
        document.getElementById("scorePlayerOne").innerHTML = scorePlayerOne;
        document.getElementById("scorePlayerOne").style.color = "green";
    }}


document.getElementById("pointPlayerTwo").onclick = function() {
    if (scorePlayerTwo < 6 && scorePlayerOne < 7) {
    scorePlayerTwo++;
    document.getElementById("scorePlayerTwo").innerHTML = scorePlayerTwo;
    } else if (scorePlayerTwo < 7 && scorePlayerOne < 7){
        scorePlayerTwo++;
        document.getElementById("scorePlayerTwo").innerHTML = scorePlayerTwo;
        document.getElementById("scorePlayerTwo").style.color = "green";
    }}