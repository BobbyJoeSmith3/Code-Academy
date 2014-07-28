//DOC: hire_bjs3.js
//DESCRIPTION: A choose your own adventure game to determine whether you should hire Bobby Joe Smith III as a full-stack web developer

//Check if user is ready to play!
//If confirmation window pops up with message "Are you ready to play", then pass
confirm("Are you ready for some clarity?");

//Determine the age of the user
//If user is prompted to input their age and if age is stored as the variable "age" then pass
//*Note* : It might be a good idea to write a test to make sure the right type of value is being inputed by the user
var age = prompt("What's your age");

if (age < 13) {
	console.log("Wow, you're young! I'll let you play, but I take no responsibility for the outcome.");
}
else {
	console.log("Wow, " + age + " years young, and still ready for an adventure!");
}

//Story introduction
//If text prints to screen, then pass
console.log("\nYou are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");

//Story line part 2
//If text prints to screen, then pass
console.log("\nSuddenly, Bieber stops and says, 'Who wants to race me?'");

//Declare a variable userAnswer and ask user if they want to race Bieber
//If user receives a prompt to answer if they want to race Bieber, and answer is stored to variable userAnswer, then pass
var userAnswer = prompt("Do you want to race Bieber on stage?");

