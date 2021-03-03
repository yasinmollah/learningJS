var scores, roundScore, activePlayer, gamePlay;

init();

document.querySelector(".btn-roll").addEventListener("click", function () {
    if (gamePlay) {
        // 1.Select random number
        var dice = Math.floor(Math.random() * 6) + 1;
        //2.Display the Result
        var diceDom = document.querySelector(".dice");
        diceDom.style.display = "block";
        diceDom.src = "../images/dice-" + dice + ".png";
        //3.update the round score if the rolled number is not 1
        if (dice !== 1) {
            // Add Score
            roundScore += dice;
            // Display the score in the current score box
            document.getElementById(
                "current-" + activePlayer
            ).textContent = roundScore;
        } else {
            // Switch to the next player
            nextPlayer();
        }
    }
});

// Creating the activities of Hold button
document.querySelector(".btn-hold").addEventListener("click", function () {
    if (gamePlay) {
        //Add current score to global score
        scores[activePlayer - 1] += roundScore;
        //Update the UI
        document.getElementById("score-" + activePlayer).textContent =
            scores[activePlayer - 1];
        //Check If player won the game
        if (scores[activePlayer - 1] >= 20) {
            //Change player name to WINNER
            document.getElementById("name-" + activePlayer).textContent =
                "Winner!!";
            //Disappear the dice
            document.querySelector(".dice").style.display = "none";
            //Move the winner player to the winner class
            document
                .querySelector(`.player-${activePlayer}-pannel`)
                .classList.add("winner");
            // Remove active class from the winner player
            document
                .querySelector(`.player-${activePlayer}-pannel`)
                .classList.remove("active");
            gamePlay = false;
        } else {
            // Switch to the next player
            nextPlayer();
        }
    }
});

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 1;
    gamePlay = true;
    document.querySelector(".dice").style.display = "none";

    document.getElementById("score-1").textContent = "0";
    document.getElementById("score-2").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("current-2").textContent = "0";
    document.getElementById("name-1").textContent = "Player 1";
    document.getElementById("name-2").textContent = "Player 2";
    document.querySelector(".player-1-pannel").classList.remove("winner");
    document.querySelector(".player-2-pannel").classList.remove("winner");
    document.querySelector(".player-1-pannel").classList.remove("active");
    document.querySelector(".player-2-pannel").classList.remove("active");
    document.querySelector(".player-1-pannel").classList.add("active");
}

//Creating Next PLayer function for applying DRY principals
function nextPlayer() {
    // switch to the next player
    activePlayer === 1 ? (activePlayer = 2) : (activePlayer = 1);
    // Resetting the current score
    roundScore = 0;
    // Resetting the current score box
    document.querySelector("#current-1").textContent = 0;
    document.querySelector("#current-2").textContent = 0;
    // Toggling Active Player
    document.querySelector(".player-1-pannel").classList.toggle("active");
    document.querySelector(".player-2-pannel").classList.toggle("active");
    // Disappear the dice when the dice value is 1
    document.querySelector(".dice").style.display = "none";
}
