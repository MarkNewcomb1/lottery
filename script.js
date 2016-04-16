//user starts with $10
var money = 10;
var num1 = parseInt(document.getElementById("num1"));
var num2 = parseInt(document.getElementById("num2"));
var num3 = parseInt(document.getElementById("num3"));
var num4 = parseInt(document.getElementById("num4"));

var output = document.getElementById("output");

var playButton = document.getElementById("play");
function pressButton () {
    if (money < 2) {
        output.innerHTML = "<span class='error'>Sorry, you don't have enough money to play.</span>";
        return false;
    }
    if (typeof num1 != "number" || typeof num2 != "number" || typeof num3 != "number"  || typeof num4 != "number" ) {
      output.innerHTML = "<span class='error'>Please pick a number and make sure all 4 boxes have numbers in them.</span>";
        console.log("That's not a number");
        return false;
    }
    
    var arrayOfNumbersPlayed = [num1.value, num2.value, num3.value, num4.value];
    
    money -= 2;
    console.log("You pressed the button!");
    console.log(money);
    console.log(arrayOfNumbersPlayed);
}
	

playButton.onclick = pressButton;
