SHELL = bash
timeStamp := $(shell date +%y.%m.%d.%s)

base: 
	echo ${timeStamp}
