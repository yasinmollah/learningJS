// Section 5

// Inheritance & Prototype

// Normal Object
/*
var mrX = {
    name: "X",
    yearOfBirth: 1990,
    profession: "Dramer",
    calculateAge: function () {
        this.age = Number(new Date().getFullYear()) - this.yearOfBirth;
    },
};
mrX.calculateAge();
console.log(mrX);
*/
/*
var person = function (name, yearOfBirth, profession) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.profession = profession;
};

person.prototype.calculateAge = function () {
    this.age = Number(new Date().getFullYear()) - this.yearOfBirth;
};
person.prototype.university = "NUBTK";

var yasin = new person("Yasin", 1996, "Student");
yasin.calculateAge();
console.log(yasin);

var prince = new person("Prince", 1995, "Police");
prince.calculateAge();
console.log(prince);

var rahina = new person("Rahina", 1997, "Engineer");
rahina.calculateAge();
console.log(rahina);

var eity = new person("Eity", 1996, "Magistrate");
eity.calculateAge();
console.log(eity);
*/
/*
// Creating Objects: Object.create

var personProto = {
    calculateAge: function () {
        console.log(Number(new Date().getFullYear()) - this.yearOfBirth);
    },
};

var yasin = Object.create(personProto);
yasin.name = "Yasin";
yasin.yearOfBirth = 1996;
yasin.job = "Student";
yasin.calculateAge();
console.log(yasin);

var prince = Object.create(personProto, {
    name: { value: "Prince" },
    yearOfBirth: { value: 1995 },
    job: { value: "Police" },
});

prince.calculateAge();
console.log(prince);
*/
/*
//First Class Function: passing function as arguments

var years = [1998, 1996, 1997, 2005, 2001];

function calcArray(arr, fnc) {
    var resArr = [];
    for (var i = 0; i < arr.length; i++) {
        resArr.push(fnc(arr[i]));
    }
    return resArr;
}

function calcAge(elem) {
    return Number(new Date().getFullYear()) - elem;
}

function isFullAge(elem) {
    return elem >= 18;
}

function mxHeartRate(elem) {
    return Math.round(206.9 - 0.69 * elem);
}

var ages = calcArray(years, calcAge);
console.log(ages);

var fullAge = calcArray(ages, isFullAge);
console.log(fullAge);

var heartRate = calcArray(ages, mxHeartRate);
console.log(heartRate);
*/
/*
//First Class Function: Function Returning Function
function interviewQuestion(job) {
    if (job === "teacher") {
        return function (name) {
            console.log(`What topic do you want to teach, ${name} ?`);
        };
    } else if (job === "designer") {
        return function (name) {
            console.log(
                `Mr. ${name}, can you explain, what the UI/UX design is ?`
            );
        };
    } else {
        return function (name) {
            console.log(`${name}, in which field, you are suppose to expert?`);
        };
    }
}

var teacherQues = interviewQuestion("teacher");
teacherQues("Yasin");

interviewQuestion("designer")("Yasin");

interviewQuestion("Ghoear Dim")("fururt");
*/
/*
//Immediately Invoked Function Expression --> IIFE

//Traditional Function
function game() {
    var score = Math.round(Math.random() * 10);
    console.log(score >= 5);
}
game();

//IIFE
(function () {
    var score = Math.round(Math.random() * 10);
    console.log(score >= 5);
})();
*/
/*
//Closures

//Practice Closures
function retirement(retAge) {
    var msg = " years left until retirement...";
    return function (yearOfBirth) {
        console.log(
            retAge - (Number(new Date().getFullYear()) - yearOfBirth) + msg
        );
    };
}

//retirement(65)(1996);

var retirementUSA = retirement(66);
var retirementGermany = retirement(67);

retirementUSA(1996);
retirementGermany(1996);

//Test Closures
function interviewQuestion(job) {
    if (job === "teacher") {
        return function (name) {
            console.log(`What topic do you want to teach, ${name} ?`);
        };
    } else if (job === "designer") {
        return function (name) {
            console.log(
                `Mr. ${name}, can you explain, what the UI/UX design is ?`
            );
        };
    } else {
        return function (name) {
            console.log(`${name}, in which field, you are suppose to expert?`);
        };
    }
}

var teacherQues = interviewQuestion("teacher");
var designerQues = interviewQuestion("designer");
var annonymousQues = interviewQuestion("jana nei");

teacherQues("Yasin");
designerQues("Yasin");
annonymousQues("Yasin");
*/

//Bind, Call and Apply

//Practicing Bind, Call and Apply

var john = {
    name: "John",
    age: 29,
    job: "Teacher",
    presentation: function (mood, partOfDay) {
        if (mood === "friendly") {
            console.log(
                `Hey Good ${partOfDay} Everyone! I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old`
            );
        } else if (mood === "formal") {
            console.log(`Hello Good ${partOfDay} Everyone! I'm ${this.name}, I'm a 
            ${this.job} and I'm ${this.age} years old`);
        }
    },
};

john.presentation("formal", "morning");

var emily = {
    name: "Emily",
    age: 30,
    job: "Designer",
};

//Call Method
john.presentation.call(emily, "friendly", "Evening");

//Apply Method
john.presentation.apply(emily, ["formal", "Afternoon"]);

//Bind Method
var check = john.presentation.bind(emily, "friendly");

check("noon");
