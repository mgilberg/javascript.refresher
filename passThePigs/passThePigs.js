let playerTurn = 1;
let pick1;
let pick2;
let dot = 0;
let noDot = 0;
let razorback = 0;
let trotter = 0;
let snouter = 0;
let leaningJowler = 0;
let score = 0;
let pig1;
let pig2;


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

function handleClick(id) {
    
    //code for pass button
    if (id == "player0PassButton" || id == "player1PassButton" || id == "player2PassButton" || id == "player3PassButton") {
        playerTurn = playerTurn + 1;
        if (playerTurn > 4) {
            playerTurn = 1;
        }

        if (playerTurn == 1) {
            document.getElementById("player3").className = "w3-card w3-container w3-white w3-round-large";  //code for class name change from stackoverflow
            document.getElementById("player0").className = "w3-card w3-container w3-dark-gray w3-round-large";
            

            // disables pass button
            document.getElementById("player0PassButton").disabled = false;
            document.getElementById("player1PassButton").disabled = true;
            document.getElementById("player2PassButton").disabled = true;
            document.getElementById("player3PassButton").disabled = true;

            // disables roll button
            document.getElementById("player0RollButton").disabled = false;
            document.getElementById("player1RollButton").disabled = true;
            document.getElementById("player2RollButton").disabled = true;
            document.getElementById("player3RollButton").disabled = true;

        } else if (playerTurn == 2) {
            document.getElementById("player0").className = "w3-card w3-container w3-white w3-round-large";
            document.getElementById("player1").className = "w3-card w3-container w3-dark-gray w3-round-large";
            
            // disables pass button
            document.getElementById("player0PassButton").disabled = true;
            document.getElementById("player1PassButton").disabled = false;
            document.getElementById("player2PassButton").disabled = true;
            document.getElementById("player3PassButton").disabled = true;

            // disables roll button
            document.getElementById("player0RollButton").disabled = true;
            document.getElementById("player1RollButton").disabled = false;
            document.getElementById("player2RollButton").disabled = true;
            document.getElementById("player3RollButton").disabled = true;

        } else if (playerTurn == 3) {
            document.getElementById("player1").className = "w3-card w3-container w3-white w3-round-large";
            document.getElementById("player2").className = "w3-card w3-container w3-dark-gray w3-round-large";
            
            // disables pass button
            document.getElementById("player0PassButton").disabled = true;
            document.getElementById("player1PassButton").disabled = true;
            document.getElementById("player2PassButton").disabled = false;
            document.getElementById("player3PassButton").disabled = true;

            // disables roll button
            document.getElementById("player0RollButton").disabled = true;
            document.getElementById("player1RollButton").disabled = true;
            document.getElementById("player2RollButton").disabled = false;
            document.getElementById("player3RollButton").disabled = true;

        } else if (playerTurn == 4) {
            document.getElementById("player2").className = "w3-card w3-container w3-white w3-round-large";
            document.getElementById("player3").className = "w3-card w3-container w3-dark-gray w3-round-large";
            
            // disables pass button
            document.getElementById("player0PassButton").disabled = true;
            document.getElementById("player1PassButton").disabled = true;
            document.getElementById("player2PassButton").disabled = true;
            document.getElementById("player3PassButton").disabled = false;

            // disables roll button
            document.getElementById("player0RollButton").disabled = true;
            document.getElementById("player1RollButton").disabled = true;
            document.getElementById("player2RollButton").disabled = true;
            document.getElementById("player3RollButton").disabled = false;

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
    
    document.getElementById("player0Pig1").textContent=pig1;
    document.getElementById("player0Pig2").textContent=pig2;


    if (pig1 == "Dot" && pig2 == "No Dot") {
        score = 0;
        // document.getElementById("player0HandScore").textContent=score;
    }


    }
    console.log(pig1 + pig2);
    //     pick1 = Math.floor(Math.random() * 1000) + 1;
    //     pick2 = Math.floor(Math.random() * 1000) + 1;
        
    //     if (pick1 >= 349) {
    //         dot = dot + 1;
    //         // code on how to change text element from stack overflow
    //         if (id == "player0RollButton") {
    //             document.getElementById("player0Pig1").textContent="Dot";
    //         } else if (id == "player1RollButton") {
    //             document.getElementById("player1Pig1").textContent="Dot";
    //         } else if (id == "player2RollButton") {
    //             document.getElementById("player2Pig1").textContent="Dot";
    //         } else if (id == "player3RollButton") {
    //             document.getElementById("player3Pig1").textContent="Dot";
    //         }

    //     } else if (pick1 >= 651 && pick1 <= 350) {
    //         noDot = noDot + 1;
    //         if (id == "player0RollButton") {
    //             document.getElementById("player0Pig1").textContent="No Dot";
    //         } else if (id == "player1RollButton") {
    //             document.getElementById("player1Pig1").textContent="No Dot";
    //         } else if (id == "player2RollButton") {
    //             document.getElementById("player2Pig1").textContent="No Dot";
    //         } else if (id == "player3RollButton") {
    //             document.getElementById("player3Pig1").textContent="No Dot";
    //         }

    //     } else if (pick1 <= 652 && pick1 >= 875) {
    //         razorback = razorback + 1;
    //         if (id == "player0RollButton") {
    //             document.getElementById("player0Pig1").textContent="Razorback";
    //         } else if (id == "player1RollButton") {
    //             document.getElementById("player1Pig1").textContent="Razorback";
    //         } else if (id == "player2RollButton") {
    //             document.getElementById("player2Pig1").textContent="Razorback";
    //         } else if (id == "player3RollButton") {
    //             document.getElementById("player3Pig1").textContent="RazorBack";
    //         }

    //     } else if (pick1 <=876 && pick1 >=963) {
    //         trotter = trotter + 1;
    //         if (id == "player0RollButton") {
    //             document.getElementById("player0Pig1").textContent="Trotter";
    //         } else if (id == "player1RollButton") {
    //             document.getElementById("player1Pig1").textContent="Trotter";
    //         } else if (id == "player2RollButton") {
    //             document.getElementById("player2Pig1").textContent="Trotter";
    //         } else if (id == "player3RollButton") {
    //             document.getElementById("player3Pig1").textContent="Trotter";
    //         }

    //     } else if (pick1 <= 964 && pick1 >= 993) {
    //         snouter = snouter + 1;
    //         if (id == "player0RollButton") {
    //             document.getElementById("player0Pig1").textContent="Snouter";
    //         } else if (id == "player1RollButton") {
    //             document.getElementById("player1Pig1").textContent="Snouter";
    //         } else if (id == "player2RollButton") {
    //             document.getElementById("player2Pig1").textContent="Snouter";
    //         } else if (id == "player3RollButton") {
    //             document.getElementById("player3Pig1").textContent="Snouter";
    //         }

    //     } else if (pick1 <= 994 && pick1 >= 1000) {
    //         leaningJowler = leaningJowler + 1;
    //         if (id == "player0RollButton") {
    //             document.getElementById("player0Pig1").textContent="Leaning Jowler";
    //         } else if (id == "player1RollButton") {
    //             document.getElementById("player1Pig1").textContent="Leaning Jowler";
    //         } else if (id == "player2RollButton") {
    //             document.getElementById("player2Pig1").textContent="Leaning Jowler";
    //         } else if (id == "player3RollButton") {
    //             document.getElementById("player3Pig1").textContent="Leaning Jowler";
    //         }
    //     }

    //     if (pick2 >= 349) {
    //         dot = dot + 1;
    //         if (id == "player0RollButton") {
    //             document.getElementById("player0Pig2").textContent="Dot";
    //         } else if (id == "player1RollButton") {
    //             document.getElementById("player1Pig2").textContent="Dot";
    //         } else if (id == "player2RollButton") {
    //             document.getElementById("player2Pig2").textContent="Dot";
    //         } else if (id == "player3RollButton") {
    //             document.getElementById("player3Pig2").textContent="Dot";
    //         }
            
    //     } else if (pick2 >= 651 && pick1 <= 350) {
    //         noDot = noDot + 1;
    //         if (id == "player0RollButton") {
    //             document.getElementById("player0Pig2").textContent="No Dot";
    //         } else if (id == "player1RollButton") {
    //             document.getElementById("player1Pig2").textContent="No Dot";
    //         } else if (id == "player2RollButton") {
    //             document.getElementById("player2Pig2").textContent="No Dot";
    //         } else if (id == "player3RollButton") {
    //             document.getElementById("player3Pig2").textContent="No Dot";
    //         }

    //     } else if (pick2 <= 652 && pick1 >= 875) {
    //         razorback = razorback + 1;
    //         if (id == "player0RollButton") {
    //             document.getElementById("player0Pig2").textContent="Razorback";
    //         } else if (id == "player1RollButton") {
    //             document.getElementById("player1Pig2").textContent="Razorback";
    //         } else if (id == "player2RollButton") {
    //             document.getElementById("player2Pig2").textContent="Razorback";
    //         } else if (id == "player3RollButton") {
    //             document.getElementById("player3Pig2").textContent="RazorBack";
    //         }

    //     } else if (pick2 <=876 && pick1 >=963) {
    //         trotter = trotter + 1;
    //         if (id == "player0RollButton") {
    //             document.getElementById("player0Pig2").textContent="Trotter";
    //         } else if (id == "player1RollButton") {
    //             document.getElementById("player1Pig2").textContent="Trotter";
    //         } else if (id == "player2RollButton") {
    //             document.getElementById("player2Pig2").textContent="Trotter";
    //         } else if (id == "player3RollButton") {
    //             document.getElementById("player3Pig2").textContent="Trotter";
    //         }


    //     } else if (pick2 <= 964 && pick1 >= 993) {
    //         snouter = snouter + 1;
    //         if (id == "player0RollButton") {
    //             document.getElementById("player0Pig2").textContent="Snouter";
    //         } else if (id == "player1RollButton") {
    //             document.getElementById("player1Pig2").textContent="Snouter";
    //         } else if (id == "player2RollButton") {
    //             document.getElementById("player2Pig2").textContent="Snouter";
    //         } else if (id == "player3RollButton") {
    //             document.getElementById("player3Pig2").textContent="Snouter";
    //         }

    //     } else if (pick2 <= 994 && pick1 >= 1000) {
    //         leaningJowler = leaningJowler + 1;
    //         if (id == "player0RollButton") {
    //             document.getElementById("player0Pig2").textContent="Leaning Jowler";
    //         } else if (id == "player1RollButton") {
    //             document.getElementById("player1Pig2").textContent="Leaning Jowler";
    //         } else if (id == "player2RollButton") {
    //             document.getElementById("player2Pig2").textContent="Leaning Jowler";
    //         } else if (id == "player3RollButton") {
    //             document.getElementById("player3Pig2").textContent="Leaning Jowler";
    //         }
    //     }

    //     // controls how many points score gets
    //     if (dot === 1 && noDot ===1) {
    //         playerTurn = playerTurn + 1;
    //         score = 0;
    //     } 
    //     if (dot === 2 || dot === 1) {
    //         score = score + 1;
    //     } 
    //     if (noDot === 2 || dot === 1) {
    //         score = score + 1;
    //     } 
    //     if (razorback === 1) {
    //         score = score + 5;
    //     } 
    //     if (razorback === 2) {
    //         score = score + 20;
    //     } 
    //     if (trotter === 1) {
    //         score = score + 5;
    //     } 
    //     if (trotter === 2) {
    //         score = score + 20;
    //     }
    //     if (snouter === 1) {
    //         score = score + 10;
    //     }
    //     if (snouter === 2) {
    //         score = sccore + 40;
    //     }
    //     if (leaningJowler === 1) {
    //         score = score + 15;
    //     }
    //     if (leaningJowler === 2) {
    //         score = score + 60;
    //     }
    //     console.log(score);
    //     // if (playerTurn === 1) {
    //     //     document.getElementById("player0Pig2").textContent="Leaning Jowler"; player0TotalScore"
    //     // }

    



}