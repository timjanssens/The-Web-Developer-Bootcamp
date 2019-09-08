var redRGB = oneRGB();
var greenRGB = oneRGB();
var blueRGD = oneRGB();

var correctRGB = (redRGB+", " + greenRGB+", " + blueRGD);

var newColorLi = document.getElementById("newColorLi");
var guessingRGB = document.getElementById("colorTextRGB");


newColorLi.addEventListener("click", function(){
    
    guessingRGB.innerHTML = "RGB " + correctRGB;
}
)

//generate a random between 0 an 255
function oneRGB() {
    return Math.floor(Math.random()*255);
}



console.log(correctRGB);