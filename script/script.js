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
