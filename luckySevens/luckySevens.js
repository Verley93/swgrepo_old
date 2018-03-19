//    Play    //
function play() {
        var bet = document.forms["sevensBet"]["bet"].value;
        var startingBet = bet;
        var balance = bet;
        var highestWon = 0;
        var rollCountAtHighest = 0;
        var diceSum = 0;

        if (bet = 0) {
                validateItems();
        }
        if (bet > 0) {
                do {
                        rollDice();
                        console.log("Dice Sum: " + diceSum);
                        if (diceSum == 7) {
                                balance += 4;
                                console.log("Balance: " + balance);
                                if (balance > highestWon) {
                                        highestWon = balance;
                                        rollCountAtHighest = totalRolls;
                                }
                                totalRolls++;
                        }
                        else {
                                balance -= 1;
                                console.log("Balance: " + balance);
                        }
                } while (balance > 0);
                if (balance = 0) {
                        printResults();
                }
        }
}

//    Roll Two Dice    //
function rollDice() {
        var dice1 = Math.ceil(Math.random() * (1 + 6 - 1));
        var dice2 = Math.ceil(Math.random() * (1 + 6 - 1));
        var diceSum = dice1 + dice2;
        return diceSum;
}

//    Print Results    //
function printResults() {
        // Insert show table and results here
        playAgain();
}

//    Clear Errors    //
function clearErrors() {
        for (var loopCounter = 0; loopCounter < document.forms["play"].elements.length; loopCounter++) {
        if (document.forms["play"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
                        document.forms["play"].elements[loopCounter].parentElement.className = "form-group";
                }
        }
}

//    Validate Entry    //
function validateItems() {
        clearErrors();
        var bet = document.forms["play"].value;
        if (bet == "" || isNaN(bet)) {
                alert("Bet must be filled in with a number.");
                document.forms["play"]["bet"].parentElement.className = "form-group has-error";
                document.forms["play"]["bet"].focus();
                return false;
        }
        else if (bet == 0) {
                alert("Bet must be filled in with a number greater than zero.");
                document.forms["play"]["bet"].parentElement.className = "form-group has-error";
                document.forms["play"]["bet"].focus();
                return false;
        }
}

//    Play Again    //
function playAgain() {
        clearErrors();
        document.forms["play"].value = "";
        document.getElementById("results").style.display = "none";
        document.getElementById("playButton").innerText = "Play Again";
        document.forms["play"].focus();
}
