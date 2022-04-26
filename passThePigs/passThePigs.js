let playerTurn = 0;
let pick;
let score = 0;
let pig1;
let pig2;
let totalScore0 = 0;
let totalScore1 = 0;
let totalScore2 = 0;
let totalScore3 = 0;
let addingScore;

// disables buttons for start
document.getElementById("player0PassButton").disabled = false;
document.getElementById("player1PassButton").disabled = true;
document.getElementById("player2PassButton").disabled = true;
document.getElementById("player3PassButton").disabled = true;

document.getElementById("player0RollButton").disabled = false;
document.getElementById("player1RollButton").disabled = true;
document.getElementById("player2RollButton").disabled = true;
document.getElementById("player3RollButton").disabled = true;

function handleReplay() {
    document.getElementById("player0PassButton").disabled = false;
    document.getElementById("player1PassButton").disabled = true;
    document.getElementById("player2PassButton").disabled = true;
    document.getElementById("player3PassButton").disabled = true;

    document.getElementById("player0RollButton").disabled = false;
    document.getElementById("player1RollButton").disabled = true;
    document.getElementById("player2RollButton").disabled = true;
    document.getElementById("player3RollButton").disabled = true;

    document.getElementById("player0").className = "w3-card w3-container w3-dark-gray w3-round-large";
    document.getElementById("player1").className = "w3-card w3-container w3-light-gray w3-round-large";
    document.getElementById("player2").className = "w3-card w3-container w3-light-gray w3-round-large";
    document.getElementById("player3").className = "w3-card w3-container w3-light-gray w3-round-large";

    for (let a = 0; a < 4; a++) {
        document.getElementById("player" + a + "TotalScore").textContent = "Total Score: ";
        document.getElementById("player" + a + "HandScore").textContent = "Score: ";
        document.getElementById("player" + a + "Pig1").textContent = "/";
        document.getElementById("player" + a + "Pig2").textContent = "/";
    }

    playerTurn = 0;
    score = 0;
    totalScore0 = 0;
    totalScore1 = 0;
    totalScore2 = 0;
    totalScore3 = 0;

    document.getElementById("replay").className = "w3-row w3-container w3-hide";
}
function handlePass() {
    if (playerTurn == 0) {
        pass(0, 1, true, false, true, true);
    } else if (playerTurn == 1) {
        pass(1, 2, true, true, false, true);
    } else if (playerTurn == 2) {
        pass(2, 3, true, true, true, false);
    } else if (playerTurn == 3) {
        pass(3, 0, false, true, true, true);
    }

    playerTurn = playerTurn + 1;
    if (playerTurn >= 4) {
        playerTurn = 0;
    }
}
function pass(num, num2, a, b, c, d) {

    document.getElementById("player" + num).className = "w3-card w3-container w3-light-gray w3-round-large";
    document.getElementById("player" + num2).className = "w3-card w3-container w3-dark-gray w3-round-large";

    // disables pass button
    document.getElementById("player0PassButton").disabled = a;
    document.getElementById("player1PassButton").disabled = b;
    document.getElementById("player2PassButton").disabled = c;
    document.getElementById("player3PassButton").disabled = d;

    // disables roll button
    document.getElementById("player0RollButton").disabled = a;
    document.getElementById("player1RollButton").disabled = b;
    document.getElementById("player2RollButton").disabled = c;
    document.getElementById("player3RollButton").disabled = d;

    if (playerTurn === 0) {
        totalScore0 = totalScore0 + score;
        document.getElementById("player" + 0 + "TotalScore").textContent = "Total Score: " + totalScore0;
    } else if (playerTurn === 1) {
        totalScore1 = totalScore1 + score;
        document.getElementById("player" + 1 + "TotalScore").textContent = "Total Score: " + totalScore1;
    } else if (playerTurn === 2) {
        totalScore2 = totalScore2 + score;
        document.getElementById("player" + 2 + "TotalScore").textContent = "Total Score: " + totalScore2;
    } else {
        totalScore3 = totalScore3 + score;
        document.getElementById("player" + 3 + "TotalScore").textContent = "Total Score: " + totalScore3;
    }
    document.getElementById("player" + playerTurn + "HandScore").textContent = "Score: 0";
    score = 0;
}
function scoreRoll(pig1, pig2) {
    addingScore = 0;
    if ((pig1 == "Dot" && pig2 == "No Dot") || (pig2 == "Dot" && pig1 == "No Dot")) {
        return 0;
    } else if ((pig1 == "Dot" && pig2 == "Dot") || (pig1 == "No Dot" && pig2 == "No Dot") || pig1 == "Dot" || pig2 == "Dot" || pig1 == "No Dot" || pig2 == "No Dot") {
        addingScore = addingScore + 1;
    }
    if ((pig1 == "Razorback" && pig2 == "Razorback") || (pig1 == "Trotter" && pig2 == "Trotter")) {
        addingScore = addingScore + 20;
    } else if (pig1 == "Razorback" || pig2 == "Razorback" || pig1 == "Trotter" || pig2 == "Trotter") {
        addingScore = addingScore + 5;
    }
    if (pig1 == "Snouter" && pig2 == "Snouter") {
        addingScore = addingScore + 40;
    } else if (pig1 == "Snouter" || pig2 == "Snouter") {
        addingScore = addingScore + 10;
    }
    if (pig1 == "Leaning Jowler" && pig2 == "Leaning Jowler") {
        addingScore = addingScore + 60;
    } else if (pig1 == "Leaning Jowler" || pig2 == "Leaning Jowler") {
        addingScore = addingScore + 15;
    }
    return addingScore;
}
function pigOut() {
    score = 0;
    document.getElementById("player" + playerTurn + "HandScore").textContent = "PIG OUT!";

    if (playerTurn === 0) {
        pass(0, 1, true, false, true, true);
    } else if (playerTurn === 1) {
        pass(1, 2, true, true, false, true);
        score = 0;
    } else if (playerTurn === 2) {
        pass(2, 3, true, true, true, false);
        score = 0;
    } else {
        pass(3, 0, false, true, true, true);
    }
    playerTurn++;
}
function findPig(i) {
    picki = Math.floor(Math.random() * 1000) + 1;

    if (picki <= 349) {
        return "Dot";
    } else if (picki <= 651 && picki >= 350) {
        return "No Dot";
    } else if (picki >= 652 && picki <= 875) {
        return "Razorback";
    } else if (picki >= 876 && picki <= 963) {
        return "Trotter";
    } else if (picki >= 964 && picki <= 993) {
        return "Snouter";
    } else {
        return "Leaning Jowler";
    }
}
function scoreRoll(pig1, pig2) {
    addingScore = 0;
    if ((pig1 == "Dot" && pig2 == "No Dot") || (pig2 == "Dot" && pig1 == "No Dot")) {
        return 0;
    } else if ((pig1 == "Dot" && pig2 == "Dot") || (pig1 == "No Dot" && pig2 == "No Dot")) {
        addingScore = addingScore + 1;
    }
    if ((pig1 == "Razorback" && pig2 == "Razorback") || (pig1 == "Trotter" && pig2 == "Trotter")) {
        addingScore = addingScore + 20;
    } else if (pig1 == "Razorback" || pig2 == "Razorback" || pig1 == "Trotter" || pig2 == "Trotter") {
        addingScore = addingScore + 5;
    }
    if (pig1 == "Snouter" && pig2 == "Snouter") {
        addingScore = addingScore + 40;
    } else if (pig1 == "Snouter" || pig2 == "Snouter") {
        addingScore = addingScore + 10;
    }
    if (pig1 == "Leaning Jowler" && pig2 == "Leaning Jowler") {
        addingScore = addingScore + 60;
    } else if (pig1 == "Leaning Jowler" || pig2 == "Leaning Jowler") {
        addingScore = addingScore + 15;
    }
    return addingScore;
}
function pigOut() {
    score = 0;
    if (playerTurn === 0) {
        pass(0, 1, true, false, true, true);
    } else if (playerTurn === 1) {
        pass(1, 2, true, true, false, true);
    } else if (playerTurn === 2) {
        pass(2, 3, true, true, true, false);
    } else {
        pass(3, 0, false, true, true, true);
    }
    playerTurn++;
}
function findPig() {
    pick = Math.floor(Math.random() * 1000) + 1;

    if (pick <= 349) {
        return "Dot";
    } else if (pick <= 651 && pick >= 350) {
        return "No Dot";
    } else if (pick >= 652 && pick <= 875) {
        return "Razorback";
    } else if (pick >= 876 && pick <= 963) {
        return "Trotter";
    } else if (pick >= 964 && pick <= 993) {
        return "Snouter";
    } else {
        return "Leaning Jowler";
    }
}
function handleRoll() {
    pig1 = findPig();
    pig2 = findPig();

    document.getElementById("player" + playerTurn + "Pig1").textContent = pig1;
    document.getElementById("player" + playerTurn + "Pig2").textContent = pig2;

    let rollScore = scoreRoll(pig1, pig2);

    if (rollScore === 0) {
        score = 0;
        pigOut();
        document.getElementById("player" + (playerTurn-1) + "HandScore").textContent = "PIG OUT!";
    } else {
        score = score + rollScore;
        document.getElementById("player" + playerTurn + "HandScore").textContent = "Score: " + score;
    }
    checkWinner();
}
function reset() {
    document.getElementById("replay").className = "w3-row w3-container";

    for (let b = 0; b < 4; b++) {
        document.getElementById("player" + b).className = "w3-card w3-container w3-light-gray w3-round-large";
    }

    document.getElementById("player0PassButton").disabled = true;
    document.getElementById("player1PassButton").disabled = true;
    document.getElementById("player2PassButton").disabled = true;
    document.getElementById("player3PassButton").disabled = true;

    document.getElementById("player0RollButton").disabled = true;
    document.getElementById("player1RollButton").disabled = true;
    document.getElementById("player2RollButton").disabled = true;
    document.getElementById("player3RollButton").disabled = true;
}
function handleClick(id) {
    if (playerTurn >= 4) {
        playerTurn = 0;
    }

    if (id == "player0PassButton" || id == "player1PassButton" || id == "player2PassButton" || id == "player3PassButton") {
        handlePass();
    } else if (id == "player0RollButton" || id == "player1RollButton" || id == "player2RollButton" || id == "player3RollButton") {
        handleRoll();
    } else {
        handleReplay();
    }
}
function checkWinner() {
    if ((totalScore0 + score >= 50) && playerTurn == 0) {
        reset();
        document.getElementById("player0").className = "w3-card w3-container w3-yellow w3-round-large";
    } else if ((totalScore1 + score >= 50) && playerTurn == 1) {
        reset();
        document.getElementById("player1").className = "w3-card w3-container w3-yellow w3-round-large";
    } else if ((totalScore2 + score >= 50) && playerTurn == 2) {
        reset();
        document.getElementById("player2").className = "w3-card w3-container w3-yellow w3-round-large";
    } else if ((totalScore3 + score >= 50) && playerTurn == 3) {
        reset();
        document.getElementById("player3").className = "w3-card w3-container w3-yellow w3-round-large";
    } 
}