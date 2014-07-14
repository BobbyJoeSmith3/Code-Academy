PYTHON NOTES

VARIABLES
=========
Creating web apps, games, and search engines all involve storing and working with different types of data. They do so using variables. A variable stores a piece of data, and gives it a specific name.


BOOLEANS
Numbers are one data type we use in programming. A second data type is called a boolean.

A boolean is like a light switch. It can only have two values. Just like a light switch can only be on or off, a boolean can only be True or False.


WHITESPACE
In Python, whitespace is used to structure code. Whitespace is important, so you have to be careful with how you use it.


SINGLE LINE COMMENTS
You probably saw us use the # sign a few times in earlier exercises. The # sign is for comments. A comment is a line of text that Python won't try to run as code. It's just for humans to read.

Comments make your program easier to understand. When you look back at your code or others want to collaborate with you, they can read your comments and easily figure out what your code does.


MULTI-LINE COMMENTS
The # sign will only comment out a single line. While you could write a multi-line comment, starting each line with #, that can be a pain.

Instead, for multi-line comments, you can include the whole block in a set of triple quotation marks


EXPONENTIATION
All that math can be done on a calculator, so why use Python? Because you can combine math with other data types (e.g. booleans) and commands to create useful programs. Calculators just stick to numbers!

Now let's work with exponents.

	eight = 2 ** 3

In the above example, we create a new variable called eight and set it to 8, or the result of 2 to the power to 3 (2^3).

Notice that we use ** instead of * or the multiplication operator.


MODULO
Our final operator is modulo. Modulo returns the remainder from a division. So, if you type 3 % 2, it will return 1, because 2 goes into 3 evenly once, with 1 left over. 


STRINGS
=======
Another useful data type is the string. A string can contain letters, numbers, and symbols.


ESCAPING CHARACTERS
There are some characters that cause problems. For example:

	'There's a snake in my boot!'

This code breaks because Python thinks the apostrophe in 'There's' ends the string. We can use the backslash to fix the problem, like this:

	'There\'s a snake in my boot!'



ACCESS BY INDEX
Each character in a string is assigned a number. This number is called the index. Check out the diagram in the editor.

	c = "cats"[0]
	n = "Ryan"[3]

1. In the above example, we create a new variable called c and set it to "c", the character at index zero of the string "cats".

2. Next, we create a new variable called n and set it to "n", the character at index three of the string "Ryan".

In Python, we start counting the index from zero instead of one.

"""
The string "PYTHON" has six characters,
numbered 0 to 5, as shown below:

+---+---+---+---+---+---+
| P | Y | T | H | O | N |
+---+---+---+---+---+---+
  0   1   2   3   4   5

So if you wanted "Y", you could just type
"PYTHON"[1] (always start counting from 0!)
"""


STRING METHODS
Now that we know how to store strings, let's see how we can change them using string methods.

String methods let you perform specific tasks for strings.

We'll focus on four string methods:

len()
lower()
upper()
str()

Let's start with len(), which gets the length (the number of characters) of a string!

lower()
You can use the lower() method to get rid of all the capitalization in your strings. You call lower() like so:

	"Ryan".lower()
which will return "ryan".

upper()
Now your string is 100% lower case! A similar method exists to make a string completely upper case.

str()
Now let's look at str(), which is a little less straightforward. The str() method turns non-strings into strings! For example:

	str(2)
would turn 2 into "2".


DOT NOTATION
Let's take a closer look at why you use len(string) and str(object), but dot notation (such as "String".upper()) for the rest.

lion = "roar"
len(lion)
lion.upper()
Methods that use dot notation only work with strings.

On the other hand, len() and str() can work on other data types.


STRING CONCATENATION
You know about strings, and you know about arithmetic operators. Now let's combine the two!

	print "Life " + "of " + "Brian"
This will print out the phrase Life of Brian.

The + operator between strings will 'add' them together, one after the other. Notice that there are spaces inside the quotation marks after Life and of so that we can make the combined string look like 3 words.

Combining strings together like this is called concatenation.


EXPLICIT STRING CONVERSION
Sometimes you need to combine a string with something that isn't a string. In order to do that, you have to convert the non-string into a string.

	print "I have " + str(2) + " coconuts!"
This will print I have 2 coconuts!.

The str() method converts non-strings into strings. In the above example, you convert the number 2 into a string and then you concatenate the strings together just like in the previous exercise.


