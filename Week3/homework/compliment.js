'use strict'
let name = 'Nazim';

function giveCompliment(name) {
    let compliments = ['kind', 'marvelous', 'clever', 'smart', 'polite', 'handsome', 'productive', 'wonderful', 'brave', 'funny'];
    let randomNumber = Math.floor(Math.random() * compliments.length);
    return name + ' is ' + ' ' + compliments[randomNumber];
};
console.log(giveCompliment(name));