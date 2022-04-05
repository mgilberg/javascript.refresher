// Exercise 1
// const card1 = {rank: "Ace", suit:"Hearts"};
// const card2 = {rank: 7, suit:"Diamonds"};

// // console.log("You are holding the " + card1.rank + " of " + card1.suit + " and the " + card2.rank + " of " + card2.suit);

// const card3 = {rank: "King", suit: "Spades"};

// const deck = [];
// deck.push(card1,card2,card3);

// for (let i = 0; i < deck.length; i++) {
//     console.log(deck[i].rank + " of " + deck[i].suit);
// }

// Exercise 2
// const deck = [];

// writeCards("Hearts");
// writeCards("Diamonds");
// writeCards("Spades");
// writeCards("Clubs");


// function writeCards(suit) {
//     deck.push("Ace of " + suit);
//     for (var i = 2; i < 11; i++) {
//         deck.push(i + " of " + suit);
//     }
//     deck.push("Jack of " + suit);
//     deck.push("Queen of " + suit);
//     deck.push("King of " + suit);
// }

// console.log(deck);

// Exercise 3
const deck = [];

const rank = ["Ace",2,3,4,5,6,7,8,9,10,"Jack","Queen","King"];

writeCards("Hearts");
writeCards("Diamonds");
writeCards("Spades");
writeCards("Clubs");

function writeCards(suit) {
    for (var i = 0; i < 13; i++) {
        deck.push({rank: rank[i], suit: suit});
    }
}

let c1 = deck.splice(Math.floor(Math.random() * 51),1);
let c2 = deck.splice(Math.floor(Math.random() * 50),1);
console.log(c1);
console.log(c2);
console.log(deck);
