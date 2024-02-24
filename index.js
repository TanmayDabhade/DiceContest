//Functions
function reloadPage() {
    // This will reload the current page
    window.location.reload();
}

// Variables

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //Generates a number form 1-6 for player 1

var randomImageSource1 = "dice" + randomNumber1 + ".png"; //creates the image address for the number generated for player 1

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1); //assigns the image address to the respective image tag

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //Generates a number form 1-6 for player 2

var randomImageSource2 = "dice" + randomNumber2 + ".png"; //creates the image address for the number generated for player 2

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); //assigns the image address to the respective image tag



// Conditionals determine the winner/draw.
if (randomNumber1 > randomNumber2) {
  document.querySelector("h2").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h2").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h2").innerHTML = "Draw!";
}
