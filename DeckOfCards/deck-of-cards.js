writeCards("Hearts");
writeCards("Diamonds");
writeCards("Spades");
writeCards("Clubs");

function writeCards(suit) {
    console.log("\nAce of " + suit);
    for (var i = 2; i < 11; i++) {
        console.log(i + " of " + suit);
    }
    console.log("Jack of " + suit);
    console.log("Queen of " + suit);
    console.log("King of " + suit);
}