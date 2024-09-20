// Generate random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Select elements from the DOM
const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessfield');
const guessslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastresult');
const lowOrhi = document.querySelector('.lowOrhi');
const p = document.createElement('p');
const startOver = document.querySelector('#wrapper'); // Added reference for startOver

// Initialize game variables
let prevGuess = [];
let numGuess = 1;
let playgame = true;

// Event listener for submit button
if (playgame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userinput.value);
        validateGuess(guess);
    });
}

// Function to validate user input
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over, the random number was ${randomNumber}`);
            endgame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

// Function to check the user's guess
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('You guessed right!');
        endgame();
    } else if (guess < randomNumber) {
        displayMessage('Number is too low');
    } else if (guess > randomNumber) {
        displayMessage('Number is too high');
    }
}

// Function to display the user's guess
function displayGuess(guess) {
    userinput.value = ''; // Clear the input field
    guessslot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

// Function to display messages
function displayMessage(message) {
    lowOrhi.innerHTML = `<h2>${message}</h2>`;
}

// Function to end the game
function endgame() {
    userinput.setAttribute('disabled', ''); // Disable input field
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
    startOver.appendChild(p);
    playgame = false;
    newGame();
}

// Function to start a new game
function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', (e) => {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        prevGuess = [];
        numGuess = 1;
        guessslot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userinput.removeAttribute('disabled');
        startOver.removeChild(p);
        playgame = true;
    });
}
