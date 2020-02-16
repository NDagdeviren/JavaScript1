'use strict'

/*
You want to buy a couple of things from the supermarket to prepare for a party. After scanning all the items the cashier gives you the total price, but the machine a broken! Let's write her a function that does it for her instead!

Write a function called calculateTotalPrice
It takes 1 argument: an object that contains properties that only contain number values
Add all the number values together
Return a number: the total price of all items
Create an object named cartForParty with 5 properties. Each property should be a grocery item (like beers or chips) and hold a number value (like 1.75 or 0.99)
Call the function 1 time, giving it the object cartForParty as an argument
*/

function calculateTotalPrice(products) {
    let totalPrice = 0;
    for (let i in products) {
        totalPrice += products[i]
    }
    console.log(totalPrice);
}

const cartForParty = {
    beer: 1.75,
    chips: 0.90,
    coke: 0.75,
    chocolate: 0.35,
    nugget: 0.85,
};
calculateTotalPrice(cartForParty);