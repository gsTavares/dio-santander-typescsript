type Hero = {
    name: string,
    nick: string
}

const printObject = (person: Hero): void => {
    console.log(person);
}

printObject({
    name: "Bruce Wayne",
    nick: "Batman"
});

// Types

// primitives: boolean, number, string
let on: boolean = true || false;
let myName: string = "Gustavo";
let age: number = 20;
let height: number = 1.78

// null and undefined
let nullOnly: null = null;
let undefinedOnly: undefined = undefined;

// any and void
let everything: any = 10;
everything = "HY";
everything = {
    size: 20
}

const query = (): void => { }  // dont have return

// object
let product: object = {
    id: 3,
    name: "Mouse",
    price: 20.0
}

// type
type ShopProduct = {
    name: string,
    price: number,
    quantity: number
}

// this have to be all ShopProduct keys and it's respective types...
const myProduct: ShopProduct = {
    name: "Product", // must be a string
    price: 20.0, // must be a number
    quantity: 10
}

// arrays
let data: string[] = ["one", "two", "three"];
let data2: Array<string> = ["four", "five", "six"];

// multi type array
let multiType: (string | number)[] = ["one", 1, "two", 2];

// tuples
let bill: [string, number, number] = ["water", 199.9, 11125464];

// array methods - same as javascript

// ...

// Dates
let birthdate: Date = new Date("2022-12-01 05:00");

// functions
const sum = (x: number, y: number): number => {
    return x + y;
}

const sayHello = (name: string): string => {
    return "Hello " + name;
}

console.log(sayHello("user"));

// multi type functions
const call = (phone: number | string): number | string => {
    return phone;
}

console.log(call(99283123));
console.log(call("(17)9182903812"));

// async functions
const httpCall = async (id: number): Promise<string> => {
    return "OK";
}

// interface x type
type Robot = {
    id: number,
    name: string,
    readonly secret: string
}

// interface are usually used with classes
interface Robot2 {
    id: number,
    name: string,
    readonly secret: string
}

const bot: Robot | Robot2 = {
    id: 10,
    name: "first bot",
    secret: "123098"
}

// secret can't be modified
// bot.secret = "abcde" --> error

/**
 * Classes
 * 
 * Data modifiers
 * - public - free
 * - private - only into class
 * - protected - only into class and subclasses
 */
class Character {
    protected _name?: string;
     readonly strength: number;
    skill: number;

    constructor(name: string, strength: number, skill: number) {
        this._name = name;
        this.strength = strength;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.strength} points`);
    }
}

// Character - Superclass
// Magician - Subclass
class Magician extends Character {
    magicPoints: number;
    constructor(name: string, strength: number, skill: number, magicPoints: number) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}

const character: Character = new Character("Ryu", 10, 98);
const magicial: Magician = new Magician("Ryu", 10, 20, 100);
character.attack();