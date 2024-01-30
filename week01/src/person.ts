export class Person {
    constructor(private readonly name: string, private readonly age: number, private readonly gender: Gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getGender() {
        return this.gender;
    }
}

export enum Gender{
    MALE = "Male",
    FEMALE = "Female"
}