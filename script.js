
let choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
   let computer = choices[Math.floor(Math.random() * 3)];
   console.log("Computer chose" +` ${computer}`)
   return computer;
};


function getHumanChoice(){
   let humanChoice = prompt("Rock, paper or scissors?").toLowerCase();
      if(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors")
         {
         console.log("Human chose" +` ${humanChoice}`)
      } else {
         console.log("Error! Refresh page to try again")
      }
      return humanChoice;
};

 function playRound() {
  const humanChoice = getHumanChoice();
  const computer = getComputerChoice();

   if(humanChoice === computer){
      console.log("Its a Tie!")
   }else if 
   (humanChoice === "rock" && computer === "scissors"){
      console.log("Human Wins")
      humanScore++;
   }else if
   (humanChoice === "paper" && computer === "rock"){
      console.log("Human Wins")
      humanScore++;
   }else if
   (humanChoice === "scissors" && computer === "paper"){
      console.log("Human Wins")
      humanScore++;
   }else{
      console.log("Computer Wins")
      computerScore++;
   }
   console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
 };

 function playGame(){
   for (let round = 1; round < 6; round++){
      playRound();
   }
   if(humanScore > computerScore){
      console.log("Human Wins!, We are SUPERIOR")
   } else if (
      computerScore > humanScore){
         console.log ("Computer Wins!, Humans Suck")
      }else{console.log("Its a tie!")}
 };
 
playGame();





// Function using no array
// function getComputerChoice(){
//  const result = Math.floor(Math.random() * 3);
//  if (result == 0){
//   return "rock"
//  }
//  if (result == 1){
//   return "paper"
//  }
//  if (result == 2){
//   return "scissors"
//  }

// }
// console.log(getComputerChoice());

// function getHumanChoice(){
//    let choice = prompt ("Scissors, paper or rock?")
//    if (choice === "rock")
//       {
//       return "rock"
//    } else if (choice === "paper")
//       {
//       return "paper"
//    } else
//    {
//       return "scissors"
//    }
// }
// console.log(getHumanChoice())


// function playRound(humanChoice, computerChoice) {
//    if(
//       (humanChoice === "rock" && computerChoice === "scissors") ||
//       (humanChoice === "paper" && computerChoice === "rock") ||
//       (humanChoice === "scissors" && computerChoice === "paper")
//    ){
//       console.log("You Win");
//    }
//    else if (
//       (humanChoice === "rock" && computerChoice === "scissors") ||
//       (humanChoice === "paper" && computerChoice === "rock") ||
//       (humanChoice === "scissors" && computerChoice === "paper")
//    ){
//       console.log("You Lose");
//    } 
//    else {
//       console.log("Tie")
//    }
// }

// console.log(playRound(human, computer));

















