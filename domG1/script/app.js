var scores, roundScore, activePlayer;

score = [0, 0];
roundScore = 0;
activePlayer = 1;

// document.querySelector("#current-" + activePlayer).textContent = dice;

document.querySelector(".dice").style.display = "none";

document.getElementById("score-1").textContent = "0";
document.getElementById("score-2").textContent = "0";
document.getElementById("current-1").textContent = "0";
document.getElementById("current-2").textContent = "0";

document.querySelector(".btn-roll").addEventListener("click", function () {
    // 1.Select random number
    var dice = Math.floor(Math.random() * 6) + 1;
    //2.Display the Result
    var diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src = "../images/dice-" + dice + ".png";
    //3.update the round score if the rolled number is not 1
});
