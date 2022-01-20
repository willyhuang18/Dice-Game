//declare var for random number 1-6
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
//declare var for every image 
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
//declare a var for img source
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
//declare starting img with the query selector