var portalString = 'The cake is a lie';

function countingCharacters(stringToCount) {
    console.log (stringToCount + " has " +
              stringToCount.length + " characters.");
}

function countingCharacters2(stringToCount, characterToFind){
    // Let's count the number of times a character appears in a string
    // We will look at each character one-by-one with the help of a for loop
    var characterCount = 0;
    for (var characterPosition = 0;
           characterPosition < stringToCount.length;
           characterPosition++){
        if (stringToCount[characterPosition] == characterToFind){
            characterCount++;
        }
    }
    console.log("String to search in: " + stringToCount);
    console.log("Character to find: " + characterToFind);
    console.log("Number of times the character appears: " +
                  characterCount);
}

function countingCharacters3point1 /* My version */ (stringToCount, char1, char2) {
        var charPairCount = 0;
        for (var i = 0; i < stringToCount.length; i++) {
                stringToCount[i]++;
                if (stringToCount[i] == char1 && stringToCount[i+1] == char2) {
                        charPairCount++
                }
        }
        console.log("String to search in: " + stringToCount);
        console.log("Character pair to find: " + char1 + char2);
        console.log("Number of times the pair " + char1 + char2 + " appears: " +
                      charPairCount);
}

// str - string to search
// search - characters to find in str
function countingCharacters3(str, search){
        var count = 0; // number found
        /* we need to stop loop based on multiple characters example: if searching "Ohio" with 3 characters at a time we want to stop at h so we do not go past the end of the string */
        var numChars = search.length;
        // We will use a for loop to go through our string
        var lastIndex = str.length - numChars;
        // This time, we are looking for a series of characters - a substring
        for (var index = 0; index <= lastIndex; index++){
                // substring gets a part of a string from a start to end index
                var current = str.substring(index, index + numChars);
                // if the substring matches our series, increase our counter
                if (current == search){
                        count++;
                }
        }

        //return count;
        console.log("String to search in: " + str);
        console.log("Character to find: " + search);
        console.log("Number of times the character appears: " + count);
}
