'use strict'
let cardNum = '123456787687210';
//checking the length of the card number
function checkLength(cardNum) {
    let cardNumStr = cardNum.toString();
    if (cardNumStr.length > 16) {
        return `${cardNum} is more than 16 digits`;
    } else if (cardNumStr.length < 16) {
        return `${cardNum} is less than 16 digits`;
    } else {
        return '16 digits in total, well done!';
    }
};
//checking the type of the digits
function typeChecker(cardNum) {
    return isNaN(cardNum) === false;
};

function checkNotSame(cardNum) {
    for (var i = 0; i < cardNum.length; i++) {
        if (cardNum[0] != cardNum[i])
            return 'digits are not same';
    }
    return 'digits are same';
};

//final digit must be even
function oddOrEven(cardNum) {
    if (cardNum % 2 == 0) {
        return "Card Number is even";
    } else {
        return "final digit must be even";
    }
};

//sum of all digits must be greater than 16
function checkSum(cardNum) {
    let sum = 0;
    for (const i of cardNum) {
        sum += i;
        if (sum <= 16) {
            return "Sum of all digits should be greater than 16.";
        } else {
            return 'Sum of all digits is greater than 16.';
        }
    };
};
console.log(checkLength(cardNum));

console.log(typeChecker(cardNum));

console.log(checkNotSame(cardNum));

console.log(oddOrEven(cardNum));

console.log(checkSum(cardNum));