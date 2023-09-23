//RPS
//player vc computer

//wins and loses
let wins = 0;
let loses = 0;


for (let i = 0; i < 10; i++) {

    let Choices = ["rock", "paper", "scissors"];

    let playerImput = prompt("Please choose rock, paper or scissors");
    
    
    let computerRandomNumber = Math.floor(Math.random() *3);

    let computerChoice = Choices[computerRandomNumber];

console.log(computerChoice);

    let wins  = (computerChoice === "rock" && playerImput === "paper" || computerChoice === "paper"
    && playerImput === "scissors" || computerChoice === "scissors" && playerImput === "rock") ;

    let loses = (computerChoice === "rock" && playerImput === "scissors" || computerChoice === "paper"
    && playerImput === "rock" || computerChoice === "scissors" && playerImput === "paper");

    if(wins) {
        console.log("You Won!");
    } else if(loses) {
        console.log("You lost!");
    } else {
        console.log("You draw!");

    }
}

//prompt
//computer choice
//if statment
//CONDITIONALS
