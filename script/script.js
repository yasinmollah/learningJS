//Coding Challenge 1
/*
var massJohn = 56;
var massMark = 58;

var heightJohn = 1.25;
var heightMark = 1.5;

var johnBMI = massJohn / heightJohn ** 2;
var markBMI = massMark / heightMark ** 2;

var higherBMI = johnBMI < markBMI;

console.log(`Is Mark's BMI higher than John?? ${higherBMI}`);
*/
/*
//Coding Challenge 2

//john's Score
var johnFirstScore, johnSecondScore, johnThirdScore, johnAvgScore;

johnFirstScore = 89;
johnSecondScore = 120;
johnThirdScore = 103;

//step 1 part 1
johnAvgScore = (johnFirstScore + johnSecondScore + johnThirdScore) / 3;

//Mike's Score
var mikeFirstScore, mikeSecondScore, mikeThirdScore, mikeAvgScore;

mikeFirstScore = 116;
mikeSecondScore = 94;
mikeThirdScore = 123;

//Step 1 part 2
mikeAvgScore = (mikeFirstScore + mikeSecondScore + mikeThirdScore) / 3;

// Step 2
johnAvgScore > mikeAvgScore
    ? console.log(`John is the winner with the average score ${johnAvgScore}`)
    : console.log(`Mike is the winner with the average score ${mikeAvgScore}`);

//step 3 has tested several times

//Step 4 is testing here
//Mary's Score
var maryFirstScore, marySecondScore, maryThirdScore, maryAvgScore;

maryFirstScore = 97;
marySecondScore = 134;
maryThirdScore = 105;

maryAvgScore = (maryFirstScore + marySecondScore + maryThirdScore) / 3;

johnAvgScore > mikeAvgScore
    ? johnAvgScore > maryAvgScore
        ? console.log(
              `John is the winner with the average score ${johnAvgScore}`
          )
        : console.log(
              `Mary is the winner with the average score ${maryAvgScore}`
          )
    : mikeAvgScore > maryAvgScore
    ? console.log(`Mike is the winner with the average score ${mikeAvgScore}`)
    : console.log(`Mary is the winner with the average score ${maryAvgScore}`);

//Step 5 has tested several times
*/
/*
//Coding challenge 3

//Tip Calculator Function
function tipCalculator(amount) {
    if (amount < 50) {
        return amount * 0.2;
    } else if (amount >= 50 && amount <= 200) {
        return amount * 0.15;
    } else {
        return amount * 0.1;
    }
}

// Array of Bills
var bills = [124, 48, 268];

// Calculated Array of tips
var tips = [
    tipCalculator(bills[0]),
    tipCalculator(bills[1]),
    tipCalculator(bills[2]),
];

console.log(tips);

//Array of total bills
var totalBills = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(totalBills);
*/

/*
//Coding challenge 4

//Creating Mark's Object
var mark = {
    fullName: "Mark Smith",
    mass: 60,
    height: 1.65,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
    },
};
mark.calcBMI();

// Creating John's Object 
var john = {
    fullName: "John Smith",
    mass: 58,
    height: 1.65,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
    },
};
john.calcBMI();

// Deciding who holds the highest BMI
john.bmi > mark.bmi
    ? console.log(`${john.fullName}'s BMI is highest & his BMI is ${john.bmi}`)
    : console.log(`${mark.fullName}'s BMI is highest & his BMI is ${mark.bmi}`);
*/

// console.log(`Challenge 5 Starts from here`);

// creating object fir JOHN
var john = {
    bill: [124, 48, 268, 180, 42],
    tips: [],
    billWithTips: [],
    tipCalculator: function (amount) {
        if (amount < 50) {
            return amount * 0.2;
        } else if (amount >= 50 && amount < 200) {
            return amount * 0.15;
        } else {
            return amount * 0.1;
        }
    },
    dataAssign: function () {
        for (var i = 0; i < this.bill.length; i++) {
            var calcdTips = this.tipCalculator(this.bill[i]);

            this.tips.push(calcdTips);
            this.billWithTips.push(this.bill[i] + calcdTips);
        }
    },
};

john.dataAssign();
console.log(john);

var mark = {
    bill: [77, 375, 110, 45],
    tips: [],
    billWithTips: [],
    tipCalculator: function (amount) {
        if (amount < 100) {
            return amount * 0.2;
        } else if (amount >= 100 && amount < 300) {
            return amount * 0.1;
        } else {
            return amount * 0.25;
        }
    },
    dataAssign: function () {
        for (var i = 0; i < this.bill.length; i++) {
            var calcdTips = this.tipCalculator(this.bill[i]);

            this.tips.push(calcdTips);
            this.billWithTips.push(this.bill[i] + calcdTips);
        }
    },
};

mark.dataAssign();

console.log(mark);
