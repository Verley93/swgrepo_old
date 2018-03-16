var friends = ["Aneki", "Quell", "Clarity", "Sleepy", "Roghar", "DM Crimson"];

var team1 = new Array();
var team2 = new Array();

// Loads both arrays from 0-array.length of friends to beginning of teams
/* for (var i = 0; i < friends.length; i++) {
    if (i % 2 == 0) {
        // if the index is even, add the person to team 1
        team1.push(friends[i]);
    } else {
        // otherwise add them to team 2
        team2.push(friends[i]);
    }
} */

// Loads both arrays from array.length-0 of friends to beginning of teams
/* for (var i = 0; i < friends.length; i++) {
    if (i % 2 == 0) {
        // if the index is even, add the person to team 1
        team1.unshift(friends[i]);
    } else {
        // otherwise add them to team 2
        team2.unshift(friends[i]);
    }
} */

// Populating with a for loop and indices
/* for (var i = 0; i < friends.length; i++) {
    if (i % 2 == 0) {
        // if the index is even, add the person to team 1
        team1[team1.length] = friends[i];
    } else {
        // otherwise add them to team 2
        team2[team2.length] = friends[i];
    }
} */

var fruits = ['kiwi', 'rambutan', 'mango', 'tomato'];

// fruits.pop(); // kiwi, rambutan, mango

// fruits.push('gooseberry'); // kiwi, rambutan, mango, gooseberry

// fruits.shift(); // rambutan, mango, gooseberry

// fruits.unshift("banana"); // banana, rambutan, mango, gooseberry

// fruits.slice(0, 2); // returns 2 elements, starting from position 0 and ending at position 2

// fruits.splice(0, 2); // returns 2 elements by removing elements from position 0 to position 2

// add an element to an array using the .length property
// fruits[fruits.length] = "blueberry"; //mango, gooseberry, blueberry

// update an element by specifying an index
// fruits[2] = "pineapple"; // mango, gooseberry, pineapple

// js will add undefined elements for empty indices between filled indices
// fruits[5] = "dragonfruit"; // mango, gooseberry, pineapple,..., dragonfruit
