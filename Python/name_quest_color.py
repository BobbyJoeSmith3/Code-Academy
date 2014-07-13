'''
DOC: name_quest_color.py
OBJECTIVE: Take user inputs and insert them in a string using %s 
'''

#User inputs
name = raw_input("What is your name?")
quest = raw_input("What is your quest?")
color = raw_input("What is your favorite color?")

#Print statement with user inputs
print "Ah, so your name is %s, your quest is %s, " \
"and your favorite color is %s." % (name, quest, color)