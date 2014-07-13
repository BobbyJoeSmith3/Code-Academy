'''
DOC: tip_calculator.py
FUNCTION: 
'''

# Assign the variable total on line 8!

meal = 44.50
tax = 0.0675
tip = 0.15

# Reassign the meal to include the cost of the meal plus tax
meal = meal + meal * tax

#Now that the meal has the cost of the food plus tax, let's introduce a new variable, total, equal to the new meal plus tip
total = meal + meal * tip

print("%.2f" % total)