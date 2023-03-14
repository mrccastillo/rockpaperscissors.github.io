//use prompt to know the name of the player and store it in a variable

// let pName = prompt('Please enter your Name to play the game');
// if (!pName) {
//     document.querySelector('#player-name').textContent = 'Player 1';
// }
// else {
//     document.querySelector('#player-name').textContent = pName;
// }
//will use it later


//powerful and most advanced ai for rock paper scissor
const compPickImage = document.getElementById('comp-pick-img');
let results = function computerPick() {
    let rand = Math.floor(Math.random() * 3) + 1;
    compPickImage.src = `images/item-${rand}.jpg`;

    //rock
    if (rand === 3 && playerPick === 1) {
        document.querySelector('#game-results-display').innerHTML = 'Player Won';
        // return 'player won';
    }
    else if (rand === 2 && playerPick === 1) {
        document.querySelector('#game-results-display').innerHTML = 'Player Lost';
        // return 'player lost';
    }
    //paper
    else if (rand === 1 && playerPick === 2) {
        document.querySelector('#game-results-display').innerHTML = 'Player Won';
        // return 'player won';
    }
    else if (rand === 3 && playerPick === 2) {
        document.querySelector('#game-results-display').innerHTML = 'Player Lost';
        // return 'player lost';
    }
    //scissors
    else if (rand === 2 && playerPick === 3) {
        document.querySelector('#game-results-display').innerHTML = 'Player Won';
        // return 'player won';
    }
    else if (rand === 1 && playerPick === 3) {
        document.querySelector('#game-results-display').innerHTML = 'Player Lost';
        // return 'player lost';
    }
    else {
        document.querySelector('#game-results-display').innerHTML = 'Draw';
    }
}

//for the player pick
const playerPickImage = document.getElementById('player-pick-img');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
let playerPick;

rockBtn.addEventListener('click', function () {
    playerPickImage.src = 'images/item-1.jpg'
    playerPick = 1;
    results();
})

paperBtn.addEventListener('click', function () {
    playerPickImage.src = 'images/item-2.jpg'
    playerPick = 2;
    results();
})

scissorsBtn.addEventListener('click', function () {
    playerPickImage.src = 'images/item-3.jpg'
    playerPick = 3;
    results();
})
