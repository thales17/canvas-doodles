#!/usr/bin/env python

import sys
import os
import glob

for imageDataFile in glob.glob("20181114.txt"):
    print("Creating gif from %s" % imageDataFile)

    with open(imageDataFile) as f:
        content = f.readlines()
    content = [x.strip() for x in content]
    cleanedContent = []
    for l in content:
        if l.startswith("data:image/png;base64,"):
            cleanedContent.append(l[22:])

    os.system("rm *.gif")
    idx = 0
    for l in cleanedContent:
        os.system("echo %s | base64 --decode > %03d.png" % (l, idx))
        idx += 1

    os.system("ffmpeg -r 50 -i %03d.png output.gif")
    os.system("rm *.png")
    os.system("mv output.gif ../assets/%s.gif" %
              os.path.splitext(imageDataFile)[0])
