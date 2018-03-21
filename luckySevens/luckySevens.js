//    Play    //
function play() {
        var bet = document.forms["sevensBet"]["bet"].value;

        if (bet <= 0) {
                document.getElementById("warning").style.display = "inline";
                return event.preventDefault();
        }

        var startingBet = bet;
        var balance = bet;
        var balanceArray = [];

        //    Roll Two Die    //
        function rollDice() {
                var dice1 = Math.ceil(Math.random() * (1 + 6 - 1));
                var dice2 = Math.ceil(Math.random() * (1 + 6 - 1));
                var diceSum = dice1 + dice2;
                return diceSum;
        }

        do {
                var dice = rollDice();

                if (dice == 7) {
                        balance += 4;    // Add $4 to the balance if the dice pair = 7
                }
                else {
                        balance--;    // Subtract $1 to the balance if the dice pair != 7
                }

                balanceArray.push(balance);
        } while (balance > 0);

        var totalRolls = balanceArray.length + 1;    // Total rolls equal to the length of balanceArray + 1
        var highestWon = Math.max.apply(Math, balanceArray);    // Determines max value of balanceArray
        var rollCountAtHighest = balanceArray.indexOf(highestWon);    // Determines index at max of balanceArray

        //    Show Results    //
        function showResults() {
                document.getElementById("playButton").style.display = "none";
                document.getElementById("playAgainButton").style.display = "inline";
                document.getElementById("resultsHeader").style.display = "inline";
                document.getElementById("results").style.display = "inline";

                if (startingBet < 10) {
                        // Floats 3 decimals if less than $10.00
                        document.getElementById("startingBet").innerText = "$" + parseFloat(startingBet).toPrecision(3);
                }
                else {
                        // Floats 4 decimals if greater than $10.00
                        document.getElementById("startingBet").innerText = "$" + parseFloat(startingBet).toPrecision(4);
                }

                document.getElementById("totalRolls").innerText = totalRolls;

                if (highestWon < 10) {
                        // Floats 3 decimals if less than $10.00
                        document.getElementById("highestWon").innerText = "$" + parseFloat(highestWon).toPrecision(3);
                }
                else {
                        // Floats 4 decimals if greater than $10.00
                        document.getElementById("highestWon").innerText = "$" + parseFloat(highestWon).toPrecision(4);
                }

                document.getElementById("rollCountAtHighest").innerText = rollCountAtHighest;
                // console.log(balanceArray);  // This can be used to match highestWon to its index (rollCountAtHighest)
                event.preventDefault();
        }

        if (balance <= 0) {
                showResults();
        }
        event.preventDefault();
}

//    Hide Results    //
function hideResults() {
        document.forms["sevensBet"]["bet"].value = "";
        document.getElementById("playAgainButton").style.display = "none";
        document.getElementById("resultsHeader").style.display = "none";
        document.getElementById("results").style.display = "none";
}
