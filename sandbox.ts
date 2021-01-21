// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// arrays
let ladies: string[] = [];
ladies.push("hitomi tanaka");

// union types
let mixed: (string | number | boolean | object)[] = [];
mixed.push("test", 50, true, {})

console.log(mixed);

// objects
let object: object;
object = {};

console.log(object);

// Any types
let test: any = 25;
test = [];
console.log(test);

// Any on object
let ninja: { name: any, age: (string | boolean) };

ninja = {name: "yoshi", age: true}