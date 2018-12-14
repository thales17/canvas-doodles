#!/usr/bin/env python

import sys
import os
import glob

# imageDataFile = ""
# if len(sys.argv) > 1:
#     imageDataFile = sys.argv[1]

# if imageDataFile == "":
#     print("Specify the imageData text file")
#     sys.exit()

for imageDataFile in glob.glob("20181209.txt"):
    print("Creating gif from %s" % imageDataFile)

    with open(imageDataFile) as f:
        content = f.readlines()
    content = [x.strip() for x in content]
    cleanedContent = []
    for l in content:
        if l.startswith("Canvas.tsx:71"):
            cleanedContent.append(l[37:])

    os.system("rm *.gif")
    idx = 0
    for l in cleanedContent:
        os.system("echo %s | base64 --decode > %03d.png" % (l, idx))
        idx += 1

    os.system("ffmpeg -r 50 -i %03d.png output.gif")
    os.system("rm *.png")
    os.system("mv output.gif ../assets/%s.gif" %
              os.path.splitext(imageDataFile)[0])
