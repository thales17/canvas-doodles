#!/usr/bin/env python

import sys
import os

imageDataFile = ""
if len(sys.argv) > 1:
    imageDataFile = sys.argv[1]

if imageDataFile == "":
    print("Specify the imageData text file")
    sys.exit()

print("Creating gif from %s" % imageDataFile)

with open(imageDataFile) as f:
    content = f.readlines()
content = [x.strip() for x in content]
cleanedContent = []
for l in content:
    if l.startswith("data:"):
        cleanedContent.append(l[22:-14])
print(len(content), len(cleanedContent))
print(cleanedContent[0])
os.system("echo `echo %s | base64 --decode` > %00d.png" % (cleanedContent[0],0))
    