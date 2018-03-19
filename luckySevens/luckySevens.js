//    Play    //
function play() {
        var bet = document.forms["play"].value;
        var startingBet = bet;
        var highestWon = 0;
        var rollCountAtHighest = 0;
        if (bet = 0) {
                validateItems();
        }
}

//    Roll Dice (1-6)    //
function rollDice() {
        return Math.ceil(Math.random() * (1 + 6 - 1));
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
        if (bet == "" || isNaN(bet) || == 0) {
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
