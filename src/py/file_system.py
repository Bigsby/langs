from os import listdir
from os.path import isdir, isfile, join, dirname, getsize, abspath

folderPath = join(dirname(__file__), "..\\files")

folders = []
files = []
for childItem in listdir(folderPath):
    if isdir(join(folderPath,childItem)):
        folders.append(childItem)
    if isfile(join(folderPath,childItem)):
        files.append(childItem)

for folder in folders:
    print("/", folder, sep="")

for fileItem in files:
    print(fileItem, ",", getsize(join(folderPath,fileItem)), "B", sep="")