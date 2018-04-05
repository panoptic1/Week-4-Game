//========================VARIABLES===============================

var playerScore = 0;

var targetScore;

var wins = 0;

var losses = 0;


var num1 = Math.floor(Math.random()*12+1);
var num2 = Math.floor(Math.random()*12+1);
var num3 = Math.floor(Math.random()*12+1);
var num4 = Math.floor(Math.random()*12+1);


//==============================================LOGIC====================================================================
$(document).ready(function() {
//Create a random number
var randomNum = Math.floor(Math.random() * 82) + 18;


//Start game 
    //assign a random number between 18-100 to the number box
    $("#numberToGet").text(randomNum);

    //assign four hidden random numbers between 1-12 to the four crystals

//When the user clicks on a crytal, the corresponding value of the crystal is appended to the user's score.
        
    $("#blueCrystal").on("click", function() {
    playerScore = playerScore + num1;
    console.log(playerScore);
    $("#current-score").text(playerScore);
    if (playerScore == randomNum) {
        wins++;
        $("#wins").text(wins);
        resetGame();
    }
    if (playerScore > randomNum) {
        losses++;
        $("#losses").text(losses);
        resetGame();
    }
    });

    $("#greenCrystal").on("click", function() {
    playerScore = playerScore + num2;
    console.log(playerScore);
    $("#current-score").text(playerScore);
    if (playerScore == randomNum) {
        wins++;
        $("#wins").text(wins);
        resetGame();       
    }
    if (playerScore > randomNum) {
        losses++;
        $("#losses").text(losses);
        resetGame();
    }
    });

    $("#purpleCrystal").on("click", function() {
    playerScore = playerScore + num3;
    console.log(playerScore);
    $("#current-score").text(playerScore);
    if (playerScore == randomNum) {
        wins++;
        $("#wins").text(wins);
        resetGame();
    }
    if (playerScore > randomNum) {
        losses++;
        $("#losses").text(losses);
        resetGame();
    }
    });

    $("#yellowCrystal").on("click", function() {
    playerScore = playerScore + num4;
    console.log(playerScore);
    $("#current-score").text(playerScore);
    if (playerScore == randomNum) {
        wins++;
        $("#wins").text(wins);
        resetGame();
    }
    if (playerScore > randomNum) {
        losses++;
        $("#losses").text(losses);
        resetGame();
    }
    });


//If the user score exceeds that of the random number, the user loses and the loss counter increments by 1, call game start function

//Or else, if the user score equates to that of the random number, the user wins and the win counter increments by 1, call game start function

});

//Write a function to restart the game after a win or loss 

function resetGame() {
    var randomNum = Math.floor(Math.random() * 82) + 18;
    $("#numberToGet").text(randomNum);
    playerScore = 0;
    $("#current-score").text(playerScore);
    num1 = Math.floor(Math.random()*12+1);
    num2 = Math.floor(Math.random()*12+1);
    num3 = Math.floor(Math.random()*12+1);
    num4 = Math.floor(Math.random()*12+1);
}

    