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