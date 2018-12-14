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

os.system("rm *.gif")
idx = 0
for l in cleanedContent:
    os.system("echo %s | base64 --decode > %03d.png" % (l,idx))
    # os.system("ffmpeg -nostats -loglevel 0 -i %03d.png %03d.gif" % (idx,idx))
    # os.system("rm %03d.png" % idx)
    idx += 1
# os.system("gifsicle -d 10 --loop *.gif > output.gif")
# os.system("mv output.gif output.keep")
# os.system("rm *.gif")
# os.system("mv output.keep output.gif")
os.system("ffmpeg -r 50 -i %03d.png output.gif")
os.system("rm *.png")