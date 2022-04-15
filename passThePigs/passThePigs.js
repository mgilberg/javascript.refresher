let playerTurn = 1;
let pick1;
let pick2;
// let dot = 0;
// let noDot = 0;
// let razorback = 0;
// let trotter = 0;
// let snouter = 0;
// let leaningJowler = 0;
let score = 0;
let pig1;
let pig2;
let totalScore1 = 0;
let totalScore2 = 0;
let totalScore3 = 0;
let totalScore4 = 0;


// disables pass button for start
document.getElementById("player0PassButton").disabled = false;
document.getElementById("player1PassButton").disabled = true;
document.getElementById("player2PassButton").disabled = true;
document.getElementById("player3PassButton").disabled = true;

// disables roll button for start 
document.getElementById("player0RollButton").disabled = false;
document.getElementById("player1RollButton").disabled = true;
document.getElementById("player2RollButton").disabled = true;
document.getElementById("player3RollButton").disabled = true;

function pass(num,num2,a,b,c,d) {
    
    document.getElementById("player"+num).className = "w3-card w3-container w3-light-gray w3-round-large";  //code for class name change from stackoverflow
    document.getElementById("player"+num2).className = "w3-card w3-container w3-dark-gray w3-round-large";

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

    if (playerTurn == 1) {
        totalScore1 = totalScore1 + score;
        document.getElementById("player"+num+"TotalScore").textContent="Total Score: "+totalScore1;
    } else if (playerTurn == 2) {
        totalScore2 = totalScore2 + score;
        document.getElementById("player"+num+"TotalScore").textContent="Total Score: "+totalScore2;
    } else if (playerTurn == 3) {
        totalScore3 = totalScore3 + score;
        document.getElementById("player"+num+"TotalScore").textContent="Total Score: "+totalScore3;
    } else if (playerTurn == 4) {
        totalScore4 = totalScore4 + score;
        document.getElementById("player"+num+"TotalScore").textContent="Total Score: "+totalScore4;
    }
    score = 0;
}

