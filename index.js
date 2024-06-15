let humanScore = 0;
let computerScore = 0;

function getComputerChoice()
{
    let x = Math.floor(Math.random() * 3);
    if (x === 0)
        {
            console.log("CPU chose Rock!");
            return x; 
        }
        else if (x === 1)
            {
                console.log("CPU chose Paper!");
                return x; 
            }
            else 
            {
                console.log("CPU chose Scissors!");
                return x; 
            }
}

function getHumanChoice ()
{
    let choice = prompt("Pick rock, paper or scissors. First to 5 points wins.").toLowerCase();
    if (choice === "rock")
        {
            console.log("You chose Rock!");
            return choice; 
        }
        else if (choice === "paper")
            {
                console.log("You chose Paper!");
                return choice; 
            }
            else if (choice === "scissors")
            {
                console.log("You chose Scissors!");
                return choice; 
            }
            else 
            {
                console.log("Not one of the choices!");
            }
}

function playRound (humanChoice, computerChoice) {  
    do {
humanChoice = getHumanChoice();
computerChoice = getComputerChoice();

if (humanChoice === "rock" && computerChoice === 0 || humanChoice === "paper" && computerChoice === 1 || humanChoice === "scissors" && computerChoice === 2)
    {
        console.log("It's a tie!");
    }
    else if (humanChoice === "rock" && computerChoice === 1)
         {
            console.log("The CPU wins the round!");
             computerScore++;
        }    
        else if (humanChoice === "rock" && computerChoice === 2)
            {
               console.log("You win the round!");
                humanScore++;
            }
            else if (humanChoice === "paper" && computerChoice === 0)
                {
                   console.log("You win the round!");
                    humanScore++;
               }        
               else if (humanChoice === "paper" && computerChoice === 2)
                {
                   console.log("The CPU wins the round!");
                    computerScore++;
               }    
               else if (humanChoice === "scissors" && computerChoice === 1)
                {
                   console.log("You win the round!");
                    humanScore++;
               }    
               else if (humanChoice === "scissors" && computerChoice === 0)
                {
                   console.log("The CPU wins the round!");
                    computerScore++;
               }
               console.log("Your score: ", humanScore);
               console.log("CPU score: ", computerScore);   
            }
            while (humanScore != 5 && computerScore != 5);
}

console.log(playRound());

if (computerScore > humanScore)
    {
        console.log("The CPU won the game!");
    }
    else 
    {
        console.log("You won the game, congrats!");
    }