// spyfall.js

let players = []
const locations = ['International Space Station', 'Wuhan', 'Supermarket', 'Movie Theater', 'University']

function addPlayer(name) { players.push(name) }

function pickSpy() {
    let randPerson = Math.floor(Math.random() * players.length);
    return players[randPerson];
}
let currentSpy = pickSpy(); //setting Spy

function getLocation() {

    let randLoc = Math.floor(Math.random() * locations.length)
    return locations[randLoc]
}

var name = window.prompt("Enter your name: ");
players.push(name);

// Set the date we're counting down to
let countDownTime = new Date().getTime() + 480000;
console.log(countDownTime)

// Update the count down every 1 second
let x = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownTime - now;

    // Time calculations for days, hours, minutes and seconds
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Time is Up";
        console.log("The spy was: " + currentSpy); //Displaying spy from that game (only give access to admin)
    }
}, 1000);

document.getElementById("locations").innerHTML = locations.join("\n");
document.getElementById('players').innerHTML = players;

function redirect() {
    if (players.length === 1) {
        document.getElementById("redirect").href = "./admin.html"
    } else {
        document.getElementById("redirect").href = "./player.html"
    }
}