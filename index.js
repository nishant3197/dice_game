//first dice
var randomNumber1 = Math.floor(Math.random()*6+1);
var dice1 = "images/dice" + randomNumber1 + ".png";
document.querySelector("img.img1").setAttribute("src" , dice1);

// second dice
var randomNumber2 = Math.floor(Math.random()*6+1);
var dice2 = "images/dice" + randomNumber2 + ".png";
document.querySelector("img.img2").setAttribute("src" , dice2);

var gameResult;

if (randomNumber1>randomNumber2) {gameResult = "🤟Player 1 WINS!!";}
else if (randomNumber1<randomNumber2) {gameResult = "Player 2 WINS!✌";}
else {gameResult = "Draw :/";}

document.querySelector("h1").textContent = gameResult;
