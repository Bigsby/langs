contentFileStream = open("../files/content.txt")
print(contentFileStream.read())
contentFileStream.close()

multilineFileStream = open("../files/multipleLines.txt")
for line in multilineFileStream.readlines():
    print("- " + line, end="")