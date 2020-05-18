let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// This function generates the target number
const generateTarget = () => {
    return Math.floor (Math.random() * 10);
};

// This function compares the two guesses
const compareGuesses = (userGuess, computerGuess, secretTarget) => {
    if (userGuess < 0 || userGuess > 10) {
        alert('Number out of range');
    } else {
        const userDifference = getAbsoluteDistance (userGuess, secretTarget);
        const computerDifference = getAbsoluteDistance (computerGuess, secretTarget);
        return userDifference <= computerDifference;
    }
};

// This function calculates the absolute distance
const getAbsoluteDistance = (guess, secretTarget) => {
    return Math.abs (guess - secretTarget);
};

// This function updates the score
const updateScore = winner => {
    switch (winner) {
        case 'human':
            humanScore++;
        case 'computer':
            computerScore++;
    } 
};

// This function updates the round
const advanceRound = () => currentRoundNumber++;
