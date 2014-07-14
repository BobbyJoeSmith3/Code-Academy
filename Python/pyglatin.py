'''
DOC: pyglatin.py
OBJECTIVE:
Pig Latin is a language game, where you move the first letter of the word to the end and add "ay." So "Python" becomes "ythonpay." To write a Pig Latin translator in Python, here are the steps we'll need to take:

Ask the user to input a word in English.
Make sure the user entered a valid word.
Convert the word from English to Pig Latin.
Display the translation result.
'''
# Create a welcome message that lets the user know they've started using the app
print 'Welcome to the Pig Latin Translator!'

# Start coding here!

# Set variable 'original' equal to user input
original = raw_input("Enter a word: ")
# Set variable 'pyg' equal to the suffix
pyg = "ay"

# Write an if statement that verifies that the string has characters.
if (len(original) > 0) and original.isalpha():
    word = original.lower()		#Set user entry to lowercase
    first = word[0]				#Set variable 'first' to the first letter of the variable 'word'
    new_word = word[1:len(word)] + first + pyg  #Concatenate variables to create new phrase in pyglatin
    print new_word
elif (len(original) > 0) and original.isalpha() == False:
    print "no numbers, symbols, or spaces please!"
else:
    print "empty"