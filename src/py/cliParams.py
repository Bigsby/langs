import sys

def Main():
    if len(sys.argv) == 1:
        print("No parameters")
    elif len(sys.argv) == 2:
        print("Parameter is ", sys.argv[1])
    else:
        print("Too many parameters")