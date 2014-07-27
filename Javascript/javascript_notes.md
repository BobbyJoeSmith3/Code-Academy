Javascript Notes
================

This is JavaScript (JS), a programming language. There are many languages, but JS has many uses and is easy to learn.

####What can we use JavaScript for?

   * make websites respond to user interaction
   * build apps and games (e.g. blackjack)
   * access information on the Internet (e.g. find out the top trending words on Twitter by topic)
   * organize and present data (e.g. automate spreadsheet work; data visualization)


####Editor and comments
So far we've been writing lines of code in the editor. Now we see two lines that start with //.

The // sign is for comments. A comment is a line of text that JavaScript won't try to run as code. It's just for humans to read.

Comments make your program easier to understand. When you look back at your code or others want to collaborate with you, they can read your comments and easily figure out what your code does.


####Interactive JavaScript
What we just saw was a fun example of how JavaScript can be interactive. Try it yourself!

Examples:

```confirm("I feel awesome!");```  
```confirm("I am ready to go.");```

These boxes can be used on websites to confirm things with users. You've probably seen them pop up when you try to delete important things or leave a website with unsaved changes.


####Using console.log
You may have noticed that the interpreter doesn't print out every single thing it does. So if we want to know what it's thinking, we sometimes have to ask it to speak to us.

```console.log()``` will take whatever is inside the parentheses and log it to the console below your code—that's why it's called *console.log()*!


####List of comparison operators:

  * > Greater than
  * < Less than
  * <= Less than or equal to
  * >= Greater than or equal to
  * === Equal to
  * !== Not equal to

This is commonly called printing out.

####Mid-lesson Review
We've covered a lot of ground so far! So many new terms, so much syntax. Let's take a breather and review. We have learned:

** 1. Confirm and prompt **

We can make pop-up boxes appear! 
```confirm("I am ok");```  
```prompt("Are you ok?");```

** 2. Data types **

  a. numbers (e.g. ```4.3```, ```134```)

  b. strings (e.g. ```"dogs go woof!"```, ```"JavaScript expert"```)

  c. booleans (e.g. ```false```, ```5 > 4```)

3. Conditionals

*If* the first condition is met, execute the first code block. *If* it is not met, execute the code in the ```else``` block. See the code on the right for another example.

```
// This is an example of an if / else statement.

if (12 / 4 === "Ari".length) {
    confirm("Will this run the first block?");
} else {
    confirm("Or the second block?");
}
```
