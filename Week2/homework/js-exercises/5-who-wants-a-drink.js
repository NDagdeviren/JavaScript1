'use strict'
const drinkTypes = ["cola", "lemonade", "water"];
const drinkTray = [];

function foo() {
    let i;
    for (i = 0; i < drinkTypes.length; i++) {
        let hasIt = drinkTray.includes(drinkTypes[i]);
        let exist = 0;
        if (hasIt === true) {
            exist += 1;
            if (exist > 2) {
                console.log("You already have 2 of this option.")
            } else if (exist <= 2) {
                drinkTray.push(drinkTypes[i]);
            }

        } else {
            drinkTray.push(drinkTypes[i]);
        }

    }


};

foo();
console.log(drinkTray);