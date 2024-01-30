{/* */}
type person = {
    name: string,
    age: number,
    isStudent?: boolean
}

const xNum: number = 5;
const jackName: string = "Jack";
const isTrue: boolean = true;
const typeArray: person[] = [];
const anything: any = "anything";

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

let jack: any = 12;

const bjark: string = jack as string;


function calculateSum(a: number, b: number): number{
    return a+b;
}

let httpCodes: [number, string];
httpCodes = [404, "not found"];
httpCodes = [200, "succes"]
httpCodes = [400, "error"]
httpCodes = [500, "server error"]

let personTuple: [Person, id: number] = [sander, 1];

let fakeTuple: [name: string, email: string, age: number | string] = [sander.getName(), "bjark@123.dk", 13];

fakeTuple = ["jack", "nej", "nej"];


function goodFunction(p: number | string){
    return p;
}

goodFunction(12);
goodFunction("abc");


function genericArrayFunction<T>(array: T[]): T | undefined {
    return array[0];
}

function genericFunctionWithTwoParameters<T extends object, U extends object>(a: T, b: U): T & U{
    return {...a, ...b};
}

let numbArray: [][];


