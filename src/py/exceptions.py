def DoStuff(inError):
    if inError:
        raise Exception("An error occured!")
    
    print("Doing stuff!")

try:
    DoStuff(False)
    DoStuff(True)
    DoStuff(False)
except Exception as ex:
    print("Error: " + ex.args[0])