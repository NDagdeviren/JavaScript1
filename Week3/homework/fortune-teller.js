'use strict'
let location = ['Amsterdam', 'New York', 'Dubai', 'Sidney', 'Rio'];
let child = ['1', '2', ' 3', '4', '5'];
let partner = ['Nick', 'Stella', 'Victoria', 'Quinn', 'Harley'];
let job = ['Lawyer', 'Engineer', 'Doctor', 'Teacher', 'Jeologist'];

function fortuneMe(job, location, partner, child) {
    let randomJob = job[Math.floor(Math.random() * job.length)];
    let randomLocation = location[Math.floor(Math.random() * location.length)];
    let randomPartner = partner[Math.floor(Math.random() * partner.length)];
    let randomChild = child[Math.floor(Math.random() * child.length)];
    console.log("You will be " + randomJob + " in " + randomLocation + ", and married to " + randomPartner + " with " + randomChild + " kids.");
};
console.log(fortuneMe(job, location, partner, child));