/**
 RANDOMIZER CLASS
 **/

function randomNumberFromList(items) {
    var item = items[Math.floor(Math.random() * items.length)];
    return item;
}

function getRandomNumber(max) {
    // Plus le max est haut, plus la fréquence d'apparition diminue
    return Math.floor(Math.random() * max);
}