//score counter
let playerScore = 0;
let computerScore = 0;
let gameRounds = 0;
let roundCount = 0;
let pName;
//initialization of names and rounds
const playBtn = document.getElementById('play-game-btn');
const rounds = document.querySelector('#rounds');
const domPname = document.querySelector('#name');

function roundAndName() {
    if (!rounds.value) {
        alert('Please input how many rounds you are going to play');
    }
    else {
        document.querySelector('.initial-modal').classList.add('hidden');
        document.querySelector('.overlay').classList.add('hidden');
    }
    gameRounds += Number(rounds.value);
    pName = domPname.value;
    if (!pName) {
        domPlayerName.textContent = 'Player 1'
    }
    else {
        domPlayerName.textContent = pName;
    }
}
const domPlayerName = document.querySelector('#player-name');
playBtn.addEventListener('click', roundAndName);

//powerful and most advanced ai for rock paper scissor
const pScore = document.getElementById('p-score');
const compScore = document.getElementById('comp-score');

const compPickImage = document.getElementById('comp-pick-img');
const gameRes = document.querySelector('.game-results');

let results = function computerPick() {
    //if the player or computer still doesn't meet the condition to win 
    if (computerScore < gameRounds && playerScore < gameRounds) {
        let rand = Math.floor(Math.random() * 3) + 1;
        compPickImage.src = `images/item-${rand}.png`;

        //rock
        if (rand === 3 && playerPick === 1) {
            document.querySelector('#game-results-display').textContent = 'Player Won';
            playerScore += 1;
        }
        else if (rand === 2 && playerPick === 1) {
            document.querySelector('#game-results-display').textContent = 'Player Lost';
            computerScore += 1;
        }
        //paper
        else if (rand === 1 && playerPick === 2) {
            document.querySelector('#game-results-display').textContent = 'Player Won';
            playerScore += 1;
        }
        else if (rand === 3 && playerPick === 2) {
            document.querySelector('#game-results-display').textContent = 'Player Lost';
            computerScore += 1;
        }
        //scissors
        else if (rand === 2 && playerPick === 3) {
            document.querySelector('#game-results-display').textContent = 'Player Won';
            playerScore += 1;
        }
        else if (rand === 1 && playerPick === 3) {
            document.querySelector('#game-results-display').textContent = 'Player Lost';
            computerScore += 1;
        }
        else {
            document.querySelector('#game-results-display').textContent = 'Draw';
        }
        pScore.textContent = playerScore;
        compScore.textContent = computerScore;
        console.log('Round ' + roundCount);
        gameRes.classList.remove('hidden');
        console.log(playerScore)
        console.log(computerScore)
        console.log(gameRounds)
    }
    else {
        if (playerScore === gameRounds) {
            document.getElementById('game-winner-result').textContent = 'Player Won'
        }
        else {
            document.getElementById('game-winner-result').textContent = 'Computer Won'
        }
        document.querySelector('.winner-modal').classList.remove('hidden');
        document.querySelector('.overlay').classList.remove('hidden');
        console.log('round ended')
    }
}

//for the player pick
const playerPickImage = document.getElementById('player-pick-img');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
let playerPick;

rockBtn.addEventListener('click', function () {
    playerPickImage.src = 'images/item-1.png'
    playerPick = 1;
    results();
    roundCount++;
})

paperBtn.addEventListener('click', function () {
    playerPickImage.src = 'images/item-2.png'
    playerPick = 2;
    results();
    roundCount++;
})

scissorsBtn.addEventListener('click', function () {
    playerPickImage.src = 'images/item-3.png'
    playerPick = 3;
    results();
    roundCount++;
})

//Play Again
const playAgainBtn = document.querySelector('#play-again-btn');
playAgainBtn.addEventListener('click', function playAgainFunc() {
    //scores reset
    playerScore = 0;
    computerScore = 0;
    pScore.textContent = playerScore;
    compScore.textContent = computerScore;
    document.querySelector('.winner-modal').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');

    //name and round number reset
    gameRounds = 0;
    roundCount = 0
    document.querySelector('.initial-modal').classList.remove('hidden');
    document.querySelector('.overlay').classList.remove('hidden');

    //images reset
    compPickImage.src = '';
    playerPickImage.src = '';
});