STRING FORMATTING WITH %, PART 1
When you want to print a variable with a string, there is a better method than concatenating strings together.

	name = "Mike"
	print "Hello %s" % (name)
The % operator after a string is used to combine a string with variables. The % operator will replace a %s in the string with the string variable that comes after it.

	string_1 = "Camelot"
	string_2 = "place"
	print "Let's not go to %s. 'Tis a silly %s." % (string_1, string_2)
returns Let's not go to Camelot. 'Tis a silly place.


STRING FORMATTING WITH %, PART 2
Remember, we used the % operator to replace the %s placeholders with the variables in parentheses.

	name = "Mike"
	print "Hello %s" % (name)
You need the same number of %s terms in a string as the number of variables in parentheses:

	print "The %s who %s %s!" % ("Knights", "say", "Ni")
	# This will print "The Knights who say Ni!"

ex.

	name = raw_input("What is your name?")
	quest = raw_input("What is your quest?")
	color = raw_input("What is your favorite color?")

	print "Ah, so your name is %s, your quest is %s, " \
	"and your favorite color is %s." % (name, quest, color)


And Now, For Something Completely Familiar
Great job! You've learned a lot in this unit, including:

Three ways to create strings
	'Alpha'
	"Bravo"
	str(3)

String methods
	len("Charlie")
	"Delta".upper()
	"Echo".lower()

Printing a string
	print "Foxtrot"

Advanced printing techniques
	g = "Golf"
	h = "Hotel"
	print "%s, %s" % (g, h)


THE DATETIME LIBRARY
====================
A lot of times you want to keep track of when something happened. We can do so in Python using datetime.


GETTING THE CURRENT DATE AND TIME
We can use a function called datetime.now() to retrieve the current date and time.

	from datetime import datetime
	print datetime.now()

The first line imports the datetime library so that we can use it.
The second line will print out the current date and time.


EXTRACTING INFORMATION
Notice how the output looks like 2013-11-25 23:45:14.317454. What if you don't want the entire date and time?

	from datetime import datetime
	now = datetime.now()

	current_year = now.year
	current_month = now.month
	current_day = now.day

You already have the first two lines.

In the third line, we take the year (and only the year) from the variable now and store it in current_year.

In the fourth and fifth lines, we store the month and day from now.


HOTDATE
What if we want to print today's date in the following format? mm/dd/yyyy. Let's use string substitution again!

	from datetime import datetime
	now = datetime.now()

	print '%s-%s-%s' % (now.year, now.month, now.day)
	# will print: 2014-02-19

Remember that the % operator will fill the %s placeholders in the string on the left with the strings in the parentheses on the right.

In the above example, we print 2014-02-19 (if today is February 19th, 2014), but you are going to print out 02/19/2014.


PRETTY TIME
Nice work! Let's do the same for the hour, minute, and second.

	from datetime import datetime
	now = datetime.now()

	print now.hour
	print now.minute
	print now.second

In the above example, we just printed the current hour, then the current minute, then the current second.


GRAND FINALE
We've managed to print the date and time separately in a very pretty fashion. Let's combine the two!

	from datetime import datetime
	now = datetime.now()

	print '%s/%s/%s' % (now.month, now.day, now.year)
	print '%s:%s:%s' % (now.hour, now.minute, now.second)

The example above will print out the date, then on a separate line it will print the time.


CONDITIONALS AND CONTROL FLOW
==============================

Just like in real life, sometimes we'd like our code to be able to make decisions.

The Python programs we've written so far have had one-track minds: they can add two numbers or print something, but they don't have the ability to pick one of these outcomes over the other.

Control flow gives us this ability to choose among outcomes based off what else is happening in the program.


COMPARATORS
Let's start with the simplest aspect of control flow: comparators. There are six:

Equal to (==)
Not equal to (!=)
Less than (<)
Less than or equal to (<=)
Greater than (>)
Greater than or equal to (>=)
Comparators check if a value is (or is not) equal to, greater than (or equal to), or less than (or equal to) another value.

Note that == compares whether two things are equal, and = assigns a value to a variable.

Comparisons result in either True or False, which are booleans as we learned before


TO BE AND/OR NOT TO BE
Boolean operators compare statements and result in boolean values. There are three boolean operators:

