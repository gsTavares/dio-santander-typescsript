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
let bill:[string, number, number] = ["water", 199.9, 11125464];
