'use strict'
let animals = [];
console.log("The value of variable animals will be an empty array");
console.log(animals);
let favoriteAnimals = ["cat", "dog", "bird"];
console.log(favoriteAnimals);
// first technique to append a new element to the array
favoriteAnimals[favoriteAnimals.length] = "cow";
console.log(favoriteAnimals);
// secoond technique to append a new element to the array
favoriteAnimals.push("bull");
console.log(favoriteAnimals);