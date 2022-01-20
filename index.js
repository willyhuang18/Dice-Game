//declare var for random number 1-6
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
console.log(randomNumber1);
//declare var for every image 
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
console.log(randomDiceImage);
//declare a var for img source
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
console.log(randomImageSource);
//declare starting img with the query selector
var image1 = document.querySelectorAll("img")[0];
//giving attribute for every img
image1.setAttribute("src", randomImageSource);
console.log(image1);
//setting up the random number for second dice and do the same thing above
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";//dice1.png - dice6.png
//skipping the var query selector
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);//images/dice1.png - images/dice6.png
