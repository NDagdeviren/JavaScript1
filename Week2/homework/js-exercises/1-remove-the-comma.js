'use strict'
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length);

let myClearString = myString.replace(/,/g, ' ');
console.log(myClearString);