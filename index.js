// Input the images of dice6.png
document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice6.png");
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice6.png");


// Random number between 1 & 6 for both dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// applies random number to 1st dice
document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
// applies random number to 2nd dice
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + randomNumber2 + ".png");

//changes h1 to display winner
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";  
}
else if (randomNumber1 < randomNumber2){
      document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
else{
      document.querySelector("h1").textContent = "Draw!";
}
  