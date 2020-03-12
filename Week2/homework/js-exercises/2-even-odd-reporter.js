'use strict'
let number = 0;
let remainder = 0;

for (number = 0; number < 21; number += 1) {
    remainder = number % 2;
    console.log("The remiander is " + remainder);
    if (remainder == 1) {
        console.log("The number " + number + " is odd");
    } else {
        console.log("The number " + number + " is even");
    }
}