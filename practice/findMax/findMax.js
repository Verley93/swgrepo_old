var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];

var max = 0;

for (var arrayPos = 0; arrayPos < testArray.length; arrayPos++) {
        if (max <= testArray[arrayPos]) {
                max = testArray[arrayPos];

                // Optional to see work
                console.log("The new max is: " + max);
        }

        // Optional to see work
        else {
                console.log(max + " is greater than " + testArray[arrayPos]);
        }
}

console.log("The final max of " + testArray + " is: " + max);
