//DOC: rock_paper_scissors.js
// The Game
//Rock paper scissors is a classic 2 player game. Each player chooses either rock, paper or scissors. The possible outcomes:
	// - Rock destroys scissors.
	// - Scissors cut paper.
	// - Paper covers rock.
//Our code will break the game into 3 phases:
	//a. User makes a choice
	//b. Computer makes a choice
	//c. A compare function will determine who wins


// Ask the user which option they want to pick (rock, paper or scissors) and save answer as a variable
var userChoice = prompt("Do you choose rock, paper or scissors?");

//randomly generated computer choice
var computerChoice = Math.random()
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} 

console.log("Computer: " + computerChoice);

//function to compare user choice and computer choice
var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    } else if (choice2 === "scissors") {
        return "rock wins";
    } else {
        return "paper wins";
    };    
};