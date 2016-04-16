//user starts with $10
var money = 10;
var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
var num3 = document.getElementById("num3").value;
var num4 = document.getElementById("num4").value;

var playButton = document.getElementById("play");
function pressButton () {
    console.log("You pressed the button!");
}
	

playButton.onclick = pressButton;
