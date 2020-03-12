'use strict'
const myLibrary = [{
    title: "The Philosopher's Stone",
    author: "J.K. Rowling",
    alreadyRead: true,
}, {
    title: "The Chamber of Secrets",
    author: "J.K. Rowling",
    alreadyRead: true,
}, {
    title: "The Prisoner of Azkaban ",
    author: "J.K. Rowling",
    alreadyRead: false,
}, ];

function inspector(object) {
    console.log(`"${object.title}" by ${object.author}.`)
    if (object.alreadyRead === true) {
        console.log(`You already read "${object.title}"`)
    } else {
        console.log(`You still need to read "${object.title}"`)
    };
};

function libraryInfo(array) {
    array.forEach(inspector);
};

libraryInfo(myLibrary);