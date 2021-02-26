var scores, roundScore, dice;

score = [0, 0];
roundScore = 0;

dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);
document.querySelector("#name-1").textContent = "Yasin";
document.querySelector("#name-2").textContent = "Mollah";

document.querySelector("#current-1").textContent = dice;
document.querySelector("#current-2").textContent = dice;