and, which checks if both the statements are True;
or, which checks if at least one of the statements is True;
not, which gives the opposite of the statement.


AND
The boolean operator and returns True when the expressions on either side of and are true. For instance:

	1 < 2 and 2 < 3 is True;
	1 < 2 and 2 > 3 is False.


OR
The boolean operator or returns True when at least one expression on either side of or is true. For example:

	1 < 2 or 2 > 3 is True;
	1 > 2 or 2 > 3 is False.


NOT
The boolean operator not returns True for false statements and False for true statements.

For example:
not False will evaluate to True, while not 41 > 40 will return False.


THIS AND THAT (OR THIS, BUT NOT THAT!)
Boolean operators aren't just evaluated from left to right. Just like with arithmetic operators, there's an order of operations for boolean operators:

not is evaluated first;
and is evaluated next;
or is evaluated last.
For example, True or not False and False returns True. If this isn't clear, look at the Hint.

Parentheses () ensure your expressions are evaluated in the order you want. Anything in parentheses is evaluated as its own unit.


CONDITIONAL STATEMENT SYNTAX
if is a conditional statement that executes some specified code after checking if its expression is True.

Here's an example of if statement syntax:

	if 8 < 9:
	    print "Eight is less than nine!"

In this example, 8 < 9 is the checked expression and print "Eight is less than nine!" is the specified code.

Let's get some practice with if statements. Remember, the syntax looks like this:

	if some_function():
	    # block line one
	    # block line two
	    # et cetera

Looking at the example above, in the event that some_function() returns True, then the indented block of code after it will be executed. In the event that it returns False, then the indented block will be skipped.

Also, make sure you notice the colons at the end of the if statement.


ELSE STATEMENTS
The else statement complements the if statement. An if/else pair says: "If this expression is true, run this indented code block; otherwise, run this code after the else statement."

Unlike if, else doesn't depend on an expression. For example:

	if 8 > 9:
	    print "I don't get printed!"
	else:
	    print "I get printed!"


ELIF STATEMENTS
"Elif" is short for "else if." It means exactly what it sounds like: "otherwise, if the following expression is true, do this!"

	if 8 > 9:
	    print "I don't get printed!"
	elif 8 < 9:
	    print "I get printed!"
	else:
	    print "I also don't get printed!"

In the example above, the elif statement is only checked if the original if statement is False.


THE BIG IF
Really great work! Here's what you've learned in this unit:

Comparators

	3 < 4
	5 >= 5
	10 == 10
	12 != 13

Boolean operators

	True or False 
	(3 < 4) and (5 >= 5)
	this() and not that()

Conditional statements

	if this_might_be_true():
	    print "This really is true."
	elif that_might_be_true():
	    print "That is true."
	else:
	    print "None of the above."


PYGLATIN
========
.ISALPHA()
Now we know we have a non-empty string. Let's be even more thorough.

	x = "J123"
	x.isalpha()  # False

In the first line, we create a string with letters and numbers.

The second line then runs the function isalpha() which returns False since the string contains non-letter characters.

Let's make sure the word the user enters contains only alphabetical characters. You can use isalpha() to check this!


TESTING
When you finish one part of your program, it's important to test it multiple times, using a variety of inputs.


WORD UP
Let's simplify things by making the letters in our word lowercase.

	the_string = "Hello"
	the_string = the_string.lower()

The .lower() function does not modify the string itself, it simply returns a lowercase-version. In the example above, we store the result back into the same variable.

We also need to grab the first letter of the word.

	first_letter  = the_string[0]
	second_letter = the_string[1]
	third_letter  = the_string[2]

Remember that we start counting from zero, not one, so we access the first letter by asking for [0].


MOVE IT ON BACK
Now that we have the first letter stored, we need to add both the letter and the string stored in pyg to the end of the original string.

Remember how to concatenate (i.e. add) strings together?

	greeting = "Hello "
	name = "D. Y."
	welcome = greeting + name


ENDING UP
Well done! However, now we have the first letter showing up both at the beginning and near the end.

	s = "Charlie"

	print s[0]
	# will print "C"

	print s[1:4]
	# will print "har"

1.	First we create a variable s and give it the string "Charlie"
2.	Next we access the first letter of "Charlie" using s[0]. Remember letter positions start at 0.
3.	Then we access a slice of "Charlie" using s[1:4]. This returns everything from the letter at position 1 up till position 4.