//user starts with $10
var money = 10;
var num1 = (document.getElementById("num1"));
var num2 = (document.getElementById("num2"));
var num3 = (document.getElementById("num3"));
var num4 = (document.getElementById("num4"));

var output = document.getElementById("output");

var playButton = document.getElementById("play");

function findDupes(arr) {
var duplicates = [],
    i, j;
for (i = 0, j = arr.length; i < j; i++) {
      if (duplicates.indexOf(arr[i]) === -1 && arr.indexOf(arr[i], i+1) !== -1) {
        console.log("Found Duplicates");
        output.innerHTML = "<span class='error'>Please make sure all four numbers are unique.</span>";
        return false;
      }
    }
}





function pressButton () {
        if (money < 2) {
            output.innerHTML = "<span class='error'>Sorry, you don't have enough money to play.</span>";
            return false;
        }
    num1 = parseInt(num1.value);
    num2 = parseInt(num2.value);
    num3 = parseInt(num3.value);
    num4 = parseInt(num4.value);
        if (typeof num1 != "number" || typeof num2 != "number" || typeof num3 != "number"  || typeof num4 != "number" ) {
          output.innerHTML = "<span class='error'>Please pick a number and make sure all 4 boxes have numbers in them.</span>";
            console.log("That's not a number");
            return false;
        }
    
    var arrayOfNumbersPlayed = [num1, num2, num3, num4];
    findDupes(arrayOfNumbersPlayed);
    if (findDupes == false) {
        console.log("findDupes returned a false value");
    }
   
    money -= 2;
    console.log("You pressed the button!");
    console.log(money);
    console.log(arrayOfNumbersPlayed);
}


playButton.onclick = pressButton;
