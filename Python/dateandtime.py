#DOC: dateandtime.py
#OBJECTIVE: Print the date and time together in the form: mm/dd/yyy hh:mm:ss

#import datetime
from datetime import datetime

#creat the variable "now" to store the current time
now = datetime.now()

#print the date and time on the same line
print "%s/%s/%s " % (now.month, now.day, now.year) + "%s:%s:%s" % (now.hour, now.minute, now.second)