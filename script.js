
let choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
   computer = choices[Math.floor(Math.random() * 3)];
   computerChoice('Computer chose' + ` ${computer}`)
   return computer;
};

const scissorsButton = document.querySelector('.scissorsButton');
const rockButton = document.querySelector('.rockButton');
const paperButton = document.querySelector('.paperButton');

let humanChoice = '';
let winner = '';
scissorsButton.addEventListener('click', () => {
   humanChoice = 'scissors';
   playerChoice(`You Chose ${humanChoice}`);
   playRound();
});
rockButton.addEventListener('click', () => {
   humanChoice = 'rock';
   playerChoice(`You Chose ${humanChoice}`);
   playRound();
});
paperButton.addEventListener('click', () => {
   humanChoice = 'paper';
   playerChoice(`You Chose ${humanChoice}`);
   playRound();
});

function playRound() {
   const computer = getComputerChoice();
   let result = '';
   
   if (humanChoice === computer) {
      result = 'Its a Tie!';
   } else if
      (humanChoice === 'rock' && computer === 'scissors') {
      result = 'Human Wins';
      humanScore++;
   } else if
      (humanChoice === 'paper' && computer === 'rock') {
      result = 'Human Wins';
      humanScore++;
   } else if
      (humanChoice === 'scissors' && computer === 'paper') {
      result = 'Human Wins';
      humanScore++;
   } else {
      result = 'Computer Wins';
      computerScore++;
   }
   roundResult(result);
   scoreBoard(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
   
   if (humanScore === 5 && computerScore <5){
      winner = 'Game Over Human Wins'
      reset();
   }else if (computerScore === 5 && humanScore <5){
      winner = 'Game Over Computer Wins'
      reset();
   }
   winnnerAnnouncement(winner);
};

function computerChoice(computer){
   const divComputerChoice = document.querySelector('.computerChoice')
   divComputerChoice.innerHTML = computer;
   
}
function playerChoice(player){
   const divPlayerChoice = document.querySelector('.playerChoice');
   divPlayerChoice.innerHTML = player;
}
function scoreBoard(score){
   const divScoreBoard = document.querySelector('.scoreBoard');
   divScoreBoard.innerHTML = score;
}
function roundResult(result) {
   const divRoundResult = document.querySelector('.roundResult');
   divRoundResult.innerHTML = result;
}
function winnnerAnnouncement(winner){
   const divWinnerAnnouncement = document.querySelector('.winnerAnnouncement')
   divWinnerAnnouncement.innerHTML = winner;
}
function reset (){
   playerChoice('');
   scoreBoard('');
   roundResult('');
   winnnerAnnouncement(''); 
   computerChoice('');
   computerScore = 0;
   humanScore = 0;
}

// // Manual input of human answer prompt with alert. Replaced with UI including DOM manipulation
// // & old play game function

// function getHumanChoice(){
//    let humanChoice = prompt('Rock, paper or scissors?').toLowerCase();
//       if(humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors')
//          {
//          console.log('Human chose' +` ${humanChoice}`)
//       } else {
//          console.log('Error! Refresh page to try again')
//       }
//       return humanChoice;
// };

//  function playGame(){
//    for (let round = 1; round < 6; round++){
//       playRound();
//    }
//    if(humanScore > computerScore){
//       console.log('Human Wins!, We are SUPERIOR')
//    } else if (
//       computerScore > humanScore){
//          console.log ('Computer Wins!, Humans Suck')
//       }else{console.log('Its a tie!')}
//  };
// playGame();
// playRound();















// Function using no array
// function getComputerChoice(){
//  const result = Math.floor(Math.random() * 3);
//  if (result == 0){
//   return 'rock'
//  }
//  if (result == 1){
//   return 'paper'
//  }
//  if (result == 2){
//   return 'scissors'
//  }

// }
// console.log(getComputerChoice());

// function getHumanChoice(){
//    let choice = prompt ('Scissors, paper or rock?')
//    if (choice === 'rock')
//       {
//       return 'rock'
//    } else if (choice === 'paper')
//       {
//       return 'paper'
//    } else
//    {
//       return 'scissors'
//    }
// }
// console.log(getHumanChoice())


// function playRound(humanChoice, computerChoice) {
//    if(
//       (humanChoice === 'rock' && computerChoice === 'scissors') ||
//       (humanChoice === 'paper' && computerChoice === 'rock') ||
//       (humanChoice === 'scissors' && computerChoice === 'paper')
//    ){
//       console.log('You Win');
//    }
//    else if (
//       (humanChoice === 'rock' && computerChoice === 'scissors') ||
//       (humanChoice === 'paper' && computerChoice === 'rock') ||
//       (humanChoice === 'scissors' && computerChoice === 'paper')
//    ){
//       console.log('You Lose');
//    } 
//    else {
//       console.log('Tie')
//    }
// }

// console.log(playRound(human, computer));

















