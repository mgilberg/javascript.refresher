var numOfHearts = 1;
var numOfDiamonds = 1;
var numOfSpades = 1;
var numOfClubs = 1;
writeCards(numOfHearts,"Hearts");
writeCards(numOfDiamonds,"Diamonds");
writeCards(numOfSpades,"Spades");
writeCards(numOfClubs,"Clubs");
function writeCards(num,suit) {
    console.log(" ");
    console.log("Ace of " + suit);
    for (var i = 0; i<9; i++) {
        num++;
        console.log(num + " of " + suit);
    }
    console.log("Jack of " + suit);
    console.log("Queen of " + suit);
    console.log("King of " + suit);
}