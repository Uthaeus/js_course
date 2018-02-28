// variable deconstruction
// ability to swap variable values

let playerOne = 'Tiffany';
let playerTwo = 'Kristine';

// temp variables used for swapping --> old way
let tempPlayerOne = playerOne;
let tempPlayerTwo = playerTwo;

playerOne, playerTwo = playerTwo, playerOne; //JavaScript does not allow 

// In order to get that to work, wrap variable sets in brackets
[playerOne, playerTwo] = [playerTwo, playerOne]; // allowable method here



