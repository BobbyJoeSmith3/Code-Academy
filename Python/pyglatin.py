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
original = raw_input("Enter a word: ")

# Write an if statement that verifies that the string has characters.
if (len(original) > 0) and original.isalpha():
    print original
elif (len(original) > 0) and original.isalpha() == False:
    print "no numbers or symbols please!"
else:
    print "empty"