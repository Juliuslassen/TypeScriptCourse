{/* */}
// ?
type UdkasttilPerson = {
    name: string,
    age: number,
    isStudent?: boolean
}

// 1
const xNum: number = 5;
const jackName: string = "Jack";
const isTrue: boolean = true;
const typeArray: UdkasttilPerson[] = [];
const anything: any = "anything";


//2
//literal types or unions could be used with similar purpose of emuns
enum myEnum {
    MONDAY = "monday",
    TUESDAY = 2,
    WEDNESDAY = "wednesday",
    THURSDAY = 4,
    FRIDAY = "fredag",
    SATURDAY = "saturday",
    SUNDAY = 7
}

// 3
class Person {
    
    constructor(private name: string, private readonly email: string, private  age: number){
        this.name = name;
        this.email = email;
        this.age = age;
    }

    getName(): string{
        return this.name;
    }
    setName(name: string){
        this.name = name;
    }

    getEmail(): string{
        return this.email;
    }

    getAge(): number{
        return this.age;
    }
    setAge(age: number){
        this.age = age;
    }
}

class Employee extends Person{

    private salary: number;

    constructor(name: string, email: string, age: number, salary: number){
        super(name, email, age)
        this.salary = salary;
    }
}

const sander = new Employee("sander", "hej@123.dk", 12, 550);


// 4
let jack: any = 12;

const bjark: string = jack as string;
const asStringViaGeneric: string = <string> jack;

// 5
function calculateSum(a: number, b: number): number{
    return a+b;
}

// 6
let httpCodes: [number, string];
httpCodes = [404, "not found"];
httpCodes = [200, "succes"]
httpCodes = [400, "error"]
httpCodes = [500, "server error"]


//7
let personTuple: [Person, id: number] = [sander, 1];

let fakeTuple: [name: string, email: string, age: number | string] = [sander.getName(), "bjark@123.dk", 13];

fakeTuple = ["jack", "nej", "nej"];

function goodFunction(p: number | string){
    return p;
}

goodFunction(12);
goodFunction("abc");


// 8
function genericArrayFunction<T>(array: T[]): T | undefined {
    return array[0];
}

function genericFunctionWithTwoParameters<T extends object, U extends object>(a: T, b: U): T & U{
    return {...a, ...b};
}


// 9
let numbArray: [][];


let ticTacToeArray: string[][] = 
[
    ["-", "-", "x"],
    ["-", "x", "-"],
    ["x", "-", "-"]
];

console.log(ticTacToeArray[0][0]); // "-"
console.log(ticTacToeArray[2][0]); // "x"

// 10
 // Part 1
 // A variable that might be null or undefined
 let nullableValue: string | null | undefined = "Hello"!;

 // Use the exclamation mark to assert that the value is non-null
 let nonNullableValue: string = nullableValue;

 console.log(nonNullableValue); // Output: Hello

// Part 2
// A variable that might be null or undefined
let myString: string | undefined = possibleUndefinedStringFunction()!;
// Use the exclamation mark to assert that the value is non-null
let lemgth: number = myString.length;


// 11

// Part 1
// A function that takes an optional parameter
function printName(name?: string) {
    console.log(name);
  }
  
  // Call the function without a parameter
  printName(); // Output: undefined
  // Call the function with a parameter
  printName("John"); // Output: John
  
  // Part 2
  // A type alias with an optional age property  
  type JorgsPerson = {
    name: string;
    age?: number;
  };
 
  // Create a person object with an age property
  // Create a person object without an age property
  
  const firstperson: JorgsPerson = {
    name: "ack"
  }

  const secondPerson: JorgsPerson = {
    name: "hans alder er 3 gange 4",
    age: 12
  }

  // 12
  function stringOrNumberFunction(p: string | number): string | number{
    if(typeof p === "string"){
        return p;
    }
    else return p*2;


    {/* showing the other example 
    else if(typeof p === "number"){
        return p*2;
    }*/}
  }

  // 13

  const nogetNyt: string = anything as string;

  const anythingsLength: number = (anything as string).length;

  const nogetAndet: string = <string>anything;

  const anythingsLengthWithCastingOperator: number = (<string>anything).length;

  const myDiv: HTMLInputElement = document.getElementById("myDiv") as HTMLInputElement;
  const myDivWithCastingOperator: HTMLInputElement = <HTMLInputElement>document.getElementById("myDiv");


  //14

  function directionParameter(direction: "left" | "right" | "up" | "down"): number{
    switch(direction){
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

  //15

  type Alian = {
    race: string;

    eat: (food: string) => string;
    fly: (a: boolean) => string;
  }

  type Human = {
    name: string;
    
    eat: (food: string) => string
    fly: (i: boolean) => boolean;
  }

  function createrAsParameter(creator: Alian | Human): string{
    if ("name" in creator ){
        return `${creator.eat}`;
    }
    else return `${creator.eat}`;
  }
  
// 16

class Car {

    constructor(private make: string,private model: string, private age?: number, private works?: boolean) {
        this.make = make;
        this.model = model;
        this.age = age;
        this.works = works;
    }

    getModel(): string{
        return this.model;
    }
}

class CarPerson {
    constructor(private name: string){
        this.name = name;
    }
    
    getName(): string{
        return this.name;
    }
}

// man kan ikke bruge instanceof på types
function checkIfPersonOrCar(p: Car | CarPerson): string{
    if(p instanceof Car){
        return p.getModel();
    }
    else return p.getName();
}



// 17 type predicates
interface Bird {
    fly(): void;
    layEggs(): void;
  }
  
  interface Fish {
    swim(): void;
    layEggs(): void;
  }
  
  // write a type predicate to narrow the type of the fish parameter

  function isFish(p: Fish | Bird): p is Fish{
    return 'swim' in p;
  }
  
  function howToMove(pet: Fish | Bird) {
    if (isFish(pet)) {
      pet.swim();
    } else {
      pet.fly();
    }
  }


  // 18
  //to manye person objects
  interface Jackeren{
    personname: string;
    [key: string]: any;
  }

  const jackerenperson: Jackeren ={
    personname: "jack",
    age: 12 
  }
  
  //19
  interface GenericPerson{
    name: string;
  }

  interface Student{
    studentid: number;
  }

  type Studentperson = GenericPerson & Student;

  function studentpersonFunction(person: GenericPerson, student: Student): Studentperson{
    return {
        ...person,
        ...student,
    };
  }