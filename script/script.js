//Coding Challenge 1

var massJohn = 56;
var massMark = 58;

var heightJohn = 1.25;
var heightMark = 1.5;

var johnBMI = massJohn / heightJohn ** 2;
var markBMI = massMark / heightMark ** 2;

var higherBMI = johnBMI < markBMI;

console.log(`Is Mark's BMI heigher than John?? ${higherBMI}`);
