//score counter
let playerScore = 0;
let computerScore = 0;
let gameRounds = 0;
//initialization of names and rounds
const playBtn = document.getElementById('play-game-btn');
const rounds = document.querySelector('#rounds');
playBtn.addEventListener('click', function () {
    if (!rounds.value) {
        alert('Please input how many rounds you are going to play');
    }
    else {
        document.querySelector('.initial-modal').classList.add('hidden');
        document.querySelector('.overlay').classList.add('hidden');

    }
    gameRounds += Number(rounds.value);
});

//powerful and most advanced ai for rock paper scissor
const pScore = document.getElementById('p-score');
const compScore = document.getElementById('comp-score');

const compPickImage = document.getElementById('comp-pick-img');
const gameRes = document.querySelector('.game-results');

let results = function computerPick() {
    let rand = Math.floor(Math.random() * 3) + 1;
    compPickImage.src = `images/item-${rand}.png`;

    //rock
    if (rand === 3 && playerPick === 1) {
        document.querySelector('#game-results-display').textContent = 'Player Won';
        playerScore += 1;
        // return 'player won';
    }
    else if (rand === 2 && playerPick === 1) {
        document.querySelector('#game-results-display').textContent = 'Player Lost';
        computerScore += 1;
        // return 'player lost';
    }
    //paper
    else if (rand === 1 && playerPick === 2) {
        document.querySelector('#game-results-display').textContent = 'Player Won';
        playerScore += 1;
        // return 'player won';
    }
    else if (rand === 3 && playerPick === 2) {
        document.querySelector('#game-results-display').textContent = 'Player Lost';
        computerScore += 1;
        // return 'player lost';
    }
    //scissors
    else if (rand === 2 && playerPick === 3) {
        document.querySelector('#game-results-display').textContent = 'Player Won';
        playerScore += 1;
        // return 'player won';
    }
    else if (rand === 1 && playerPick === 3) {
        document.querySelector('#game-results-display').textContent = 'Player Lost';
        computerScore += 1;
        // return 'player lost';
    }
    else {
        document.querySelector('#game-results-display').textContent = 'Draw';
    }
    pScore.textContent = playerScore;
    compScore.textContent = computerScore;
    gameRes.classList.remove('hidden');
}

//for the player pick
const playerPickImage = document.getElementById('player-pick-img');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
let playerPick;

let roundCount = 0;


rockBtn.addEventListener('click', function () {
    playerPickImage.src = 'images/item-1.png'
    playerPick = 1;
    results();
    roundCount++;
    console.log(roundCount);
})

paperBtn.addEventListener('click', function () {
    playerPickImage.src = 'images/item-2.png'
    playerPick = 2;
    results();
    roundCount++;
    console.log(roundCount);
})

scissorsBtn.addEventListener('click', function () {
    playerPickImage.src = 'images/item-3.png'
    playerPick = 3;
    results();
    roundCount++;
    console.log(roundCount);
})
