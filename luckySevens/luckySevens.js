//    Roll Dice (1-6)    //
function rollDice() {
        return Math.ceil(Math.random() * (1 + 6 - 1));
}

for (var i = 0; i < 100; i++) {
        console.log(rollDice());
}
