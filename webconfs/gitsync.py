import os
MESSAGE = "added {}"

for dirs,folders,files in os.walk("."):
    if not ".git" in dirs:
        for file in files:
            os.system("git add "+dirs+os.sep+file+" && git commit -m "+MESSAGE.format(file))
