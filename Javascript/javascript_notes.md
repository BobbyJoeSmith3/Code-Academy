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

**1. Confirm and prompt**

We can make pop-up boxes appear! 
```confirm("I am ok");```  
```prompt("Are you ok?");```

**2. Data types**

  a. numbers (e.g. ```4.3```, ```134```)

  b. strings (e.g. ```"dogs go woof!"```, ```"JavaScript expert"```)

  c. booleans (e.g. ```false```, ```5 > 4```)

**3. Conditionals**

*If* the first condition is met, execute the first code block. *If* it is not met, execute the code in the ```else``` block. See the code on the right for another example.

```
// This is an example of an if / else statement.

if (12 / 4 === "Ari".length) {
    confirm("Will this run the first block?");
} else {
    confirm("Or the second block?");
}
```

####Math
We saw basic math before. The basic math symbols we learned in school work here. Even the order in which the computer understands the math is the same as in school!

**Code:**

1. ```( )```: control order of operations
2. ```*``` and ```/```: multiplication and division
3. ```-``` and ```+```: subtraction and addition

**Examples:**

1. ```100/10``` evaluates to 10
2. ```"Jane".length + 5``` evaluates to 9
3. ```5*(3+1)``` evaluates to 20


####Modulo and if / else
So why learn modulo? For one thing, it's good at testing divisibility. Consider ```30 % 10```. What does it return? There is nothing left over, so ```0```.

How about ```9 % 3```? Also ```0```.

We can use modulos in comparisons, like this:

```10 % 2 === 0``` evaluates to ```true```
```7 % 3 === 0``` evaluates to ```false``` because there is 1 left over.

####Substrings
We've learned a few ways to manipulate numbers. What about manipulating strings?

Sometimes you don't want to display the entire string, just a part of it. For example, in your Gmail inbox, you can set it to display the first 50 or so characters of each message so you can preview them. This preview is a _substring_ of the original string (the entire message).

**Code:**

```"some word".substring(x, y)``` where ```x``` is where you start chopping and ```y``` is where you finish chopping the original string.

The number part is a little strange. To select for the "he" in "hello", you would write this:

```"hello". substring(0, 2);```
Each character in a string is numbered starting from 0, like this:
```
0 1 2 3 4
 | | | | | 
 h e l l o
``` 
The letter ```h``` is in position ```0```, the letter ```e``` is in position ```1```, and so on.

Therefore if you start at position ```0```, and slice right up till position ```2```, you are left with just ```he```

**More examples:**

1. First 3 letters of "Batman"
```"Batman".substring(0,3);```

2. From 4th to 6th letter of "laptop"
```"laptop".substring(3,6);```

####Variables
We have learned how to do a few things now: make strings, find the length of strings, find what character is in the nth position, do basic math. Not bad for a day's work!

To do more complex coding, we need a way to 'save' the values from our coding. We do this by defining a variable with a specific, case-sensitive name. Once you create (or **declare**) a variable as having a particular name, you can then call up that value by typing the variable name.

**Code:**

```var varName = data;```

Example:

a. ```var myName = "Leng";```  
b. ```var myAge = 30;```  
c. ```var isOdd = true;```  


####Conclusion: Part 1
Let's do a quick review!

**Data types**

- strings (e.g. ```"dogs go woof!"```)
- numbers (e.g. ```4```, ```10```)
- booleans (e.g. ```false```, ```5 > 4```)

**Variables**
We store data values in variables. We can bring back the values of these variables by typing the variable name.

**Manipulating numbers & strings**

- comparisons (e.g. ```>```, ```<=```)
- modulo (e.g. ```%```)
- string length (e.g. ```"Emily".length;```)
- substrings (e.g. ```"hi".substring(0, 1);```)

**console.log( )** 
Prints into the console whatever we put in the parentheses.