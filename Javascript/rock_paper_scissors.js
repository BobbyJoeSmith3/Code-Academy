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
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
};

//print the computer's selection
console.log("Computer: " + computerChoice);

//function to compare user choice and computer choice
var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        };
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else {
            return "scissors wins"
        }; 
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins";
        } else {
            return "scissors wins";
        };
    } else {
        console.log("Terribly sorry, not sure if that was supposed to be 'rock', 'paper', or 'scissors'. Please try again!");
        return userChoice;
    }
    };    
};

//compare the user's choice with the computer's choice
compare(userChoice, computerChoice);