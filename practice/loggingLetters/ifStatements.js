/*
Using if and else, make decisions based on the values of n and result with the following rules:
        *When n is even, set the value of result to result's current value plus 10.
        *When n is odd, set the value of result to result's current value minus the value of n.
        *Do not declare new variables.
        *Be sure your solution works for all values of n and result.
        *You can use the modulo operator (%) to determine if a number is even. If it's even, n % 2 will be zero because there's no remainder when a number is evenly divisible.
*/

if (n % 2 == 0) {
                result = result + 10;
                console.log("Even");
                console.log(n);
                console.log(result);
                n = n - 1;
}

else if (n % 2 !== 0) {
                result = result - n;
                console.log("Odd");
                console.log(n);
                console.log(result);
                n = n + 1;
        }
}

result = 0;
