//user starts with $10
var money = 10;
var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
var num3 = document.getElementById("num3").value;
var num4 = document.getElementById("num4").value;

var output = document.getElementById("output");

var playButton = document.getElementById("play");
function pressButton () {
    if (money < 2) {
        output.innerHTML = "<span class='error'>Sorry, you don't have enough money to play</span>";
        return false;
    }
    money -= 2;
    console.log("You pressed the button!");
    console.log(money);
    console.log(typeof(num1));
}
	

playButton.onclick = pressButton;
