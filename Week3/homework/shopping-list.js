'use strict'
/* Write a function named addToShoppingCart.
It takes in 1 argument: a grocery item (string)
Add grocery item to array. If the amount of items is more than 3 remove the first one in the array
Return a string: "You bought [LIST_OF_GROCERY_ITEMS]!"
Create an array with 2 predefined strings: "bananas" and "milk"
Call the function 3 times, each time with a different string as the argument.
*/

function addToShoppingCart(groceryItem) {
    shoppingCart.push(groceryItem);
    if (shoppingCart.length > 3) {
        shoppingCart.shift();
    }
    console.log("You bought " + shoppingCart + "!");
};

let shoppingCart = ["banana", "milk"];

addToShoppingCart("watermelon");
addToShoppingCart("pineapple");
addToShoppingCart("berry");