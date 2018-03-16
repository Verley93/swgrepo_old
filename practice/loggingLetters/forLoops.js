/*
        var n = 25;
        Declare a new variable named "sum" and initialize it to 0. Be sure to use the var keyword.
        Use a for loop to add every positive integer less than n to sum.
        Come up with a solution that works for all values of n.
*/

var n = 25
var sum = 0;

if (n > 0) {
        for (var i = 0; i < n; i++) {
                sum = sum + n;
                console.log(sum);
        }
}

sum = 0;
n++;
