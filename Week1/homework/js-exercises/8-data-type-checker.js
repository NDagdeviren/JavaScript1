'use strict'
let a = "mac";
let b = "iphone";
let car = { brand: "mercedes", model: "c350", color: "grey" };
let home = { location: "New York", age: "30", room: "5" };

//check data types
console.log(typeof a === typeof b);
console.log(typeof a === typeof car);
console.log(typeof a === typeof home);
console.log(typeof b === typeof a);
console.log(typeof b === typeof car);
console.log(typeof b === typeof home);
console.log(typeof car === typeof a);
console.log(typeof car === typeof b);
console.log(typeof car === typeof home);
console.log(typeof home === typeof a);
console.log(typeof home === typeof b);
console.log(typeof home === typeof car);

//check if data types are the same

if (typeof a === typeof b) {
    console.log("They have the same data type");
} else {
    console.log("They don't have the same data type")
}

if (typeof a === typeof car) {
    console.log("They have the same data type");
} else {
    console.log("They don't have the same data type")
}

if (typeof a === typeof home) {
    console.log("They have the same data type");
} else {
    console.log("They don't have the same data type")
}

if (typeof b === typeof car) {
    console.log("They have the same data type");
} else {
    console.log("They don't have the same data type")
}

if (typeof b === typeof home) {
    console.log("They have the same data type");
} else {
    console.log("They don't have the same data type")
}

if (typeof car === typeof home) {
    console.log("They have the same data type");
} else {
    console.log("They don't have the same data type")
}