function handleClick(id) {
    
    //code for pass button
    if (id == "player0PassButton" || id == "player1PassButton" || id == "player2PassButton" || id == "player3PassButton") {
        playerTurn = playerTurn + 1;
        if (playerTurn > 4) {
            playerTurn = 1;
        }

        if (playerTurn == 1) {

            pass(3,0,false,true,true,true);

        } else if (playerTurn == 2) {

            pass(0,1,true,false,true,true);

        } else if (playerTurn == 3) {

            pass(1,2,true,true,false,true);

        } else if (playerTurn == 4) {

            pass(2,3,true,true,true,false);

        }
    }

    // code for roll button
    if (id == "player0RollButton" || id == "player1RollButton" || id == "player2RollButton" || id == "player3RollButton") {
    pig1 = findPig(1);
    pig2 = findPig(2);

    function findPig(i) {
        picki = Math.floor(Math.random() * 1000) + 1;

        if (picki <= 349) {
            return "Dot";
        } else if (picki <= 651 && picki >= 350) {
            return "No Dot";
        
        } else if (picki >= 652 && picki <= 875) {
            return "Razorback";
        
        } else if (picki >=876 && picki <=963) {
            return "Trotter";
        
        } else if (picki >= 964 && picki <= 993) {
            return "Snouter";
        
        } else {
            return "Leaning Jowler";

        }
    }
    
    if (id == "player0RollButton") {
        document.getElementById("player0Pig1").textContent=pig1;
        document.getElementById("player0Pig2").textContent=pig2;
    } else if (id == "player1RollButton") {
        document.getElementById("player1Pig1").textContent=pig1;
        document.getElementById("player1Pig2").textContent=pig2;
    } else if (id == "player2RollButton") {
        document.getElementById("player2Pig1").textContent=pig1;
        document.getElementById("player2Pig2").textContent=pig2;
    } else if (id == "player3RollButton") {
        document.getElementById("player3Pig1").textContent=pig1;
        document.getElementById("player3Pig2").textContent=pig2;
    }

    if (pig1 == "Dot" && pig2 == "No Dot" || pig2 == "Dot" && pig1 == "No Dot") {
        
        if (id == "player0RollButton") {
            document.getElementById("player0HandScore").textContent="PIG OUT!";
            pass(0,1,true,false,true,true);
        } else if (id == "player1RollButton") {
            document.getElementById("player1HandScore").textContent="PIG OUT!";
            pass(1,2,true,true,false,true);
        } else if (id == "player2RollButton") {
            document.getElementById("player2HandScore").textContent="PIG OUT!";
            pass(2,3,true,true,true,false);
        } else if (id == "player3RollButton") {
            document.getElementById("player3HandScore").textContent="PIG OUT!";
            pass(3,0,false,true,true,true);
        }
        score = 0;
        playerTurn = playerTurn + 1;

    } 
    if (pig1 == "Dot" && pig2 == "Dot" || pig1 == "No Dot" && pig2 == "No Dot" || pig1 == "Dot" || pig2 == "Dot" || pig1 == "No Dot" || pig2 == "No Dot") {
        score = score + 1;
        if (id == "player0RollButton") {
            document.getElementById("player0HandScore").textContent= "Score: " + score;
        } else if (id == "player1RollButton") {
            document.getElementById("player1HandScore").textContent= "Score: " + score;
        } else if (id == "player2RollButton") {
            document.getElementById("player2HandScore").textContent= "Score: " + score;
        } else if (id == "player3RollButton") {
            document.getElementById("player3HandScore").textContent= "Score: " + score;
        }
    } 
    if (pig1 == "Razorback" && pig2 == "Razorback" || pig1 == "Trotter" && pig2 == "Trotter") {
        score = score + 20;
        if (id == "player0RollButton") {
            document.getElementById("player0HandScore").textContent= "Score: " + score;
        } else if (id == "player1RollButton") {
            document.getElementById("player1HandScore").textContent= "Score: " + score;
        } else if (id == "player2RollButton") {
            document.getElementById("player2HandScore").textContent= "Score: " + score;
        } else if (id == "player3RollButton") {
            document.getElementById("player3HandScore").textContent= "Score: " + score;
        } 
    } else if (pig1 == "Razorback" || pig2 == "Razorback" || pig1 == "Trotter" || pig2 == "Trotter") {
        score = score + 5;
        if (id == "player0RollButton") {
            document.getElementById("player0HandScore").textContent= "Score: " + score;
        } else if (id == "player1RollButton") {
            document.getElementById("player1HandScore").textContent= "Score: " + score;
        } else if (id == "player2RollButton") {
            document.getElementById("player2HandScore").textContent= "Score: " + score;
        } else if (id == "player3RollButton") {
            document.getElementById("player3HandScore").textContent= "Score: " + score;
        }
    } 

     if (pig1 == "Snouter" && pig2 == "Snouter") {
        score = score + 40;
        if (id == "player0RollButton") {
            document.getElementById("player0HandScore").textContent= "Score: " + score;
        } else if (id == "player1RollButton") {
            document.getElementById("player1HandScore").textContent= "Score: " + score;
        } else if (id == "player2RollButton") {
            document.getElementById("player2HandScore").textContent= "Score: " + score;
        } else if (id == "player3RollButton") {
            document.getElementById("player3HandScore").textContent= "Score: " + score;
        }
    } 
    if (pig1 == "Leaning Jowler" && pig2 == "Leaning Jowler") {
        score = score + 60;
        if (id == "player0RollButton") {
            document.getElementById("player0HandScore").textContent= "Score: " + score;
        } else if (id == "player1RollButton") {
            document.getElementById("player1HandScore").textContent= "Score: " + score;
        } else if (id == "player2RollButton") {
            document.getElementById("player2HandScore").textContent= "Score: " + score;
        } else if (id == "player3RollButton") {
            document.getElementById("player3HandScore").textContent= "Score: " + score;
        }
    } 
    
    if (pig1 == "Snouter" || pig2 == "Snouter" ) {
        score = score + 10;
        if (id == "player0RollButton") {
            document.getElementById("player0HandScore").textContent= "Score: " + score;
        } else if (id == "player1RollButton") {
            document.getElementById("player1HandScore").textContent= "Score: " + score;
        } else if (id == "player2RollButton") {
            document.getElementById("player2HandScore").textContent= "Score: " + score;
        } else if (id == "player3RollButton") {
            document.getElementById("player3HandScore").textContent= "Score: " + score;
        }
    } 
    if (pig1 == "Leaning Jowler" || pig2 == "Leaning Jowler" ) {
        score = score + 15;
        if (id == "player0RollButton") {
            document.getElementById("player0HandScore").textContent= "Score: " + score;
        } else if (id == "player1RollButton") {
            document.getElementById("player1HandScore").textContent= "Score: " + score;
        } else if (id == "player2RollButton") {
            document.getElementById("player2HandScore").textContent= "Score: " + score;
        } else if (id == "player3RollButton") {
            document.getElementById("player3HandScore").textContent= "Score: " + score;
        }
    }

    }   


}