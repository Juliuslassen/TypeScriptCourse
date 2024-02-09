"use strict";
{ /* */ }
// 1
const xNum = 5;
const jackName = "Jack";
const isTrue = true;
const typeArray = [];
const anything = "anything";
//2
//literal types or unions could be used with similar purpose of emuns
var myEnum;
(function (myEnum) {
    myEnum["MONDAY"] = "monday";
    myEnum[myEnum["TUESDAY"] = 2] = "TUESDAY";
    myEnum["WEDNESDAY"] = "wednesday";
    myEnum[myEnum["THURSDAY"] = 4] = "THURSDAY";
    myEnum["FRIDAY"] = "fredag";
    myEnum["SATURDAY"] = "saturday";
    myEnum[myEnum["SUNDAY"] = 7] = "SUNDAY";
})(myEnum || (myEnum = {}));
// 3
class Person {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getEmail() {
        return this.email;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
}
class Employee extends Person {
    constructor(name, email, age, salary) {
        super(name, email, age);
        this.salary = salary;
    }
}
const sander = new Employee("sander", "hej@123.dk", 12, 550);
// 4
let jack = 12;
const bjark = jack;
const asStringViaGeneric = jack;
// 5
function calculateSum(a, b) {
    return a + b;
}
// 6
let httpCodes;
httpCodes = [404, "not found"];
httpCodes = [200, "succes"];
httpCodes = [400, "error"];
httpCodes = [500, "server error"];
//7
let personTuple = [sander, 1];
let fakeTuple = [sander.getName(), "bjark@123.dk", 13];
fakeTuple = ["jack", "nej", "nej"];
function goodFunction(p) {
    return p;
}
goodFunction(12);
goodFunction("abc");
// 8
function genericArrayFunction(array) {
    return array[0];
}
function genericFunctionWithTwoParameters(a, b) {
    return { ...a, ...b };
}
// 9
let numbArray;
let ticTacToeArray = [
    ["-", "-", "x"],
    ["-", "x", "-"],
    ["x", "-", "-"]
];
console.log(ticTacToeArray[0][0]); // "-"
console.log(ticTacToeArray[2][0]); // "x"
// 10
// Part 1
// A variable that might be null or undefined
let nullableValue = "Hello";
// Use the exclamation mark to assert that the value is non-null
let nonNullableValue = nullableValue;
console.log(nonNullableValue); // Output: Hello
// Part 2
// A variable that might be null or undefined
let myString = "possibleUndefinedStringFunction";
// Use the exclamation mark to assert that the value is non-null
let lemgth = myString.length;
// 11
// Part 1
// A function that takes an optional parameter
function printName(name) {
    console.log(name);
}
// Call the function without a parameter
printName(); // Output: undefined
// Call the function with a parameter
printName("John"); // Output: John
// Create a person object with an age property
// Create a person object without an age property
const firstperson = {
    name: "ack"
};
const secondPerson = {
    name: "hans alder er 3 gange 4",
    age: 12
};
// 12
function stringOrNumberFunction(p) {
    if (typeof p === "string") {
        return p;
    }
    else
        return p * 2;
    { /* showing the other example
    else if(typeof p === "number"){
        return p*2;
    }*/
    }
}
// 13
const nogetNyt = anything;
const anythingsLength = anything.length;
const nogetAndet = anything;
const anythingsLengthWithCastingOperator = anything.length;
//correct way
// const myDiv: HTMLInputElement = document.getElementById("myDiv") as HTMLInputElement;
//probs also works
// const myDivWithCastingOperator: HTMLInputElement = <HTMLInputElement>document.getElementById("myDiv");
//14
function directionParameter(direction) {
    switch (direction) {
        case "left":
            return 1;
        case "right":
            return 2;
        case "up":
            return 3;
        case "down":
            return 4;
    }
}
function createrAsParameter(creator) {
    if ("name" in creator) {
        return `${creator.eat}`;
    }
    else
        return `${creator.eat}`;
}
// 16
class Car {
    constructor(make, model, age, works) {
        this.make = make;
        this.model = model;
        this.age = age;
        this.works = works;
        this.make = make;
        this.model = model;
        this.age = age;
        this.works = works;
    }
    getModel() {
        return this.model;
    }
}
class CarPerson {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
// man kan ikke bruge instanceof på types
function checkIfPersonOrCar(p) {
    if (p instanceof Car) {
        return p.getModel();
    }
    else
        return p.getName();
}
// write a type predicate to narrow the type of the fish parameter
function isFish(p) {
    //return (p as Fish).swim !== undefined;
    return 'swim' in p;
}
function howToMove(pet) {
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }
}
const fisheren = {
    swim() {
        console.log("this is a fish");
    },
    layEggs() {
        console.log("laying eggs");
    },
};
const birderen = {
    fly() {
        console.log("this is a bird");
    },
    layEggs() {
        console.log("laying eggs");
    },
};
howToMove(birderen);
howToMove(fisheren);
const jackerenperson = {
    personname: "jack",
    age: 12
};
function studentpersonFunction(person, student) {
    return {
        ...person,
        ...student,
    };
}
