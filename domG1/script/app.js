var scores, roundScore1, roundScore2, activePlayer, gamePlay;

init();

document.querySelector(".btn-roll").addEventListener("click", function () {
    if (gamePlay) {
        // 1.Select random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        //2.Display the Result
        var diceDom1 = document.querySelector(".dice1");
        var diceDom2 = document.querySelector(".dice2");
        diceDom1.style.display = "block";
        diceDom2.style.display = "block";
        diceDom1.src = "../images/dice-" + dice1 + ".png";
        diceDom2.src = "../images/dice-" + dice2 + ".png";
        // Checking two six in a row [challenge 3 : part 1]
        if (dice1 === 6 && dice2 === 6) {
            roundScore1 = 0;
            roundScore2 = 0;
            scores[activePlayer - 1] = 0;
            document.getElementById("current-" + activePlayer).textContent = 0;
            document.getElementById("score-" + activePlayer).textContent = 0;
            nextPlayer();
        } else {
            //3.update the round score if the rolled number is not 1
            if (dice1 !== 1 && dice2 !== 1) {
                // Add Score
                roundScore1 += dice1;
                roundScore2 += dice2;
                // Display the score in the current score box
                document.getElementById("current-" + activePlayer).textContent =
                    roundScore1 + roundScore2;
            } else {
                // Switch to the next player
                nextPlayer();
            }
        }
    }
});

// Creating the activities of Hold button
document.querySelector(".btn-hold").addEventListener("click", function () {
    if (gamePlay) {
        //Add current score to global score
        scores[activePlayer - 1] += roundScore1 + roundScore2;
        //Update the UI
        document.getElementById("score-" + activePlayer).textContent =
            scores[activePlayer - 1];
        var input = Number(document.getElementById("finalScore").value);
        var winningScore;
        input ? (winningScore = input) : (winningScore = 50);
        //Check If player won the game
        if (scores[activePlayer - 1] >= winningScore) {
            //Change player name to WINNER
            document.getElementById("name-" + activePlayer).textContent =
                "Winner!!";
            //Disappear the dice
            document.querySelector(".dice1").style.display = "none";
            document.querySelector(".dice2").style.display = "none";
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
    roundScore1 = 0;
    roundScore2 = 0;
    activePlayer = 1;
    gamePlay = true;
    document.querySelector(".dice1").style.display = "none";
    document.querySelector(".dice2").style.display = "none";
    document.getElementById("finalScore").value = "";

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
    roundScore1 = 0;
    roundScore2 = 0;
    // Resetting the current score box
    document.querySelector("#current-1").textContent = 0;
    document.querySelector("#current-2").textContent = 0;
    // Toggling Active Player
    document.querySelector(".player-1-pannel").classList.toggle("active");
    document.querySelector(".player-2-pannel").classList.toggle("active");
    // Disappear the dice when the dice value is 1
    document.querySelector(".dice1").style.display = "none";
    document.querySelector(".dice2").style.display = "none";
}
