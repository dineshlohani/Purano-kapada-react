import re

tokens=[]
with open("program1.txt") as t:
    a=t.readlines()
    for t in a:
        tokens=tokens + (t.split("->"))

    r = re.findall('([A-Z])', tokens[1]) #get all capital letters from rhs
    rSmall = re.findall('([a-z])', tokens[1]) #get all small letters from rhs
    rSmallUpdated  = list(dict.fromkeys(rSmall)) #remove duplicates

    productions = tokens[1].split("|")
    print("Set of starting symbol = {"+tokens[0]+"}")
    print("Set of non-terminals:")
    print(r,sep=",")
    print("Set of terminals:")
    print(rSmallUpdated,sep=',')
    print("Set of productions:")
    for item in productions:
    print(tokens[0]+"->"+item)
