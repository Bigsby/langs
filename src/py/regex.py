import re

print("Is '^[0-9]+$' mathed by '123456'?")
if re.compile("^[0-9]+$").match("123456"):
    print("yes")
else:
    print("no")

print("Groups of '^([a-z]+)\\-(\\d+)$' found in 'abcdef-12345'")
codeRegex = re.compile("^([a-z]+)\\-(\\d+)$")
matches = codeRegex.match("abcdef-12345")
print("Found ", len(matches.groups()), " groups.")

for groupIndex,match in enumerate(matches.groups()):
    print("[", groupIndex, "] = ", match)