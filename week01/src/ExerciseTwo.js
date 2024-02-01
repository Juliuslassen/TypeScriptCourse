var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{ /* */ }
// 1
var xNum = 5;
var jackName = "Jack";
var isTrue = true;
var typeArray = [];
var anything = "anything";
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
var Person = /** @class */ (function () {
    function Person(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.getEmail = function () {
        return this.email;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, email, age, salary) {
        var _this = _super.call(this, name, email, age) || this;
        _this.salary = salary;
        return _this;
    }
    return Employee;
}(Person));
var sander = new Employee("sander", "hej@123.dk", 12, 550);
// 4
var jack = 12;
var bjark = jack;
var asStringViaGeneric = jack;
// 5
function calculateSum(a, b) {
    return a + b;
}
// 6
var httpCodes;
httpCodes = [404, "not found"];
httpCodes = [200, "succes"];
httpCodes = [400, "error"];
httpCodes = [500, "server error"];
//7
var personTuple = [sander, 1];
var fakeTuple = [sander.getName(), "bjark@123.dk", 13];
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
    return __assign(__assign({}, a), b);
}
// 9
var numbArray;
var ticTacToeArray = [
    ["-", "-", "x"],
    ["-", "x", "-"],
    ["x", "-", "-"]
];
console.log(ticTacToeArray[0][0]); // "-"
console.log(ticTacToeArray[2][0]); // "x"
// 10
// Part 1
// A variable that might be null or undefined
var nullableValue = "Hello";
// Use the exclamation mark to assert that the value is non-null
var nonNullableValue = nullableValue;
console.log(nonNullableValue); // Output: Hello
// Part 2
// A variable that might be null or undefined
var myString = "possibleUndefinedStringFunction";
// Use the exclamation mark to assert that the value is non-null
var lemgth = myString.length;
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
var firstperson = {
    name: "ack"
};
var secondPerson = {
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
var nogetNyt = anything;
var anythingsLength = anything.length;
var nogetAndet = anything;
var anythingsLengthWithCastingOperator = anything.length;
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
        return "".concat(creator.eat);
    }
    else
        return "".concat(creator.eat);
}
// 16
var Car = /** @class */ (function () {
    function Car(make, model, age, works) {
        this.make = make;
        this.model = model;
        this.age = age;
        this.works = works;
        this.make = make;
        this.model = model;
        this.age = age;
        this.works = works;
    }
    Car.prototype.getModel = function () {
        return this.model;
    };
    return Car;
}());
var CarPerson = /** @class */ (function () {
    function CarPerson(name) {
        this.name = name;
        this.name = name;
    }
    CarPerson.prototype.getName = function () {
        return this.name;
    };
    return CarPerson;
}());
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
var fisheren = {
    swim: function () {
        console.log("this is a fish");
    },
    layEggs: function () {
        console.log("laying eggs");
    },
};
var birderen = {
    fly: function () {
        console.log("this is a bird");
    },
    layEggs: function () {
        console.log("laying eggs");
    },
};
howToMove(birderen);
howToMove(fisheren);
var jackerenperson = {
    personname: "jack",
    age: 12
};
function studentpersonFunction(person, student) {
    return __assign(__assign({}, person), student);
}
