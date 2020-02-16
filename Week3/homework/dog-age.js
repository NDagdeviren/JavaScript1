'use strict'

function dogAgeCalculator(puppyName, puppyAge) {
    let dogAge = puppyAge * 7;
    return "Your dog " + puppyName + " is " + dogAge + " years old."
};
console.log(dogAgeCalculator("Bold", 5));