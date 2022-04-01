let flip;
let heads = 0;
let totalHeads = 0;
let average;
let min;
let max;
let coin = [];
let thirty = 0;
let round;

while (!thirty === 1) {
    heads = 0;
    round++;
    
    for (let i = 0; i < 100; i++) {
        flip = Math.floor(Math.random() * 2) + 1;
        if (flip === 2) {
            heads++;
            totalHeads++;
            if (heads === 30) {
                thirty = 1;
            }
        }
    }
    coin.push(heads);
}

average = Math.round(totalHeads / 10);
min = Math.min.apply(null, coin);
max = Math.max.apply(null, coin);

console.log("\nThe average amount of heads is: " + average +
    ", the minimum amount of heads is: " + min +
    ", and the maximum amount of heads is: " + max);