//score counter
let playerScore = 0;
let computerScore = 0;
let gameRounds = 0;
let roundCount = 0;
let pName;
let isPlaying = true;
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
        gameRounds += Number(rounds.value);
        pName = domPname.value;
    }
    if (!pName) {
        domPlayerName.textContent = 'Player 1'
    }
    else {
        domPlayerName.textContent = pName;
    }
}
const domPlayerName = document.querySelector('#player-name');
playBtn.addEventListener('click', roundAndName);

const pScore = document.getElementById('p-score');
const compScore = document.getElementById('comp-score');

const compPickImage = document.getElementById('comp-pick-img');
const gameRes = document.querySelector('.game-results');

let results = function computerPick() {
    //if the player or computer still doesn't meet the condition to win 
    if (isPlaying) {
        if (computerScore < gameRounds && playerScore < gameRounds) {

            let rand = Math.floor(Math.random() * 3) + 1; //powerful and most advanced ai for rock paper scissor
            compPickImage.src = `images/item-${rand}.png`;
            //1 is rock, 2 is paper, 3 is scissors
            //player win condition
            if ((rand === 3 && playerPick === 1) || (rand === 1 && playerPick === 2) || (rand === 2 && playerPick === 3)) {
                document.querySelector('#game-results-display').textContent = 'Player Won';
                playerScore += 1;
            }
            //computer win condition
            else if ((rand === 2 && playerPick === 1) || (rand === 3 && playerPick === 2) || (rand === 1 && playerPick === 3)) {
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
                document.querySelector('.winner-modal').classList.remove('defeat');
                document.querySelector('.winner-modal').classList.add('victory');
            }
            else {
                document.getElementById('game-winner-result').textContent = 'Computer Won'
                document.querySelector('.winner-modal').classList.remove('victory');
                document.querySelector('.winner-modal').classList.add('defeat');
            }
            document.querySelector('.winner-modal').classList.remove('hidden');
            document.querySelector('.overlay').classList.remove('hidden');
            console.log('round ended');
            isPlaying = false;
        }
    }
}

//for the player pick
const playerPickImage = document.getElementById('player-pick-img');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
let playerPick;

if (isPlaying) {
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
}

//Play Again
const playAgainBtn = document.querySelector('#play-again-btn');
playAgainBtn.addEventListener('click', function playAgainFunc() {
    //scores reset
    isPlaying = true;
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
    compPickImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png';
    playerPickImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png';

    //
    document.getElementById('game-results-display').textContent = 'Round Winner';
});
