//user starts with $10
var money = 10;
var num1;
var num2;
var num3;
var num4;

var output = document.getElementById("output");

var lotteryNumbers = document.getElementById("lottery-numbers");

var wallet = document.getElementById("wallet");

var playButton = document.getElementById("play");

function findDupes(arr) {
var duplicates = [],
    i, j;
for (i = 0, j = arr.length; i < j; i++) {
      if (duplicates.indexOf(arr[i]) === -1 && arr.indexOf(arr[i], i+1) !== -1) {
//        console.log("Found Duplicates");
//        output.innerHTML = "<span class='error'>Please make sure all four numbers are unique.</span>";
        return false;
      }
    }
}

function pressButton () {
        num1 = (document.getElementById("num1"));
        num2 = (document.getElementById("num2"));
        num3 = (document.getElementById("num3"));
        num4 = (document.getElementById("num4"));
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
        if (findDupes(arrayOfNumbersPlayed) == false) {
            output.innerHTML = "<span class='error'>Please make sure all four numbers are unique.</span>";
             console.log("findDupes returned a false value");
            return false;
        }
   
    money -= 2;
    console.log(arrayOfNumbersPlayed);
    
            var gameArr = [];
        for (var i=0, t=4; i<t; i++) {
            gameArr.push(Math.round(Math.random() * 10))
        }
        console.log(gameArr);
    
    var howManyMatches = 0;
    
    for (var j = 0; j < arrayOfNumbersPlayed.length; j++) {
        for (var m = 0; m < gameArr.length; m++){
        if (arrayOfNumbersPlayed[j] == gameArr[m]) {
                howManyMatches++;
            }
        }
    }
    console.log(howManyMatches);
    
    lotteryNumbers.innerHTML = "The Lottery numbers are: " + gameArr;
    
    if (howManyMatches == 0) {
        output.innerHTML = "<span class='error'>Sorry, no money won this time.</span>";
    } else if (howManyMatches == 1) {
        output.innerHTML = "<span class='win'>You won 2 dollars! Well...it cost you 2 dollars to play, so really you broke even, but I suppose that's splitting hairs a bit much for an output message in a game. Whatever, I'm keeping it real.</span>";
        money += 2;
    } else if (howManyMatches == 2) {
        output.innerHTML = "<span class='win'>You won 4 dollars!</span>";
        money += 4;
    } else if (howManyMatches == 3) {
        output.innerHTML = "<span class='win'>You won 16 dollars!</span>";
        money += 16;
    } else {
        output.innerHTML = "<span class='win'>Wow, matches across all 4 numbers! You won 64 dollars!</span>";
        money += 64;
    }
    wallet.innerHTML = "You now have $" + money + "!";
    
}


playButton.onclick = pressButton;
