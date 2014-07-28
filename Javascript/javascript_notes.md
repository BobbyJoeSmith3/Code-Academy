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
```
"Batman".substring(0,3);
```

2. From 4th to 6th letter of "laptop"
```
"laptop".substring(3,6);
```

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

####Conclusion: Part 2
Congratulations on making it this far. You have learned a lot! Just one more exercise before a big pat on the back!

The last tricky thing we learned was about **if / else** statements.

If / else statements are conditional statements. Under different conditions, the computer will output different things.

##INTRODUCTION TO FUNCTIONS
####Introduction
Programming is simply a way to give instructions to the computer.

In Getting Started, we learned about if / else statements.

We want to keep learning ways to instruct the computer to perform repeatable tasks efficiently.


####Introducing Functions
Programming is similar to baking cakes. Seriously! Imagine you are trying to teach your friend Jane how to bake many different types of cakes.

Each cake takes in different ingredients (ie. **inputs**). But the 'bake' instructions are always the same. For example:

1. Pre-heat the oven at 300 degrees
2. Mix all the ingredients in a bowl
3. Put contents into oven for 30 mins

And the **output** will be a different cake each time.

It is tedious to have to repeat to Jane the same 'bake' instructions every time. What if we could just say 'bake' and Jane would know to execute those three steps? That is exactly what a function is!

**Example:**
1. Line 3 declares the function and gives it a name.
2. Focus on line 4 and line 5. The code within the curly brackets ```{ }``` is the code we want to use again and again. (i.e. the 'bake' instructions)
3. Line 4 declares a variable called ```val```. Line 5 prints the value of that variable.
4. On line 8-11, we explain what **calling** a function means.
5. On line 12, replace the ```6``` with any number and press Save & Submit Code. Do this a few times to see the beauty of functions!

```
// This is what a function looks like:

var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};

// On line 12, we call the function by name
// Here, it is called 'dividebythree'
// We tell the computer what the number input is (i.e. 6)
// The computer then runs the code inside the function!
divideByThree(6);
```

####Function syntax
A function takes in inputs, does something with them, and produces an output.

Here's an example of a function:
```
var sayHello = function(name) {
    console.log('Hello ' + name);
};
```

1. First we declare a function using ```var```, and then give it a name ```sayHello```. The name should begin with a lowercase letter and the convention is to use lowerCamelCase where each word (except the first) begins with a capital letter.
2. Then we use the ```function``` keyword to tell the computer that you are making a function
3. The code in the parentheses is called a **parameter**. It's a placeholder word that we give a specific value when we call the function. Click "Stuck? Get a hint!" for more.
4. Then write your block of reusable code between ```{ }```. Every line of code in this block must end with a ```;```.

You can run this code by "calling" the function, like this:
```
sayHello("Emily");
```
Calling this function will print out ```Hello Emily```.

####How does a function work?
Let's break down exactly how a computer thinks when it sees the code for a function.
```
var functionName = function( ) {
    // code code code
    // code code code
    // (more lines of code)
};
```
1. The ```var``` keyword declares a variable named ```functionName```.
2. The keyword ```function``` tells the computer that ```functionName``` is a function and not something else.
3. Parameters go in the parentheses. The computer will look out for it in the code block.
4. The code block is the reusable code that is between the curly brackets ```{ }```. Each line of code inside ```{ }``` must end with a semi-colon.
5. The entire function ends with a semi-colon.

To use the function, we **call** the function by just typing the function's name, and putting a parameter value inside parentheses after it. The computer will run the reusable code with the specific parameter value substituted into the code.