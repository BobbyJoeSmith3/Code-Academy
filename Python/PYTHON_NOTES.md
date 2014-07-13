PYTHON NOTES

Variables
Creating web apps, games, and search engines all involve storing and working with different types of data. They do so using variables. A variable stores a piece of data, and gives it a specific name.

Booleans
Numbers are one data type we use in programming. A second data type is called a boolean.

A boolean is like a light switch. It can only have two values. Just like a light switch can only be on or off, a boolean can only be True or False.

Whitespace
In Python, whitespace is used to structure code. Whitespace is important, so you have to be careful with how you use it.

Single Line Comments
You probably saw us use the # sign a few times in earlier exercises. The # sign is for comments. A comment is a line of text that Python won't try to run as code. It's just for humans to read.

Comments make your program easier to understand. When you look back at your code or others want to collaborate with you, they can read your comments and easily figure out what your code does.

Multi-Line Comments
The # sign will only comment out a single line. While you could write a multi-line comment, starting each line with #, that can be a pain.

Instead, for multi-line comments, you can include the whole block in a set of triple quotation marks


Exponentiation
All that math can be done on a calculator, so why use Python? Because you can combine math with other data types (e.g. booleans) and commands to create useful programs. Calculators just stick to numbers!

Now let's work with exponents.

eight = 2 ** 3
In the above example, we create a new variable called eight and set it to 8, or the result of 2 to the power to 3 (2^3).

Notice that we use ** instead of * or the multiplication operator.

Modulo
Our final operator is modulo. Modulo returns the remainder from a division. So, if you type 3 % 2, it will return 1, because 2 goes into 3 evenly once, with 1 left over. 

Strings
Another useful data type is the string. A string can contain letters, numbers, and symbols.

Escaping characters
There are some characters that cause problems. For example:

'There's a snake in my boot!'
This code breaks because Python thinks the apostrophe in 'There's' ends the string. We can use the backslash to fix the problem, like this:

'There\'s a snake in my boot!'